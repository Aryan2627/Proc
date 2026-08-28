const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Ensure useMotionValue is imported
if (!code.includes('useMotionValue')) {
  code = code.replace(
    "import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';",
    "import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';"
  );
}

// 2. Insert Parallax Hooks
const parallaxHooks = `
  // Parallax Depth Hooks
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  const parallaxGridX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const parallaxGridY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const parallaxOrbsX = useTransform(smoothX, [-1, 1], [-60, 60]);
  const parallaxOrbsY = useTransform(smoothY, [-1, 1], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
`;

if (!code.includes('parallaxGridX')) {
  const insertPoint = "const formatSavings =";
  code = code.replace(insertPoint, parallaxHooks + '\n  ' + insertPoint);
}

// 3. Replace the Background JSX
const oldBgStr = `{/* --- ADVANCED ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        {/* Floating Neon Orbs */}
        <motion.div 
          animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-violet-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -150, 50, 0], y: [0, 150, -50, 0], scale: [1, 1.3, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, 50, -150, 0], y: [0, 50, -150, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px]"
        />
      </div>`;

const newBgStr = `{/* --- ADVANCED ANIMATED BACKGROUND WITH 3D PARALLAX --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Parallax Grid Layer (Moves Slightly) */}
        <motion.div style={{ x: parallaxGridX, y: parallaxGridY }} className="absolute inset-[-5%] w-[110%] h-[110%]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        </motion.div>
        
        {/* Parallax Orbs Layer (Moves More for Depth) */}
        <motion.div style={{ x: parallaxOrbsX, y: parallaxOrbsY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          {/* Floating Neon Orbs */}
          <motion.div 
            animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.8, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-violet-600/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ x: [0, -150, 50, 0], y: [0, 150, -50, 0], scale: [1, 1.3, 0.9, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[0%] right-[-5%] w-[45%] h-[45%] bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ x: [0, 50, -150, 0], y: [0, 50, -150, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px]"
          />
        </motion.div>
      </div>`;

code = code.replace(oldBgStr, newBgStr);
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Applied 3D Parallax Depth");
