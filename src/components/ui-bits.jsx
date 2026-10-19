import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ code, label, light = false, className = '' }) {
  return (
    <Reveal className={className} y={16}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-sew" />
        <span className={`font-mono text-[11px] tracking-widest2 ${light ? 'text-sew' : 'text-sew'}`}>
          {code} / {label}
        </span>
      </div>
    </Reveal>
  );
}

export function CornerTicks({ light = false }) {
  const c = light ? 'border-linelight' : 'border-line';
  return (
    <>
      <span className={`absolute left-0 top-0 h-3 w-3 border-l border-t ${c}`} />
      <span className={`absolute right-0 top-0 h-3 w-3 border-r border-t ${c}`} />
      <span className={`absolute bottom-0 left-0 h-3 w-3 border-b border-l ${c}`} />
      <span className={`absolute bottom-0 right-0 h-3 w-3 border-b border-r ${c}`} />
    </>
  );
}

export function Counter({ value, format = true, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = format
            ? Math.round(v).toLocaleString('en-US')
            : String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, format]);
  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}

export function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - r.left - r.width / 2) * strength,
          y: (e.clientY - r.top - r.height / 2) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function CursorGlow() {
  const [p, setP] = useState({ x: -600, y: -600 });
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const fn = (e) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden h-[420px] w-[420px] rounded-full md:block"
      style={{
        left: p.x - 210,
        top: p.y - 210,
        background: 'radial-gradient(circle, rgba(229,35,33,0.055) 0%, transparent 62%)',
      }}
    />
  );
}
