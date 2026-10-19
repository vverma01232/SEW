import { motion } from 'framer-motion';
import { EASE, Reveal } from '../components/ui-bits';

const STEPS = [
  { n: '01', t: 'IDEA', d: 'Put your product development on the fast track — bring us the concept.' },
  { n: '02', t: 'DESIGN', d: 'Tap into our in-house capabilities and engineering experience.' },
  { n: '03', t: 'PROTOTYPE', d: 'From concept to prototype at a speed you never thought possible.' },
  { n: '04', t: 'MANUFACTURING', d: 'Forging, casting and machining capability under one roof.' },
  { n: '05', t: 'QUALITY CONTROL', d: 'Advanced technologies in equipment and quality control.' },
  { n: '06', t: 'DELIVERY', d: 'Cost-effective production, delivered with complete communication.' },
];

export default function Pipeline({ light = false }) {
  return (
    <div className="relative" data-testid="engineering-pipeline">
      <div className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-sew via-line to-transparent lg:left-0 lg:top-[13px] lg:h-px lg:w-full lg:bg-gradient-to-r" />
      <div className="grid gap-10 lg:grid-cols-6 lg:gap-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            className="relative flex gap-6 pl-0 lg:block"
          >
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center border border-sew bg-ink font-mono text-[11px] font-semibold text-sew">
              {s.n}
            </span>
            <div className="lg:mt-6">
              <h4 className={`font-display text-sm tracking-wide ${light ? 'text-ink' : 'text-white'}`}>{s.t}</h4>
              <p className={`mt-2 text-xs leading-relaxed ${light ? 'text-zinc-600' : 'text-zinc-400'}`}>{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PipelineTeaserText() {
  return (
    <Reveal>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        Leverage SEW experience and infrastructure. Our expertise in manufacturing, fabrication and supply
        chain management — plus capability in forging, casting and machining — takes your idea from concept,
        to design, to prototype, to final product. All your information is handled with uncompromised
        confidentiality and security.
      </p>
    </Reveal>
  );
}
