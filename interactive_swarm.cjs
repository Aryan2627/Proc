const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Inject the state variable
if (!page.includes('const [activeAgent, setActiveAgent]')) {
  page = page.replace(
    /const \[openFaq, setOpenFaq\] = useState<number \| null>\(0\);/,
    "const [openFaq, setOpenFaq] = useState<number | null>(0);\n  const [activeAgent, setActiveAgent] = useState<string | null>(null);"
  );
}

// 2. Locate and replace the Swarm text panel
const oldTextPanelRegex = /<h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Multi-Agent Swarm<\/h3>[\s\S]*?<\/div>(\s*<\/div>\s*\{\/\* Animated Node Graph Representation \*\/\} )/;

const newTextPanel = `<div className="relative h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeAgent === 'discovery' && (
                      <motion.div key="discovery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-0">
                        <h3 className="text-3xl font-black text-cyan-400 mb-4 tracking-tight">Supplier Discovery Agent</h3>
                        <p className="text-slate-300 leading-relaxed font-medium text-lg mb-6">
                          Scours global databases and private networks to instantly identify, vet, and rank alternative suppliers based on your specific risk and ESG criteria.
                        </p>
                        <button onClick={() => setActiveAgent(null)} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 transition-colors"><ChevronRight size={16} className="rotate-180" /> Back to Swarm</button>
                      </motion.div>
                    )}
                    {activeAgent === 'award' && (
                      <motion.div key="award" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-0">
                        <h3 className="text-3xl font-black text-indigo-400 mb-4 tracking-tight">Auto-Award Agent</h3>
                        <p className="text-slate-300 leading-relaxed font-medium text-lg mb-6">
                          Dynamically evaluates multi-round bidding wars, calculates Total Cost of Ownership (TCO), and autonomously awards contracts to the optimal supplier.
                        </p>
                        <button onClick={() => setActiveAgent(null)} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 transition-colors"><ChevronRight size={16} className="rotate-180" /> Back to Swarm</button>
                      </motion.div>
                    )}
                    {activeAgent === 'fraud' && (
                      <motion.div key="fraud" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-0">
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Fraud Detection Agent</h3>
                        <p className="text-slate-300 leading-relaxed font-medium text-lg mb-6">
                          Analyzes historical pricing, vendor metadata, and anomaly patterns to catch duplicate invoices and price gouging before a single cent leaves your accounts.
                        </p>
                        <button onClick={() => setActiveAgent(null)} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 transition-colors"><ChevronRight size={16} className="rotate-180" /> Back to Swarm</button>
                      </motion.div>
                    )}
                    {activeAgent === 'cost' && (
                      <motion.div key="cost" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-0">
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Should-Cost Agent</h3>
                        <p className="text-slate-300 leading-relaxed font-medium text-lg mb-6">
                          Breaks down BOMs and raw material indexes in real-time to calculate exactly what a part 'should' cost, giving the Negotiation Agent maximum leverage.
                        </p>
                        <button onClick={() => setActiveAgent(null)} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 transition-colors"><ChevronRight size={16} className="rotate-180" /> Back to Swarm</button>
                      </motion.div>
                    )}
                    {activeAgent === null && (
                      <motion.div key="swarm" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-0">
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Multi-Agent Swarm</h3>
                        <p className="text-slate-400 leading-relaxed font-medium text-lg">
                          Deploy over 14 specialized autonomous agents working in concert. Scale your procurement ops 100x without adding headcount.
                        </p>
                        <div className="mt-6 flex gap-2 flex-wrap">
                          <span onClick={() => setActiveAgent('discovery')} className="cursor-pointer px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/40 transition-colors">Discovery</span>
                          <span onClick={() => setActiveAgent('award')} className="cursor-pointer px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-indigo-500/30 hover:bg-indigo-500/40 transition-colors">Auto-Award</span>
                          <span onClick={() => setActiveAgent('fraud')} className="cursor-pointer px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">Fraud Check</span>
                          <span onClick={() => setActiveAgent('cost')} className="cursor-pointer px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">Should-Cost</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 italic flex items-center gap-1"><Sparkles size={12}/> Click the tags or orbiting nodes to explore.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  </div>$1`;

page = page.replace(oldTextPanelRegex, newTextPanel);

// 3. Make the orbiting nodes clickable
// Ring 1 (Top and Bottom nodes)
page = page.replace(
  /<div className="absolute top-0 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full -translate-y-1\/2 shadow-lg"><\/div>/,
  '<div onClick={() => setActiveAgent("fraud")} className="absolute top-0 w-8 h-8 bg-slate-800 border-2 border-slate-500 rounded-full -translate-y-1/2 shadow-lg cursor-pointer hover:scale-150 hover:bg-slate-700 transition-all z-30"></div>'
);
page = page.replace(
  /<div className="absolute bottom-0 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full translate-y-1\/2 shadow-lg"><\/div>/,
  '<div onClick={() => setActiveAgent("cost")} className="absolute bottom-0 w-8 h-8 bg-slate-800 border-2 border-slate-500 rounded-full translate-y-1/2 shadow-lg cursor-pointer hover:scale-150 hover:bg-slate-700 transition-all z-30"></div>'
);

// Ring 2 (Left and Right nodes)
page = page.replace(
  /<div className="absolute left-0 w-6 h-6 bg-cyan-900 border border-cyan-500 rounded-full -translate-x-1\/2 shadow-\[0_0_15px_rgba\(6,182,212,0\.5\)\]"><\/div>/,
  '<div onClick={() => setActiveAgent("discovery")} className="absolute left-0 w-6 h-6 bg-cyan-600 border-2 border-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)] cursor-pointer hover:scale-150 transition-all z-30"></div>'
);
page = page.replace(
  /<div className="absolute right-0 w-6 h-6 bg-indigo-900 border border-indigo-500 rounded-full translate-x-1\/2 shadow-\[0_0_15px_rgba\(99,102,241,0\.5\)\]"><\/div>/,
  '<div onClick={() => setActiveAgent("award")} className="absolute right-0 w-6 h-6 bg-indigo-600 border-2 border-indigo-400 rounded-full translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.8)] cursor-pointer hover:scale-150 transition-all z-30"></div>'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected interactive nodes feature.');
