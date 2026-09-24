const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix Cortex -> Dorc in pricing
page = page.replace(/'Cortex AI Swarm \(Web\/Mobile\)'/g, "'Dorc AI Swarm (Web/Mobile)'");
page = page.replace(/'Cortex Desktop App'/g, "'Dorc Desktop App'");

// Fix Pricing Values
page = page.replace(/₹1999/g, '₹999');
page = page.replace(/₹14,999/g, '₹4,999'); // Essentials
page = page.replace(/₹114,999/g, '₹14,999'); // Growth
page = page.replace(/₹139,999\+/g, '₹39,999+'); // Enterprise

// Make the Growth card button beautifully styled with the blue theme
page = page.replace(/text-white bg-slate-900 hover:scale-105 transition-transform shadow-md text-sm mt-auto/g, 'text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all shadow-md text-sm mt-auto border border-blue-700');

// Add a slight blue border to the Most Popular card to make it pop and occupy space properly
page = page.replace(/className="bg-white border border-slate-200 rounded-\[2rem\] p-6 shadow-lg/g, 'className="bg-white border-2 border-blue-500 rounded-[2rem] p-6 shadow-xl');

// Optional: Give Enterprise card an outline to show it's premium
page = page.replace(/{Everything in Growth', 'Contract Analyzer \(AI\)', 'Supplier Risk Scoring \(AI\)', '2-Way ERP Sync \(SAP\/Oracle\)', 'Dorc Desktop App'}/g, "{'Everything in Growth', 'Contract Analyzer (AI)', 'Supplier Risk Scoring (AI)', '2-Way ERP Sync (SAP/Oracle)', 'Dorc Desktop App'}");

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed pricing layout, typography, and values.');
