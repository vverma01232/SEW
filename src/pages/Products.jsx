import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Reveal, SectionTag } from '../components/ui-bits';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { assetUrl } from '../data/site';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const active = params.get('cat') || 'all';
  const [query, setQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (active === 'all' || p.cat === active) &&
        (!q || `${p.name} ${p.tagline} ${p.desc}`.toLowerCase().includes(q))
    );
  }, [active, query]);

  const countFor = (slug) =>
    slug === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === slug).length;

  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-16 pt-36 lg:pb-20 lg:pt-48" data-testid="products-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="CATALOG" label="PRODUCT RANGE" />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl">
                THE PRODUCTS.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                {PRODUCTS.length} product lines across oilfield equipment, valves & manifolds, fittings,
                flanges & gaskets, flowline components and consumables.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white" data-testid="products-catalog">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative">
                <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="SEARCH PRODUCTS"
                  data-testid="product-search-input"
                  className="w-full border border-linelight bg-mist py-3.5 pl-11 pr-4 font-mono text-[11px] tracking-widest2 text-ink outline-none transition-colors placeholder:text-zinc-400 focus:border-sew"
                />
              </div>
              <nav className="mt-6 hidden border-t border-linelight lg:block" data-testid="category-nav">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setParams(c.slug === 'all' ? {} : { cat: c.slug })}
                    data-testid={`product-filter-tab-${c.slug}`}
                    className={`flex w-full items-center justify-between border-b border-linelight px-1 py-3.5 text-left font-mono text-[10.5px] tracking-widest2 transition-all ${
                      active === c.slug ? 'text-sew' : 'text-zinc-500 hover:text-ink'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-px transition-all ${active === c.slug ? 'w-6 bg-sew' : 'w-0 bg-sew'}`} />
                      {c.label}
                    </span>
                    <span className="text-[9px] text-zinc-400">{String(countFor(c.slug)).padStart(2, '0')}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-6 border border-linelight bg-mist p-5">
                <p className="font-mono text-[10px] leading-relaxed tracking-widest2 text-zinc-500">
                  CAN'T FIND WHAT YOU NEED? SEW MANUFACTURES CUSTOM PRODUCTS.
                </p>
                <Link
                  to="/contact"
                  data-testid="catalog-custom-rfq"
                  className="mt-4 inline-block bg-ink px-4 py-2.5 font-mono text-[10px] tracking-widest2 text-white transition-colors hover:bg-sew"
                >
                  SEND YOUR REQUIREMENT
                </Link>
                <a
                  href={assetUrl('assets/SEW-Brochure.pdf')}
                  download="SEW-Brochure-Shiva-Engineering-Works.pdf"
                  data-testid="download-brochure-btn"
                  className="mt-3 flex items-center justify-center gap-2 border border-ink px-4 py-2.5 font-mono text-[10px] tracking-widest2 text-ink transition-colors hover:border-sew hover:text-sew"
                >
                  DOWNLOAD BROCHURE (PDF)
                </a>
              </div>
            </aside>

            <div>
              <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden" data-testid="category-chips-mobile">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setParams(c.slug === 'all' ? {} : { cat: c.slug })}
                    data-testid={`product-filter-chip-${c.slug}`}
                    className={`shrink-0 border px-4 py-2 font-mono text-[10px] tracking-widest2 transition-colors ${
                      active === c.slug
                        ? 'border-sew bg-sew text-white'
                        : 'border-linelight text-zinc-500 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <p className="mt-4 font-mono text-[10px] tracking-widest2 text-zinc-400 lg:mt-0 lg:mb-6" data-testid="products-result-count">
                SHOWING {String(filtered.length).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}
              </p>

              {filtered.length === 0 ? (
                <div className="mt-10 border border-dashed border-linelight p-16 text-center">
                  <p className="font-display text-lg text-ink">NO PRODUCTS MATCH YOUR SEARCH</p>
                  <p className="mt-2 text-sm text-zinc-500">Try a different term or clear the filters.</p>
                </div>
              ) : (
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 xl:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((p, i) => (
                      <ProductCard key={p.slug} product={p} onOpen={setModalProduct} index={i} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </>
  );
}
