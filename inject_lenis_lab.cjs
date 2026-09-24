const fs = require('fs');

function injectLenis(filePath) {
  let page = fs.readFileSync(filePath, 'utf8');

  if (page.includes("import Lenis")) {
    return;
  }

  page = page.replace(
    /import React, \{ useState, useEffect \} from 'react';/,
    "import React, { useState, useEffect } from 'react';\nimport Lenis from 'lenis';"
  );

  const lenisLogic = `
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
`;

  page = page.replace(
    /  useEffect\(\(\) => \{/,
    lenisLogic.trim() + '\n\n  useEffect(() => {'
  );

  fs.writeFileSync(filePath, page);
}

injectLenis('src/app/ai-lab/page.tsx');
console.log('Injected Lenis into ai-lab');
