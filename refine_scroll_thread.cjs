const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The old block to find:
const oldThreadStart = '{/* --- SCROLL PROGRESS THREAD --- */}';
const oldThreadEnd = '      {/* --- ADVANCED ANIMATED BACKGROUND --- */}';

const startIndex = code.indexOf(oldThreadStart);
const endIndex = code.indexOf(oldThreadEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newThread = `{/* --- SUBTLE BACKGROUND SCROLL THREAD --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 bottom-0 w-[1px] bg-white/[0.02] z-0 pointer-events-none hidden md:block">
        <motion.div 
          className="w-[1px] absolute left-0 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent blur-[1px]"
          style={{ 
             height: "30vh",
             top: useTransform(scrollYProgress, [0, 1], ["-30%", "100%"]) 
          }}
        />
      </div>\n`;

  code = code.substring(0, startIndex) + newThread + code.substring(endIndex);
  fs.writeFileSync('src/app/page.tsx', code, 'utf8');
  console.log("Replaced with subtle background thread");
} else {
  console.log("Could not find the old thread block");
}
