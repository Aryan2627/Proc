const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix broken bg-clip-text
page = page.replace(/text-transparent bg-clip-text bg-blue-600/g, 'text-blue-600');

// Fix hero button and modal button hover obscuring text
page = page.replace(/<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"><\/div>/g, '');
page = page.replace(/shadow-\[0_0_30px_rgba\(255,255,255,0\.2\)\]/g, 'shadow-md');
page = page.replace(/bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all text-lg overflow-hidden/g, 'bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all text-lg shadow-md');

// The "ProcGen 2.0 is Live" badge
page = page.replace(/shadow-\[0_0_20px_rgba\(255,255,255,0\.05\)\]/g, 'shadow-sm');

// Dynamic dashboard mockup
page = page.replace(/bg-\[\#030608\]\/90/g, 'bg-white');
page = page.replace(/bg-\[\#060810\]\/90/g, 'bg-white');
page = page.replace(/bg-\[\#050505\]\/90/g, 'bg-white');
page = page.replace(/shadow-\[0_30px_80px_rgba\(0,0,0,0\.8\)\]/g, 'shadow-2xl');

// Remove remaining strange ambient light layers from the mockup
page = page.replace(/<div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-100 to-blue-100 opacity-50 blur-\[40px\]" \/>/g, '');
page = page.replace(/<div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-100 rounded-\[2rem\]" \/>/g, '');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed styling anomalies.');
