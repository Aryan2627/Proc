const fs = require('fs');

function injectLenis(filePath) {
  let page = fs.readFileSync(filePath, 'utf8');

  // Check if Lenis is already imported
  if (page.includes("import Lenis")) {
    console.log(`Lenis already in ${filePath}`);
    return;
  }

  // 1. Add the import
  page = page.replace(
    /import React, \{ useState, useEffect, useRef \} from 'react';/,
    "import React, { useState, useEffect, useRef } from 'react';\nimport Lenis from 'lenis';"
  );

  // 2. Add the Lenis useEffect block right inside the component
  const lenisLogic = `
  // Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
`;

  // We find the first useEffect and inject the lenis logic before it
  page = page.replace(
    /  const hasAutoOpened = useRef\(false\);/,
    lenisLogic.trim() + '\n\n  const hasAutoOpened = useRef(false);'
  );

  fs.writeFileSync(filePath, page);
  console.log(`Injected Lenis into ${filePath}`);
}

injectLenis('src/app/page.tsx');
