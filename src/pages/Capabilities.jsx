import { EASE, Reveal, SectionTag, CornerTicks } from '../components/ui-bits';
import { motion } from 'framer-motion';
import { assetUrl } from '../data/site';

const STEPS = [
  { t: 'MANUFACTURE', d: 'Production & distribution of a diverse range of oilfield equipment and industrial products — flanges, crosses and tees, spools, hammer unions, manifolds, swivel joints and ring joint gaskets.' },
  { t: 'INSPECT', d: 'A dedicated Quality Department. Skilled and experienced employees; highest grade raw material procured from reliable manufacturers.' },
  { t: 'TEST', d: 'Every product goes through several quality tests before it is cleared for dispatch.' },
  { t: 'PACKAGE', d: 'All products properly packed in wooden boxes or iron containers to assure safe transit.' },
  { t: 'DELIVER', d: 'A well-established supply chain system assuring on-time deliveries to the clients.' },
];

const MACHINERY_IMG = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop';
const WAREHOUSE_IMG = assetUrl('assets/gallery/gal-01.jpg');
const PIPES_IMG = 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1600&auto=format&fit=crop';

function Frame({ src, alt, caption, delay = 0, className = '' }) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="clip-corner relative overflow-hidden border border-line">
        <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest2 text-zinc-400">{caption}</span>
        <CornerTicks />
      </div>
    </Reveal>
  );
}

export default function Capabilities() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-20 pt-36 lg:pb-28 lg:pt-48" data-testid="capabilities-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="INSIDE SEW" label="CAPABILITIES" />
          <Reveal className="mt-8">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              MANUFACTURE. INSPECT. TEST.
              <br />
              <span className="text-stroke-white">PACKAGE. DELIVER.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              From raw material to ready-for-dispatch — the process behind every SEW product.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-20 lg:py-28" data-testid="capabilities-process">
        <div className="tech-grid-dark absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="01" label="THE PROCESS" light />
          <div className="relative mt-16">
            <span className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-sew via-sew/30 to-transparent" />
            <div className="space-y-14">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.05 * i, ease: EASE }}
                  className="relative grid grid-cols-[40px_1fr] gap-6 sm:grid-cols-[40px_180px_1fr] sm:gap-10"
                  data-testid={`process-step-${s.t.toLowerCase()}`}
                >
                  <span className="relative z-10 mt-1 flex h-10 w-10 items-center justify-center border border-sew bg-white font-mono text-[11px] font-semibold text-sew">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl tracking-tight text-ink sm:mt-1.5 sm:text-2xl">{s.t}</h3>
                  <p className="col-span-2 text-sm leading-relaxed text-zinc-600 sm:col-span-1 sm:mt-2">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="noise relative overflow-hidden border-y border-line bg-coal py-20 lg:py-28" data-testid="capabilities-facility">
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="02" label="THE FACILITY" />
          <Reveal className="mt-8">
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-white sm:text-5xl">
              MACHINERY, FINISHED PRODUCTS & PACKAGING.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Frame src={MACHINERY_IMG} alt="Precision machining — capability visualization" caption="MACHINERY / CAPABILITY VISUAL" />
            <Frame src={WAREHOUSE_IMG} alt="Finished products at SEW — brochure gallery" caption="FINISHED PRODUCTS / SEW BROCHURE" delay={0.1} />
            <Frame src={PIPES_IMG} alt="Steel pipes inventory — capability visualization" caption="STEEL / CAPABILITY VISUAL" delay={0.2} />
          </div>
          <Reveal delay={0.1} className="mt-10">
            <p className="max-w-2xl font-mono text-[10px] leading-relaxed tracking-widest2 text-zinc-500">
              FACILITY IMAGERY FROM THE SEW BROCHURE. ADDITIONAL VISUALS ARE ATMOSPHERE REFERENCE, NOT SEW FACILITY PHOTOS.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
