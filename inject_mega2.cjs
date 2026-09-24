const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const logoMarquee = `
      {/* --- LOGO MARQUEE (ATLAN STYLE) --- */}
      <section className="py-12 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by AI-forward enterprise supply chains</p>
        </div>
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex items-center gap-16 md:gap-32 whitespace-nowrap opacity-60 grayscale px-8"
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
             <div className="text-2xl font-black tracking-tighter">HAVELLS</div>
             <div className="text-2xl font-black tracking-tighter">SIGNATURE GLOBAL</div>
             <div className="text-2xl font-black tracking-tighter">ZUARI</div>
             <div className="text-2xl font-black tracking-tighter">VEDANTA</div>
             <div className="text-2xl font-black tracking-tighter">TATA STEEL</div>
             <div className="text-2xl font-black tracking-tighter">ADANI</div>
             {/* Duplicates for infinite scroll effect */}
             <div className="text-2xl font-black tracking-tighter">HAVELLS</div>
             <div className="text-2xl font-black tracking-tighter">SIGNATURE GLOBAL</div>
             <div className="text-2xl font-black tracking-tighter">ZUARI</div>
             <div className="text-2xl font-black tracking-tighter">VEDANTA</div>
             <div className="text-2xl font-black tracking-tighter">TATA STEEL</div>
             <div className="text-2xl font-black tracking-tighter">ADANI</div>
          </motion.div>
        </div>
      </section>
`;

page = page.replace(
  /\{\/\* --- LOGO STRIP ---\*\/\}[\s\S]*?<\/section>/,
  logoMarquee
);

const bigWebsiteSections = `
      {/* --- PLATFORM INTEGRATIONS (UNIFY SYSTEMS) --- */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Unify business systems in the <span className="text-blue-600">Enterprise Data Graph</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Procurement doesn't live in a silo. Dorc AI natively hooks into your ERPs, active directories, and communication tools to build a living graph of your supply chain context.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center">
            {/* Center Node */}
            <div className="absolute z-20 w-32 h-32 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl border border-slate-700">
              <img src="/logo_transparent.png" alt="Dorc" className="w-16 h-16 filter brightness-0 invert" />
            </div>
            
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0px 0px 4px rgba(37,99,235,0.3))' }}>
              <path d="M 500 200 Q 250 100 150 100" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse" />
              <path d="M 500 200 Q 750 100 850 100" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 500 200 Q 250 300 150 300" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 500 200 Q 750 300 850 300" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* Orbiting Nodes */}
            <div className="absolute top-[60px] left-[100px] z-20 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Database className="text-blue-500" /> <span className="font-bold text-slate-700">SAP Ariba</span>
            </div>
            <div className="absolute top-[60px] right-[100px] z-20 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Globe className="text-emerald-500" /> <span className="font-bold text-slate-700">Oracle NetSuite</span>
            </div>
            <div className="absolute bottom-[60px] left-[100px] z-20 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Lock className="text-purple-500" /> <span className="font-bold text-slate-700">Microsoft AD</span>
            </div>
            <div className="absolute bottom-[60px] right-[100px] z-20 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <MessageCircle className="text-cyan-500" /> <span className="font-bold text-slate-700">Slack / Teams</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- G2 / SOCIAL PROOF SECTION (ATLAN STYLE) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">A leader across every context category</h2>
            <p className="text-lg text-slate-400">95% of enterprise users see ProcGen as a true partner, not just a software vendor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <Trophy size={40} className="text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">G2 Leader Fall 2026</h3>
              <p className="text-slate-400 leading-relaxed mb-6">Ranked #1 in Autonomous Procurement, Strategic Sourcing, and Spend Analytics.</p>
              <div className="flex text-amber-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <Trophy size={40} className="text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Forrester Wave™</h3>
              <p className="text-slate-400 leading-relaxed mb-6">Named a Strong Performer in the 2026 Forrester Wave for Supplier Value Management.</p>
              <div className="flex text-amber-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <Trophy size={40} className="text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Gartner Cool Vendor</h3>
              <p className="text-slate-400 leading-relaxed mb-6">Recognized for pioneering Multi-Agent Swarm architectures in traditional S2P workflows.</p>
              <div className="flex text-amber-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECURITY & CERTIFICATION SECTION --- */}
      <section className="py-24 bg-[#F9F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Humans resolve, annotate, and certify before context ships.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't believe in rogue AI. Dorc operates on a "Human-in-the-Loop" (HITL) architecture. High-risk POs and massive negotiations are automatically routed to your human managers for 1-click certification before execution.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-blue-600" size={20} /> SOC 2 Type II Certified</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-blue-600" size={20} /> ISO 27001 Compliant</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-blue-600" size={20} /> GDPR & CCPA Ready</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <div className="border-b border-slate-100 pb-4 mb-4 flex justify-between items-center">
                <div className="font-bold text-slate-900">Pending Approval: PO-9942</div>
                <div className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">High Value</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm"><span className="text-slate-500">Supplier</span><span className="font-bold text-slate-900">Tata Steel</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">AI Negotiated Savings</span><span className="font-bold text-green-600">₹450,000 (12%)</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Risk Confidence</span><span className="font-bold text-blue-600">99.8%</span></div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">Certify & Execute</button>
                <button className="flex-1 bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">Review Logs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEGA BOTTOM CTA --- */}
      <section className="py-32 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Bridge the context gap. <br/>Ship AI that works.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the world's most innovative supply chains. Deploy Dorc AI today and transform your procurement from a cost center into a strategic weapon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-blue-600 font-bold text-lg px-10 py-5 rounded-2xl hover:scale-105 shadow-2xl transition-transform flex items-center justify-center gap-2">
              Start your free trial <ArrowUpRight size={20} />
            </button>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-700 text-white border border-blue-500 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <PlayCircle size={20} /> Watch 2-min Demo
            </button>
          </div>
        </div>
      </section>
`;

page = page.replace(
  /\{\/\* --- FAQ SECTION ---\*\/\}/,
  `${bigWebsiteSections}\n      {/* --- FAQ SECTION ---*/}`
);

// Expand Footer to Mega Footer
const megaFooter = `
      {/* --- MEGA FOOTER --- */}
      <footer className="bg-[#0B101E] pt-24 pb-12 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain filter brightness-0 invert" />
                  <span className="font-bold text-xl tracking-tight text-white">ProcGen</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                  ProcGen is the enterprise AI agent platform for modern supply chains. Unify your context, automate your workflows, and negotiate at scale.
                </p>
                <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Globe size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Activity size={18} /></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Dorc AI Agents</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Enterprise Data Graph</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Live Vision OCR</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Security & Trust</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">For Direct Spend</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">For Indirect Spend</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">For SAP Ariba Users</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">For Finance Teams</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers (We're Hiring!)</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Blog & News</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-slate-500">
              <p>&copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future of procurement.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
        </div>
      </footer>
`;

page = page.replace(
  /\{\/\* --- FOOTER ---\*\/\}[\s\S]*?<\/footer>/,
  megaFooter
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Successfully injected real mega sections.');
