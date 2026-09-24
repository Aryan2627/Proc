const fs = require('fs');
let code = fs.readFileSync('src/app/know/enterprise-context-layer/page.tsx', 'utf8');

code = code.replace(/import \{ ArrowLeft, BookOpen, Share2/g, 'import { ArrowLeft, ArrowRight, BookOpen, Share2');

fs.writeFileSync('src/app/know/enterprise-context-layer/page.tsx', code);
console.log("Fixed ArrowRight import.");
