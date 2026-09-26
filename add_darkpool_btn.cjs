const fs = require('fs');

let page = fs.readFileSync('src/app/ai-lab/page.tsx', 'utf8');

const regex = /<h3 className="text-3xl font-bold text-white mb-4">The "Dark Pool" Swarm<\/h3>[\s\S]*?automatically splits the savings and routes the shipments. A decentralized, AI-driven purchasing syndicate.\s*<\/p>\s*<\/div>/;

const replacement = `<h3 className="text-3xl font-bold text-white mb-4">The "Dark Pool" Swarm</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                      Decentralized Cartel Dynamics
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Bulk buying guarantees the best discounts. But a mid-sized manufacturer rarely has the volume to demand the same discounts as a giant like Toyota. 
                    </p>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      If three different companies using Dorc AI all need industrial steel this month, their individual AI Agents quietly communicate in the background. The AI dynamically bundles all three orders together into one massive, anonymous "Mega-Order."
                    </p>
                    <Link href="/ai-lab/dark-pool" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <Network size={20} /> Access Live Swarm Dashboard
                    </Link>
                  </div>`;

page = page.replace(regex, replacement);

fs.writeFileSync('src/app/ai-lab/page.tsx', page);
console.log('Added launch button to Dark Pool');
