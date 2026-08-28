const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/layout.tsx', 'src/app/vip/page.tsx'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.substring(1);
      fs.writeFileSync(f, content, 'utf8');
    }
  }
});
console.log('Removed BOM');
