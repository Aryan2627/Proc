"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Share2, MessageCircle, CheckCircle2, ChevronDown, Menu, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnterpriseContextLayer() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500/30 overflow-x-hidden relative font-inter">
      
      {/* --- ATLAN-STYLE MINIMALIST NAV (Copied for consistency) --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Platform <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Solutions <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <Link href="#" className="hover:text-blue-600 transition-colors py-5">Customers</Link>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5 text-blue-600">
                Resources <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <Link href="/#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">Log In</button>
            <button className="text-[15px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all flex items-center gap-2">
              Request Demo
            </button>
          </div>
          <button className="lg:hidden text-slate-600"><Menu size={24} /></button>
        </div>
      </nav>

      {/* --- HERO ARTICLE SECTION --- */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-24 z-10 bg-slate-900 overflow-hidden text-white border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm mb-10">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen size={14} /> Ultimate Guide
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1] max-w-3xl text-white">
            What is an Enterprise Context Layer?
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl">
            Why LLMs fail in the enterprise, and how the Context Layer bridges the gap between raw supply chain data and autonomous AI agents.
          </p>

          <div className="flex items-center gap-4 mt-10 pt-10 border-t border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">P</div>
              <div>
                <p className="font-bold text-sm">ProcGen Research Team</p>
                <p className="text-slate-400 text-xs">Updated: September 24, 2026 • 8 min read</p>
              </div>
            </div>
            
            <div className="ml-auto flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white/5 transition-colors text-slate-400 hover:text-white"><Share2 size={16} /></button>
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white/5 transition-colors text-slate-400 hover:text-blue-400"><MessageCircle size={16} /></button>
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white/5 transition-colors text-slate-400 hover:text-blue-600"><Globe size={16} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* --- ARTICLE BODY --- */}
      <main className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
            <p className="lead text-2xl text-slate-600 font-medium leading-relaxed mb-12">
              You’ve deployed a cutting-edge LLM. You've given it access to your company's vendor database. You ask it a simple question: "Should we renew our contract with Tata Steel next quarter?" 
              <br/><br/>
              The AI hallucinates, gives you a generic summary of Tata Steel from Wikipedia, and entirely misses the fact that your internal quality team flagged their last 3 shipments for severe defects. <strong>Why? Because the AI lacks enterprise context.</strong>
            </p>

            <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6">The Context Gap</h2>
            <p>
              An LLM is a reasoning engine, not a knowledge base. To make intelligent decisions in a complex enterprise environment, an AI agent needs more than just access to raw data. It needs <strong>metadata, tribal knowledge, historical negotiations, and compliance guardrails</strong>. 
            </p>
            <p>
              This is the <strong>Context Gap</strong>. Raw data sits in SAP, Oracle, and scattered PDFs. The AI sits in the cloud. Connecting them directly via a simple API yields disastrous results because raw data is messy, unlabeled, and lacks business logic.
            </p>

            <div className="my-16 bg-[#F9F9FC] border border-slate-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">What makes up Enterprise Context?</h3>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 shrink-0" /> <span><strong>Operational Data:</strong> ERP records, active POs, historical pricing (SAP, Oracle).</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 shrink-0" /> <span><strong>Unstructured Knowledge:</strong> Email threads, PDF contracts, Slack messages.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 shrink-0" /> <span><strong>Business Logic:</strong> Approval hierarchies, risk thresholds, ESG compliance rules.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6">Enter the Enterprise Context Layer</h2>
            <p>
              The <strong>Enterprise Context Layer</strong> (ECL) is the architectural middle-tier that sits between your data sources and your AI agents. It acts as the brain and the translator.
            </p>
            <p>
              Instead of querying a raw SQL database, the AI queries the Context Layer. The Context Layer resolves the identity of the vendor, fetches the active contract, retrieves the recent quality scores, and packages it all into a clean, deterministic prompt for the AI to reason over.
            </p>

            <figure className="my-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center">
               <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full font-semibold text-slate-700 text-center">
                 <div className="w-full md:w-1/3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    1. Raw ERP Data<br/><span className="text-xs text-slate-400 font-normal">Silos & Chaos</span>
                 </div>
                 <div className="rotate-90 md:rotate-0"><ArrowRight className="text-blue-500" /></div>
                 <div className="w-full md:w-1/3 bg-blue-600 text-white p-6 rounded-xl shadow-md border border-blue-700 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">The Missing Link</div>
                    2. Context Layer<br/><span className="text-xs text-blue-200 font-normal">Graph & Metadata</span>
                 </div>
                 <div className="rotate-90 md:rotate-0"><ArrowRight className="text-blue-500" /></div>
                 <div className="w-full md:w-1/3 bg-slate-900 text-white p-6 rounded-xl shadow-sm border border-slate-700">
                    3. AI Agents<br/><span className="text-xs text-slate-400 font-normal">Autonomous Action</span>
                 </div>
               </div>
               <figcaption className="mt-6 text-sm text-slate-500 text-center">The modern AI architecture stack.</figcaption>
            </figure>

            <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6">How ProcGen Solves This</h2>
            <p>
              At ProcGen, our <strong>Dorc AI</strong> platform doesn't just provide the AI—it provides the entire Context Layer natively. Through our proprietary Live Vision OCR and direct ERP hooks, Dorc builds a real-time Enterprise Data Graph of your entire supply chain.
            </p>
            <p>
              When our Negotiation Agent reaches out to a supplier, it isn't guessing. It knows exactly what you paid last year, what the market index for raw aluminum is today, and who needs to approve the final PO. <strong>Context is what turns a generic chatbot into an autonomous enterprise workforce.</strong>
            </p>
          </article>
        </div>
      </main>

      {/* --- MEGA FOOTER (Copied for consistency) --- */}
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
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Globe size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Activity size={18} /></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Dorc AI Agents</Link></li>
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Enterprise Data Graph</Link></li>
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Live Vision OCR</Link></li>
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Security & Trust</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">For Direct Spend</Link></li>
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">For SAP Ariba Users</Link></li>
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">For Finance Teams</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers (We're Hiring!)</Link></li>
                  <li><Link href="/know/enterprise-context-layer" className="hover:text-blue-400 transition-colors">Resources</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-slate-500">
              <p>&copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future of procurement.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
