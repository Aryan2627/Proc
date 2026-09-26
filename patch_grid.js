const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aryan', '.gemini', 'antigravity', 'scratch', 'Proc', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const currentGrid = `<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>`;

const coolGrid = `{/* Cool Blueprint Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_60%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_60%,transparent_100%)]"></div>`;

content = content.replace(currentGrid, coolGrid);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Grid updated.');
