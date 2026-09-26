const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

page = page.replace(
  /<img src="\/dorc-logo\.png" alt="Dorc AI" className="w-8 h-8 object-contain" \/>\s*<span className="font-bold text-xl tracking-tight text-slate-900">ProcGen<\/span>/,
  `<img src="/logo_transparent.png" alt="ProcGen Logo" className="w-8 h-8 object-contain scale-110" />
                <span className="font-bold text-2xl tracking-tight text-[#0B101E] ml-1">ProcGen</span>`
);

page = page.replace(
  /<img src="\/dorc-logo\.png" alt="Dorc AI" className="w-8 h-8 object-contain filter brightness-0 invert" \/>\s*<span className="font-bold text-xl tracking-tight text-white">ProcGen<\/span>/,
  `<img src="/logo_transparent.png" alt="ProcGen Logo" className="w-8 h-8 object-contain filter brightness-0 invert scale-110" />
                  <span className="font-bold text-2xl tracking-tight text-white ml-1">ProcGen</span>`
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Main page branding updated.');
