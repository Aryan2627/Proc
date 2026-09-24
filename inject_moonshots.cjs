const fs = require('fs');

let page = fs.readFileSync('src/app/ai-lab/page.tsx', 'utf8');

const newMoonshotsSection = `
      {/* --- MOONSHOT PROJECTS (THE CRAZY LINKS) --- */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Moonshot Projects <span className="text-indigo-500 text-sm font-bold align-top ml-2 bg-indigo-500/20 px-3 py-1 rounded-full uppercase tracking-widest">In Development</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              While the industry builds basic dashboards, the ProcGen AI Lab is engineering the absolute limits of supply chain mathematics. Here is what we are training models to solve next.
            </p>
          </div>

          <div className="space-y-8">
            {/* Moonshot 1: The War-Room */}
            <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-all"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                  <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <TerminalSquare size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">The "War-Room" Simulator</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Behavioral LLM Personas
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Procurement teams lose millions because junior buyers get out-negotiated by veteran sales reps at massive suppliers. We are building the antidote.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    The AI Lab ingests your entire 10-year email history with a specific supplier to create an exact <strong>Digital Twin of their lead negotiator</strong>. Before your buyer gets on a phone call to negotiate a ₹50 Crore contract, they "spar" with the AI in a simulated chat window. The AI acts exactly like the supplier—pushing back on pricing, complaining about shipping costs, and threatening to walk away. Train in the simulation, win in the boardroom.
                  </p>
                </div>
              </div>
            </div>

            {/* Moonshot 2: Swarm Syndicate */}
            <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <Network size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">The "Dark Pool" Swarm</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Decentralized Cartel Dynamics
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Bulk buying guarantees the best discounts. But a mid-sized manufacturer rarely has the volume to demand the same discounts as a giant like Toyota. 
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    If three different companies using ProcGen all need industrial steel this month, their individual AI Agents quietly communicate in the background. The AI dynamically bundles all three orders together into one massive, anonymous "Mega-Order." The Swarm approaches the supplier, negotiates a massive bulk discount, then automatically splits the savings and routes the shipments. A decentralized, AI-driven purchasing syndicate.
                  </p>
                </div>
              </div>
            </div>

            {/* Moonshot 3: Butterfly Effect Map */}
            <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-rose-500/20 transition-all"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                  <div className="w-16 h-16 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">The Self-Healing Graph</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Predictive Topology
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    A minor event on the other side of the world can shut down your entire factory. Standard software tells you after it happens. We act before it hits the news.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    A minor earthquake hits a province in China. Before CNN reports it, the Lab's models calculate the cascading math: <em>"This earthquake knocked out a road used by a factory that supplies chemical coating for microchips used in your electric motors. In 14 days, your production will halt."</em> The AI instantly drafts purchase orders to a backup supplier in Mexico at a 4% premium, waiting for 1-click human approval to secure inventory before your competitors realize what happened.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
`;

const parts = page.split('{/* --- RESEARCH AREAS --- */}');
if (parts.length > 1) {
  const rest = parts[1].split('{/* --- DESIGN PARTNER PROGRAM --- */}');
  rest.shift();
  page = parts[0] + newMoonshotsSection + '\n      {/* --- DESIGN PARTNER PROGRAM --- */}' + rest.join('{/* --- DESIGN PARTNER PROGRAM --- */}');
  fs.writeFileSync('src/app/ai-lab/page.tsx', page);
  console.log('Successfully injected Moonshots into AI Lab.');
} else {
  console.log('Failed to find split anchor.');
}
