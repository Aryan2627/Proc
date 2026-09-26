const fs = require('fs');

let page = fs.readFileSync('src/app/ai-lab/page.tsx', 'utf8');

const regex = /<h3 className="text-3xl font-bold text-white mb-4">The "War-Room" Simulator<\/h3>[\s\S]*?Train in the simulation, win in the\s*boardroom.\s*<\/p>\s*<\/div>/;

const replacement = `<h3 className="text-3xl font-bold text-white mb-4">The "War-Room" Simulator</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                      Behavioral LLM Personas
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Procurement teams lose millions because junior buyers get out-negotiated by veteran sales reps at massive suppliers. We are building the antidote.
                    </p>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      The AI Lab ingests your entire 10-year email history with a specific supplier to create an exact <strong>Digital Twin of their lead negotiator</strong>. Before your buyer gets on a phone call to negotiate a $150M contract, they "spar" with the AI in a simulated chat window. 
                    </p>
                    <Link href="/ai-lab/war-room" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                      <TerminalSquare size={20} /> Launch Live Simulator
                    </Link>
                  </div>`;

page = page.replace(regex, replacement);

fs.writeFileSync('src/app/ai-lab/page.tsx', page);
console.log('Added launch button to AI Lab page');
