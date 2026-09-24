const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// We will locate the Pipeline Manifesto section and apply color changes to it.
const startIdx = page.indexOf('{/* --- PIPELINE MANIFESTO SECTION --- */}');
const endIdx = page.indexOf('<section id="features"');

if (startIdx !== -1 && endIdx !== -1) {
  let section = page.substring(startIdx, endIdx);

  // 1. Fix typography colors
  section = section.replace(
    /<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">prompt\.<\/span>/,
    '<span className="text-slate-500">prompt.</span>'
  );
  section = section.replace(
    /from-cyan-400 to-indigo-400/,
    'from-blue-400 to-blue-600'
  );

  // 2. Fix Left Data Nodes (remove rainbow, use slate/white)
  section = section.replace(/bg-orange-500\/20/g, 'bg-white/5');
  section = section.replace(/text-orange-400/g, 'text-slate-300');
  section = section.replace(/rgba\(249,115,22,0\.2\)/g, 'rgba(255,255,255,0.05)');

  section = section.replace(/bg-rose-500\/20/g, 'bg-white/5');
  section = section.replace(/text-rose-400/g, 'text-slate-300');
  section = section.replace(/rgba\(244,63,94,0\.2\)/g, 'rgba(255,255,255,0.05)');

  section = section.replace(/bg-blue-500\/20/g, 'bg-white/5');
  section = section.replace(/text-blue-400/g, 'text-slate-300');
  section = section.replace(/rgba\(59,130,246,0\.2\)/g, 'rgba(255,255,255,0.05)');

  // 3. Fix Middle Pipeline (remove cyan, use brand blue)
  section = section.replace(/cyan-500/g, 'blue-500');
  section = section.replace(/cyan-400/g, 'blue-400');
  section = section.replace(/cyan-300/g, 'blue-300');
  section = section.replace(/cyan-950/g, 'blue-950');
  section = section.replace(/cyan-900/g, 'blue-900');
  section = section.replace(/rgba\(34,211,238/g, 'rgba(59,130,246'); // cyan rgb -> blue rgb

  // 4. Fix Right AI Agent (remove flashy indigo, use brand blue)
  section = section.replace(/indigo-600\/20/g, 'blue-600/10');
  section = section.replace(/indigo-500\/30/g, 'blue-500/20');
  section = section.replace(/indigo-900\/30/g, 'blue-900/20');
  section = section.replace(/from-indigo-500 to-blue-500/g, 'from-blue-500 to-blue-700'); // wait, it was from-indigo-500 to-cyan-500
  section = section.replace(/from-indigo-500 to-cyan-500/g, 'from-blue-500 to-blue-700');
  section = section.replace(/bg-indigo-500\/20/g, 'bg-blue-500/10');
  section = section.replace(/bg-indigo-500\/40/g, 'bg-blue-500/20');
  section = section.replace(/text-indigo-200/g, 'text-blue-200');

  // Re-assemble
  page = page.substring(0, startIdx) + section + page.substring(endIdx);
  
  fs.writeFileSync('src/app/page.tsx', page);
  console.log('Successfully neutralized the colors in the Pipeline section to match the brand theme.');
} else {
  console.log('Could not find the section to replace.');
}
