const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<section id="cortex"[\s\S]*?<\/section>/;

const newSection = `<section id="cortex" className="py-24 relative bg-slate-900 text-white overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
              <Sparkles size={14} /> Agentic AI for Procurement
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Shaping the post-S2P era with <br /><span className="text-blue-500">Dorc AI Agents</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Dorc AI's autonomous agents run your procurement and finance end-to-end, so you can focus on strategy. Built on a governed, enterprise-grade AI infrastructure.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start relative pb-32">
            
            {/* Left Sidebar (Sticky Navigation / Branding) */}
            <div className="w-full md:w-1/3 sticky top-32 flex flex-col items-center md:items-start text-center md:text-left z-20">
              <img src="/dorc-logo.png" alt="Dorc AI Logo" className="w-40 h-40 object-contain mb-8 filter brightness-0 invert opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
              <h3 className="text-3xl font-black text-white mb-2">Dorc AI Swarm</h3>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Multi-Agent Ecosystem</p>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center">
                  <div className="font-black text-blue-400 text-2xl mb-1">14+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase text-center">Autonomous Agents</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center">
                  <div className="font-black text-emerald-400 text-2xl mb-1">&lt;1s</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase text-center">Execution Time</div>
                </div>
              </div>
            </div>

            {/* Right Side (Sticky Scrolling Cards) */}
            <div className="w-full md:w-2/3 flex flex-col gap-6 relative">
              {[
                { num: '01', title: 'Guided Intake Agent', desc: 'Auto-routes employee PRs to correct workflows seamlessly.', icon: <Users size={32} /> },
                { num: '02', title: 'Supplier Discovery Agent', desc: 'Scrapes the web for net-new global suppliers and ranks them.', icon: <Network size={32} /> },
                { num: '03', title: 'Live Vision OCR (Local)', desc: 'Natively analyzes your screen in real-time, instantly extracting data from supplier PDFs and ERPs.', icon: <Monitor size={32} /> },
                { num: '04', title: 'Negotiation Agent', desc: 'Proactively sends counter-offers to rank bids and drive costs down without human intervention.', icon: <Swords size={32} /> },
                { num: '05', title: 'Invoice Matching Agent', desc: '3-way matches POs, GRNs, and invoices in milliseconds.', icon: <Receipt size={32} /> },
                { num: '06', title: 'Spend Control Tower', desc: 'Categorizes tail-spend, tracks budget variances, and proactively aggregates demand for bulk negotiations.', icon: <Activity size={32} /> }
              ].map((agent, i) => (
                <div key={i} className="sticky z-[1] flex flex-col md:flex-row gap-6 bg-[#0a0b0b]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl items-center md:items-start transition-all" style={{ top: \`calc(8rem + \${i * 1.5}rem)\` }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    {agent.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-blue-400 font-mono text-sm mb-2 font-bold">{agent.num}</div>
                    <h4 className="text-2xl font-bold text-white mb-3">{agent.title}</h4>
                    <p className="text-slate-400 text-base leading-relaxed">{agent.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>`;

page = page.replace(regex, newSection);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected Clara-style sticky scrolling layout.');
