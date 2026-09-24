const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add floating animation to the entire chat window
c = c.replace(
  `              <div className="relative bg-[#030608]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">`,
  `              <motion.div 
                animate={{ y: [0, -15, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformPerspective: 1200 }}
                className="relative bg-[#030608]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
              >`
);
// replace closing div specifically for the chat window
c = c.replace(
  `                </div>
              </div>
            </motion.div>

            {/* RIGHT: Features list */}`,
  `                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Features list */}`
);

// 2. Add an interactive typing effect to the input bar
c = c.replace(
  `                    <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-zinc-600 font-mono flex items-center gap-2">
                      <span className="text-violet-400">/</span> Type a command or ask anything...
                    </div>`,
  `                    <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-zinc-400 font-mono flex items-center gap-2 overflow-hidden relative">
                      <span className="text-violet-400">/</span>
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-1.5 h-3 bg-violet-400 ml-0.5 absolute left-[22px]"
                      />
                      <motion.span
                        animate={{ 
                          textShadow: ["0px 0px 0px rgba(139,92,246,0)", "0px 0px 8px rgba(139,92,246,0.5)", "0px 0px 0px rgba(139,92,246,0)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="ml-2 text-zinc-500"
                      >
                        Waiting for next command...
                      </motion.span>
                    </div>`
);

// 3. Make feature cards float infinitely
[
  [
    `                  className="group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default"`,
    `                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default relative overflow-hidden"`
  ]
].forEach(([from, to]) => {
    c = c.replace(from, to);
});

// 4. Add dynamic neural network SVG background to the Cortex section
const SVG_BACKGROUND = `
        {/* Dynamic Neural Network Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d946ef" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path 
              d="M-100,100 C 200,300 400,0 800,200 S 1200,100 1600,400" 
              fill="none" stroke="url(#lineGrad)" strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <motion.path 
              d="M-100,400 C 300,100 500,500 900,100 S 1300,600 1600,200" 
              fill="none" stroke="url(#lineGrad)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
            />
            {/* Animated Data Packets traveling along paths */}
            <motion.circle r="3" fill="#06b6d4" filter="drop-shadow(0 0 5px #06b6d4)">
              <animateMotion dur="6s" repeatCount="indefinite" path="M-100,100 C 200,300 400,0 800,200 S 1200,100 1600,400" />
            </motion.circle>
            <motion.circle r="3" fill="#d946ef" filter="drop-shadow(0 0 5px #d946ef)">
              <animateMotion dur="8s" repeatCount="indefinite" path="M-100,400 C 300,100 500,500 900,100 S 1300,600 1600,200" />
            </motion.circle>
          </svg>
        </div>
`;

c = c.replace(
  `        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />`,
  `        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />\n${SVG_BACKGROUND}`
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Cortex upgraded correctly');
