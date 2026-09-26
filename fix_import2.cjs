const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

let match = page.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
if (match) {
    let currentImports = match[1];
    if (!currentImports.includes('FileText')) {
        let newImports = match[0].replace('}', ', FileText }');
        page = page.replace(match[0], newImports);
        fs.writeFileSync('src/app/page.tsx', page);
        console.log('Fixed import');
    }
}
