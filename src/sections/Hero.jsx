import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE, Magnetic } from '../components/ui-bits';
import { INDIA } from '../data/site';

const BG = 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?q=80&w=1920&auto=format&fit=crop';

function MaskedLine({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '112%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink" data-testid="hero-section">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={BG}
          alt="Offshore industrial facility at night — oil field energy infrastructure"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      <div className="tech-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 h-px animate-scan bg-gradient-to-r from-transparent via-sew/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-1/4 hidden w-px bg-white/5 lg:block" />

      <span className="absolute left-4 top-24 hidden font-mono text-[9px] tracking-widest2 text-zinc-500 sm:block lg:left-12">
        {INDIA.coords} — FARIDABAD
      </span>
      <span className="absolute right-4 top-24 hidden text-right font-mono text-[9px] tracking-widest2 text-zinc-500 sm:block lg:right-12">
        ISO 9001:2008 CERTIFIED
      </span>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-8"
          data-testid="hero-logo-chip"
        >
        <img src="/logo-bold.png" alt="SEW — Shiva Engineering Works" className="h-[70px] w-auto sm:h-[85px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-sew" />
          <span className="font-mono text-[10px] tracking-widest2 text-sew sm:text-[11px]">
            SHIVA ENGINEERING WORKS — OIL FIELD EQUIPMENT & ENGINEERING PRODUCTS
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(30px,10.2vw,54px)] leading-[0.95] tracking-tightest text-white sm:text-6xl lg:text-[86px]">
          <MaskedLine delay={0.35}>ENGINEERED</MaskedLine>
          <MaskedLine delay={0.47}>
            FOR <span className="text-sew">PRESSURE.</span>
          </MaskedLine>
          <MaskedLine delay={0.59}>
            <span className="text-stroke-white">BUILT FOR</span>
          </MaskedLine>
          <MaskedLine delay={0.71}>
            <span className="text-stroke-white">PERFORMANCE.</span>
          </MaskedLine>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="mt-8 h-px w-40 origin-left bg-sew"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base"
        >
          Manufacturer, exporter & supplier of oilfield equipment and engineering products — from hammer
          unions to choke & kill manifolds, built in Faridabad, Delhi/NCR since 2009.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link
              to="/products"
              data-testid="hero-btn-explore-products"
              className="inline-flex items-center gap-3 bg-sew px-8 py-4 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors duration-300 hover:bg-sew-dark"
            >
              EXPLORE PRODUCTS
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/contact"
              data-testid="hero-btn-request-quote"
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 font-mono text-[11px] tracking-widest2 text-white transition-all duration-300 hover:border-sew hover:text-sew"
            >
              REQUEST A QUOTE
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 right-4 hidden text-right font-mono text-[9px] leading-relaxed tracking-widest2 text-zinc-500 sm:block lg:right-12"
      >
        UP TO 15,000 PSI CWP*
        <br />
        <span className="text-zinc-600">*ON APPLICABLE PRODUCTS</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[9px] tracking-widest2 text-zinc-500">SCROLL</span>
        <span className="h-8 w-px overflow-hidden bg-white/15">
          <motion.span
            className="block h-3 w-px bg-sew"
            animate={{ y: [0, 32] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
