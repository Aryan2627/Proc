const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

code = code.replace(/style=\{\{ mixBlendMode: 'screen', filter: 'contrast\(1\.2\)' \}\}/g, 'style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))" }}');
code = code.replace(/src="\/logo_cyan\.png"/g, 'src="/logo_transparent.png"');

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Patched Proc logo transparency.");
