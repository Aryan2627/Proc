const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add ChevronDown and Plus to imports
page = page.replace(
  /import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight } from 'lucide-react';/,
  "import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target } from 'lucide-react';"
);

// 2. Insert FAQ State and Component Logic before LandingPage return
const faqStateLogic = `
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How long does it take to implement Dorc AI?", a: "Unlike traditional procurement software that takes 6 months to integrate, Dorc AI uses Live Vision OCR and can be deployed within 48 hours without touching your backend ERP." },
    { q: "Does Dorc AI replace my existing ERP?", a: "No. Dorc acts as an autonomous intelligence layer on top of your existing tools (SAP, Oracle, NetSuite). It does the manual clicking, matching, and emailing so your team doesn't have to." },
    { q: "How does the Negotiation Agent work?", a: "The agent analyzes supplier quotes against historical data and real-time raw material indices, then autonomously emails suppliers with data-backed counter-offers to drive down costs." },
    { q: "Is our financial data secure?", a: "Absolutely. Dorc AI can run locally or in a dedicated private cloud environment. We never train our base models on your proprietary pricing data, ensuring zero data leakage." }
  ];
`;

page = page.replace(
  /const staggerContainer: any = \{[\s\S]*?visible: \{ opacity: 1, transition: \{ staggerChildren: 0\.1 \} \}\n  \};/g,
  `const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  ${faqStateLogic}`
);

// 3. Inject new Dorc AI section and FAQ section before Pricing
const newSections = `
      {/* --- WHY DORC AI (DEEP DIVE) --- */}
      <section className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Visuals/Anatomy */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                <Target size={14} /> The Anatomy of Dorc AI
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                An agent that works exactly like your best employee. Only faster.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We didn't build another dashboard for you to log into. We built a digital workforce that logs into your dashboards for you, reads your emails, and executes procurement tasks flawlessly.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                See Dorc in action <ArrowRight size={18} />
              </button>
            </div>

            {/* Right side: Capabilities */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="bg-[#F9F9FC] border border-slate-200 p-8 rounded-3xl hover:shadow-lg transition-all group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Integration Required</h3>
                    <p className="text-slate-600 leading-relaxed">Dorc operates at the UI layer using Vision OCR. If your human team can click through your ERP, Dorc can too. No messy 6-month API integrations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9F9FC] border border-slate-200 p-8 rounded-3xl hover:shadow-lg transition-all group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Swords size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Unemotional Negotiator</h3>
                    <p className="text-slate-600 leading-relaxed">Dorc strips away human bias and exhaustion. It counter-offers 100% of the time based purely on real-time market indices and historical vendor data.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9F9FC] border border-slate-200 p-8 rounded-3xl hover:shadow-lg transition-all group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise-Grade Compliance</h3>
                    <p className="text-slate-600 leading-relaxed">Every action Dorc takes is logged, verifiable, and strictly bound by your company's spending guardrails. AI that your CISO will actually approve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

`;

const faqSection = `
      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#F9F9FC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about deploying Dorc AI.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={\`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 \${openFaq === index ? 'bg-white shadow-md' : 'bg-transparent hover:bg-white/50'}\`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 \${openFaq === index ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}\`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

// Insert before Pricing section
page = page.replace(
  /\{\/\* --- PRICING SECTION ---\*\/\}/,
  `${newSections}\n      {/* --- PRICING SECTION ---*/}`
);

// Insert before Footer
page = page.replace(
  /\{\/\* --- FOOTER ---\*\/\}/,
  `${faqSection}\n      {/* --- FOOTER ---*/}`
);

// 4. Improve Bento Box styles
// Add group-hover:scale-110 and group-hover:shadow-blue-500/20 to icons inside bento boxes
page = page.replace(/bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6/g, "bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300");
page = page.replace(/bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6/g, "bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300");
page = page.replace(/bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6/g, "bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300");
page = page.replace(/bg-white\/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-md/g, "bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300");

fs.writeFileSync('src/app/page.tsx', page);
console.log('Injected Why Dorc AI section and FAQ section.');
