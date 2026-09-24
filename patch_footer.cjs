const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  `                <li><Link href="/vendor-register" className="hover:text-violet-400 transition-colors">Vendor Registration</Link></li>`,
  `                <li><a href="#cortex" className="hover:text-violet-400 transition-colors">Cortex AI</a></li>
                <li><Link href="/vendor-register" className="hover:text-violet-400 transition-colors">Vendor Registration</Link></li>`
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Footer updated');
