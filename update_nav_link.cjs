const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

page = page.replace(
  /<div className="flex items-center gap-1\.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">\s*Resources <ChevronDown size=\{14\} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" \/>\s*<\/div>/g,
  `<Link href="/know/enterprise-context-layer" className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Resources <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </Link>`
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Updated Resources link.');
