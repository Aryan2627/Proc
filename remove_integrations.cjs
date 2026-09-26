const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Regex to remove the entire Platform Integrations section
const integrationsSectionRegex = /\{\/\* --- PLATFORM INTEGRATIONS \(UNIFY SYSTEMS\) --- \*\/\}[\s\S]*?(?=\{\/\* --- SECURITY & CERTIFICATION SECTION --- \*\/\}|<\/main>)/;

page = page.replace(integrationsSectionRegex, '');

fs.writeFileSync('src/app/page.tsx', page);
console.log('Removed Integrations section');
