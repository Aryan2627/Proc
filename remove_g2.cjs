const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Regex to remove the entire G2 Social Proof section
const g2SectionRegex = /\{\/\* --- G2 \/ SOCIAL PROOF SECTION \(ATLAN STYLE\) --- \*\/\}[\s\S]*?<\/motion\.div>\s*<\/section>/;

page = page.replace(g2SectionRegex, '');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Removed G2 section');
