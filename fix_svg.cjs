const fs = require('fs');

function fixSvg(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/stroke-linecap/g, 'strokeLinecap');
  content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
  content = content.replace(/class="lucide lucide-flask-conical"/g, 'className="lucide lucide-flask-conical"');
  fs.writeFileSync(filePath, content);
}

fixSvg('src/app/page.tsx');
fixSvg('src/app/know/enterprise-context-layer/page.tsx');
console.log('Fixed SVG props');
