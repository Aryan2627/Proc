
"use client";

import React, { useState } from 'react';
import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
    setTimeout(() => {
      setIsModalOpen(false);
      setFormState('idle');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2500);
  };

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
      
      {/* --- ADVANCED ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        {/* Floating Neon Orbs */}
        <motion.div 
          animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-violet-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -150, 50, 0], y: [0, 150, -50, 0], scale: [1, 1.3, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, 50, -150, 0], y: [0, 50, -150, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px]"
        />
      </div>

      {/* --- ADVANCED FLOATING NAVIGATION BAR --- */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] px-6 h-16 flex items-center justify-between relative overflow-hidden"
        >
          {/* Subtle animated shine effect on the navbar */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
          />

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">ProcGen</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative z-10">
            {['Features', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-zinc-400 hover:text-white transition-colors py-2">
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 relative z-10">
            <button onClick={() => setIsModalOpen(true)} className="group relative text-sm font-bold text-black px-6 py-2.5 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-white transition-transform group-hover:scale-105"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-200 to-blue-200 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-2">Connect with Sales</span>
            </button>
          </div>
          
          <button className="md:hidden text-zinc-400 relative z-10">
            <Menu size={24} />
          </button>
        </motion.nav>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-40 z-10">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
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
              <button onClick={() => setIsModalOpen(true)} className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all text-lg overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">Connect with Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* DYNAMIC DASHBOARD MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 150, rotateX: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
            style={{ perspective: "1000px" }} className="mt-24 relative max-w-5xl mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-2 shadow-[0_0_60px_rgba(139,92,246,0.15)] overflow-hidden"
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
      <section id="features" className="py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              A procurement engine <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">built for hyperscale.</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Feature 1: Intake (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Intake & Approvals</h3>
                  <p className="text-zinc-400 max-w-md leading-relaxed">Multi-level approvals handled instantly. Say goodbye to messy email threads and disorganized spreadsheets.</p>
                </div>
                
                {/* Abstract UI Component */}
                <div className="mt-8 flex gap-3 items-center p-4 bg-white/5 rounded-2xl border border-white/5 w-fit group-hover:border-violet-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest ml-2">Approved</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Reverse Auctions (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-500">
                  <Gavel size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Reverse Auctions</h3>
                <p className="text-zinc-400 leading-relaxed">Suppliers bid live. Watch your costs drop in real-time.</p>
                
                <div className="mt-auto flex items-end gap-2 h-24 pt-6">
                  {[80, 60, 40, 20].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group-hover:bg-fuchsia-500/30 transition-colors" style={{ height: h + '%' }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Vendor Portal (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Vendor Portal</h3>
                <p className="text-zinc-400 leading-relaxed">A sleek hub for suppliers to chat, bid, and deliver.</p>
                
                <div className="mt-auto flex items-center pt-8">
                  {[1,2,3].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-blue-400 to-violet-400 ${i !== 1 ? '-ml-3' : ''}`}></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-white/10 backdrop-blur-md flex items-center justify-center text-xs font-bold -ml-3">+12</div>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: PO Automation (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                    <Receipt size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">PO Automation</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">Awards turn into purchase orders automatically. Everything is instantly integrated into your ledger.</p>
                </div>
                
                <div className="flex-1 w-full bg-white/5 border border-white/5 rounded-2xl p-5 group-hover:border-emerald-500/30 transition-colors shadow-2xl">
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <div className="w-16 h-4 bg-white/10 rounded"></div>
                    <div className="w-24 h-4 bg-emerald-500/20 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-white/5 rounded"></div>
                    <div className="w-4/5 h-3 bg-white/5 rounded"></div>
                    <div className="w-full h-3 bg-white/5 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

{/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">Pricing that makes sense.</h2>
            <p className="text-zinc-400 text-lg">No hidden fees. Scale your procurement effortlessly.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {/* Starter */}
            <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-zinc-500 text-sm mb-8 h-10">Perfect for small teams standardizing purchasing.</p>
              <div className="mb-8"><span className="text-5xl font-black text-white tracking-tighter">$199</span><span className="text-zinc-500">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Up to 10 vendors', 'Standard RFQs', 'Basic Workflows'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm"><CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">Connect with Sales</button>
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
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-center text-black bg-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">Connect with Sales</button>
            </motion.div>
            {/* Enterprise */}
            <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-zinc-500 text-sm mb-8 h-10">Custom tailored for massive scale & compliance.</p>
              <div className="mb-8"><span className="text-5xl font-black text-white tracking-tighter">Custom</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {['ERP Integrations', 'Single Sign-On (SSO)', 'Dedicated Account Manager'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm"><CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-center text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">Connect with Sales</button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <footer className="bg-[#050505] py-12 text-center text-zinc-600 text-sm border-t border-white/5 mt-12 relative z-10">
        <p>&copy; 2026 ProcGen Technologies. Built for the future.</p>
      </footer>

      {/* --- CONNECT WITH SALES MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Connect with Sales</h3>
              <p className="text-zinc-400 text-sm mb-6">Drop your details below and our enterprise team will reach out to schedule a demo.</p>

              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                  <p className="text-zinc-400 text-sm">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-colors text-white placeholder-zinc-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">Work Email</label>
                    <input 
                      type="email" required
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-colors text-white placeholder-zinc-600"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text" required
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-colors text-white placeholder-zinc-600"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="mt-4 w-full py-4 rounded-xl font-bold text-center text-black bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
