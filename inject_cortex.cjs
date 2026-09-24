const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const CORTEX_SECTION = `
      {/* ─── CORTEX AI SECTION ─────────────────────────────────────────────── */}
      <section id="cortex" className="py-40 relative z-10 overflow-hidden">

        {/* Multi-layer ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-violet-500/5 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-fuchsia-500/5 pointer-events-none"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* ── Section Badge + Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <Sparkles size={13} className="text-fuchsia-400" />
              ProcGen Cortex — The AI Brain
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
              Meet{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                Cortex AI.
              </span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Not just a chatbot. An <strong className="text-white font-semibold">autonomous procurement intelligence layer</strong> that drafts contracts, predicts stockouts, analyzes bids, and negotiates—all from a single command.
            </p>
          </motion.div>

          {/* ── Main Two-Column Layout ── */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">

            {/* LEFT: Animated Cortex Chat UI */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[60px] rounded-3xl pointer-events-none" />

              <div className="relative bg-[#030608]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

                {/* Window bar */}
                <div className="bg-[#080b12] border-b border-white/5 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        <Bot size={14} className="text-white" />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#080b12] animate-pulse" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Cortex AI</p>
                      <p className="text-violet-400 text-[9px] font-mono tracking-widest uppercase">Intelligence Active</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-5 space-y-4 min-h-[340px]">

                  {/* User message */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-300 flex-shrink-0">U</div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-zinc-200 max-w-[85%] font-mono">/vendor-scorecard Tata Steel</div>
                  </motion.div>

                  {/* AI thinking */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="pl-10">
                    <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl px-4 py-2.5 text-[11px] font-mono text-violet-300 flex items-center gap-2">
                      <Sparkles size={11} className="text-fuchsia-400 flex-shrink-0" />
                      <span>Fetching lifetime delivery data, quality audits, ESG score, risk tier...</span>
                    </div>
                  </motion.div>

                  {/* AI response - Scorecard */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, type: 'spring' }} viewport={{ once: true }} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="flex-1 bg-[#0a0d18] border border-violet-500/20 rounded-2xl rounded-tl-sm p-4 shadow-xl">
                      <p className="text-white text-xs font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400" /> Scorecard: Tata Steel
                      </p>
                      <div className="flex gap-3 items-center mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-2xl font-black text-white shadow-lg">A+</div>
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          {[['On-Time', '99.1%', 'emerald'], ['Defect', '0.2%', 'emerald'], ['Response', '4h', 'yellow'], ['Risk', 'Low', 'emerald']].map(([k, v, col]) => (
                            <div key={k} className="bg-white/5 rounded-lg px-2 py-1.5">
                              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">{k}</p>
                              <p className={'text-xs font-bold ' + (col === 'emerald' ? 'text-emerald-400' : 'text-yellow-400')}>{v}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-[10px]">Recommendation: <span className="text-emerald-400 font-semibold">Award contract. Preferred vendor.</span></p>
                    </div>
                  </motion.div>

                  {/* Second command */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 3.0 }} viewport={{ once: true }} className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-300 flex-shrink-0">U</div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-zinc-200 max-w-[85%] font-mono">/draft-contract Tata Steel</div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.8, type: 'spring' }} viewport={{ once: true }} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-[#0a0d18] border border-emerald-500/20 rounded-2xl rounded-tl-sm px-4 py-3 text-xs text-zinc-300 max-w-[90%]">
                      <p className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5"><CheckCircle2 size={11}/> MSA Generated</p>
                      <p className="text-zinc-500">MASTER SERVICE AGREEMENT drafted for Tata Steel with Incoterms 2020 and liability cap at 2x contract value. <span className="text-violet-400 cursor-pointer hover:underline">Download PDF ↗</span></p>
                    </div>
                  </motion.div>

                </div>

                {/* Input bar */}
                <div className="border-t border-white/5 px-5 py-3 flex items-center gap-3">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-zinc-600 font-mono flex items-center gap-2">
                    <span className="text-violet-400">/</span> Type a command or ask anything...
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.4)] cursor-pointer">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Features list */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
              className="flex flex-col gap-5 pt-4"
            >
              {[
                { cmd: '/vendor-scorecard', label: 'Vendor Scorecards', desc: 'Lifetime A–F performance grades across delivery, quality, responsiveness, and ESG compliance—in seconds.', color: '#818cf8', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', icon: CheckCircle2 },
                { cmd: '/draft-contract', label: 'Legal Document AI', desc: 'Generate airtight MSAs, NDAs, and SOWs pre-loaded with your corporate playbook clauses. Export to PDF or DocuSign.', color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.2)', icon: FileText },
                { cmd: '/analyze-risk', label: 'Multi-Agent Risk Swarm', desc: 'Deploy a swarm of AI agents that simultaneously audit geopolitical, financial, and compliance risks across your entire supply chain.', color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)', icon: ShieldCheck },
                { cmd: '/predict-stockout', label: 'Inventory Intelligence', desc: 'AI scans burn rates and lead times to flag critical shortages 30 days before they happen—auto-drafting emergency POs.', color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)', icon: Zap },
                { cmd: '/3way-match', label: 'Autonomous Reconciliation', desc: 'Cortex cross-references every PO, GRN, and invoice automatically. Mismatches flagged and escalated without human input.', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', icon: Activity },
                { cmd: '/market-intel', label: 'Commodity Market Intel', desc: 'Live pricing signals and AI-predicted price drops help you time purchases to save millions on raw materials every quarter.', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)', icon: BarChart3 },
              ].map((f, i) => (
                <motion.div
                  key={f.cmd}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default"
                  style={{ background: f.bg, borderColor: f.border }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: f.bg, border: '1px solid ' + f.border }}>
                    <f.icon size={18} style={{ color: f.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-bold text-sm">{f.label}</p>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full border" style={{ color: f.color, borderColor: f.border, background: f.bg }}>{f.cmd}</span>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Command Category Pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-6">19 Slash Commands Across 6 Categories</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Sourcing', color: '#2dd4bf', bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.25)' },
                { label: 'Legal', color: '#818cf8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
                { label: 'Logistics', color: '#eab308', bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.25)' },
                { label: 'Finance', color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
                { label: 'Vendors', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
                { label: 'System', color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.25)' },
              ].map((cat) => (
                <motion.div
                  key={cat.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200 cursor-default"
                  style={{ color: cat.color, background: cat.bg, borderColor: cat.border }}
                >
                  {cat.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Bottom CTA Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative rounded-[2rem] overflow-hidden p-px"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 opacity-30 blur-[40px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/40 to-cyan-500/40 rounded-[2rem]" />
            <div className="relative bg-[#060810]/90 backdrop-blur-2xl rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                  </span>
                  Live on ProcGen Platform
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                  Your procurement team just got <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">an AI superpower.</span>
                </h3>
                <p className="text-zinc-400 text-base max-w-lg leading-relaxed">
                  Cortex is embedded directly inside the ProcGen CPanel. No integrations, no extra licenses. Just type <span className="text-violet-400 font-mono font-bold">/</span> and let it work.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button onClick={() => setIsModalOpen(true)} className="group flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] text-lg">
                  Request a Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
`;

// Inject BEFORE the AI AGENT section
c = c.replace('      {/* --- AI AGENT SECTION --- */}', CORTEX_SECTION + '\n      {/* --- AI AGENT SECTION --- */}');

fs.writeFileSync('src/app/page.tsx', c);
console.log('✅ Cortex AI section injected!');
