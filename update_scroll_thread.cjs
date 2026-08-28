const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Update Framer Motion Imports
if (!code.includes('useScroll')) {
  code = code.replace(
    "import { motion, AnimatePresence } from 'framer-motion';",
    "import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';"
  );
}

// 2. Insert hooks
const hooksStr = `  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });`;

if (!code.includes('useScroll()')) {
  const insertPoint = "const [mockTimer, setMockTimer] = useState";
  code = code.replace(insertPoint, hooksStr + '\n  ' + insertPoint);
}

// 3. Insert JSX
const jsxStr = `
      {/* --- SCROLL PROGRESS THREAD --- */}
      <div className="fixed top-0 left-2 md:left-8 bottom-0 w-[1px] bg-white/5 z-50 pointer-events-none hidden sm:block">
        <motion.div 
          className="w-[2px] absolute top-0 left-[-0.5px] bg-gradient-to-b from-transparent via-blue-400 to-cyan-300 origin-top shadow-[0_0_20px_#38bdf8]"
          style={{ scaleY, height: "100%" }}
        />
        {/* Glowing tip */}
        <motion.div 
          className="absolute left-[-2px] w-[5px] h-[30px] bg-cyan-300 rounded-full shadow-[0_0_20px_#22d3ee]"
          style={{ 
             top: useTransform(scaleY, (s) => \`calc(\${s * 100}% - 30px)\`),
             opacity: useTransform(scaleY, [0, 0.02], [0, 1]) 
          }}
        />
      </div>
`;

if (!code.includes('SCROLL PROGRESS THREAD')) {
  code = code.replace(
    '{/* --- ADVANCED ANIMATED BACKGROUND --- */}',
    jsxStr + '\n      {/* --- ADVANCED ANIMATED BACKGROUND --- */}'
  );
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Added scrolling thread");
