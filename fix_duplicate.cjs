const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the duplicate heading in the Bento box section (line 362)
const bentoRegex = /<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">\s*Context doesn't come from a prompt\. <br\/>It comes from a pipeline\.\s*<\/h2>/;

const newBentoHeading = `<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Features built for autonomous procurement.
            </h2>`;

page = page.replace(bentoRegex, newBentoHeading);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed duplicate bento heading.');
