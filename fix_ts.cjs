const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(
  'const fadeIn = {',
  'const fadeIn: any = {'
);
code = code.replace(
  'const staggerContainer = {',
  'const staggerContainer: any = {'
);
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Fixed TS errors");
