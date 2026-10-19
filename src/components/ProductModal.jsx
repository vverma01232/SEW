import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { categoryLabel } from '../data/products';
import { CornerTicks } from './ui-bits';

export function Datasheet({ product }) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative flex items-center justify-center bg-mist p-8 sm:p-12">
        <CornerTicks light />
        <img
          src={product.image}
          alt={`${product.name} manufactured by Shiva Engineering Works`}
          className="max-h-[340px] w-full object-contain"
        />
        <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest2 text-zinc-500">
          FIG. 01 — {product.name.toUpperCase()}
        </span>
      </div>
      <div className="p-6 sm:p-10">
        <p className="font-mono text-[10px] tracking-widest2 text-sew">{categoryLabel(product.cat)}</p>
        <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-white sm:text-3xl">
          {product.name.toUpperCase()}
        </h3>
        <p className="mt-2 text-sm text-zinc-400">{product.tagline}</p>
        <p className="mt-5 text-[13px] leading-relaxed text-zinc-300">{product.desc}</p>
        <div className="mt-6 border-t border-line" data-testid="product-modal-datasheet">
          {product.rows.map((r) => (
            <div key={r.k} className="grid grid-cols-[130px_1fr] gap-4 border-b border-line py-2.5">
              <span className="font-mono text-[10px] uppercase leading-4 tracking-widest2 text-zinc-500">{r.k}</span>
              <span className="text-[13px] leading-4 text-zinc-200">{r.v}</span>
            </div>
          ))}
        </div>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          data-testid="modal-request-quote-btn"
          className="mt-8 inline-flex items-center gap-2 bg-sew px-6 py-3 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors hover:bg-sew-dark"
        >
          REQUEST A QUOTE <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', fn);
    document.body.style.overflow = product ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          data-testid="product-modal-overlay"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-line bg-coal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              data-testid="product-modal-close-btn"
              aria-label="Close product details"
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center bg-sew text-white transition-colors hover:bg-sew-dark"
            >
              <X size={18} />
            </button>
            {product && <Datasheet product={product} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
