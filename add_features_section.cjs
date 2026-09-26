const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const newSection = `
      {/* --- DORC FEATURES DETAILED SECTION --- */}
      <section id="dorc-features" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide mb-6 shadow-sm">
               <Zap size={16} className="text-blue-600" /> Dorc Features
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Everything you need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">autonomous procurement.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We built Dorc AI to handle the entire procurement lifecycle end-to-end. Clients use Dorc to automate sourcing, negotiate contracts, and stop rogue spend.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Search size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Autonomous Sourcing & Discovery</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Dorc AI instantly analyzes your internal PRs (Purchase Requisitions) and automatically scans global supplier databases. It creates shortlists, runs compliance checks, and scores vendors based on historical performance—saving your team weeks of manual research.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-600"/> Automated vendor shortlisting</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-600"/> Live compliance & risk scanning</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-600"/> ESG and diversity tracking</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Sourcing Dashboard" className="rounded-xl shadow-lg border border-slate-200 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Handshake size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Smart Contract Negotiation</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our proprietary AI Agents act as your digital negotiators. Dorc interacts directly with suppliers via email or our "War-Room" portal to drive down costs, enforce net-60 payment terms, and lock in SLAs without human intervention.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-emerald-600"/> Automated RFQ generation & sending</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-emerald-600"/> AI-driven price pushback & leverage</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-emerald-600"/> Digital contracting & e-signatures</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                 <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Negotiation Agent" className="rounded-xl shadow-lg border border-slate-200 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Real-Time Spend Control</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Stop rogue spend before the money leaves your accounts. Dorc AI implements a strict 3-way matching engine (PO to GRN to Invoice) and automatically flags anomalies, duplicate invoices, and unapproved price hikes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-purple-600"/> 3-way invoice matching</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-purple-600"/> Rogue spend & fraud detection</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-purple-600"/> Budget limit enforcement</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>
                 <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" alt="Spend Analytics" className="rounded-xl shadow-lg border border-slate-200 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="features"`;

page = page.replace('<section id="features"', newSection);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Added Dorc Features Section!');
