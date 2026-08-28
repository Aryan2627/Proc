const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure Bot is imported
if (!code.includes('Bot,')) {
  code = code.replace(
    "import { Star, ArrowRight",
    "import { Bot, Star, ArrowRight"
  );
}

const aiSection = `
      {/* --- AI AGENT SECTION --- */}
      <section id="ai" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <Bot size={14} className="text-violet-400" />
                The Ultimate Moat
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                Autonomous <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Negotiator Agents.</span>
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-zinc-400 text-lg leading-relaxed mb-8">
                Stop going back and forth over email. Set your constraints (e.g., Target: $40k, Flexible Delivery) and let ProcGen spawn an AI Agent to negotiate directly with the supplier for you.
              </motion.p>
              
              <motion.div variants={fadeIn} className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300 shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 group-hover:w-1.5 transition-all"></div>
                <h4 className="text-white font-bold mb-2 text-lg">Network-Trained Intelligence</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our AI learns the exact breaking points of specific suppliers across the entire network. It automatically knows that <strong className="text-zinc-300 font-medium">"Vendor A always caves for an 8% discount if you extend delivery by 14 days."</strong> Competitors simply cannot copy this.
                </p>
              </motion.div>
            </motion.div>

            {/* Graphic Side: Chat Interface */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative"
            >
              {/* Massive Glow behind UI */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[100px] -z-10 rounded-full scale-90"></div>
              
              <div className="bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative">
                
                {/* Top Window Bar */}
                <div className="bg-[#0a0a0a] border-b border-white/5 px-6 py-4 flex items-center justify-between relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                        <Bot size={16} className="text-violet-400" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]"></div>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">ProcGen Agent α</h4>
                      <p className="text-emerald-400 text-[10px] font-mono tracking-widest uppercase animate-pulse">Active Negotiation</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="p-6 space-y-6">
                  {/* Supplier Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-xs font-bold text-zinc-500">V</div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 max-w-[85%] shadow-lg">
                      We've reviewed the specs. We can do $45,000 for the Q4 shipment, but that's our bottom line.
                    </div>
                  </div>

                  {/* AI Internal Thought Process */}
                  <div className="pl-11 pr-4">
                    <motion.div 
                      initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-3 text-[11px] font-mono text-violet-300 shadow-inner"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles size={12} className="text-fuchsia-400" /> <span className="font-bold">Analyzing Network Data...</span>
                      </div>
                      <span className="opacity-70 leading-relaxed block">Match found: Vendor historically accepts 8.5% discount when buyer offers +14 days delivery flexibility. Updating bid strategy.</span>
                    </motion.div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <Bot size={14} />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, transformOrigin: "bottom right" }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3, type: "spring" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-violet-600 to-fuchsia-700 border border-violet-400/50 rounded-2xl rounded-tr-sm p-4 text-sm text-white max-w-[85%] shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                    >
                      Our maximum approved budget is $41,175. However, we are willing to extend the delivery deadline by 14 days to accommodate this price. Can we close this today?
                    </motion.div>
                  </div>

                  {/* Supplier Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-xs font-bold text-zinc-500">V</div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 5.5 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 max-w-[85%] shadow-lg"
                    >
                      Let me check... Okay, with the extended delivery, we can accept $41,175. I will generate the contract now.
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating "Deal Closed" Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 6.5, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-[#0a0a0a]/90 border border-emerald-500/30 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-emerald-400 font-bold text-sm">Deal Closed</p>
                  <p className="text-zinc-400 text-xs font-mono">Saved $3,825.00</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
`;

if (!code.includes('id="ai"')) {
  code = code.replace('{/* --- IMPACT & TESTIMONIALS --- */}', aiSection + '\n      {/* --- IMPACT & TESTIMONIALS --- */}');
  fs.writeFileSync('src/app/page.tsx', code, 'utf8');
  console.log("Added AI Agent section");
} else {
  console.log("AI Agent section already exists");
}
