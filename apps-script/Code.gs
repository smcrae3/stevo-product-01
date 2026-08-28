/**
 * Code.gs
 *
 * Spreadsheet-side helpers for the Trades Lead Response System.
 *
 * IMPORTANT — what this script does and does NOT do:
 *   - It runs inside the Google Sheet, NOT inside Make.com.
 *   - It assigns a Lead ID, fills in a starting Status, and applies a
 *     best-effort "safety net" Urgency tag based on simple keyword
 *     matching, so the sheet is never left with blank/invalid values
 *     even if Make.com hasn't run yet (or is briefly down).
 *   - It does NOT send any email. All customer and owner emails are sent
 *     by the Make.com scenario described in docs/make-com-workflow.md.
 *   - The Make.com AI classify step is the source of truth for the final
 *     Urgency value on a lead — this script's keyword tag is only a
 *     fallback so the sheet has a sensible value if the AI step hasn't
 *     run yet.
 *
 * Install: Extensions > Apps Script in your Google Sheet, paste this file
 * and Config.gs, then see apps-script/README.md for trigger setup.
 */

/**
 * Adds a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Trades Lead Tools')
    .addItem('Process New Rows Now', 'processAllUnprocessedRows')
    .addItem('Run QA Self-Test', 'runQaSelfTest')
    .addToUi();
}

/**
 * Trigger target: installable "On form submit" trigger.
 * See apps-script/README.md for how to wire this up.
 */
function onFormSubmit(e) {
  var sheet = getLeadsSheet_();
  var rowIndex = e && e.range ? e.range.getRowIndex() : sheet.getLastRow();
  processRow_(sheet, rowIndex);
}

/**
 * Menu action: manually process every row that doesn't have a Lead ID yet.
 * Useful for rows pasted in manually, or if the form trigger missed one.
 */
function processAllUnprocessedRows() {
  var sheet = getLeadsSheet_();
  var colMap = getColumnMap_(sheet);
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return; // header only, nothing to do

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  for (var i = 0; i < data.length; i++) {
    var rowIndex = i + 2; // account for header row
    var leadId = data[i][colMap[CONFIG.COLUMNS.LEAD_ID]];
    if (!leadId) {
      processRow_(sheet, rowIndex);
    }
  }
}

/**
 * Core logic applied to a single row: assigns a Lead ID, validates
 * fields, applies the safety-net urgency tag, sets a starting Status,
 * suggests a Follow-Up Date, and flags likely duplicates.
 */
function processRow_(sheet, rowIndex) {
  var colMap = getColumnMap_(sheet);
  var lastCol = sheet.getLastColumn();
  var rowRange = sheet.getRange(rowIndex, 1, 1, lastCol);
  var rowValues = rowRange.getValues()[0];

  var get = function(colName) {
    var idx = colMap[colName];
    return idx === undefined ? '' : rowValues[idx];
  };
  var set = function(colName, value) {
    var idx = colMap[colName];
    if (idx === undefined) return;
    rowValues[idx] = value;
  };

  var notesParts = [];
  var existingNotes = String(get(CONFIG.COLUMNS.NOTES) || '').trim();
  if (existingNotes) notesParts.push(existingNotes);

  // --- Lead ID -------------------------------------------------------
  if (!get(CONFIG.COLUMNS.LEAD_ID)) {
    set(CONFIG.COLUMNS.LEAD_ID, generateLeadId_(sheet, colMap, get(CONFIG.COLUMNS.DATE_TIME)));
  }

  // --- Customer Name fallback -----------------------------------------
  var customerName = String(get(CONFIG.COLUMNS.CUSTOMER_NAME) || '').trim();
  if (!customerName) {
    notesParts.push('Customer name left blank.');
  }

  // --- Email validation ------------------------------------------------
  var email = String(get(CONFIG.COLUMNS.EMAIL) || '').trim();
  var emailValid = isValidEmail_(email);
  if (!emailValid) {
    notesParts.push(email
      ? 'Email address "' + email + '" appears malformed - customer will not be auto-emailed.'
      : 'Email left blank - customer will not be auto-emailed.');
  }

  // --- Phone (recommended, not required) -------------------------------
  var phone = String(get(CONFIG.COLUMNS.PHONE) || '').trim();
  if (!phone) {
    notesParts.push('Phone number left blank.');
  }

  // --- Service Type validation ------------------------------------------
  var serviceType = String(get(CONFIG.COLUMNS.SERVICE_TYPE) || '').trim();
  var serviceTypeValid = CONFIG.ALLOWED_SERVICE_TYPES.indexOf(serviceType) !== -1;
  if (!serviceTypeValid) {
    notesParts.push(serviceType
      ? 'Service Type "' + serviceType + '" not recognized - defaulted to Other.'
      : 'Service Type left blank - defaulted to Other.');
    set(CONFIG.COLUMNS.SERVICE_TYPE, 'Other');
  }

  // --- Urgency safety-net classification ---------------------------------
  var message = String(get(CONFIG.COLUMNS.MESSAGE) || '').trim();
  var existingUrgency = String(get(CONFIG.COLUMNS.URGENCY) || '').trim();
  var urgency;
  if (CONFIG.ALLOWED_URGENCIES.indexOf(existingUrgency) !== -1) {
    // Already classified (e.g. Make.com already ran) - leave it alone.
    urgency = existingUrgency;
  } else {
    urgency = classifyUrgencyFromText_(message);
    set(CONFIG.COLUMNS.URGENCY, urgency);
    if (!message) {
      notesParts.push('Message left blank - urgency defaulted to Routine pending human review.');
    }
  }

  // --- Duplicate detection ------------------------------------------------
  var duplicateOf = findDuplicateLeadId_(sheet, colMap, rowIndex, email, phone, get(CONFIG.COLUMNS.DATE_TIME));
  if (duplicateOf) {
    notesParts.push('Possible duplicate of ' + duplicateOf + ' (same contact info within ' +
      CONFIG.DUPLICATE_WINDOW_HOURS + ' hours).');
  }

  // --- Status ---------------------------------------------------------
  var currentStatus = String(get(CONFIG.COLUMNS.STATUS) || '').trim();
  if (!currentStatus || CONFIG.ALLOWED_STATUSES.indexOf(currentStatus) === -1) {
    var needsReview = !emailValid || !serviceTypeValid || !!duplicateOf;
    set(CONFIG.COLUMNS.STATUS, needsReview ? 'Needs Review' : 'New');
  }

  // --- Follow-Up Date suggestion ------------------------------------------
  if (!get(CONFIG.COLUMNS.FOLLOW_UP_DATE)) {
    var offsetDays = CONFIG.FOLLOW_UP_OFFSET_DAYS[urgency];
    offsetDays = (offsetDays === undefined) ? 3 : offsetDays;
    set(CONFIG.COLUMNS.FOLLOW_UP_DATE, computeFollowUpDate_(get(CONFIG.COLUMNS.DATE_TIME), offsetDays));
  }

  // --- Write Notes ------------------------------------------------------
  if (notesParts.length > 0) {
    set(CONFIG.COLUMNS.NOTES, notesParts.join(' '));
  }

  rowRange.setValues([rowValues]);
}

