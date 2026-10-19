import { Reveal } from '../components/ui-bits';

const BLOCKS = [
  {
    code: '01',
    title: 'OUR FOUNDATION',
    text: 'Shiva Engineering Works is a business entity based out of Faridabad (Delhi/NCR), established in 2009 — engaged in the production & distribution of a diverse range of oilfield equipment and other industrial products.',
  },
  {
    code: '02',
    title: 'OUR INFRASTRUCTURE',
    text: 'A futuristic infrastructure in Faridabad spread over a vast area, comprising several units — Manufacturing Unit, Warehouse Unit and Quality Department.',
  },
  {
    code: '03',
    title: 'QUALITY',
    text: 'Maintaining quality is the foremost priority. Highest grade raw material is procured from reliable manufacturers, and every product goes through several quality tests.',
  },
  {
    code: '04',
    title: 'SUPPLY CAPABILITY',
    text: 'A well-established supply chain system assures on-time deliveries. Dealing with transparency and ethical practices has built cordial relations with numerous clients.',
  },
];

export default function AboutBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2" data-testid="about-blocks">
      {BLOCKS.map((b, i) => (
        <Reveal
          key={b.code}
          delay={i * 0.07}
          className={`group relative border-linelight border-b border-r p-8 min-[600px]:p-10 lg:p-12 ${
            i < 2 ? 'md:border-t' : ''
          } ${i % 2 === 0 ? 'md:border-l' : ''} ${i === 0 ? 'md:border-t-0' : ''}`}
        >
          <span className="absolute left-0 top-0 h-0 w-0.5 bg-sew transition-all duration-500 group-hover:h-full" />
          <span className="font-mono text-[11px] tracking-widest2 text-sew">{b.code}</span>
          <h3 className="mt-4 font-display text-xl tracking-tight text-ink sm:text-2xl">{b.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">{b.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
