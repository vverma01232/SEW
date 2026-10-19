export default function Marquee({ items, dark = true }) {
  const Row = ({ hidden }) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display whitespace-nowrap px-6 text-lg tracking-wide sm:px-10 sm:text-2xl">
            {it}
          </span>
          <span className="h-2 w-2 rotate-45 bg-sew" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`mask-fade-x overflow-hidden border-y py-5 ${
        dark ? 'border-line bg-ink' : 'border-linelight bg-mist'
      }`}
      data-testid="editorial-marquee"
    >
      <div className="flex w-max animate-marquee">
        <Row hidden={false} />
        <Row hidden={true} />
      </div>
    </div>
  );
}