/**
 * Builds a map of header name -> zero-based column index by reading the
 * sheet's header row. This means column order can change without
 * breaking the script, as long as header text matches Config.gs exactly.
 */
function getColumnMap_(sheet) {
  var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var map = {};
  for (var i = 0; i < headerRow.length; i++) {
    var header = String(headerRow[i]).trim();
    if (header) map[header] = i;
  }
  return map;
}

function getLeadsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    // Fall back to the first sheet so the script still works if the tab
    // wasn't renamed to "Leads".
    sheet = ss.getSheets()[0];
  }
  return sheet;
}

/**
 * Generates a Lead ID of the form LEAD-YYYYMMDD-### using the row's
 * Date/Time value (falling back to "now" if it's blank or unparseable),
 * with a per-day sequence number based on how many leads already exist
 * for that date.
 */
function generateLeadId_(sheet, colMap, dateTimeValue) {
  var date = parseDateSafe_(dateTimeValue) || new Date();
  var tz = Session.getScriptTimeZone() || 'America/New_York';
  var datePart = Utilities.formatDate(date, tz, 'yyyyMMdd');

  var lastRow = sheet.getLastRow();
  var count = 0;
  if (lastRow > 1) {
    var idColIdx = colMap[CONFIG.COLUMNS.LEAD_ID];
    var ids = sheet.getRange(2, idColIdx + 1, lastRow - 1, 1).getValues();
    var prefix = 'LEAD-' + datePart + '-';
    for (var i = 0; i < ids.length; i++) {
      if (String(ids[i][0]).indexOf(prefix) === 0) count++;
    }
  }
  var sequence = ('000' + (count + 1)).slice(-3);
  return 'LEAD-' + datePart + '-' + sequence;
}

/**
 * Simple, deliberately permissive email validation: local@domain.tld,
 * no spaces, exactly one "@". Good enough to catch the obviously
 * malformed cases (double "@", missing domain, missing TLD) without
 * rejecting valid real-world addresses.
 */
function isValidEmail_(email) {
  if (!email) return false;
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email) && email.indexOf('@@') === -1;
}

/**
 * Fallback keyword-based urgency classifier. Checked in order:
 * Emergency > Urgent > Estimate > Routine (default). This is a safety
 * net only - see the file header comment and docs/make-com-workflow.md.
 */
function classifyUrgencyFromText_(message) {
  if (!message) return 'Routine';
  var text = message.toLowerCase();

  if (matchesAnyKeyword_(text, CONFIG.URGENCY_KEYWORDS.Emergency)) return 'Emergency';
  if (matchesAnyKeyword_(text, CONFIG.URGENCY_KEYWORDS.Urgent)) return 'Urgent';
  if (matchesAnyKeyword_(text, CONFIG.URGENCY_KEYWORDS.Estimate)) return 'Estimate';
  return 'Routine';
}

