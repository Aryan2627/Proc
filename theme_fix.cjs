const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// --- 1. SINGLE THEMED COLOR (Professional Blue) ---
const colorReplacements = [
  /violet-/g,
  /fuchsia-/g,
  /emerald-/g,
  /cyan-/g,
  /indigo-/g,
  /pink-/g,
  /purple-/g
];

colorReplacements.forEach(regex => {
  page = page.replace(regex, 'blue-');
});

// Fix any zinc to slate just in case
page = page.replace(/zinc-/g, 'slate-');

// Remove gradient text and replace with solid blue for a professional look
page = page.replace(/bg-clip-text text-transparent bg-gradient-to-r from-blue-\d00 to-blue-\d00/g, 'text-blue-600');
page = page.replace(/bg-gradient-to-r from-blue-\d00 via-blue-\d00 to-blue-\d00/g, 'bg-blue-600');
page = page.replace(/bg-gradient-to-r from-blue-\d00 to-blue-\d00/g, 'bg-blue-600');

// --- 2. LAYOUT & SPACE OPTIMIZATION ---
// Widen containers to use screen properly
page = page.replace(/max-w-5xl/g, 'max-w-7xl');
page = page.replace(/max-w-\[1000px\]/g, 'max-w-7xl');
page = page.replace(/max-w-4xl/g, 'max-w-5xl');

// Tighten excessive vertical paddings
page = page.replace(/py-40/g, 'py-24');
page = page.replace(/py-32/g, 'py-20');
page = page.replace(/pt-40/g, 'pt-28');
page = page.replace(/pt-32/g, 'pt-24');
page = page.replace(/pb-40/g, 'pb-24');
page = page.replace(/pb-32/g, 'pb-20');

// Tighten massive margins
page = page.replace(/mb-24/g, 'mb-16');
page = page.replace(/mb-20/g, 'mb-12');
page = page.replace(/mt-24/g, 'mt-16');
page = page.replace(/mt-20/g, 'mt-12');
page = page.replace(/gap-16/g, 'gap-10');
page = page.replace(/gap-12/g, 'gap-8');

// --- 3. PROFESSIONAL STYLING ---
// Remove heavy backdrop blurs on solid elements
page = page.replace(/backdrop-blur-2xl/g, 'backdrop-blur-md');
page = page.replace(/backdrop-blur-3xl/g, 'backdrop-blur-md');

// Ensure card borders are consistent
page = page.replace(/border-blue-500\/20/g, 'border-slate-200');
page = page.replace(/border-blue-500\/50/g, 'border-slate-200');
page = page.replace(/border-blue-500\/10/g, 'border-slate-200');

// Fix button styling (make sure primary CTA is solid blue instead of slate-900 to match the blue theme)
page = page.replace(/bg-slate-900 text-white hover:scale-105/g, 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md');
page = page.replace(/bg-slate-900 text-white hover:bg-slate-800/g, 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm');
// Top nav 'Connect with Sales'
page = page.replace(/text-slate-900 px-6 py-2.5 rounded-full overflow-hidden/g, 'bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-sm hover:bg-blue-700 transition-colors');
page = page.replace(/<span className="absolute inset-0 bg-white transition-transform group-hover:scale-105"><\/span>/g, '');
page = page.replace(/<span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-600 transition-opacity"><\/span>/g, '');

// Clean up weird span nesting in buttons that causes AI-generated look
page = page.replace(/<span className="relative z-10 flex items-center gap-2">Connect with Sales <ArrowRight size=\{18\} className="group-hover:translate-x-1 transition-transform" \/><\/span>/g, 'Connect with Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />');
page = page.replace(/<span className="relative z-10 flex items-center gap-2">Connect with Sales<\/span>/g, 'Connect with Sales');

// Fix weird pricing card borders and tags
page = page.replace(/border border-blue-600 rounded-\[2rem\] p-6 shadow-lg/g, 'border-2 border-blue-600 rounded-[2rem] p-6 shadow-xl');
page = page.replace(/bg-blue-600 text-slate-900 text-\[10px\]/g, 'bg-blue-600 text-white text-[10px]');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Applied single theme (Blue) and tightened layout.');
