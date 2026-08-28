/**
 * Config.gs
 *
 * All the constants the rest of the Apps Script relies on. Keep column
 * names here in sync with the header row of the Lead Tracker sheet
 * (sheets/lead-tracker-template.csv in the repo). Columns are looked up
 * by header name, not by fixed position, so reordering columns in the
 * sheet will NOT break this script as long as the header text matches.
 */

var CONFIG = {
  // Name of the sheet (tab) that holds leads.
  SHEET_NAME: 'Leads',

  // Header names, must match the sheet's header row exactly.
  COLUMNS: {
    LEAD_ID: 'Lead ID',
    DATE_TIME: 'Date/Time',
    CUSTOMER_NAME: 'Customer Name',
    EMAIL: 'Email',
    PHONE: 'Phone',
    SERVICE_TYPE: 'Service Type',
    MESSAGE: 'Message',
    URGENCY: 'Urgency',
    STATUS: 'Status',
    CUSTOMER_RESPONSE: 'Customer Response',
    OWNER_NOTIFICATION: 'Owner Notification',
    FOLLOW_UP_DATE: 'Follow-Up Date',
    NOTES: 'Notes'
  },

  ALLOWED_SERVICE_TYPES: [
    'HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Appliance Repair', 'Other'
  ],

  ALLOWED_URGENCIES: ['Emergency', 'Urgent', 'Routine', 'Estimate'],

  ALLOWED_STATUSES: [
    'New', 'Acknowledged', 'Owner Notified', 'In Progress',
    'Scheduled', 'Completed', 'Needs Review'
  ],

  // Suggested follow-up offsets, in days, keyed by urgency.
  FOLLOW_UP_OFFSET_DAYS: {
    Emergency: 0,
    Urgent: 1,
    Routine: 3,
    Estimate: 5
  },

  // How far back to look for a matching Email/Phone when checking for
  // likely duplicate leads.
  DUPLICATE_WINDOW_HOURS: 24,

  // Keyword lists used for the safety-net urgency pre-tag. This is a
  // fallback classifier only — the Make.com scenario's AI classify step
  // is the source of truth for the final Urgency value. See
  // docs/make-com-workflow.md for how the two relate.
  URGENCY_KEYWORDS: {
    Emergency: [
      'burst', 'flooding', 'flood', 'gas smell', 'smell gas', 'sparking',
      'spark', 'smoke', 'fire', 'no heat', 'exposed wire', 'electrical fire',
      'water everywhere', 'ceiling collapse', 'sewage backup', 'no power'
    ],
    Urgent: [
      'no cooling', 'not cooling', 'stopped working', 'not working',
      'leaking', 'leak', 'banging noise', 'no hot water', 'tripping breaker',
      'won\'t turn on', 'wont turn on', 'today', 'asap'
    ],
    Estimate: [
      'estimate', 'quote', 'ballpark', 'how much', 'pricing', 'price',
      'planning to', 'thinking about', 'next spring', 'next year', 'budget'
    ]
  }
};
