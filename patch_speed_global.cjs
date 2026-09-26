const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      // Speed up animations
      code = code.replace(/duration: 0\.8/g, 'duration: 0.4');
      code = code.replace(/duration: 0\.7/g, 'duration: 0.35');
      code = code.replace(/duration: 0\.6/g, 'duration: 0.3');
      code = code.replace(/duration: 0\.5/g, 'duration: 0.25');
      code = code.replace(/duration: 1,/g, 'duration: 0.5,');
      code = code.replace(/duration: 1\.2/g, 'duration: 0.6');
      code = code.replace(/duration: 1\.5/g, 'duration: 0.75');
      code = code.replace(/duration: 2,/g, 'duration: 1,');
      code = code.replace(/duration: 2\.5/g, 'duration: 1.2');
      code = code.replace(/duration: 3,/g, 'duration: 1.5,');
      code = code.replace(/duration: 4,/g, 'duration: 2,');
      code = code.replace(/duration: 5,/g, 'duration: 2.5,');
      code = code.replace(/duration: 8,/g, 'duration: 4,');
      code = code.replace(/duration: 10,/g, 'duration: 5,');
      code = code.replace(/duration: 15,/g, 'duration: 7.5,');
      code = code.replace(/duration: 20,/g, 'duration: 10,');
      code = code.replace(/duration: 30,/g, 'duration: 15,');
      code = code.replace(/Math\.random\(\) \* 4 \+ 2/g, 'Math.random() * 2 + 1'); // Meteors twice as fast
      
      // Lazy load heavy images
      // Be careful not to replace already lazy-loaded images or Next.js Image components
      code = code.replace(/<img(?!.*?loading)/g, '<img loading="lazy" decoding="async" ');
      
      fs.writeFileSync(fullPath, code, 'utf8');
    }
  }
}

processDir('C:/Users/aryan/.gemini/antigravity/scratch/Proc/src/app');
console.log('Globally optimized site for maximum speed.');
