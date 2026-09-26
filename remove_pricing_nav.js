const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aryan', '.gemini', 'antigravity', 'scratch', 'Proc', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the navbar link for pricing
content = content.replace(
  /<a href="#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing<\/a>\s*/g,
  ''
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Removed Pricing navbar link');
