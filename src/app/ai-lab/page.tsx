"use client";
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Link from 'next/link';
import { Sparkles, Network, ShieldAlert, Cpu, ArrowRight, ArrowLeft, ChevronDown, Menu, Globe, Activity, TerminalSquare, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AILab() {
  const [meteors, setMeteors] = useState<{x: number, y: number, delay: number, duration: number}[]>([]);
  
useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    setMeteors([...Array(25)].map(() => ({
      x: Math.random() * 2000,
      y: Math.random() * -300 - 100,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2
    })));
  }, []);

  return (
    <div className="min-h-screen bg-[#050914] font-sans text-slate-300 selection:bg-blue-500/30 overflow-x-hidden relative font-inter">
      
      {/* --- NAV BAR (Dark Variant) --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050914]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain filter brightness-0 invert" />
              <span className="font-bold text-xl tracking-tight text-white">ProcGen</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-400">
              <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors group py-5">
                Platform <ChevronDown size={14} className="group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors group py-5">
                Solutions <ChevronDown size={14} className="group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <Link href="#" className="hover:text-white transition-colors py-5">Customers</Link>
              <Link href="/know/enterprise-context-layer" className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors group py-5">
                Resources <ChevronDown size={14} className="group-hover:-rotate-180 transition-all duration-300" />
              </Link>
              <Link href="/ai-lab" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors py-5">
                <FlaskConical size={16} /> AI Lab
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            
            <button className="text-[15px] font-bold bg-white text-slate-900 px-5 py-2.5 rounded-lg shadow-sm hover:bg-slate-200 transition-all flex items-center gap-2">
              Back to Core Platform
            </button>
          </div>
          <button className="lg:hidden text-slate-400"><Menu size={24} /></button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 z-10 overflow-hidden text-center border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Meteor Shower */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50">
          {meteors.map((m, i) => (
            <motion.div
              key={i}
              className="absolute h-[1.5px] w-[100px] bg-gradient-to-r from-indigo-400 via-purple-400 to-transparent rounded-full shadow-[0_0_15px_rgba(129,140,248,0.8)]"
              initial={{ opacity: 0, x: m.x, y: m.y, rotate: 215 }}
              animate={{ opacity: [0, 1, 0], x: m.x - 1000, y: m.y + 1000 }}
              transition={{ duration: m.duration, repeat: Infinity, delay: m.delay, ease: "linear" }}
            />
          ))}
        </div>
        
        <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold tracking-wide mb-8"
          >
            <FlaskConical size={16} /> ProcGen Research
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-[88px] font-black tracking-tighter mb-8 leading-[1.05] text-white w-full text-center"
          >
            Inventing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Autonomous</span><br className="hidden md:block" /> Supply Chain.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl mb-12"
          >
            The ProcGen AI Lab is our dedicated research group focused on Multi-Agent Swarms, Enterprise Context Layers, and the mathematics of procurement.
          </motion.p>
        </div>
      </header>

      
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
                    <p className="text-slate-400 leading-relaxed mb-8">
                      The AI Lab ingests your entire 10-year email history with a specific supplier to create an exact <strong>Digital Twin of their lead negotiator</strong>. Before your buyer gets on a phone call to negotiate a $150M contract, they "spar" with the AI in a simulated chat window. 
                    </p>
                    <Link href="/ai-lab/war-room" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                      <TerminalSquare size={20} /> Launch Live Simulator
                    </Link>
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
                    <p className="text-slate-400 leading-relaxed mb-8">
                      If three different companies using Dorc AI all need industrial steel this month, their individual AI Agents quietly communicate in the background. The AI dynamically bundles all three orders together into one massive, anonymous "Mega-Order."
                    </p>
                    <Link href="/ai-lab/dark-pool" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <Network size={20} /> Access Live Swarm Dashboard
                    </Link>
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

      {/* --- DESIGN PARTNER PROGRAM --- */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center relative z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Join the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Design Partner</span> Program.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We partner with Fortune 500 supply chains to train custom Enterprise Context Layers. 
              Give us your historical, anonymized spend data, and our research engineers will build a bespoke autonomous model for your organization.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 font-medium"><Sparkles className="text-indigo-400" size={20} /> Early access to beta lab features</li>
              <li className="flex items-center gap-3 text-slate-300 font-medium"><Sparkles className="text-indigo-400" size={20} /> Dedicated AI research engineering team</li>
              <li className="flex items-center gap-3 text-slate-300 font-medium"><Sparkles className="text-indigo-400" size={20} /> Direct influence on the ProcGen roadmap</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Apply for Partnership</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Full Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Work Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@enterprise.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Company Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Annual Procurement Spend</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                    <option>&gt; $500M</option>
                    <option>$100M - $500M</option>
                    <option>$10M - $100M</option>
                    <option>&lt; $10M</option>
                  </select>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEGA FOOTER (Dark Variant) --- */}
      <footer className="bg-[#02040A] pt-24 pb-12 border-t border-white/5 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain filter brightness-0 invert opacity-80" />
                  <span className="font-bold text-xl tracking-tight text-slate-300">ProcGen</span>
                </div>
                <p className="text-slate-500 leading-relaxed max-w-sm mb-8">
                  ProcGen is the enterprise AI agent platform for modern supply chains. Unify your context, automate your workflows, and negotiate at scale.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-slate-400"><Globe size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-slate-400"><Activity size={18} /></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-slate-300 font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">Dorc AI Agents</Link></li>
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">Enterprise Data Graph</Link></li>
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">Live Vision OCR</Link></li>
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">Security & Trust</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-slate-300 font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">For Direct Spend</Link></li>
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">For SAP Ariba Users</Link></li>
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">For Finance Teams</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-slate-300 font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
                  <li><Link href="/ai-lab" className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold">AI Lab</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-slate-600">
              <p>&copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future of procurement.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                <Link href="/" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
