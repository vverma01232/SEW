export const NAV = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'CAPABILITIES', path: '/capabilities' },
  { label: 'CUSTOM DEVELOPMENT', path: '/custom-product-development' },
  { label: 'CONTACT', path: '/contact' },
];

export const assetUrl = (path) =>
  `${process.env.PUBLIC_URL || ''}/${path.replace(/^\/+/, '')}`;

export const INDIA = {
  company: 'Shiva Engineering Works',
  lines: ['Plot No. 65, Sector-24', 'Faridabad, Haryana', 'PIN: 121005, India'],
  website: 'shivaenggworks.com',
  url: 'https://shivaenggworks.com',
  email: 'sales@shivaenggworks.com',
  phone: '+91-9911-700-180',
  phoneHref: 'tel:+919911700180',
  mapUrl: 'https://share.google/g6xP0kIxtX9P1VTIg',
  coords: '28.4089° N / 77.3178° E',
};

export const MARQUEE_ITEMS = [
  'HAMMER UNIONS',
  'PLUG VALVES',
  'SWIVEL JOINTS',
  'CHOKE & KILL MANIFOLDS',
  'PUP JOINTS',
  'RING JOINT GASKETS',
  'SPOOLS & FLANGES',
  'CHECK VALVES',
  'INTEGRAL FITTINGS',
  'FORGED FITTINGS',
  'CHIKSAN LOOPS',
  'STUDDED BLOCKS',
];
