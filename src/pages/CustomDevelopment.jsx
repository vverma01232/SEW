import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Pipeline from '../sections/Pipeline';
import { Reveal, SectionTag } from '../components/ui-bits';

const CAPS = [
  'MANUFACTURING', 'FABRICATION', 'SUPPLY CHAIN MANAGEMENT', 'FORGING',
  'CASTING', 'MACHINING', 'QUALITY CONTROL', 'PRODUCT DEVELOPMENT',
];

export default function CustomDevelopment() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-20 pt-36 lg:pb-24 lg:pt-48" data-testid="customdev-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="CUSTOM" label="PRODUCT DEVELOPMENT" />
          <Reveal className="mt-8">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              YOUR IDEA.
              <br />
              <span className="text-sew">OUR INFRASTRUCTURE.</span>
            </h1>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                Put your product development on the fast track by leveraging SEW experience and
                infrastructure. Tap into our in-house capabilities and take your idea from concept, to
                design, to prototype, to final product at a speed you never thought possible.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                Already have a product and need to improve quality and reduce cost? SEW will put our
                expertise in manufacturing, fabrication and supply chain management to work for you — using
                our capability in forging, casting and machining to achieve cost reductions while improving
                quality and delivery. SEW is ISO 9001:2008 certified, with a network of reliable high quality
                suppliers who can meet almost any requirement of your company.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" data-testid="customdev-pipeline">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="01" label="THE PIPELINE" light />
          <Reveal className="mt-8">
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
              SIX STAGES. ONE RESPONSIBLE PARTNER.
            </h2>
          </Reveal>
          <div className="mt-16 lg:px-6">
            <Pipeline light />
          </div>
        </div>
      </section>

      <section className="noise relative overflow-hidden border-y border-line bg-coal py-20 lg:py-28" data-testid="customdev-capabilities">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTag code="02" label="IN-HOUSE CAPABILITIES" />
              <Reveal className="mt-8">
                <h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                  ADVANCED TECHNOLOGY. PROVEN PROCESSES.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                  Our reputation comes from advanced technologies used in equipment and quality control,
                  processes and procedures which address improved manufacturing and cost effectiveness, and
                  open communication with our customers.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex items-start gap-4 border border-sew/40 bg-sew/5 p-6" data-testid="confidentiality-note">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-sew" />
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    SEW handles all your information with uncompromised confidentiality and security. We
                    understand the value of intellectual property and its importance to our customers — and do
                    everything to protect it.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-2">
              {CAPS.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <div className="group flex h-full items-end border-b border-r border-line p-6 transition-colors hover:bg-card lg:p-8">
                    <div>
                      <span className="font-mono text-[10px] text-sew">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="mt-3 font-display text-sm tracking-wide text-white sm:text-base">{c}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="mt-16">
            <Link
              to="/contact"
              data-testid="customdev-cta"
              className="inline-flex items-center gap-3 bg-sew px-10 py-4 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors hover:bg-sew-dark"
            >
              SEND YOUR REQUIREMENT <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
