const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\/\* Central Node \*\/\}[\s\S]*?<Sparkles className="text-white" size=\{24\} \/>/;

const replacement = `{/* Central Node */}
                 <div className="absolute w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] z-20">
                    <img src="/dorc-logo.png" alt="Dorc AI" className="w-8 h-8 object-contain filter brightness-0 invert drop-shadow-sm" />`;

page = page.replace(regex, replacement);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Replaced Sparkles with Dorc Logo in Swarm Card');
