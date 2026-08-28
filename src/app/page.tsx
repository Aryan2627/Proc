
"use client";
import Link from "next/link";

import React from 'react';
import { useState } from 'react';
import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles, X, Check, Swords, Activity, Network, ShieldCheck, Zap, BarChart3 , Mail} from 'lucide-react';
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

          {/* DYNAMIC DASHBOARD MOCKUP - LIVE REVERSE AUCTION SIMULATION */}
          <motion.div 
            initial={{ opacity: 0, y: 150, rotateX: 20 }} 
            animate={{ opacity: 1, y: 0, rotateX: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
            style={{ perspective: "1200px" }} 
            className="mt-20 relative max-w-[1000px] mx-auto z-20 w-full"
          >
            {/* Massive Ambient Glow Behind Mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 rounded-3xl blur-[80px] opacity-20 animate-pulse"></div>
            
            <div className="relative rounded-2xl border border-white/10 bg-[#050505]/95 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
              
              {/* macOS Window Controls */}
              <div className="w-full h-12 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2 relative">
                <div className="flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-[#111] rounded-lg border border-white/5">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-[10px] text-zinc-400 font-mono tracking-widest">app.procgen.in/auctions/live</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full aspect-[16/10] sm:aspect-[21/9]">
                
                {/* Sidebar Navigation */}
                <div className="w-16 sm:w-48 bg-[#0a0a0a] border-r border-white/5 p-4 flex flex-col gap-3 z-10 shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
                   <div className="h-9 w-full bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-fuchsia-400 shadow-[inset_0_0_10px_rgba(217,70,239,0.1)]">
                     <Swords size={16} /><span className="hidden sm:block text-xs font-bold tracking-wide">Auctions</span>
                   </div>
                   {[
                     { icon: Activity, label: "Analytics" },
                     { icon: Users, label: "Suppliers" },
                     { icon: FileText, label: "Contracts" }
                   ].map((item, i) => (
                     <div key={i} className="h-9 w-full rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors cursor-pointer">
                       <item.icon size={16} /><span className="hidden sm:block text-xs">{item.label}</span>
                     </div>
                   ))}
                   
                   <div className="mt-auto hidden sm:block bg-white/5 border border-white/5 rounded-xl p-3">
                     <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Total Savings</p>
                     <p className="text-emerald-400 font-mono font-bold text-lg">$1.4M</p>
                   </div>
                </div>

                {/* Main Content Area: Live Auction */}
                <div className="flex-1 p-4 sm:p-8 flex flex-col gap-6 relative overflow-hidden bg-gradient-to-br from-[#050505] to-[#0a0a0a]">
                  
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                  {/* Header */}
                  <div className="flex justify-between items-end relative z-10 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-red-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Live Sourcing Event</span>
                      </div>
                      <h3 className="text-lg sm:text-3xl font-black text-white">Q4 Raw Steel Procurement</h3>
                    </div>
                    <div className="text-right bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase mb-1">Time Remaining</p>
                      <p className="text-white font-mono text-xl sm:text-2xl font-bold animate-pulse">04:12</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    
                    {/* Left: Interactive Price Drop Chart */}
                    <div className="md:col-span-2 bg-[#020202]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col relative shadow-2xl">
                      <div className="flex justify-between items-center mb-6">
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Lowest Bid Trend (USD)</p>
                        <div className="text-emerald-400 text-sm font-mono font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          -32.4% vs Target
                        </div>
                      </div>
                      
                      <div className="flex-1 relative w-full mt-2">
                        {/* Horizontal Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none z-0">
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                          <div className="w-full h-px bg-zinc-600"></div>
                        </div>
                        
                        {/* Animated Line showing price crashing down */}
                        <svg className="w-full h-full overflow-visible relative z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                          {/* Target Price Line */}
                          <line x1="0" y1="20" x2="100" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                          <text x="0" y="15" fill="#ef4444" fontSize="4" opacity="0.8" fontWeight="bold">Target Price: $650k</text>

                          {/* Bid Trajectory */}
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                            d="M0,25 L15,25 L25,40 L45,45 L55,60 L75,65 L85,85 L100,85" 
                            fill="none" stroke="#d946ef" strokeWidth="4" 
                            strokeLinecap="round" strokeLinejoin="round"
                            className="drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]"
                          />
                          {/* Gradient fill below line */}
                          <motion.path 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                            d="M0,25 L15,25 L25,40 L45,45 L55,60 L75,65 L85,85 L100,85 L100,100 L0,100 Z"
                            fill="url(#auctionGradient)" opacity="0.15"
                          />
                          <defs>
                            <linearGradient id="auctionGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#d946ef" stopOpacity="1"/>
                              <stop offset="100%" stopColor="#d946ef" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Right: Real-time Bid Feed */}
                    <div className="hidden md:flex bg-[#020202]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex-col relative overflow-hidden shadow-2xl">
                      {/* Top Fade */}
                      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      {/* Bottom Fade */}
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      
                      <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4 z-30">Real-Time Bids</h4>
                      
                      <div className="flex-1 flex flex-col justify-end gap-3 relative z-10 pb-4">
                        {[
                          { vendor: 'Acme Steel Co.', bid: '$580,000', time: '12m ago', color: 'bg-zinc-600' },
                          { vendor: 'Global Ind.', bid: '$525,000', time: '4m ago', color: 'bg-zinc-600' },
                          { vendor: 'Stellar Metal', bid: '$490,000', time: '30s ago', color: 'bg-blue-500' },
                          { vendor: 'Acme Steel Co.', bid: '$438,500', time: 'Just now', color: 'bg-emerald-500', isNew: true },
                        ].map((bid, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: i * 1.5, type: "spring", bounce: 0.5 }}
                            className={`p-3.5 rounded-xl flex items-center justify-between shadow-lg ${bid.isNew ? 'bg-emerald-500/10 border border-emerald-500/40 relative overflow-hidden' : 'bg-white/5 border border-white/5'}`}
                          >
                            {bid.isNew && <div className="absolute inset-0 bg-emerald-500/20 animate-pulse"></div>}
                            <div className="flex items-center gap-3 relative z-10">
                              <div className={`w-2.5 h-2.5 rounded-full ${bid.color} shadow-[0_0_10px_currentColor]`}></div>
                              <div>
                                <p className={`text-xs font-bold ${bid.isNew ? 'text-emerald-400' : 'text-zinc-200'}`}>{bid.vendor}</p>
                                <p className="text-[9px] text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{bid.time}</p>
                              </div>
                            </div>
                            <span className={`font-mono text-sm font-bold relative z-10 ${bid.isNew ? 'text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]' : 'text-white'}`}>{bid.bid}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </header>

      
      
      {/* --- MEGA FEATURES GRID --- */}
      <section id="features" className="py-32 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              A procurement engine <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-500">built for hyperscale.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light">
              Stop losing millions to inefficient sourcing. ProcGen replaces scattered emails, rogue spending, and blind negotiations with a ruthless, AI-driven profitability engine.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
            
            {/* 1. Auctions (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-500">
                    <Swords size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Ruthless Reverse Auctions</h3>
                  <p className="text-zinc-400 max-w-md leading-relaxed text-lg">Force suppliers into real-time bidding wars. Our average enterprise client sees a <strong className="text-white">34% drop in raw material costs</strong> within the first 90 days.</p>
                </div>
                <div className="mt-6 flex items-end gap-3 h-24 pt-6">
                  {[100, 85, 70, 55, 40].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-md relative group-hover:bg-fuchsia-500/40 transition-colors shadow-[0_-5px_15px_rgba(217,70,239,0)] group-hover:shadow-[0_-5px_20px_rgba(217,70,239,0.3)]" style={{ height: h + '%' }}></div>
                  ))}
                  <div className="flex-1 h-full bg-emerald-500/20 border border-emerald-500/50 rounded-t-md flex items-center justify-center relative overflow-hidden group-hover:bg-emerald-500/30 transition-colors shadow-[0_-5px_30px_rgba(16,185,129,0.2)]">
                    <span className="text-emerald-400 font-bold rotate-[-90deg] whitespace-nowrap text-xs tracking-widest">AWARDED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Risk Scoring (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Vendor Risk AI</h3>
                <p className="text-zinc-400 leading-relaxed">Auto-flag non-compliant suppliers before awarding contracts. Zero liability.</p>
                
                <div className="mt-auto p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-red-500/30 border-t-red-500 flex items-center justify-center font-bold text-red-400 text-sm">92</div>
                  <div>
                    <p className="text-white font-bold text-sm">High Risk Detected</p>
                    <p className="text-zinc-500 text-xs">Missing ISO Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Intakes (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Frictionless Intake</h3>
                <p className="text-zinc-400 leading-relaxed">Employees submit requests in seconds. Smart routing handles the rest.</p>
                
                <div className="mt-auto space-y-2">
                  {[1,2,3].map((step, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === 2 ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-white/5'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${i === 2 ? 'bg-blue-500 text-white' : 'bg-white/10 text-zinc-500'}`}>{step}</div>
                      <div className={`h-2 rounded-full flex-1 ${i === 2 ? 'bg-blue-400/50' : 'bg-white/10'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. ERP Sync (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                    <Network size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Deep ERP Integration</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-sm">
                    Two-way sync with <strong className="text-white">SAP, Oracle, and NetSuite</strong>. Awards automatically convert into POs and write back to your ledger. Zero manual data entry.
                  </p>
                </div>
                
                <div className="flex-1 w-full relative h-full min-h-[160px]">
                  {/* Animation graphic */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-white text-xs">ProcGen</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-900/40 border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-blue-400 text-xs">SAP ERP</span>
                  </div>
                  {/* Flow lines */}
                  <div className="absolute left-20 right-20 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 flex items-center overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Analytics (Spans 1 column) */}
            <motion.div variants={fadeIn} className="md:col-span-1 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Spend Analytics</h3>
                <p className="text-zinc-400 leading-relaxed">Instantly visualize maverick spend and identify massive saving opportunities.</p>
                
                <div className="mt-auto relative h-24 overflow-hidden rounded-xl border border-white/5">
                  <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-emerald-500/30 to-transparent"></div>
                  <svg className="absolute bottom-0 w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,10" 
                      fill="none" stroke="#34d399" strokeWidth="4" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* 6. Vendor Portal (Spans 2 columns) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-amber-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-500">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">The Ultimate Supplier Hub</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-sm">
                    Vendors get their own secure portal to submit bids, chat with your team in real-time, and track invoices. <strong className="text-white">Zero onboarding friction.</strong>
                  </p>
                </div>
                
                <div className="flex-1 w-full bg-[#111] border border-white/5 rounded-2xl p-4 shadow-2xl relative">
                  {/* Mock Chat UI */}
                  <div className="flex gap-3 mb-4 items-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0"></div>
                    <div className="bg-white/10 rounded-2xl rounded-bl-sm p-3 text-xs text-white max-w-[80%]">Bid submitted for steel shipment. Please review!</div>
                  </div>
                  <div className="flex gap-3 mb-4 items-end flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex-shrink-0"></div>
                    <div className="bg-violet-500/20 border border-violet-500/30 rounded-2xl rounded-br-sm p-3 text-xs text-white max-w-[80%]">Looks great. We are awarding this to you now.</div>
                  </div>
                  <div className="w-full h-8 bg-white/5 rounded-full flex items-center px-3 border border-white/10">
                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* --- EXCLUSIVE EVENT SECTION --- */}
      <section id="summit" className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative rounded-[2.5rem] p-1 overflow-hidden group shadow-[0_0_80px_rgba(139,92,246,0.2)] hover:shadow-[0_0_120px_rgba(139,92,246,0.4)] transition-shadow duration-700"
          >
            {/* Holographic Border Effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#8b5cf6_360deg)] opacity-50"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#d946ef_360deg)] opacity-50"
            />
            
            {/* Event Card Content */}
            <div className="relative bg-[#050505]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden border border-white/5">
              
              {/* Background ambient light inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Live Virtual Masterclass
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  The AI Sourcing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Revolution Summit '26</span>
                </h2>
                
                <p className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Join 5,000+ enterprise leaders to discover how dynamic reverse auctions are slashing raw material costs by up to 40%. 
                  <strong className="text-white font-bold block mt-2">Attendees receive $1,500 in onboarding credits and 3 months of the Professional Tier for free.</strong>
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="/vip" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center">
                    Claim Free VIP Pass
                  </Link>
                  <p className="text-sm font-semibold text-zinc-500">Only 142 spots remaining.</p>
                </div>
              </div>

              {/* Graphic / Ticket Stub side */}
              <div className="w-full md:w-auto relative z-10">
                <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-white/10 to-white/0 rounded-2xl border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md transform md:rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#050505] rounded-full border-r border-white/10"></div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#050505] rounded-full border-l border-white/10"></div>
                  
                  <div>
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Admit One</p>
                    <h3 className="text-2xl font-black text-white">VIP ALL-ACCESS</h3>
                  </div>
                  
                  <div className="border-t-2 border-dashed border-white/20 my-6"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Date</p>
                      <p className="text-white font-semibold">October 14th, 2026</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Speaker</p>
                      <p className="text-white font-semibold">Aryan, Founder @ ProcGen</p>
                    </div>
                  </div>
                  
                  {/* Fake Barcode */}
                  <div className="mt-8 flex gap-1 h-12 w-full opacity-50">
                    {[3,1,2,4,1,5,2,1,3,2,1,4,2,3,1,1,2,5,1].map((w, i) => (
                      <div key={i} className="bg-white h-full rounded-sm" style={{ width: `${w * 3}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
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
      
      
      <footer className="relative z-10 bg-[#020202] pt-24 pb-12 border-t border-white/10 overflow-hidden mt-20">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <span className="text-white font-bold text-xl tracking-tighter">P</span>
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">ProcGen</span>
              </div>
              <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
                The AI-powered procurement engine built for hyperscale. Automate workflows, run reverse auctions, and slash costs effortlessly.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/procgen/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all shadow-lg hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:connect.procgen@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 transition-all shadow-lg hover:scale-110">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                <li><a href="/vip" className="hover:text-violet-400 transition-colors flex items-center gap-2">Global Summit <span className="bg-fuchsia-500/20 text-fuchsia-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Live</span></a></li>
                
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="mailto:connect.procgen@gmail.com" className="hover:text-violet-400 transition-colors">Contact Sales</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future.
            </p>
            <div className="flex items-center gap-2 text-zinc-600 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Mail size={14} className="text-zinc-400" /> connect.procgen@gmail.com
            </div>
          </div>
        </div>
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
