export const SITE_EVENTS = [
  {
    name: 'ADIPEC 2026',
    booth: 'CN56',
    startDate: '2026-11-02',
    endDate: '2026-11-05',
    timeZone: 'Asia/Dubai',
    enabled: true,
    messages: {
      upcoming: 'UPCOMING EVENT / ADIPEC 2026',
      during: 'MEET US AT BOOTH CN56 / ADIPEC 2026',
    },
    details: '2-5 November 2026, Abu Dhabi, UAE',
  },
];

function getDateInTimeZone(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return `${values.year}-${values.month}-${values.day}`;
}

export function getCurrentSiteEvent(now = new Date()) {
  const eligibleEvents = SITE_EVENTS
    .filter((event) => event.enabled)
    .map((event) => ({
      event,
      today: getDateInTimeZone(now, event.timeZone),
    }))
    .filter(({ event, today }) => today <= event.endDate);

  const activeEvent = eligibleEvents.find(
    ({ event, today }) => today >= event.startDate,
  );
  if (activeEvent) return { ...activeEvent, phase: 'during' };

  const upcomingEvent = eligibleEvents
    .filter(({ event, today }) => today < event.startDate)
    .sort((a, b) => a.event.startDate.localeCompare(b.event.startDate))[0];

  return upcomingEvent ? { ...upcomingEvent, phase: 'upcoming' } : null;
}
