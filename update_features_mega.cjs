const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure new icons are imported
if (!code.includes('Swords')) {
  code = code.replace(
    'import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles, X, Check } from \'lucide-react\';',
    'import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles, X, Check, Swords, Activity, Network, ShieldCheck, Zap, BarChart3 } from \'lucide-react\';'
  );
}

const featuresStart = code.indexOf('{/* --- FEATURES GRID --- */}');
const featuresEnd = code.indexOf('{/* --- PRICING SECTION --- */}');

const newFeatures = `
      {/* --- MEGA FEATURES GRID --- */}
      <section id="features" className="py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              A procurement engine <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-500">built for hyperscale.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light">
              Stop losing millions to inefficient sourcing. ProcGen replaces scattered emails, rogue spending, and blind negotiations with a ruthless, AI-driven profitability engine.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
            
            {/* 1. Auctions (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-500">
                    <Swords size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Ruthless Reverse Auctions</h3>
                  <p className="text-zinc-400 max-w-md leading-relaxed text-lg">Force suppliers into real-time bidding wars. Our average enterprise client sees a <strong className="text-white">34% drop in raw material costs</strong> within the first 90 days.</p>
                </div>
                <div className="mt-6 flex items-end gap-3 h-24 pt-6">
                  {[100, 85, 70, 55, 40].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-md relative group-hover:bg-fuchsia-500/40 transition-colors shadow-[0_-5px_15px_rgba(217,70,239,0)] group-hover:shadow-[0_-5px_20px_rgba(217,70,239,0.3)]" style={{ height: h + '%' }}></div>
                  ))}
                  <div className="flex-1 h-full bg-emerald-500/20 border border-emerald-500/50 rounded-t-md flex items-center justify-center relative overflow-hidden group-hover:bg-emerald-500/30 transition-colors shadow-[0_-5px_30px_rgba(16,185,129,0.2)]">
                    <span className="text-emerald-400 font-bold rotate-[-90deg] whitespace-nowrap text-xs tracking-widest">AWARDED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Risk Scoring (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Vendor Risk AI</h3>
                <p className="text-zinc-400 leading-relaxed">Auto-flag non-compliant suppliers before awarding contracts. Zero liability.</p>
                
                <div className="mt-auto p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-red-500/30 border-t-red-500 flex items-center justify-center font-bold text-red-400 text-sm">92</div>
                  <div>
                    <p className="text-white font-bold text-sm">High Risk Detected</p>
                    <p className="text-zinc-500 text-xs">Missing ISO Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Intakes (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Frictionless Intake</h3>
                <p className="text-zinc-400 leading-relaxed">Employees submit requests in seconds. Smart routing handles the rest.</p>
                
                <div className="mt-auto space-y-2">
                  {[1,2,3].map((step, i) => (
                    <div key={i} className={\`flex items-center gap-3 p-3 rounded-xl \${i === 2 ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-white/5'}\`}>
                      <div className={\`w-6 h-6 rounded-full flex items-center justify-center text-xs \${i === 2 ? 'bg-blue-500 text-white' : 'bg-white/10 text-zinc-500'}\`}>{step}</div>
                      <div className={\`h-2 rounded-full flex-1 \${i === 2 ? 'bg-blue-400/50' : 'bg-white/10'}\`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. ERP Sync (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                    <Network size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Deep ERP Integration</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-sm">
                    Two-way sync with <strong className="text-white">SAP, Oracle, and NetSuite</strong>. Awards automatically convert into POs and write back to your ledger. Zero manual data entry.
                  </p>
                </div>
                
                <div className="flex-1 w-full relative h-full min-h-[160px]">
                  {/* Animation graphic */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-white text-xs">ProcGen</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-900/40 border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-blue-400 text-xs">SAP ERP</span>
                  </div>
                  {/* Flow lines */}
                  <div className="absolute left-20 right-20 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 flex items-center overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Analytics (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Spend Analytics</h3>
                <p className="text-zinc-400 leading-relaxed">Instantly visualize maverick spend and identify massive saving opportunities.</p>
                
                <div className="mt-auto relative h-24 overflow-hidden rounded-xl border border-white/5">
                  <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-emerald-500/30 to-transparent"></div>
                  <svg className="absolute bottom-0 w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,10" 
                      fill="none" stroke="#34d399" strokeWidth="4" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* 6. Vendor Portal (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-amber-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-500">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">The Ultimate Supplier Hub</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-sm">
                    Vendors get their own secure portal to submit bids, chat with your team in real-time, and track invoices. <strong className="text-white">Zero onboarding friction.</strong>
                  </p>
                </div>
                
                <div className="flex-1 w-full bg-[#111] border border-white/5 rounded-2xl p-4 shadow-2xl relative">
                  {/* Mock Chat UI */}
                  <div className="flex gap-3 mb-4 items-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0"></div>
                    <div className="bg-white/10 rounded-2xl rounded-bl-sm p-3 text-xs text-white max-w-[80%]">Bid submitted for steel shipment. Please review!</div>
                  </div>
                  <div className="flex gap-3 mb-4 items-end flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex-shrink-0"></div>
                    <div className="bg-violet-500/20 border border-violet-500/30 rounded-2xl rounded-br-sm p-3 text-xs text-white max-w-[80%]">Looks great. We are awarding this to you now.</div>
                  </div>
                  <div className="w-full h-8 bg-white/5 rounded-full flex items-center px-3 border border-white/10">
                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
`;

code = code.substring(0, featuresStart) + newFeatures + code.substring(featuresEnd);
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Mega features section generated");
