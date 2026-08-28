"use client";

import React from 'react';
import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const fadeIn: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  
  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#030303] font-sans text-white selection:bg-violet-500/30 overflow-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-[#030303]/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">ProcGen</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Removed Client Login */}
            <a href="#pricing" className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 transition-transform">
              Connect with Sales
            </a>
          </div>
          <button className="md:hidden text-zinc-400">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Sparkles size={14} className="text-violet-400" />
              ProcGen 2.0 is Live
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.05]">
              Procurement, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-500">
                Supercharged.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-light">
              Automate purchase requests, dominate reverse auctions, and connect with vendors in a stunning, lightning-fast platform.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <a href="#pricing" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all text-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Connect with Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </motion.div>
          </motion.div>

          {/* DYNAMIC DASHBOARD MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 150, rotateX: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
            style={{ perspective: "1000px" }} className="mt-24 relative max-w-5xl mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-2 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <div className="bg-[#111] rounded-xl overflow-hidden aspect-[16/9] shadow-inner flex flex-col relative border border-white/5">
                <div className="w-full h-12 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2 z-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="mx-auto flex gap-2"><div className="w-24 h-4 bg-white/5 rounded-full"></div></div>
                </div>

                <div className="flex w-full flex-1 p-6 gap-6">
                  <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="w-48 flex flex-col gap-4 hidden md:flex">
                    <div className="h-8 w-full bg-violet-500/20 border border-violet-500/30 rounded-lg mb-2"></div>
                    {[1,2,3,4].map(i => (<motion.div key={i} className="h-6 w-full bg-white/5 rounded-lg"></motion.div>))}
                  </motion.div>

                  <div className="flex-1 flex flex-col gap-6">
                    <div className="grid grid-cols-3 gap-4">
                      {[{ w: "60%" }, { w: "85%" }, { w: "45%" }].map((stat, i) => (
                        <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 + (i * 0.1) }} className="h-28 bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-end relative overflow-hidden group">
                          <div className="w-8 h-8 rounded-full bg-white/10 mb-auto"></div>
                          <motion.div initial={{ width: 0 }} animate={{ width: stat.w }} transition={{ delay: 1.5, duration: 1.5, type: "spring" }} className="h-1.5 bg-violet-400 rounded-full shadow-[0_0_10px_#8b5cf6]" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }} className="flex-1 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden flex items-end p-6 gap-3">
                      {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: h + "%" }} transition={{ delay: 1.7 + (i * 0.05), duration: 1, type: "spring" }} className="flex-1 bg-gradient-to-t from-violet-600/40 to-fuchsia-400/80 rounded-t-md relative group"></motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-32 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Built for speed. <br/><span className="text-zinc-500">Designed for power.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Intake Requests", desc: "Multi-level approvals handled instantly. Say goodbye to emails.", color: "group-hover:border-violet-500" },
              { icon: Gavel, title: "Reverse Auctions", desc: "Suppliers bid live. Watch your procurement costs drop in real-time.", color: "group-hover:border-fuchsia-500" },
              { icon: Users, title: "Vendor Portal", desc: "A sleek, private hub for your suppliers to chat, bid, and deliver.", color: "group-hover:border-blue-500" },
              { icon: Receipt, title: "PO Automation", desc: "Awards turn into purchase orders automatically. Integrated instantly.", color: "group-hover:border-emerald-500" }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className={`group bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] hover:bg-[#111] transition-all duration-500 ${feature.color}`}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-violet-900/10 to-[#030303] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">Pricing that makes sense.</h2>
            <p className="text-zinc-400 text-lg">No hidden fees. Scale your procurement effortlessly.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {/* Starter */}
            <motion.div variants={fadeIn} className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-zinc-500 text-sm mb-8 h-10">Perfect for small teams standardizing purchasing.</p>
              <div className="mb-8"><span className="text-5xl font-black text-white tracking-tighter">$199</span><span className="text-zinc-500">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Up to 10 vendors', 'Standard RFQs', 'Basic Workflows'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm"><CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="mailto:sales@procgen.in" className="w-full py-4 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">Connect with Sales</a>
            </motion.div>

            {/* Professional */}
            <motion.div variants={fadeIn} className="bg-[#111] border border-violet-500/50 rounded-[2rem] p-10 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col relative transform md:-translate-y-4 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-zinc-400 text-sm mb-8 h-10">For enterprises dominating the market with auctions.</p>
              <div className="mb-8"><span className="text-6xl font-black text-white tracking-tighter">$499</span><span className="text-zinc-400">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Unlimited vendors', 'Live Reverse Auctions', 'Multi-level Approvals', 'Vendor Portal Chat'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-200 text-sm"><CheckCircle2 size={18} className="text-violet-400 shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="mailto:sales@procgen.in" className="w-full py-4 rounded-xl font-bold text-center text-black bg-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">Connect with Sales</a>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={fadeIn} className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-zinc-500 text-sm mb-8 h-10">Custom tailored for massive scale & compliance.</p>
              <div className="mb-8"><span className="text-5xl font-black text-white tracking-tighter">Custom</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {['ERP Integrations', 'Single Sign-On (SSO)', 'Dedicated Account Manager'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm"><CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="mailto:sales@procgen.in" className="w-full py-4 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">Connect with Sales</a>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <footer className="bg-[#050505] py-12 text-center text-zinc-600 text-sm border-t border-white/5 mt-12">
        <p>&copy; 2026 ProcGen Technologies. Built for the future.</p>
      </footer>
    </div>
  );
}
