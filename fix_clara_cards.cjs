const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="w-full md:w-2\/3 flex flex-col gap-6 relative">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<div className="w-full md:w-2/3 flex flex-col gap-12 relative pb-40">
              {[
                { num: '01', title: 'Guided Intake Agent', desc: 'Auto-routes employee PRs to correct workflows seamlessly.', icon: <Users size={48} /> },
                { num: '02', title: 'Supplier Discovery Agent', desc: 'Scrapes the web for net-new global suppliers and ranks them.', icon: <Network size={48} /> },
                { num: '03', title: 'Live Vision OCR (Local)', desc: 'Natively analyzes your screen in real-time, instantly extracting data from supplier PDFs and ERPs.', icon: <Monitor size={48} /> },
                { num: '04', title: 'Negotiation Agent', desc: 'Proactively sends counter-offers to rank bids and drive costs down without human intervention.', icon: <Swords size={48} /> },
                { num: '05', title: 'Invoice Matching Agent', desc: '3-way matches POs, GRNs, and invoices in milliseconds.', icon: <Receipt size={48} /> },
                { num: '06', title: 'Spend Control Tower', desc: 'Categorizes tail-spend, tracks budget variances, and proactively aggregates demand for bulk negotiations.', icon: <Activity size={48} /> }
              ].map((agent, i) => (
                <div key={i} className="sticky top-32 min-h-[350px] flex flex-col md:flex-row gap-10 bg-[#0a0b0b]/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[2rem] shadow-[0_-10px_50px_rgba(0,0,0,0.8)] items-center transition-all" style={{ zIndex: i + 10 }}>
                  <div className="flex-shrink-0 w-32 h-32 rounded-3xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl"></div>
                    <div className="relative z-10">{agent.icon}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white/40 font-mono text-xs mb-4 font-bold uppercase tracking-widest border border-white/10 w-max px-3 py-1 rounded-full">{agent.num} / 06</div>
                    <h4 className="text-3xl font-bold text-white mb-4 leading-tight">{agent.title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">{agent.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>`;

page = page.replace(regex, newSection);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed sticky stacking cards layout.');
