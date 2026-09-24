const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(/className="animate-\\[dash_3s_linear_infinite\\]"/g, 'className="animate-pulse"');
fs.writeFileSync('src/app/page.tsx', page);
