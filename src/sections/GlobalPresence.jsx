import { MapPin } from 'lucide-react';
import { Reveal, SectionTag } from '../components/ui-bits';
import { INDIA } from '../data/site';

export default function GlobalPresence() {
  return (
    <section className="bg-mist py-20 lg:py-28" data-testid="global-presence">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <SectionTag code="07" label="PRESENCE" light />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
              MANUFACTURED IN FARIDABAD.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
              Manufacturer, exporter and supplier of oilfield equipment and industrial products — with a
              well-established supply chain system assuring on-time deliveries.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative grid border border-linelight bg-white lg:grid-cols-2" data-testid="presence-in">
            <div className="relative p-8 lg:p-12">
              <span className="absolute left-0 top-0 h-0.5 w-full bg-sew" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-widest2 text-sew">INDIA</p>
                  <h3 className="mt-3 font-display text-xl tracking-tight text-ink sm:text-2xl">FARIDABAD</h3>
                </div>
                <span className="font-mono text-[9px] tracking-widest2 text-zinc-400">{INDIA.coords}</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">{INDIA.company}</p>
              <div className="mt-3 space-y-0.5 text-[13px] leading-relaxed text-zinc-600">
                {INDIA.lines.map((l) => <p key={l}>{l}</p>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-linelight pt-4 font-mono text-[11px] text-zinc-600">
                <a href={`mailto:${INDIA.email}`} className="transition-colors hover:text-sew">{INDIA.email}</a>
                <a href={INDIA.phoneHref} className="transition-colors hover:text-sew">{INDIA.phone}</a>
                <a href={INDIA.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-sew">{INDIA.website}</a>
                <a href={INDIA.mapUrl} target="_blank" rel="noreferrer" data-testid="presence-maps-link" className="flex items-center gap-1.5 text-sew transition-colors hover:text-ink">
                  <MapPin size={11} /> GOOGLE MAPS
                </a>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden border-t border-linelight lg:border-l lg:border-t-0">
              <iframe
                title="Shiva Engineering Works on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112341.90030617453!2d77.22174228276346!3d28.368390177136693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc0314edf467%3A0x5535642b58ddf18b!2sShiva%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1791021294098!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                data-testid="presence-maps-embed"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
