import { Link } from 'react-router-dom';
import { INDIA, NAV } from '../data/site';
import { CATEGORIES } from '../data/products';

const Col = ({ title, children }) => (
  <div>
    <h4 className="font-mono text-[10px] tracking-widest2 text-sew">{title}</h4>
    <div className="mt-4 space-y-2">{children}</div>
  </div>
);

const FLink = ({ to, children }) => (
  <Link to={to} className="block text-[13px] text-zinc-400 transition-colors hover:text-white">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink" data-testid="site-footer">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo-bold.png" alt="SEW logo" className="h-11 w-auto" />
              <div className="leading-tight">
                <p className="font-display text-sm text-white">SHIVA ENGINEERING WORKS</p>
                <p className="mt-1 font-mono text-[9px] tracking-widest2 text-zinc-500">
                  OIL FIELD EQUIPMENT & ENGINEERING PRODUCTS
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
              Manufacturer, exporter and supplier of oilfield equipment and engineering products. Based in
              Faridabad (Delhi/NCR) since 2009.
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-widest2 text-zinc-600">
              ISO 9001:2008 CERTIFIED
            </p>
            <a
              href="/assets/SEW-Brochure.pdf"
              download="SEW-Brochure-Shiva-Engineering-Works.pdf"
              data-testid="footer-download-brochure"
              className="mt-4 inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[10px] tracking-widest2 text-zinc-400 transition-all hover:border-sew hover:text-sew"
            >
              DOWNLOAD BROCHURE (PDF)
            </a>
          </div>

          <Col title="NAVIGATION">
            {NAV.slice(1).map((n) => (
              <FLink key={n.path} to={n.path}>{n.label}</FLink>
            ))}
          </Col>

          <Col title="PRODUCTS">
            {CATEGORIES.slice(1).map((c) => (
              <FLink key={c.slug} to={`/products?cat=${c.slug}`}>{c.label}</FLink>
            ))}
          </Col>

          <Col title="OFFICE">
            <div className="text-[13px] leading-relaxed text-zinc-400">
              <p className="text-white">{INDIA.company}</p>
              {INDIA.lines.map((l) => <p key={l}>{l}</p>)}
              <p className="mt-1">{INDIA.email}</p>
              <p>{INDIA.phone}</p>
              <a href={INDIA.mapUrl} target="_blank" rel="noreferrer" data-testid="footer-maps-link" className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest2 text-sew transition-colors hover:text-white">
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </Col>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] tracking-widest2 text-zinc-600">© SHIVA ENGINEERING WORKS</p>
          <p className="font-mono text-[10px] tracking-widest2 text-zinc-600">
            "QUALITY IS NOT AN ACT. IT'S A HABIT."
          </p>
        </div>
      </div>
    </footer>
  );
}
