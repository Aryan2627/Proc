const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const newPricing = `
            <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto items-stretch">
              {/* Starter */}
              <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 flex flex-col hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-zinc-500 text-sm mb-6 h-12">Designed for small Indian businesses and low-touch adoption.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-white tracking-tighter">₹999</span><span className="text-zinc-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['1 procurement workflow', 'Up to 3 internal users', 'Up to 10 active vendors', '25 purchase requests/mo', 'Basic approval flow'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-xs leading-tight"><CheckCircle2 size={16} className="text-zinc-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                  <li className="flex items-start gap-2 text-zinc-500 text-xs leading-tight mt-4 pt-4 border-t border-white/5"><span className="text-zinc-600 font-bold shrink-0">✕</span> No AI, ERP sync, or full portal</li>
                  <li className="flex items-start gap-2 text-emerald-500/80 text-xs leading-tight font-medium mt-2">✓ ₹0 setup fee</li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-sm mt-auto">Connect with Sales</button>
              </motion.div>

              {/* Essentials */}
              <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 flex flex-col hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Essentials</h3>
                <p className="text-zinc-500 text-sm mb-6 h-12">Mid-market companies transitioning from email/Excel.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-white tracking-tighter">₹4,999</span><span className="text-zinc-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Source-to-Pay Core', 'Vendor Portal (100 vendors)', 'Basic Analytics & Reporting', 'Dynamic Custom Fields', 'Unlimited Users'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-xs leading-tight"><CheckCircle2 size={16} className="text-zinc-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                  <li className="flex items-start gap-2 text-zinc-500 text-xs leading-tight mt-4 pt-4 border-t border-white/5"><span className="text-zinc-600 font-bold shrink-0">✕</span> No AI or ERP sync</li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-sm mt-auto">Connect with Sales</button>
              </motion.div>

              {/* Growth */}
              <motion.div variants={fadeIn} className="bg-[#111] border border-violet-500/50 rounded-[2rem] p-6 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                <h3 className="text-xl font-bold text-white mb-2 mt-2">Growth</h3>
                <p className="text-zinc-400 text-sm mb-6 h-12">For enterprises looking for automation and AI efficiency.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-white tracking-tighter">₹14,999</span><span className="text-zinc-400">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in Essentials', 'Cortex AI Swarm (Web/Mobile)', 'Advanced Analytics Dashboard', 'Unlimited Vendors in Portal', 'License Manager'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-200 text-xs leading-tight"><CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-black bg-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm mt-auto">Connect with Sales</button>
              </motion.div>

              {/* Enterprise */}
              <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 flex flex-col hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-zinc-500 text-sm mb-6 h-12">Custom tailored for massive scale & compliance.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-white tracking-tighter">₹39,999+</span><span className="text-zinc-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in Growth', 'Contract Analyzer (AI)', 'Supplier Risk Scoring (AI)', '2-Way ERP Sync (SAP/Oracle)', 'Cortex Desktop App'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-xs leading-tight"><CheckCircle2 size={16} className="text-zinc-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-sm mt-auto">Connect with Sales</button>
              </motion.div>
            </div>
`;

const regex = /<div className="grid md:grid-cols-3[\s\S]*?<\/button>\s*<\/motion\.div>\s*<\/div>/;

if (regex.test(c)) {
  const finalContent = c.replace(regex, newPricing.trim());
  fs.writeFileSync('src/app/page.tsx', finalContent);
  console.log('Pricing updated successfully via regex');
} else {
  console.log('Regex failed to match');
}
