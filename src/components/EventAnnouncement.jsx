export default function EventAnnouncement({ announcement }) {
  if (!announcement) return null;

  const { event, phase } = announcement;

  return (
    <aside
      className="fixed inset-x-0 top-0 z-[70] flex h-10 items-center justify-center bg-sew px-3 text-center text-white"
      aria-label="Upcoming event announcement"
      data-testid="site-announcement"
    >
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-white" />
      <p className="ml-2 font-mono text-[9px] font-semibold tracking-widest2 sm:text-[10px]">
        <span>{event.messages[phase]}</span>
        <span className="mx-2 opacity-70">—</span>
        <span>{event.details}</span>
      </p>
    </aside>
  );
}
