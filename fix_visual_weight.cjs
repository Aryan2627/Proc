const fs = require('fs');

let page = fs.readFileSync('src/app/ai-lab/page.tsx', 'utf8');

// 1. Expand the container to cover the page beautifully
page = page.replace(
  /<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">/,
  '<div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">'
);

// 2. Change the text to be massive and wrap correctly (putting "Supply Chain" on the second line)
page = page.replace(
  /className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-\[1\.1\] text-white"\s*>\s*Inventing the <br className="hidden md:block" \/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous<\/span> Supply Chain\./,
  `className="text-6xl md:text-[88px] font-black tracking-tighter mb-8 leading-[1.05] text-white w-full text-center"
          >
            Inventing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous</span><br className="hidden md:block" /> Supply Chain.`
);

fs.writeFileSync('src/app/ai-lab/page.tsx', page);
console.log('Fixed line wrapping and sizing.');
