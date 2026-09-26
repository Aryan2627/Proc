const fs = require('fs');
const path = 'C:/Users/aryan/.gemini/antigravity/scratch/Proc/src/app/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Make animations faster
code = code.replace(/duration: 0\.8/g, 'duration: 0.4');
code = code.replace(/duration: 0\.7/g, 'duration: 0.35');
code = code.replace(/duration: 0\.6/g, 'duration: 0.3');
code = code.replace(/duration: 0\.5/g, 'duration: 0.25');
code = code.replace(/duration: 1,/g, 'duration: 0.5,');
code = code.replace(/duration: 1\.2/g, 'duration: 0.6');
code = code.replace(/duration: 2\.5/g, 'duration: 1.2');
code = code.replace(/duration: 4,/g, 'duration: 2,');
code = code.replace(/duration: 20,/g, 'duration: 10,');
code = code.replace(/duration: 15,/g, 'duration: 7,');
code = code.replace(/Math\.random\(\) \* 4 \+ 2/g, 'Math.random() * 2 + 1'); // Meteors twice as fast

// 2. Add loading lazy to all images to make the page load faster
code = code.replace(/<img /g, '<img loading="lazy" decoding="async" ');

fs.writeFileSync(path, code, 'utf8');
console.log('Site optimized for maximum speed.');
