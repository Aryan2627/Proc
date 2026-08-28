const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace Rupee pricing with Dollar pricing
code = code.replace('>₹14k</span>', '>$199</span>');
code = code.replace('>₹39k</span>', '>$499</span>');

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Updated pricing to dollars");
