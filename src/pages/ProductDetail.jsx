import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Datasheet } from '../components/ProductModal';
import ProductCard from '../components/ProductCard';
import { Reveal, SectionTag } from '../components/ui-bits';
import { PRODUCTS, categoryLabel, getProduct } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProduct(slug);

  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-ink pt-24">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white">PRODUCT NOT FOUND</h1>
          <Link to="/products" data-testid="product-not-found-back" className="mt-6 inline-block bg-sew px-6 py-3 font-mono text-[11px] tracking-widest2 text-white">
            BACK TO CATALOG
          </Link>
        </div>
      </section>
    );
  }

  const related = PRODUCTS.filter((p) => p.cat === product.cat && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-14 pt-32 lg:pb-20 lg:pt-44" data-testid="product-detail-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <button
            onClick={() => navigate('/products')}
            data-testid="product-back-to-catalog"
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-widest2 text-zinc-400 transition-colors hover:text-sew"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" /> BACK TO CATALOG
          </button>
          <div className="mt-8">
            <SectionTag code="REF" label={categoryLabel(product.cat)} />
          </div>
          <Reveal className="mt-6">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl">
              {product.name.toUpperCase()}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">{product.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20" data-testid="product-detail-datasheet">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <Reveal>
            <div className="border border-linelight shadow-[0_40px_80px_-40px_rgba(11,12,14,0.25)]">
              <Datasheet product={product} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="font-mono text-[10px] leading-relaxed tracking-widest2 text-zinc-400">
              ALL SPECIFICATIONS AS PER SEW BROCHURE. WHERE A VALUE IS NOT LISTED, CONTACT SEW FOR SPECIFICATIONS.
            </p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-linelight bg-mist py-16 lg:py-24" data-testid="related-products">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
            <SectionTag code="MORE" label="RELATED PRODUCTS" light />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} onOpen={() => navigate(`/products/${p.slug}`)} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
