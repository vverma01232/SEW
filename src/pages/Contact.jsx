import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Reveal, SectionTag, Magnetic } from '../components/ui-bits';
import { INDIA } from '../data/site';

const FIELDS = [
  { name: 'name', label: 'NAME', required: true },
  { name: 'company', label: 'COMPANY', required: false },
  { name: 'email', label: 'EMAIL', required: true, type: 'email' },
  { name: 'phone', label: 'PHONE', required: true, type: 'tel' },
];

function OfficeCard({ office, code }) {
  return (
    <div className="border border-line bg-card p-7" data-testid={`contact-office-${code}`}>
      <span className="absolute left-0 top-0 h-0.5 w-full bg-sew" />
      <p className="font-mono text-[10px] tracking-widest2 text-sew">INDIA — HEAD OFFICE</p>
      <h3 className="mt-3 font-display text-base tracking-wide text-white">{office.company.toUpperCase()}</h3>
      <div className="mt-4 space-y-2.5 text-[13px] text-zinc-400">
        <p className="flex items-start gap-2.5"><MapPin size={14} className="mt-0.5 shrink-0 text-sew" /><span>{office.lines.join(', ')}</span></p>
        <a href={office.phoneHref} data-testid={`contact-phone-${code}`} className="flex items-center gap-2.5 transition-colors hover:text-white"><Phone size={14} className="shrink-0 text-sew" />{office.phone}</a>
        <a href={`mailto:${office.email}`} data-testid={`contact-email-${code}`} className="flex items-center gap-2.5 transition-colors hover:text-white"><Mail size={14} className="shrink-0 text-sew" />{office.email}</a>
        <p className="flex items-center gap-2.5"><span className="font-mono text-[11px] text-sew">WWW</span><a href={office.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{office.website}</a></p>
        <a href={office.mapUrl} target="_blank" rel="noreferrer" data-testid={`contact-maps-${code}`} className="flex items-center gap-2.5 transition-colors hover:text-white"><MapPin size={14} className="shrink-0 text-sew" />View on Google Maps</a>
      </div>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    product: params.get('product') || '', message: '',
  });
  const [state, setState] = useState('idle');
  const [waUrl, setWaUrl] = useState('');
  const [mailUrl, setMailUrl] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text = [
      'New quote request — SEW website',
      `Name: ${form.name}`,
      `Company: ${form.company || '-'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product / Requirement: ${form.product || '-'}`,
      `Message: ${form.message || '-'}`,
    ].join('\n');
    setWaUrl(`https://wa.me/919911700180?text=${encodeURIComponent(text)}`);
    setMailUrl(
      `mailto:sales@shivaenggworks.com?subject=${encodeURIComponent(
        `Quote Request — ${form.product || 'General Enquiry'}`
      )}&body=${encodeURIComponent(text)}`
    );
    setState('sent');
  };

  const inputCls = 'w-full border border-line bg-coal px-4 py-3.5 font-mono text-[12px] tracking-wider text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-sew';

  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-16 pt-36 lg:pb-20 lg:pt-48" data-testid="contact-hero">
        <div className="tech-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <SectionTag code="CONTACT" label="REQUEST A QUOTE" />
          <Reveal className="mt-8">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              LET'S BUILD <span className="text-sew">WHAT'S NEXT.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
              Tell us what you need. Our engineering team will help you find the right solution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" data-testid="contact-section">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
            <Reveal>
              {state === 'sent' ? (
                <div className="flex h-full min-h-[420px] flex-col items-start justify-center border border-sew/40 bg-mist p-10" data-testid="quote-success-panel">
                  <span className="flex h-14 w-14 items-center justify-center bg-sew text-white"><Check size={26} /></span>
                  <h2 className="mt-6 font-display text-2xl tracking-tight text-ink sm:text-3xl">REQUEST READY.</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
                    Thank you — one step left. Send your requirement straight to our team on WhatsApp or by email.
                    It carries everything you just filled in.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="quote-whatsapp-notify"
                      className="inline-flex items-center gap-2 bg-[#1FA855] px-6 py-3.5 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-opacity hover:opacity-90"
                    >
                      SEND VIA WHATSAPP
                    </a>
                    <a
                      href={mailUrl}
                      data-testid="quote-email-notify"
                      className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors hover:bg-sew"
                    >
                      SEND VIA EMAIL
                    </a>
                  </div>
                  <button
                    onClick={() => { setState('idle'); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                    data-testid="quote-send-another"
                    className="mt-4 border-b border-ink pb-0.5 font-mono text-[11px] tracking-widest2 text-ink transition-colors hover:border-sew hover:text-sew"
                  >
                    SEND ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} data-testid="quote-form" className="border border-linelight bg-white p-6 sm:p-10">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {FIELDS.map((f) => (
                      <div key={f.name}>
                        <label className="font-mono text-[10px] tracking-widest2 text-zinc-500" htmlFor={`quote-${f.name}`}>
                          {f.label} {f.required && <span className="text-sew">*</span>}
                        </label>
                        <input
                          id={`quote-${f.name}`}
                          type={f.type || 'text'}
                          required={f.required}
                          value={form[f.name]}
                          onChange={set(f.name)}
                          data-testid={`quote-form-${f.name}-input`}
                          className={`mt-2 ${inputCls}`}
                          placeholder={f.label}
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="font-mono text-[10px] tracking-widest2 text-zinc-500" htmlFor="quote-product">PRODUCT / REQUIREMENT</label>
                      <input
                        id="quote-product"
                        type="text"
                        value={form.product}
                        onChange={set('product')}
                        data-testid="quote-form-product-input"
                        className={`mt-2 ${inputCls}`}
                        placeholder="e.g. Hammer Unions 2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-mono text-[10px] tracking-widest2 text-zinc-500" htmlFor="quote-message">MESSAGE</label>
                      <textarea
                        id="quote-message"
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        data-testid="quote-form-message-input"
                        className={`mt-2 ${inputCls} resize-none`}
                        placeholder="Sizes, quantities, service conditions — the more detail, the faster the quote."
                      />
                    </div>
                  </div>
                  <Magnetic className="mt-8">
                    <button
                      type="submit"
                      data-testid="contact-form-submit-btn"
                      className="inline-flex items-center gap-3 bg-sew px-10 py-4 font-mono text-[11px] font-semibold tracking-widest2 text-white transition-colors hover:bg-sew-dark"
                    >
                      REQUEST A QUOTE <Send size={14} />
                    </button>
                  </Magnetic>
                </form>
              )}
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}><OfficeCard office={INDIA} code="in" /></Reveal>
              <Reveal delay={0.18}>
                <div className="border border-line bg-ink p-7">
                  <p className="font-mono text-[10px] tracking-widest2 text-sew">DIRECT LINE</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-zinc-400">
                    Prefer to talk? Call the India office directly —
                  </p>
                  <a href={INDIA.phoneHref} data-testid="contact-direct-phone" className="mt-3 block font-display text-2xl tracking-tight text-white transition-colors hover:text-sew">
                    {INDIA.phone}
                  </a>
                  <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-widest2 text-zinc-600">
                    ISO 9001:2008 CERTIFIED
                  </p>
                  <a
                    href="/assets/SEW-Brochure.pdf"
                    download="SEW-Brochure-Shiva-Engineering-Works.pdf"
                    data-testid="contact-download-brochure"
                    className="mt-4 inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[10px] tracking-widest2 text-zinc-400 transition-all hover:border-sew hover:text-sew"
                  >
                    DOWNLOAD BROCHURE (PDF)
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
