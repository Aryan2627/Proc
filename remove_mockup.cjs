const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Regex to remove the entire floating app preview section right up to the closing </header>
page = page.replace(
  /\{\/\* --- FLOATING APP PREVIEW --- \*\/\}[\s\S]*?<\/motion\.div>\s*<\/header>/,
  '</header>'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Removed the floating dashboard mockup from the hero section.');
