const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The regex might not have matched if the import string is different. Let's just do a simple replace.
if (!code.includes(' Star,') && !code.includes(', Star ')) {
  code = code.replace(
    "import { ArrowRight",
    "import { Star, ArrowRight"
  );
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Fixed Star import");
