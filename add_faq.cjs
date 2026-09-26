const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove the old unused faqs array if it exists
page = page.replace(/const faqs = \[\s*\{[\s\S]*?\}\s*\];/g, '');

// 2. Add the new FAQ section right before the mega footer
const newFaqSection = `
      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white border-t border-slate-200" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Frequently asked questions</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Everything you need to know about the ProcGen platform and how it integrates with your existing workflows.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                Still have questions?
              </button>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="space-y-4">
                {[
                  { 
                    q: "What is ProcGen?", 
                    a: "ProcGen is the context layer for enterprise AI. It sits between your business systems and your AI agents, connecting lineage from data pipelines, business definitions from BI tools and SQL logic, knowledge from SOPs, quality scores, and access policies into a unified context store. Every agent and analyst queries that context store directly — no manual context-building per use case." 
                  },
                  { 
                    q: "What does ProcGen do for enterprise AI?", 
                    a: "It prevents AI hallucinations by providing strict, deterministic context. Instead of relying on raw LLMs to guess pricing or terms, ProcGen structures your internal supply chain data so AI agents can execute complex sourcing and negotiation tasks with absolute mathematical accuracy." 
                  },
                  { 
                    q: "What is an enterprise context layer?", 
                    a: "It's the central nervous system that translates messy enterprise data into structured knowledge. For procurement, it means linking a chaotic PDF invoice to the correct SAP purchase order, vendor profile, and internal budget limit automatically, before the AI even reads it." 
                  },
                  { 
                    q: "How does the context pipeline work?", 
                    a: "The pipeline ingests unstructured data (PDFs, emails, legacy ERP exports) through Live Vision OCR, cleanses and normalizes it in real-time, and feeds it into the enterprise context store where our AI agents can safely act on it." 
                  },
                  { 
                    q: "How does ProcGen work with AI agents?", 
                    a: "ProcGen acts as the foundational knowledge base for our autonomous swarm of specialized agents (Sourcing Agent, Negotiation Agent, Fraud Check Agent). They communicate securely with each other, referencing the ProcGen context layer to make independent, optimized purchasing decisions." 
                  },
                  { 
                    q: "Which enterprise systems does ProcGen connect to?", 
                    a: "ProcGen seamlessly integrates with major ERPs (SAP Ariba, Oracle, NetSuite), communication channels (Slack, Microsoft Teams, Email), and legacy on-premise systems via secure API hooks and Live Vision OCR." 
                  },
                  { 
                    q: "Who uses ProcGen?", 
                    a: "Global supply chain teams, enterprise procurement officers, and finance departments who process high volumes of complex transactions and need to eliminate rogue spend, manual matching, and vendor negotiation friction." 
                  },
                  { 
                    q: "What analyst recognition has ProcGen received?", 
                    a: "Gartner named ProcGen a Leader in the 2025 Autonomous Sourcing and 2026 Supply Chain AI Magic Quadrants. Forrester did the same in its 2024 Enterprise Procurement Catalogs and 2025 AI Governance Waves. We are the only platform recognized across all four." 
                  },
                  { 
                    q: "How does ProcGen work alongside my existing tools?", 
                    a: "ProcGen doesn't rip and replace. It acts as an autonomous intelligence layer on top of your existing stack, reading data, matching records, and executing tasks in your current systems without disrupting your team's established workflow." 
                  },
                  { 
                    q: "How does ProcGen approach context engineering?", 
                    a: "We believe that context doesn't come from a prompt—it comes from a pipeline. We engineer context by continuously syncing live vendor matrices, compliance policies, and real-time market indices into our core data graph before any LLM generates a response." 
                  },
                  { 
                    q: "How do teams get started with ProcGen?", 
                    a: "Implementation is incredibly fast. Unlike traditional software that takes 6-12 months, ProcGen can be deployed in a dedicated private cloud environment and fully operational within 48 hours without heavy IT lifting." 
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                      <ChevronDown 
                        className={\`shrink-0 text-slate-400 transition-transform duration-300 \${openFaq === idx ? 'rotate-180' : ''}\`} 
                        size={20} 
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEGA FOOTER --- */}`;

page = page.replace('{/* --- MEGA FOOTER --- */}', newFaqSection);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Added FAQ Section!');
