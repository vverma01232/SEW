import { Counter, Reveal } from '../components/ui-bits';

export default function StatsBand() {
  return (
    <section className="relative border-y border-line bg-ink" data-testid="stats-band">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { v: <Counter value={2009} format={false} />, label: 'ESTABLISHED', sub: 'Faridabad, Delhi/NCR' },
          { v: <Counter value={3} format={false} />, label: 'CORE INFRASTRUCTURE UNITS', sub: 'Manufacturing · Warehouse · Quality' },
          { v: <><Counter value={15000} /> PSI</>, label: 'MAX WORKING PRESSURE', sub: 'Up to 15,000 PSI CWP — on applicable products' },
          { v: 'ISO 9001:2008', label: 'CERTIFIED', sub: 'As stated in the SEW brochure' },
        ].map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`relative px-6 py-10 sm:px-8 lg:py-14 ${i > 0 ? 'border-t border-line sm:border-t-0' : ''} ${
              i % 2 === 1 ? 'sm:border-l' : ''
            } ${i === 2 ? 'lg:border-l' : ''} ${i === 1 ? 'lg:border-l' : ''} ${i === 3 ? 'lg:border-l' : ''}`}
          >
            <span className="absolute left-0 top-0 h-0.5 w-10 bg-sew" />
            <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">{s.v}</p>
            <p className="mt-3 font-mono text-[10px] tracking-widest2 text-sew">{s.label}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
