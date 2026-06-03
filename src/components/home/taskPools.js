/** Bureaucratic inbox tasks keyed to realm — each failure links to a glossary topic */

const JOB_MARKET_TASKS = [
  {
    title: 'Respond to automated rejection (no recruiter listed)',
    topicId: 'illusion-of-meritocracy',
    reason: 'The Illusion of Meritocracy',
  },
  {
    title: 'Complete unpaid “culture fit” assessment (45 min)',
    topicId: 'attention-economy',
    reason: 'The Attention Economy',
  },
  {
    title: 'Upload portfolio + three references before midnight cutoff',
    topicId: 'illusion-of-meritocracy',
    reason: 'The Illusion of Meritocracy',
  },
  {
    title: 'Verify work history for benefits office (Form 12-A)',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'Reschedule panel interview across three time zones',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Appeal gig-platform deactivation — re-verify identity',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'Answer “optional” salary history questionnaire',
    topicId: 'illusion-of-meritocracy',
    reason: 'The Illusion of Meritocracy',
  },
]

const HOUSING_TASKS = [
  {
    title: 'Submit rental application (3 pay stubs + guarantor)',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'Call housing voucher waitlist before line closes at 4pm',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Upload mold inspection photos for deposit dispute',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'Sign lease addendum with 90-day notice clause',
    topicId: 'illusion-of-meritocracy',
    reason: 'The Illusion of Meritocracy',
  },
  {
    title: 'Coordinate roommate credit checks for co-sign application',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'Transfer utilities — respond to “final notice” in new unit',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Schedule inspection callback (landlord portal down)',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
]

const CIVIC_TASKS = [
  {
    title: 'Register to vote with updated proof-of-address',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
  {
    title: 'File public-comment PDF before city council hearing',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Complete mandatory community-board orientation modules',
    topicId: 'attention-economy',
    reason: 'The Attention Economy',
  },
  {
    title: 'Appeal FOIA fee estimate for municipal records',
    topicId: 'illusion-of-meritocracy',
    reason: 'The Illusion of Meritocracy',
  },
  {
    title: 'RSVP + background check for town hall mic lottery',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Resubmit zoning objection (wrong checkbox on page 4)',
    topicId: 'errand-paralysis',
    reason: 'Errand Paralysis',
  },
  {
    title: 'Renew voter ID at DMV with limited appointment slots',
    topicId: 'systemic-precarity',
    reason: 'Systemic Precarity',
  },
]

export const TASK_POOLS = {
  'job-market': JOB_MARKET_TASKS,
  housing: HOUSING_TASKS,
  civic: CIVIC_TASKS,
}

export function getTaskPoolForRealm(realmId) {
  return TASK_POOLS[realmId] ?? JOB_MARKET_TASKS
}
