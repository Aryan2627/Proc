const fs = require('fs');

let page = fs.readFileSync('src/app/p/[slug]/page.tsx', 'utf8');

// Replace function signature
page = page.replace(
  /export default function GenericPage\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*\{\s*slug\s*:\s*string\s*\}\s*\}\)/,
  "export default async function GenericPage({ params }: { params: Promise<{ slug: string }> })"
);

// Replace param access
page = page.replace(
  /const\s*\{\s*slug\s*\}\s*=\s*params;/,
  "const { slug } = await params;"
);

// We should also replace the Dorc AI logo to match ProcGen branding since we recently updated the name.
page = page.replace(
  /src="\/dorc-logo\.png" alt="Dorc" className="w-8 h-8 filter brightness-0 invert"/,
  'src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 filter brightness-0 invert"'
);
page = page.replace(
  /<span className="font-bold text-xl tracking-tight text-white">Dorc AI<\/span>/,
  '<span className="font-bold text-xl tracking-tight text-white">ProcGen</span>'
);

fs.writeFileSync('src/app/p/[slug]/page.tsx', page);
console.log('Fixed Next 15 params promise and updated branding');
