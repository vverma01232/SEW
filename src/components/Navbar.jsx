import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV } from '../data/site';
import { EASE } from './ui-bits';

function LogoChip({ onClick }) {
  return (
    <Link to="/" onClick={onClick} data-testid="nav-logo" className="flex items-center gap-3">
      <img src="/logo-bold.png" alt="SEW logo" className="h-9 w-auto sm:h-10" />
      <span className="hidden flex-col leading-none md:flex">
        <span className="font-display text-[13px] tracking-wide text-white">SHIVA ENGINEERING WORKS</span>
        <span className="mt-1 font-mono text-[9px] tracking-widest2 text-zinc-500">OIL FIELD EQUIPMENT</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const goTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navClick = (path) => () => {
    if (pathname === path) goTop();
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[65] transition-all duration-500 ${
          scrolled ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        data-testid="site-navbar"
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:h-20 lg:px-12">
          <div
            className={`transition-all duration-500 ${
              scrolled || pathname !== '/' ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
            data-testid="nav-logo-wrap"
          >
            <LogoChip onClick={navClick('/')} />
          </div>
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {NAV.slice(1).map((n) => (
              <NavLink
                key={n.path}
                to={n.path}
                onClick={navClick(n.path)}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className={({ isActive }) =>
                  `group relative font-mono text-[10.5px] tracking-widest2 transition-colors ${
                    isActive ? 'text-sew' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-sew transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={navClick('/contact')}
              data-testid="nav-btn-rfq"
              className="bg-sew px-5 py-2.5 font-mono text-[10.5px] font-semibold tracking-widest2 text-white transition-colors duration-300 hover:bg-sew-dark"
            >
              REQUEST A QUOTE
            </Link>
          </nav>
          <button
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            data-testid="nav-toggle"
            aria-label="Toggle menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-white" />
          </button>
        </div>
        {!scrolled && <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />}
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="noise tech-grid fixed inset-0 z-[55] flex flex-col bg-ink lg:hidden"
            onClick={() => setOpen(false)}
            data-testid="mobile-nav-drawer"
          >
            <div className="flex flex-1 flex-col justify-center gap-1 px-8 pt-20">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.path}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <NavLink
                    to={n.path}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(false);
                      if (pathname === n.path) goTop();
                    }}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 py-2.5 ${isActive ? 'text-sew' : 'text-white'}`
                    }
                  >
                    <span className="font-mono text-[10px] text-sew">0{i + 1}</span>
                    <span className="font-display text-2xl tracking-tight sm:text-3xl">{n.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-line px-8 py-6"
            >
              <p className="font-mono text-[10px] tracking-widest2 text-zinc-500">SALES@SHIVAENGGWORKS.COM</p>
              <p className="mt-1 font-mono text-[10px] tracking-widest2 text-zinc-500">+91-9911-700-180</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
