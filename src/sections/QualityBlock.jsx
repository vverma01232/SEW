import { Reveal, SectionTag } from '../components/ui-bits';

const POINTS = [
  { k: 'RAW MATERIAL', v: 'Highest grade raw material, procured from reliable manufacturers.' },
  { k: 'QUALITY TESTS', v: 'Every product passes through several quality tests before dispatch.' },
  { k: 'SKILLED TEAM', v: 'Skilled and experienced employees deliver products that meet client needs.' },
  { k: 'SECURE PACKAGING', v: 'Products packed in wooden boxes or iron containers to assure safe transit.' },
];

const BG = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600&auto=format&fit=crop';

export default function QualityBlock() {
  return (
    <section className="noise relative overflow-hidden bg-ink" data-testid="quality-section">
      <div className="absolute inset-0">
        <img src={BG} alt="" aria-hidden className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>
      <div className="tech-grid absolute inset-0" />

      <div className="relative mx-auto max-w-[1600px] px-4 py-24 sm:px-8 lg:px-12 lg:py-36">
        <SectionTag code="05" label="QUALITY POLICY" />
        <Reveal className="mt-8">
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            QUALITY IS NOT AN ACT.
            <br />
            <span className="text-sew">IT'S A HABIT.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="inline-flex items-center gap-4 border border-sew/60 px-5 py-3">
            <span className="h-2 w-2 animate-blink bg-sew" />
            <span className="font-mono text-[11px] tracking-widest2 text-white">ISO 9001:2008 CERTIFIED</span>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08} className="border-b border-line py-8 pr-6 sm:py-10 sm:last:col-span-2 lg:last:col-span-1">
              <span className="font-mono text-[10px] tracking-widest2 text-sew">0{i + 1}</span>
              <h3 className="mt-3 font-display text-sm tracking-wide text-white">{p.k}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-400">{p.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
