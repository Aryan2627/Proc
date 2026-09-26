const fs = require('fs');

// 1. Fix src/app/page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace footer brand name
page = page.replace(
  /<span className="font-bold text-xl tracking-tight text-white">Dorc AI<\/span>/,
  '<span className="font-bold text-xl tracking-tight text-white">ProcGen</span>'
);

// Replace company description in footer
page = page.replace(
  /Dorc AI is the enterprise AI agent platform for modern supply chains\./,
  'ProcGen is the enterprise AI agent platform for modern supply chains.'
);

// Replace copyright
page = page.replace(
  /&copy; 2026 Dorc AI Inc\./,
  '&copy; 2026 ProcGen Inc.'
);

fs.writeFileSync('src/app/page.tsx', page);


// 2. Fix src/app/p/[slug]/page.tsx
let pPage = fs.readFileSync('src/app/p/[slug]/page.tsx', 'utf8');

pPage = pPage.replace(
  /At Dorc AI, we are committed to providing/,
  'At ProcGen, we are committed to providing'
);

pPage = pPage.replace(
  /how Dorc AI is redefining/,
  'how ProcGen is redefining'
);

pPage = pPage.replace(
  /&copy; 2026 Dorc AI Inc\./,
  '&copy; 2026 ProcGen Inc.'
);

fs.writeFileSync('src/app/p/[slug]/page.tsx', pPage);

console.log('Fixed company naming');
