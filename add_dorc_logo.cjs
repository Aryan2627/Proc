const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the Dorc AI Agent card and replace the Sparkles icon with the dorc-logo image.
const oldIcon = /<Sparkles className="text-white drop-shadow-md" size=\{40\} \/>/;
const newIcon = '<img src="/dorc-logo.png" alt="Dorc AI" className="w-14 h-14 object-contain filter brightness-0 invert drop-shadow-md" />';

page = page.replace(oldIcon, newIcon);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Replaced Sparkles with dorc-logo.png.');
