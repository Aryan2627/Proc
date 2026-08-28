const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove the added Link import
code = code.replace("import Link from 'next/link';\n", "");

// Add it correctly after "use client";
code = code.replace(
  '"use client";',
  '"use client";\nimport Link from "next/link";'
);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Fixed use client position");
