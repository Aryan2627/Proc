const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

code = code.replace(
  '<li><a href="https://app.procgen.in/login" className="hover:text-violet-400 transition-colors">Client Login</a></li>',
  ''
);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Removed client login from footer");
