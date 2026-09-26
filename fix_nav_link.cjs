const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(
  /<a href="#" className="hover:text-blue-600 transition-colors py-5">Customers<\/a>/,
  '<a href="/p/customers" className="hover:text-blue-600 transition-colors py-5">Customers</a>'
);
fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed Navbar Customers link');
