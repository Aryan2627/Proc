const fs = require('fs');
let code = fs.readFileSync('src/app/ai-lab/war-room/page.tsx', 'utf8');
code = code.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/app/ai-lab/war-room/page.tsx', code);
console.log('Fixed backslashes');
