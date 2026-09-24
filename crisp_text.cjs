const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the H2 and P in the manifesto section to be crisp and fix line breaks
const oldTextRegex = /<h2 className="text-4xl md:text-6xl lg:text-\[72px\] font-black tracking-tighter leading-\[1\.05\] mb-8 text-white">[\s\S]*?<\/p>/;

const crispText = `<h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-white max-w-4xl mx-auto whitespace-nowrap">
              Context doesn't come from a <span className="text-slate-500">prompt.</span><br />
              It comes from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">pipeline.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              LLMs hallucinate on raw data. We structure your enterprise knowledge before the AI ever sees it.
            </p>`;

page = page.replace(oldTextRegex, crispText);

// Make the AI Agent card text crisper too
page = page.replace(
  /Receives perfectly structured, deterministic prompts\. Negotiates with 100% accuracy\./,
  'Receives structured context. Negotiates with 100% precision.'
);

// We need to ensure whitespace-nowrap doesn't break mobile. 
// "whitespace-nowrap" might be bad for mobile phones. Let's use it only on desktop or just let it naturally break but reduce font size.
// Actually, let's fix that string immediately.
page = page.replace(
  /max-w-4xl mx-auto whitespace-nowrap/,
  'max-w-4xl mx-auto'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Made the text crisp and fixed formatting.');
