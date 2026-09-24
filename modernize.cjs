const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const newIntegrationSection = `
      {/* --- PLATFORM INTEGRATIONS (UNIFY SYSTEMS) - MODERNIZED --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Aesthetic Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
              Unify business systems in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x">Enterprise Data Graph</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Procurement doesn't live in a silo. Dorc AI natively hooks into your ERPs, active directories, and communication tools to build a living, breathing graph of your supply chain.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center mt-10">
            
            {/* Center Node / Hub */}
            <motion.div 
              animate={{ boxShadow: ['0px 0px 0px rgba(37,99,235,0)', '0px 0px 40px rgba(37,99,235,0.4)', '0px 0px 0px rgba(37,99,235,0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute z-30 w-32 h-32 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl border border-slate-700 backdrop-blur-md"
            >
              <img src="/logo_transparent.png" alt="Dorc" className="w-16 h-16 filter brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </motion.div>
            
            {/* Pulsing Radar Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-blue-200 rounded-full animate-[ping_3s_linear_infinite] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-100 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-slate-50 rounded-full border-dashed"></div>

            {/* Connecting Lines (SVG) - Perfectly aligned via percentages */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-40">
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* Orbiting Satellites with floating animation */}
            {/* Top Left */}
            <motion.div 
              animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[5%] md:left-[10%] z-20 bg-white/80 backdrop-blur-xl border border-white p-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                <Database className="text-blue-600" size={22} />
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">SAP Ariba</span>
            </motion.div>

            {/* Top Right */}
            <motion.div 
              animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] right-[5%] md:right-[10%] z-20 bg-white/80 backdrop-blur-xl border border-white p-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                <Globe className="text-emerald-600" size={22} />
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">Oracle NetSuite</span>
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] left-[5%] md:left-[10%] z-20 bg-white/80 backdrop-blur-xl border border-white p-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                <Lock className="text-purple-600" size={22} />
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">Microsoft AD</span>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[15%] right-[5%] md:right-[10%] z-20 bg-white/80 backdrop-blur-xl border border-white p-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
                <MessageCircle className="text-cyan-600" size={22} />
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">Slack / Teams</span>
            </motion.div>
          </div>
        </div>
      </section>
`;

page = page.replace(
  /\{\/\* --- PLATFORM INTEGRATIONS \(UNIFY SYSTEMS\) ---\*\/\}[\s\S]*?<\/section>/,
  newIntegrationSection
);

// Add custom animation for gradient-x if not exists, but we can also just use the static background clip text if Tailwind doesn't have it.
// To be safe and purely visual, we'll keep the classes.

fs.writeFileSync('src/app/page.tsx', page);
console.log('Modernized Graph Section.');
