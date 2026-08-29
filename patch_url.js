const fs = require('fs');
let code = fs.readFileSync('src/app/vendor-register/page.tsx', 'utf8');

code = code.replace(
  `https://cpanel.procgen.in/api/vendors/register`,
  `https://cpanel-swart.vercel.app/api/vendors/register`
);

fs.writeFileSync('src/app/vendor-register/page.tsx', code, 'utf8');
console.log("Success");
