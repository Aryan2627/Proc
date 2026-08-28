const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const eventSection = `
      {/* --- EXCLUSIVE EVENT SECTION --- */}
      <section id="summit" className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative rounded-[2.5rem] p-1 overflow-hidden group shadow-[0_0_80px_rgba(139,92,246,0.2)] hover:shadow-[0_0_120px_rgba(139,92,246,0.4)] transition-shadow duration-700"
          >
            {/* Holographic Border Effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#8b5cf6_360deg)] opacity-50"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#d946ef_360deg)] opacity-50"
            />
            
            {/* Event Card Content */}
            <div className="relative bg-[#050505]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden border border-white/5">
              
              {/* Background ambient light inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Live Virtual Masterclass
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  The AI Sourcing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Revolution Summit '26</span>
                </h2>
                
                <p className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Join 5,000+ enterprise leaders to discover how dynamic reverse auctions are slashing raw material costs by up to 40%. 
                  <strong className="text-white font-bold block mt-2">Attendees receive $1,500 in onboarding credits and 3 months of the Professional Tier for free.</strong>
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="/vip" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center">
                    Claim Free VIP Pass
                  </Link>
                  <p className="text-sm font-semibold text-zinc-500">Only 142 spots remaining.</p>
                </div>
              </div>

              {/* Graphic / Ticket Stub side */}
              <div className="w-full md:w-auto relative z-10">
                <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-white/10 to-white/0 rounded-2xl border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md transform md:rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#050505] rounded-full border-r border-white/10"></div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#050505] rounded-full border-l border-white/10"></div>
                  
                  <div>
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Admit One</p>
                    <h3 className="text-2xl font-black text-white">VIP ALL-ACCESS</h3>
                  </div>
                  
                  <div className="border-t-2 border-dashed border-white/20 my-6"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Date</p>
                      <p className="text-white font-semibold">October 14th, 2026</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Speaker</p>
                      <p className="text-white font-semibold">Aryan, Founder @ ProcGen</p>
                    </div>
                  </div>
                  
                  {/* Fake Barcode */}
                  <div className="mt-8 flex gap-1 h-12 w-full opacity-50">
                    {[3,1,2,4,1,5,2,1,3,2,1,4,2,3,1,1,2,5,1].map((w, i) => (
                      <div key={i} className="bg-white h-full rounded-sm" style={{ width: \`\${w * 3}px\` }}></div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
`;

if (!code.includes('id="summit"')) {
  code = code.replace('{/* --- PRICING SECTION --- */}', eventSection + '\n      {/* --- PRICING SECTION --- */}');
  fs.writeFileSync('src/app/page.tsx', code, 'utf8');
  console.log("Restored Event section");
} else {
  console.log("Event section already exists!");
}
