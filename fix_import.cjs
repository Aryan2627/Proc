const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!page.includes('FileText,')) {
    page = page.replace(
        /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]lucide-react['"]/,
        (match, group) => {
            return \`import { \${group.trim()}, FileText } from 'lucide-react'\`;
        }
    );
}

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed FileText import.');
