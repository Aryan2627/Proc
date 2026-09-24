const fs = require('fs');

let page = fs.readFileSync('src/app/ai-lab/page.tsx', 'utf8');

// 1. Expand the container width so the text can stretch
page = page.replace(
  /<div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">/,
  '<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">'
);

// 2. Add an explicit line break to force exactly 2 lines
page = page.replace(
  /Inventing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous<\/span> Supply Chain\./,
  'Inventing the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous</span> Supply Chain.'
);

fs.writeFileSync('src/app/ai-lab/page.tsx', page);
console.log('Fixed line wrapping for AI Lab hero text.');
