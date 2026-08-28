const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure CheckCircle2 and Sparkles are imported
if (!code.includes('CheckCircle2,')) {
  code = code.replace(
    "import { Bot, Star, ArrowRight",
    "import { CheckCircle2, Sparkles, Bot, Star, ArrowRight"
  );
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Fixed icon imports");
