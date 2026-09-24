const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// The regex needs to be more flexible to catch the H2 block properly
const regex = /<h2 className="[^"]*font-black[^"]*">[\s\S]*?<\/p>/;

const newText = `<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] mb-6 text-white max-w-3xl mx-auto">
              Context doesn't come from a <span className="text-slate-400">prompt.</span> It comes from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">pipeline.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              LLMs hallucinate on raw data. We structure your enterprise knowledge before the AI ever sees it.
            </p>`;

if (regex.test(page)) {
  page = page.replace(regex, newText);
  fs.writeFileSync('src/app/page.tsx', page);
  console.log('Successfully replaced heading with smaller, non-bold, properly sized text.');
} else {
  console.log('Regex did not match! We need to inspect the exact string.');
}
