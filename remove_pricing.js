const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aryan', '.gemini', 'antigravity', 'scratch', 'Proc', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Use regex to remove the pricing section block
const newContent = content.replace(
  /\{\/\* --- PRICING SECTION --- \*\/\}[\s\S]*?(<\/motion\.div>\s*<\/section>)/,
  ''
);

// Also remove the pricing link in the footer
const finalContent = newContent.replace(
  /<li><a href="\/#pricing" className="hover:text-blue-400 transition-colors">Pricing<\/a><\/li>\s*/g,
  ''
);

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('Removed pricing section and footer link');
