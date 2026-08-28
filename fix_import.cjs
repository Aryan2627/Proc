const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix the bad import
code = code.replace(
  "import Link from 'next/link';, { useState } from 'react';",
  "import { useState } from 'react';"
);

// We still need to make sure Link is imported, so let's just add it at the top manually if not there
if (!code.includes("import Link from 'next/link';")) {
  code = "import Link from 'next/link';\n" + code;
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Fixed imports");
