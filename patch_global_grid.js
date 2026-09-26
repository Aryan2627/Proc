const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aryan', '.gemini', 'antigravity', 'scratch', 'Proc', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add the global grid and make the main wrapper transparent
content = content.replace(
  /<div className="min-h-screen bg-\[\#F9F9FC\] font-sans text-slate-900 selection:bg-blue-500\/30 overflow-hidden relative font-inter">/g,
  `<div className="min-h-screen bg-transparent font-sans text-slate-900 selection:bg-blue-500/30 overflow-hidden relative font-inter">
        {/* GLOBAL LIGHT GRID BACKGROUND */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#F9F9FC] bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>`
);

// 2. Make light sections transparent so the grid shows through
content = content.replace(/<section className="py-12 bg-white border-b border-slate-200 overflow-hidden">/g, '<section className="py-12 bg-transparent border-b border-slate-200 overflow-hidden">');
content = content.replace(/<section id="dorc-features" className="py-24 bg-white border-b border-slate-200">/g, '<section id="dorc-features" className="py-24 bg-transparent border-b border-slate-200">');
content = content.replace(/<section id="features" className="py-24 bg-\[\#F9F9FC\]">/g, '<section id="features" className="py-24 bg-transparent">');
content = content.replace(/<section className="py-24 bg-\[\#F9F9FC\]">/g, '<section className="py-24 bg-transparent">');
content = content.replace(/<section className="py-24 bg-white border-t border-slate-200" id="faq">/g, '<section className="py-24 bg-transparent border-t border-slate-200" id="faq">');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added global light grid overlay to background');
