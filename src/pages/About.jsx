import { Link } from 'react-router-dom';
import AboutBlocks from '../sections/AboutBlocks';
import StatsBand from '../sections/StatsBand';
import GlobalPresence from '../sections/GlobalPresence';
import Marquee from '../components/Marquee';
import { Reveal, SectionTag } from '../components/ui-bits';
import { MARQUEE_ITEMS } from '../data/site';

const UNITS = [
  { n: '01', t: 'MANUFACTURING UNIT', d: 'Production of a diverse range of oilfield equipment and industrial products.' },
  { n: '02', t: 'WAREHOUSE UNIT', d: 'Organized storage of finished goods, ready for dispatch on schedule.' },
  { n: '03', t: 'QUALITY DEPARTMENT', d: 'Several quality tests on every product before it leaves the plant.' },
];

export default function About() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-20 pt-36 lg:pb-28 lg:pt-48" data-testid="about-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="ABOUT" label="THE COMPANY" />
          <Reveal className="mt-8">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              SHIVA ENGINEERING WORKS
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
              Shiva Engineering Works is a business entity based out of Faridabad (Delhi/NCR), established in
              2009. We are engaged in the production & distribution of a diverse range of oilfield equipment
              and other industrial products. We are recognized as a trusted Manufacturer, Exporter and
              Supplier of Flanges, Crosses and Tees, Spools, Hammer Union, Manifolds, Swivel Joints, and Ring
              Joint Gasket.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
              The company has carved a niche in the national market — determined to accept the challenges of
              the industry and to meet the growing demands of its customers.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} dark={false} />

      <section className="bg-white py-20 lg:py-28" data-testid="about-pillars">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="01" label="HOW WE WORK" light />
          <Reveal className="mt-8">
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
              PRECISION IS A PROCESS, NOT A PROMISE.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Our skilled and experienced employees deliver products that perfectly meet client needs — using
              the highest grade raw material procured from reliable manufacturers. After going through several
              quality tests, all products are properly packed in wooden boxes or iron containers to assure safe
              transit.
            </p>
          </Reveal>
          <div className="mt-14 border-t border-l linelight border-r">
            <AboutBlocks />
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="noise relative overflow-hidden border-y border-line bg-coal py-20 lg:py-28" data-testid="about-infrastructure">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionTag code="02" label="INFRASTRUCTURE" />
            <Reveal className="mt-8">
              <h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-5xl">
                A FUTURISTIC SETUP, BUILT OVER A VAST AREA.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-0 border-t border-line">
              {UNITS.map((u, i) => (
                <Reveal key={u.n} delay={i * 0.08}>
                  <div className="group flex items-baseline gap-6 border-b border-line py-6">
                    <span className="font-mono text-[11px] text-sew">{u.n}</span>
                    <div>
                      <h3 className="font-display text-base tracking-wide text-white sm:text-lg">{u.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{u.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="mt-16">
            <Link
              to="/capabilities"
              data-testid="about-capabilities-link"
              className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 font-mono text-[11px] tracking-widest2 text-white transition-all hover:border-sew hover:text-sew"
            >
              INSIDE SEW — CAPABILITIES
            </Link>
          </Reveal>
        </div>
      </section>

      <GlobalPresence />
    </>
  );
}
