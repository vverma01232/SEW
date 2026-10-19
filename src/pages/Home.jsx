import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../sections/Hero';
import Marquee from '../components/Marquee';
import AboutBlocks from '../sections/AboutBlocks';
import StatsBand from '../sections/StatsBand';
import Pipeline, { PipelineTeaserText } from '../sections/Pipeline';
import QualityBlock from '../sections/QualityBlock';
import GlobalPresence from '../sections/GlobalPresence';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Reveal, SectionTag } from '../components/ui-bits';
import { FEATURED, PRODUCTS } from '../data/products';
import { MARQUEE_ITEMS } from '../data/site';

function AboutTeaser() {
  return (
    <section className="bg-mist py-20 lg:py-28" data-testid="home-about">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag code="01" label="WHO WE ARE" light />
            <Reveal className="mt-8">
              <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
                A BUSINESS BUILT ON STEEL, SKILL & STANDARDS.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/about"
              data-testid="home-about-link"
              className="group inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] tracking-widest2 text-ink transition-colors hover:border-sew hover:text-sew"
            >
              FULL COMPANY PROFILE
              <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 border-t border-l linelight border-r">
          <AboutBlocks />
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts({ onOpen }) {
  return (
    <section className="bg-white py-20 lg:py-28" data-testid="home-featured">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag code="02" label="PRODUCTS" light />
            <Reveal className="mt-8">
              <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
                {PRODUCTS.length} PRODUCT LINES. ONE ENGINEERING STANDARD.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/products"
              data-testid="home-view-all-products"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-[11px] tracking-widest2 text-white transition-colors hover:bg-sew"
            >
              VIEW FULL CATALOG
              <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <ProductCard key={p.slug} product={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomDevTeaser() {
  return (
    <section className="noise relative overflow-hidden border-y border-line bg-coal py-20 lg:py-28" data-testid="home-custom-dev">
      <div className="tech-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag code="03" label="CUSTOM PRODUCT DEVELOPMENT" />
            <Reveal className="mt-8">
              <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-white sm:text-5xl">
                FROM CONCEPT TO COMPONENT.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/custom-product-development"
              data-testid="home-custom-dev-link"
              className="inline-flex items-center gap-2 bg-sew px-6 py-3.5 font-mono text-[11px] tracking-widest2 text-white transition-colors hover:bg-sew-dark"
            >
              START YOUR PROJECT
              <ArrowUpRight size={13} />
            </Link>
          </Reveal>
        </div>
        <PipelineTeaserText />
        <div className="mt-16">
          <Pipeline />
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32" data-testid="home-cta">
      <div className="tech-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[1600px] px-4 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-sew">READY WHEN YOU ARE</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            LET'S BUILD WHAT'S <span className="text-sew">NEXT.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Tell us what you need. Our engineering team will help you find the right solution.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10">
          <Link
            to="/contact"
            data-testid="home-cta-quote-btn"
            className="inline-flex items-center gap-3 bg-sew px-10 py-4 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors hover:bg-sew-dark"
          >
            REQUEST A QUOTE <span className="h-1.5 w-1.5 rotate-45 bg-white" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const [modalProduct, setModalProduct] = useState(null);
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <AboutTeaser />
      <StatsBand />
      <FeaturedProducts onOpen={setModalProduct} />
      <CustomDevTeaser />
      <QualityBlock />
      <GlobalPresence />
      <CTABand />
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </>
  );
}
