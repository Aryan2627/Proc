const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the entire grid layout for the features section to inject advanced UIs
const featuresRegex = /<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-\[minmax\(300px,auto\)\]">[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>\s*<\/section>/;

const advancedFeatures = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Bento Card 1: Large */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Live Vision OCR (Local)</h3>
                <p className="text-slate-600 leading-relaxed max-w-md font-medium">
                  Dorc AI natively analyzes your screen in real-time, extracting data from supplier PDFs and legacy ERPs without requiring backend integrations or risking data leaks.
                </p>
              </div>
              
              <div className="mt-8 relative h-64 w-full bg-slate-50 rounded-2xl border border-slate-100/80 overflow-hidden flex items-center justify-center p-6 shadow-inner group-hover:border-blue-100 transition-colors">
                 {/* Fake Document UI */}
                 <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-lg p-5 overflow-hidden">
                    {/* Animated Scanner Line */}
                    <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,1)] z-20"
                    />
                    
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-rose-400/20"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                           <div className="w-3 h-3 rounded-full bg-emerald-400/20"></div>
                        </div>
                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                    
                    <div className="flex gap-4 mb-6">
                       <div className="w-16 h-16 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center"><FileText className="text-slate-300" size={24}/></div>
                       <div className="flex-1 space-y-3 pt-1">
                          <div className="h-2.5 w-3/4 bg-slate-200 rounded"></div>
                          <div className="h-2.5 w-1/2 bg-slate-100 rounded"></div>
                          <div className="h-2.5 w-full bg-slate-100 rounded"></div>
                       </div>
                    </div>
                    
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-center justify-between">
                         <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Extracted Total</span>
                         <span className="text-sm font-mono text-blue-700 font-black">$1,452,000.00</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">AI Spend Control</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Track real-time budget variances and categorize tail-spend instantly.
                </p>
              </div>

              <div className="mt-8 relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-end gap-1.5 shadow-inner">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Q4 Variance</div>
                  <div className="flex items-end justify-between gap-2 h-full w-full">
                      {[40, 65, 45, 95, 55, 75].map((height, i) => (
                          <motion.div 
                              key={i} 
                              initial={{ height: 0 }} 
                              whileInView={{ height: \`\${height}%\` }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className={\`w-full rounded-t-md transition-colors \${i === 3 ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-200 group-hover:bg-slate-300'}\`}
                          />
                      ))}
                  </div>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Swords size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Negotiation Agent</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Autonomously sends counter-offers to rank bids and drive costs down.
                </p>
              </div>

              <div className="mt-8 relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col gap-3 overflow-hidden shadow-inner justify-end">
                  <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.2}} className="self-start bg-white border border-slate-200 p-3 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
                      <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.6}} className="self-end bg-purple-600 p-3 rounded-xl rounded-tr-sm shadow-md max-w-[85%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="h-2 w-20 bg-white/90 rounded mb-2 relative z-10"></div>
                      <div className="h-2 w-16 bg-purple-300 rounded relative z-10"></div>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:1.0}} className="self-start bg-white border border-slate-200 p-3 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
                       <div className="flex gap-1.5 items-center">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                         <div className="h-2 w-12 bg-slate-200 rounded"></div>
                       </div>
                  </motion.div>
              </div>
            </div>

            {/* Bento Card 4: Wide */}
            <div className="md:col-span-3 bg-[#0A0F1C] rounded-[2rem] border border-slate-800 p-10 flex flex-col md:flex-row justify-between items-center gap-10 hover:border-slate-700 hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-white group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/30 transition-colors duration-700"></div>
              
              <div className="relative z-10 md:w-1/2">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                  <Network size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Multi-Agent Swarm</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-lg">
                  Deploy over 14 specialized autonomous agents working in concert. From Supplier Discovery to Invoice 3-way Matching, scale your procurement ops 100x without adding headcount.
                </p>
                <div className="mt-8 flex gap-2 flex-wrap">
                  {['Guided Intake', 'Supplier Discovery', 'Auto-Award', 'Should-Cost', 'Fraud Detection'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated Node Graph Representation */}
              <div className="relative z-10 w-full md:w-1/2 h-64 border border-white/10 bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden">
                 <div className="absolute w-full h-full">
                    {/* Background lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                       <path d="M50 150 C 150 150, 200 50, 350 150" stroke="cyan" strokeWidth="2" fill="none" className="path-animate" />
                       <path d="M50 150 C 150 150, 200 250, 350 150" stroke="indigo" strokeWidth="2" fill="none" className="path-animate" />
                    </svg>
                 </div>
                 
                 {/* Central Node */}
                 <div className="absolute w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] z-20">
                    <Sparkles className="text-white" size={24} />
                 </div>
                 
                 {/* Orbiting / Connected Nodes */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[280px] h-[280px] border border-white/5 rounded-full flex items-center justify-center">
                    <div className="absolute top-0 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full -translate-y-1/2 shadow-lg"></div>
                    <div className="absolute bottom-0 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full translate-y-1/2 shadow-lg"></div>
                 </motion.div>
                 
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[180px] h-[180px] border border-white/5 rounded-full flex items-center justify-center">
                    <div className="absolute left-0 w-6 h-6 bg-cyan-900 border border-cyan-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                    <div className="absolute right-0 w-6 h-6 bg-indigo-900 border border-indigo-500 rounded-full translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      </section>`;

page = page.replace(featuresRegex, advancedFeatures);

// We used FileText icon, ensure it's imported
if (!page.includes('FileText')) {
  page = page.replace(/import \{([^}]+)\}\s+from\s+['"]lucide-react['"]/, (match, group) => {
    return `import {${group}, FileText} from 'lucide-react'`;
  });
}

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected advanced UIs into the Bento cards.');
