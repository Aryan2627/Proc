const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

page = page.replace(
  /const fadeIn = \{[\s\S]*?ease: \[0\.22, 1, 0\.36, 1\] \} \}\n  \};/g,
  `const fadeIn: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };`
);

page = page.replace(
  /const staggerContainer = \{/g,
  'const staggerContainer: any = {'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed typescript typings in page.tsx');
