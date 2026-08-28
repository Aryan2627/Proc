const fs = require('fs');
const files = ['src/app/globals.css', 'src/app/page.tsx', 'src/app/layout.tsx', 'tailwind.config.js'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.substring(1);
    fs.writeFileSync(f, content, 'utf8');
  }
});
console.log('Removed BOM from files.');
