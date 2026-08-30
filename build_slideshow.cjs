const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add currentSlide state and interval
if (!code.includes("const [currentSlide, setCurrentSlide] = useState(0);")) {
    const stateHook = `  const [savings, setSavings] = useState(1400000);\n  const [currentSlide, setCurrentSlide] = useState(0);`;
    code = code.replace(`  const [savings, setSavings] = useState(1400000);`, stateHook);
    
    const intervalHook = `  useEffect(() => {
    const timerInterval = setInterval(() => setMockTimer(p => (p > 0 ? p - 1 : 252)), 1000);
    const savingsInterval = setInterval(() => setSavings(p => p + Math.floor(Math.random() * 2500) + 100), 2000);
    const slideInterval = setInterval(() => setCurrentSlide(s => (s + 1) % 4), 4000);
    return () => { clearInterval(timerInterval); clearInterval(savingsInterval); clearInterval(slideInterval); };
  }, []);`;
    
    // Replace the old useEffect
    const oldEffect = `  useEffect(() => {
    const timerInterval = setInterval(() => setMockTimer(p => (p > 0 ? p - 1 : 252)), 1000);
    const savingsInterval = setInterval(() => setSavings(p => p + Math.floor(Math.random() * 2500) + 100), 2000);
    return () => { clearInterval(timerInterval); clearInterval(savingsInterval); };
  }, []);`;
    code = code.replace(oldEffect, intervalHook);
}

// 2. Replace iframe with Image Slideshow
const regex = /<div className="relative aspect-video rounded-3xl overflow-hidden border border-white\/10 shadow-\[0_0_100px_rgba\(37,99,235,0\.2\)\] bg-\[#050505\] group">[\s\S]*?<\/div>\s*<\/motion\.div>/;

const replacement = `<div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.2)] bg-[#050505] group">
            
            {/* Cinematic Image Slideshow (Pseudo-Video) */}
            <div className="w-full h-full relative">
              {[1, 2, 3, 4].map((num, idx) => (
                <div 
                  key={num}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ 
                    opacity: currentSlide === idx ? 1 : 0,
                    zIndex: currentSlide === idx ? 10 : 0
                  }}
                >
                  <img 
                    src={\`/slide\${num}.jpg\`}
                    alt={\`ProcGen AI Demo Scene \${num}\`}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] ease-linear"
                    style={{ transform: currentSlide === idx ? 'scale(1.05)' : 'scale(1)' }}
                  />
                </div>
              ))}
              
              {/* Play Button Overlay (For visual effect) */}
              <div className="absolute inset-0 bg-black/20 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            
            {/* Note for the User */}
            <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg pointer-events-none">
              <p className="text-xs text-zinc-300 font-mono"><span className="text-emerald-400">► Note:</span> Using cinematic AI mockups as an animated presentation loop.</p>
            </div>
          </div>
        </motion.div>`;

if (code.match(regex)) {
    code = code.replace(regex, replacement);
    fs.writeFileSync('src/app/page.tsx', code, 'utf8');
    console.log("Successfully replaced iframe with AI cinematic slideshow.");
} else {
    console.log("Regex didn't match.");
}