function matchesAnyKeyword_(text, keywords) {
  for (var i = 0; i < keywords.length; i++) {
    if (text.indexOf(keywords[i]) !== -1) return true;
  }
  return false;
}

/**
 * Looks for another row with the same Email OR same Phone (when
 * non-blank) whose Date/Time is within CONFIG.DUPLICATE_WINDOW_HOURS of
 * this row's Date/Time. Returns the matching row's Lead ID, or null.
 */
function findDuplicateLeadId_(sheet, colMap, currentRowIndex, email, phone, dateTimeValue) {
  var currentDate = parseDateSafe_(dateTimeValue);
  if (!currentDate) return null;
  if (!email && !phone) return null;

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;

  var idIdx = colMap[CONFIG.COLUMNS.LEAD_ID];
  var dateIdx = colMap[CONFIG.COLUMNS.DATE_TIME];
  var emailIdx = colMap[CONFIG.COLUMNS.EMAIL];
  var phoneIdx = colMap[CONFIG.COLUMNS.PHONE];

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  var windowMs = CONFIG.DUPLICATE_WINDOW_HOURS * 60 * 60 * 1000;

  for (var i = 0; i < data.length; i++) {
    var rowIndex = i + 2;
    if (rowIndex === currentRowIndex) continue;

    var otherEmail = String(data[i][emailIdx] || '').trim();
    var otherPhone = String(data[i][phoneIdx] || '').trim();
    var sameEmail = email && otherEmail && otherEmail.toLowerCase() === email.toLowerCase();
    var samePhone = phone && otherPhone && otherPhone === phone;
    if (!sameEmail && !samePhone) continue;

    var otherDate = parseDateSafe_(data[i][dateIdx]);
    if (!otherDate) continue;

    if (Math.abs(currentDate.getTime() - otherDate.getTime()) <= windowMs) {
      return String(data[i][idIdx] || '').trim() || null;
    }
  }
  return null;
}

/**
 * Adds offsetDays to the row's Date/Time (or "now" if unparseable) and
 * returns a Date object for the Follow-Up Date column.
 */
function computeFollowUpDate_(dateTimeValue, offsetDays) {
  var base = parseDateSafe_(dateTimeValue) || new Date();
  var result = new Date(base.getTime());
  result.setDate(result.getDate() + offsetDays);
  return result;
}

/**
 * Parses a Date/Time cell value defensively. Sheets usually hands this
 * to us as a real Date object already, but form-pasted or manually typed
 * values can arrive as strings (or be blank/garbage) - this never throws,
 * it returns null instead so callers can fall back to "now".
 */
function parseDateSafe_(value) {
  if (!value) return null;
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return isNaN(value.getTime()) ? null : value;
  }
  var parsed = new Date(value);
  return isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Menu action: runs the classification/validation logic against a small
 * built-in set of scenarios (mirroring sheets/sample-leads.csv) without
 * touching the real sheet, and shows a pass/fail summary. Useful for
 * confirming the script still behaves correctly after editing Config.gs.
 */
function runQaSelfTest() {
  var results = [];

  function check(label, actual, expected) {
    var pass = actual === expected;
    results.push((pass ? 'PASS' : 'FAIL') + ' - ' + label +
      ' (expected "' + expected + '", got "' + actual + '")');
  }

  check('Urgency: emergency keywords',
    classifyUrgencyFromText_('Pipe burst under the sink, water everywhere'), 'Emergency');
  check('Urgency: urgent keywords',
    classifyUrgencyFromText_('AC stopped working, not cooling the house'), 'Urgent');
  check('Urgency: estimate keywords',
    classifyUrgencyFromText_('Would like a ballpark estimate for a new roof'), 'Estimate');
  check('Urgency: routine default',
    classifyUrgencyFromText_('Faucet drips a little, no rush'), 'Routine');
  check('Urgency: blank message defaults to Routine',
    classifyUrgencyFromText_(''), 'Routine');

  check('Email: valid address', String(isValidEmail_('jane@example.com')), 'true');
  check('Email: double @ rejected', String(isValidEmail_('jane@@example.com')), 'false');
  check('Email: missing domain rejected', String(isValidEmail_('jane@')), 'false');
  check('Email: blank rejected', String(isValidEmail_('')), 'false');

  var summary = results.join('\n');
  Logger.log(summary);
  var failCount = results.filter(function(r) { return r.indexOf('FAIL') === 0; }).length;
  var header = failCount === 0
    ? 'All self-tests passed.\n\n'
    : failCount + ' self-test(s) FAILED - check Logger output.\n\n';

  try {
    SpreadsheetApp.getUi().alert(header + summary);
  } catch (err) {
    // getUi() throws if run outside the Sheets UI context (e.g. from the
    // Apps Script editor's "Run" button without a bound spreadsheet open).
    Logger.log(header + summary);
  }
}
