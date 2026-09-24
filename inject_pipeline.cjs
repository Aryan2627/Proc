const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Ensure icons are imported
const requiredIcons = ['Globe', 'TerminalSquare', 'Network', 'Activity', 'Sparkles'];
let importMatch = page.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);

if (importMatch) {
  let existingIcons = importMatch[1].split(',').map(i => i.trim());
  let needed = requiredIcons.filter(i => !existingIcons.includes(i));
  if (needed.length > 0) {
    let newImport = `import { ${existingIcons.join(', ')}, ${needed.join(', ')} } from 'lucide-react';`;
    page = page.replace(importMatch[0], newImport);
  }
}

// 2. The new Advanced UI/UX Pipeline Section
const pipelineSection = `
      {/* --- PIPELINE MANIFESTO SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-[#02040A] text-white border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.05] mb-8">
              Context doesn't come from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">prompt.</span>
              <br />
              It comes from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">pipeline.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
              Giving an LLM raw access to your ERP is a recipe for hallucinations. Real autonomous procurement requires a deterministic pipeline that structures your tribal knowledge before the AI ever sees it.
            </p>
          </motion.div>

          {/* Advanced Animated Pipeline UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl"
          >
             {/* Left: Raw Data Sources */}
             <div className="w-full lg:w-1/4 flex flex-col gap-5 relative z-10">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]"><Globe size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">SAP Ariba</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Unstructured POs</div>
                   </div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]"><TerminalSquare size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">Legacy ERP</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Raw Inventory</div>
                   </div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"><Network size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">SharePoint</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Messy PDFs</div>
                   </div>
                </div>
             </div>

             {/* Middle: The Animated Context Pipeline */}
             <div className="flex-1 w-full flex flex-col items-center justify-center relative py-16 lg:py-0 min-h-[200px]">
                {/* Horizontal flow line for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,1)]"
                  />
                </div>
                {/* Vertical flow line for mobile */}
                <div className="lg:hidden absolute top-0 left-1/2 h-full w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ y: ["-100%", "200%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="h-1/2 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,1)]"
                  />
                </div>

                <div className="relative z-10 bg-[#0A0F1C] border border-cyan-500/40 p-8 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col items-center transform hover:scale-105 transition-transform duration-500">
                   <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/50 relative">
                      <div className="absolute inset-0 bg-cyan-400/20 animate-ping rounded-2xl"></div>
                      <Activity className="text-cyan-300 relative z-10" size={36} />
                   </div>
                   <div className="text-xl font-black text-white tracking-widest uppercase text-center">ProcGen Context Layer</div>
                   <div className="text-sm text-cyan-400 mt-3 font-mono bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-900/50 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                     Resolving Entity Graph...
                   </div>
                </div>
             </div>

             {/* Right: The AI Agent */}
             <div className="w-full lg:w-1/4 relative z-10">
                <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-500/30 p-8 rounded-3xl shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col items-center text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] group-hover:bg-indigo-500/40 transition-colors"></div>
                   
                   <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
                      <Sparkles className="text-white drop-shadow-md" size={40} />
                   </div>
                   <div className="text-2xl font-black text-white mb-3 tracking-tight">Dorc AI Agent</div>
                   <div className="text-sm text-indigo-200 leading-relaxed font-medium">
                     Receives perfectly structured, deterministic prompts. Negotiates with 100% accuracy.
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
`;

// Insert the new section right before the Features section
page = page.replace(
  /<section id="features" className="py-24 bg-\[\#F9F9FC\]">/,
  `${pipelineSection}\n      <section id="features" className="py-24 bg-[#F9F9FC]">`
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected Pipeline Manifesto Section successfully.');
