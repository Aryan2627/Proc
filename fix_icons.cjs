const fs = require('fs');
let code = fs.readFileSync('src/app/know/enterprise-context-layer/page.tsx', 'utf8');

code = code.replace(/Twitter, Linkedin, /g, 'MessageCircle, ');
code = code.replace(/<Twitter size=\{16\} \/>/g, '<MessageCircle size={16} />');
code = code.replace(/<Linkedin size=\{16\} \/>/g, '<Globe size={16} />');

fs.writeFileSync('src/app/know/enterprise-context-layer/page.tsx', code);
console.log("Fixed lucide icons.");
