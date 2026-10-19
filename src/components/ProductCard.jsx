import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categoryLabel } from '../data/products';
import { CornerTicks } from './ui-bits';

export default function ProductCard({ product, onOpen, index = 0 }) {
  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.35 }, scale: { duration: 0.35 }, y: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col border border-line bg-card"
      data-testid={`product-card-${product.slug}`}
    >
      <div className="relative overflow-hidden bg-mist">
        <CornerTicks light />
        <button
          onClick={() => onOpen && onOpen(product)}
          className="block w-full"
          data-testid={`product-view-${product.slug}`}
          aria-label={`View ${product.name} details`}
        >
          <img
            src={product.image}
            alt={`${product.name} — ${categoryLabel(product.cat)} manufactured by Shiva Engineering Works`}
            loading="lazy"
            className="mx-auto aspect-[4/3] w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:p-8"
          />
        </button>
        <span className="absolute left-3 top-3 bg-ink px-2 py-1 font-mono text-[9px] tracking-widest2 text-white">
          {categoryLabel(product.cat)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base leading-snug tracking-tight text-white sm:text-lg">
          {product.name.toUpperCase()}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-zinc-400">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <button
            onClick={() => onOpen && onOpen(product)}
            className="group/b flex items-center gap-1.5 font-mono text-[10px] tracking-widest2 text-zinc-300 transition-colors hover:text-sew"
            data-testid={`product-details-btn-${product.slug}`}
          >
            VIEW DETAILS
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/b:-translate-y-0.5 group-hover/b:translate-x-0.5" />
          </button>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            data-testid={`product-quote-btn-${product.slug}`}
            className="border border-sew px-3 py-1.5 font-mono text-[10px] tracking-widest2 text-sew transition-all duration-300 hover:bg-sew hover:text-white"
          >
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
