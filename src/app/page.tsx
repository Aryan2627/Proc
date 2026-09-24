
"use client";
import Link from "next/link";

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Bot, Star, ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu, Sparkles, X, Check, Swords, Activity, Network, ShieldCheck, Zap, BarChart3 , Mail, Monitor} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion';

function useCountUp(target: number, duration = 2000, inView = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
}

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  // ── Typewriter ──
  const words = ['Supercharged.', 'Automated.', 'Transformed.', 'Dominated.'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!isDeleting && displayed.length === current.length) t = setTimeout(() => setIsDeleting(true), 1800);
    else if (isDeleting && displayed.length > 0) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    else { setIsDeleting(false); setWordIndex(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, wordIndex]);

  // ── Live bid ──
  const [topBid, setTopBid] = useState(438500);
  useEffect(() => {
    const t = setInterval(() => setTopBid(p => Math.max(390000, p - Math.floor(Math.random() * 3000 + 500))), 3500);
    return () => clearInterval(t);
  }, []);

  // ── Animated counters ──
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const vendorCount = useCountUp(12400, 2200, statsInView);
  const savingsCount = useCountUp(340, 2000, statsInView);
  const eventsCount = useCountUp(89000, 2500, statsInView);

    const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mockTimer, setMockTimer] = useState(252);
  const [savings, setSavings] = useState(1400000);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => setMockTimer(p => (p > 0 ? p - 1 : 252)), 1000);
    const savingsInterval = setInterval(() => setSavings(p => p + Math.floor(Math.random() * 2500) + 100), 2000);
    return () => { clearInterval(timerInterval); clearInterval(savingsInterval); };
  }, []);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
  
  // Parallax Depth Hooks
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  const parallaxGridX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const parallaxGridY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const parallaxOrbsX = useTransform(smoothX, [-1, 1], [-60, 60]);
  const parallaxOrbsY = useTransform(smoothY, [-1, 1], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const formatSavings = (val: number) => `${(val / 1000000).toFixed(3)}M`;


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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30 overflow-hidden relative">
      
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 origin-left z-[200] shadow-none" style={{ scaleX: scrollYProgress }} />

      {/* --- ADVANCED FLOATING NAVIGATION BAR --- */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-sm px-6 h-16 flex items-center justify-between relative overflow-hidden"
        >
          {/* Subtle animated shine effect on the navbar */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
          />

          <div className="flex items-center gap-3 relative z-10">
            <img src="/logo_transparent.png" alt="ProcGen Logo" className="w-10 h-10 object-contain drop-shadow-none" style={{  }} />
            <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative z-10">
            {['Features', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-slate-600 hover:text-slate-900 transition-colors py-2">
                  {item}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-none"></span>
                </a>
              ))}
              <Link href="/careers" className="relative group text-slate-600 hover:text-slate-900 transition-colors py-2">
                Careers
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full group-hover:left-0 rounded-full shadow-none"></span>
              </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 relative z-10">
            <button onClick={() => setIsModalOpen(true)} className="group relative text-sm font-bold bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-sm hover:bg-blue-700 transition-colors">
              
              
              Connect with Sales
            </button>
          </div>
          
          <button className="md:hidden text-slate-600 relative z-10">
            <Menu size={24} />
          </button>
        </motion.nav>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-24 z-10">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-blue-400" />
              ProcGen 2.0 is Live
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.05]">
              Procurement, <br />
              <span className="text-blue-600">
                Supercharged.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Automate purchase requests, dominate reverse auctions, and connect with vendors in a stunning, lightning-fast platform.
            </motion.p>
            
                          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <button onClick={() => setIsModalOpen(true)} className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all text-lg shadow-md">
                  Connect with Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#features" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-all text-lg shadow-sm">
                  Explore Platform
                </a>
              </motion.div>
          </motion.div>

          {/* DYNAMIC DASHBOARD MOCKUP - LIVE REVERSE AUCTION SIMULATION */}
          <motion.div 
            initial={{ opacity: 0, y: 150, rotateX: 20 }} 
            animate={{ opacity: 1, y: 0, rotateX: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
            style={{ perspective: "1200px" }} 
            className="mt-12 relative max-w-7xl mx-auto z-20 w-full"
          >
            {/* Massive Ambient Glow Behind Mockup */}
            <div className="absolute -inset-1 bg-blue-600 rounded-3xl blur-[80px] opacity-20 animate-pulse"></div>
            
            <div className="relative rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
              
              {/* macOS Window Controls */}
              <div className="w-full h-12 bg-white border-b border-slate-200 flex items-center px-4 gap-2 relative">
                <div className="flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

              </div>

              <div className="flex w-full aspect-[16/10] sm:aspect-[21/9]">
                
                {/* Sidebar Navigation */}
                <div className="w-16 sm:w-48 bg-white border-r border-slate-200 p-4 flex flex-col gap-3 z-10 shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
                   <div className="h-9 w-full bg-blue-500/10 border border-slate-200 rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-blue-400 shadow-[inset_0_0_10px_rgba(217,70,239,0.1)]">
                     <Swords size={16} /><span className="hidden sm:block text-xs font-bold tracking-wide">Auctions</span>
                   </div>
                   {[
                     { icon: Activity, label: "Analytics" },
                     { icon: Users, label: "Suppliers" },
                     { icon: FileText, label: "Contracts" }
                   ].map((item, i) => (
                     <div key={i} className="h-9 w-full rounded-lg flex items-center justify-center sm:justify-start sm:px-3 gap-3 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer">
                       <item.icon size={16} /><span className="hidden sm:block text-xs">{item.label}</span>
                     </div>
                   ))}
                   
                   <div className="mt-auto hidden sm:block bg-slate-100 border border-slate-200 rounded-xl p-3">
                     <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Total Savings</p>
                     <p className="text-blue-400 font-mono font-bold text-lg">{formatSavings(savings)}</p>
                   </div>
                </div>

                {/* Main Content Area: Live Auction */}
                <div className="flex-1 p-4 sm:p-8 flex flex-col gap-6 relative overflow-hidden bg-gradient-to-br from-[#050505] to-[#0a0a0a]">
                  
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

                  {/* Header */}
                  <div className="flex justify-between items-end relative z-10 border-b border-slate-200 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-red-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Live Sourcing Event</span>
                      </div>
                      <h3 className="text-lg sm:text-3xl font-black text-slate-900">Q4 Raw Steel Procurement</h3>
                    </div>
                    <div className="text-right bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 backdrop-blur-md">
                      <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Time Remaining</p>
                      <p className="text-slate-900 font-mono text-xl sm:text-2xl font-bold">{formatTime(mockTimer)}</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    
                    {/* Left: Interactive Price Drop Chart */}
                    <div className="md:col-span-2 bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 flex flex-col relative shadow-2xl">
                      <div className="flex justify-between items-center mb-6">
                        <p className="text-slate-600 text-sm font-bold uppercase tracking-wider">Lowest Bid Trend (USD)</p>
                        <div className="text-blue-400 text-sm font-mono font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-slate-200">
                          -32.4% vs Target
                        </div>
                      </div>
                      
                      <div className="flex-1 relative w-full mt-2">
                        {/* Horizontal Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none z-0">
                          <div className="w-full h-px bg-slate-600"></div>
                          <div className="w-full h-px bg-slate-600"></div>
                          <div className="w-full h-px bg-slate-600"></div>
                          <div className="w-full h-px bg-slate-600"></div>
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
                    <div className="hidden md:flex bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-2xl p-5 flex-col relative overflow-hidden shadow-2xl">
                      {/* Top Fade */}
                      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      {/* Bottom Fade */}
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#020202] to-transparent z-20 pointer-events-none"></div>
                      
                      <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 z-30">Real-Time Bids</h4>
                      
                      <div className="flex-1 flex flex-col justify-end gap-3 relative z-10 pb-4">
                        {[
                          { vendor: 'Acme Steel Co.', bid: '$580,000', time: '12m ago', color: 'bg-slate-600' },
                          { vendor: 'Global Ind.', bid: '$525,000', time: '4m ago', color: 'bg-slate-600' },
                          { vendor: 'Stellar Metal', bid: '$490,000', time: '30s ago', color: 'bg-blue-500' },
                          { vendor: 'Acme Steel Co.', bid: ('$' + topBid.toLocaleString()), time: 'Just now', color: 'bg-blue-500', isNew: true },
                        ].map((bid, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: i * 1.5, type: "spring", bounce: 0.5 }}
                            className={`p-3.5 rounded-xl flex items-center justify-between shadow-lg ${bid.isNew ? 'bg-blue-500/10 border border-blue-500/40 relative overflow-hidden' : 'bg-slate-100 border border-slate-200'}`}
                          >
                            {bid.isNew && <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>}
                            <div className="flex items-center gap-3 relative z-10">
                              <div className={`w-2.5 h-2.5 rounded-full ${bid.color} shadow-[0_0_10px_currentColor]`}></div>
                              <div>
                                <p className={`text-xs font-bold ${bid.isNew ? 'text-blue-400' : 'text-slate-800'}`}>{bid.vendor}</p>
                                <p className="text-[9px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{bid.time}</p>
                              </div>
                            </div>
                            <span className={`font-mono text-sm font-bold relative z-10 ${bid.isNew ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]' : 'text-slate-900'}`}>{bid.bid}</span>
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

  
      {/* --- ANIMATED STATS BAR --- */}
      <section className="relative z-10 py-12 border-y border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div ref={statsRef} className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="text-4xl md:text-5xl font-black text-slate-900 font-mono">{vendorCount.toLocaleString()}+</div>
            <div className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-widest">Verified Vendors</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-mono">{savingsCount}%</div>
            <div className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-widest">Avg Cost Reduction</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="text-4xl md:text-5xl font-black text-blue-600 font-mono">{eventsCount.toLocaleString()}+</div>
            <div className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-widest">Auctions Completed</div>
          </motion.div>
        </div>
      </section>
      {/* --- MEGA FEATURES GRID --- */}
      <section id="features" className="py-20 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} className="text-center max-w-5xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              A procurement engine <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-orange-500">built for hyperscale.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light">
              Stop losing millions to inefficient sourcing. ProcGen replaces scattered emails, rogue spending, and blind negotiations with a ruthless, AI-driven profitability engine.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
            
            {/* 1. Auctions (Spans 2 columns) */}
            <motion.div variants={fadeIn} whileHover={{ scale: 1.015, rotateX: -1, rotateY: 1 }} style={{ transformPerspective: 1000 }} className="md:col-span-2 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-slate-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                    <Swords size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Ruthless Reverse Auctions</h3>
                  <p className="text-slate-600 max-w-md leading-relaxed text-lg">Force suppliers into real-time bidding wars. Our average enterprise client sees a <strong className="text-slate-900">34% drop in raw material costs</strong> within the first 90 days.</p>
                </div>
                <div className="mt-6 flex items-end gap-3 h-24 pt-6">
                  {[100, 85, 70, 55, 40].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-100 rounded-t-md relative group-hover:bg-blue-500/40 transition-colors shadow-[0_-5px_15px_rgba(217,70,239,0)] group-hover:shadow-[0_-5px_20px_rgba(217,70,239,0.3)]" style={{ height: h + '%' }}></div>
                  ))}
                  <div className="flex-1 h-full bg-blue-500/20 border border-slate-200 rounded-t-md flex items-center justify-center relative overflow-hidden group-hover:bg-blue-500/30 transition-colors shadow-[0_-5px_30px_rgba(16,185,129,0.2)]">
                    <span className="text-blue-400 font-bold rotate-[-90deg] whitespace-nowrap text-xs tracking-widest">AWARDED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Risk Scoring (Spans 1 column) */}
            <motion.div variants={fadeIn} whileHover={{ scale: 1.02, rotateX: 1.5, rotateY: -1.5 }} style={{ transformPerspective: 1000 }} className="md:col-span-1 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Vendor Risk AI</h3>
                <p className="text-slate-600 leading-relaxed">Auto-flag non-compliant suppliers before awarding contracts. Zero liability.</p>
                
                <div className="mt-auto p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-red-500/30 border-t-red-500 flex items-center justify-center font-bold text-red-400 text-sm">92</div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">High Risk Detected</p>
                    <p className="text-slate-500 text-xs">Missing ISO Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Intakes (Spans 1 column) */}
            <motion.div variants={fadeIn} whileHover={{ scale: 1.02, rotateX: -1.5, rotateY: 1 }} style={{ transformPerspective: 1000 }} className="md:col-span-1 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-slate-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Frictionless Intake</h3>
                <p className="text-slate-600 leading-relaxed">Employees submit requests in seconds. Smart routing handles the rest.</p>
                
                <div className="mt-auto space-y-2">
                  {[1,2,3].map((step, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === 2 ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-slate-100'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${i === 2 ? 'bg-blue-500 text-slate-900' : 'bg-slate-200 text-slate-500'}`}>{step}</div>
                      <div className={`h-2 rounded-full flex-1 ${i === 2 ? 'bg-blue-400/50' : 'bg-slate-200'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. ERP Sync (Spans 2 columns) */}
            <motion.div variants={fadeIn} whileHover={{ scale: 1.015, rotateX: 1, rotateY: -1 }} style={{ transformPerspective: 1000 }} className="md:col-span-2 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-slate-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                    <Network size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Deep ERP Integration</h3>
                  <p className="text-slate-600 leading-relaxed text-lg max-w-sm">
                    Two-way sync with <strong className="text-slate-900">SAP, Oracle, and NetSuite</strong>. Awards automatically convert into POs and write back to your ledger. Zero manual data entry.
                  </p>
                </div>
                
                <div className="flex-1 w-full relative h-full min-h-[160px]">
                  {/* Animation graphic */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-slate-900 text-xs">ProcGen</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-900/40 border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-xl z-10">
                    <span className="font-bold text-blue-400 text-xs">SAP ERP</span>
                  </div>
                  {/* Flow lines */}
                  <div className="absolute left-20 right-20 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 flex items-center overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-blue-500 shadow-[0_0_10px_#8b5cf6]"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Analytics (Spans 1 column) */}
            <motion.div variants={fadeIn} whileHover={{ scale: 1.02, rotateX: 1.5, rotateY: 1 }} style={{ transformPerspective: 1000 }} className="md:col-span-1 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-slate-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Spend Analytics</h3>
                <p className="text-slate-600 leading-relaxed">Instantly visualize maverick spend and identify massive saving opportunities.</p>
                
                <div className="mt-auto relative h-24 overflow-hidden rounded-xl border border-slate-200">
                  <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
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
            <motion.div variants={fadeIn} whileHover={{ scale: 1.015, rotateX: -1, rotateY: 1.5 }} style={{ transformPerspective: 1000 }} className="md:col-span-2 group relative bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 overflow-hidden hover:border-amber-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-500">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">The Ultimate Supplier Hub</h3>
                  <p className="text-slate-600 leading-relaxed text-lg max-w-sm">
                    Vendors get their own secure portal to submit bids, chat with your team in real-time, and track invoices. <strong className="text-slate-900">Zero onboarding friction.</strong>
                  </p>
                </div>
                
                <div className="flex-1 w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl relative">
                  {/* Mock Chat UI */}
                  <div className="flex gap-3 mb-4 items-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0"></div>
                    <div className="bg-slate-200 rounded-2xl rounded-bl-sm p-3 text-xs text-slate-900 max-w-[80%]">Bid submitted for steel shipment. Please review!</div>
                  </div>
                  <div className="flex gap-3 mb-4 items-end flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex-shrink-0"></div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl rounded-br-sm p-3 text-xs text-slate-900 max-w-[80%]">Looks great. We are awarding this to you now.</div>
                  </div>
                  <div className="w-full h-8 bg-slate-100 rounded-full flex items-center px-3 border border-slate-200">
                    <div className="w-20 h-2 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      
      

      {/* ─── CORTEX AI SECTION ─────────────────────────────────────────────── */}
      <section id="cortex" className="py-20 relative bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200">
              <Sparkles size={14} /> Agentic AI for Procurement
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Shaping the post-S2P era with <br /><span className="text-blue-600">Dorc AI Agents</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Dorc AI's autonomous agents run your procurement and finance end-to-end, so you can focus on strategy. Built on a governed, enterprise-grade AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            {/* Visual AI Representation */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl transform -rotate-6"></div>
              <div className="relative bg-white border border-slate-200 rounded-[2rem] p-12 shadow-xl flex flex-col items-center justify-center text-center">
                <img src="/dorc-logo.png" alt="Dorc AI Logo" className="w-48 h-48 object-contain mb-8 filter drop-shadow-2xl" />
                <h3 className="text-3xl font-black text-slate-900 mb-2">Dorc AI</h3>
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">Multi-Agent Swarm</p>
                
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center">
                    <div className="font-black text-blue-600 text-2xl mb-1">14+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase text-center">Autonomous Agents</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center">
                    <div className="font-black text-blue-600 text-2xl mb-1">0 Data</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase text-center">Silos Left</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center">
                    <div className="font-black text-blue-600 text-2xl mb-1">&lt;1s</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase text-center">Execution Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">One Procurement Tool. Complete Control.</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                    <Monitor size={26} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Live Vision OCR (Local Processing)</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Dorc AI natively analyzes your screen in real-time, instantly extracting data from supplier PDFs, competitor websites, and legacy ERPs without requiring backend integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                    <Bot size={26} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Governed Autonomous Action</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Infrastructure your CISO requires. Dorc acts autonomously within strict organizational guardrails, enforcing spend compliance and auto-flagging anomalies before payments occur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                    <Activity size={26} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">AI Spend Control Tower</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Get full visibility over direct and indirect spend. The analytics agents track real-time budget variances, map global footprints, and proactively aggregate demand for bulk negotiations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Agents */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">The world's most advanced procurement swarm</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Guided Intake Agent', desc: 'Auto-routes employee PRs to correct workflows.' },
                { name: 'Supplier Discovery Agent', desc: 'Scrapes the web for net-new global suppliers.' },
                { name: 'Negotiation Agent', desc: 'Proactively sends counter-offers to rank bids.' },
                { name: 'Auto-Award Agent', desc: 'Evaluates supplier matrices and recommends winners.' },
                { name: 'Should-Cost Agent', desc: 'Bottom-up cost modeling based on raw material indices.' },
                { name: 'Invoice Matching Agent', desc: '3-way matches POs, GRNs, and invoices in milliseconds.' },
                { name: 'Spend Analytics Agent', desc: 'Categorizes tail-spend and tracks variance.' },
                { name: 'Fraud Detection Agent', desc: 'Flags suspicious supplier behavior and duplicate invoices.' }
              ].map((agent, i) => (
                <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-blue-600">
                    <Bot size={22} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{agent.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      

      {/* --- IMPACT & TESTIMONIALS --- */}
      <section id="impact" className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={14} className="text-amber-400" fill="currentColor" />
            The New Standard
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Early Adopter Feedback.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See what supply chain leaders are saying as they test-drive the next generation of procurement in our exclusive Beta program.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Left/Right Edge Fade Gradients */}
          <div className="absolute top-0 left-0 w-12 md:w-48 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-48 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-6 whitespace-nowrap px-6"
            style={{ width: "max-content" }}
          >
            {/* Duplicate array twice for seamless infinite loop */}
            {[
              { quote: "We've been testing the ProcGen beta for a few weeks. It is hands-down the fastest procurement interface our team has ever touched.", role: "Director of Sourcing", company: "Beta Participant", avatar: "D" },
              { quote: "The live auction architecture is exactly what the industry needs. Being able to watch supplier bids drop in real-time changes the entire negotiation dynamic.", role: "Supply Chain Consultant", company: "Industry Analyst", avatar: "S" },
              { quote: "Our vendors actually prefer this over our legacy ERP portal. The onboarding is completely frictionless and the chat is instant.", role: "Procurement Ops", company: "Early Adopter", avatar: "P" },
              { quote: "Moving our intake requests out of messy email threads and into a centralized dashboard has immediately cleared up our workflow.", role: "VP of Operations", company: "Beta Participant", avatar: "V" },
              { quote: "We've been testing the ProcGen beta for a few weeks. It is hands-down the fastest procurement interface our team has ever touched.", role: "Director of Sourcing", company: "Beta Participant", avatar: "D" },
              { quote: "The live auction architecture is exactly what the industry needs. Being able to watch supplier bids drop in real-time changes the entire negotiation dynamic.", role: "Supply Chain Consultant", company: "Industry Analyst", avatar: "S" },
              { quote: "Our vendors actually prefer this over our legacy ERP portal. The onboarding is completely frictionless and the chat is instant.", role: "Procurement Ops", company: "Early Adopter", avatar: "P" },
              { quote: "Moving our intake requests out of messy email threads and into a centralized dashboard has immediately cleared up our workflow.", role: "VP of Operations", company: "Beta Participant", avatar: "V" }
            ].map((t, i) => (
               <div key={i} className="w-[350px] md:w-[450px] bg-white backdrop-blur-md border border-slate-200 rounded-3xl p-8 whitespace-normal flex flex-col hover:border-blue-500/30 hover:bg-white transition-all duration-300 shadow-xl cursor-grab active:cursor-grabbing">
                 <div className="flex gap-1 mb-6 text-blue-400">
                   {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-slate-700 text-base md:text-lg leading-relaxed flex-1 mb-8 font-light">"{t.quote}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/50 to-blue-600/50 border border-slate-200 flex items-center justify-center font-black text-slate-900 shadow-inner">
                     {t.avatar}
                   </div>
                   <div>
                     <p className="text-slate-900 font-bold text-sm">{t.role}</p>
                     <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{t.company}</p>
                   </div>
                 </div>
               </div>
            ))}
          </motion.div>
        </div>
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
            <div className="relative bg-white/90 backdrop-blur-md rounded-[2.4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden border border-slate-200">
              
              {/* Background ambient light inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-slate-200 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Live Virtual Masterclass
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                  The AI Sourcing <br />
                  <span className="text-blue-600">Revolution Summit '26</span>
                </h2>
                
                <p className="text-slate-700 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Join 5,000+ enterprise leaders to discover how dynamic reverse auctions are slashing raw material costs by up to 40%. 
                  <strong className="text-slate-900 font-bold block mt-2">Attendees receive $1,500 in onboarding credits and 3 months of the Professional Tier for free.</strong>
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="/vip" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center">
                    Claim Free VIP Pass
                  </Link>
                  <p className="text-sm font-semibold text-slate-500">Only 142 spots remaining.</p>
                </div>
              </div>

              {/* Graphic / Ticket Stub side */}
              <div className="w-full md:w-auto relative z-10">
                <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-white/10 to-white/0 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between backdrop-blur-md transform md:rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-r border-slate-200"></div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-l border-slate-200"></div>
                  
                  <div>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-1">Admit One</p>
                    <h3 className="text-2xl font-black text-slate-900">VIP ALL-ACCESS</h3>
                  </div>
                  
                  <div className="border-t-2 border-dashed border-slate-300 my-6"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Date</p>
                      <p className="text-slate-900 font-semibold">October 14th, 2026</p>
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
      <section id="pricing" className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Pricing that makes sense.</h2>
            <p className="text-slate-600 text-lg">No hidden fees. Scale your procurement effortlessly.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto items-stretch">
              {/* Starter */}
              <motion.div variants={fadeIn} className="bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-6 flex flex-col hover:border-slate-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-500 text-sm mb-6 h-12">Designed for small Indian businesses and low-touch adoption.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-slate-900 tracking-tighter">₹999</span><span className="text-slate-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['1 procurement workflow', 'Up to 3 internal users', 'Up to 10 active vendors', '25 purchase requests/mo', 'Basic approval flow'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-xs leading-tight"><CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                  <li className="flex items-start gap-2 text-slate-500 text-xs leading-tight mt-4 pt-4 border-t border-slate-200"><span className="text-slate-400 font-bold shrink-0">✕</span> No AI, ERP sync, or full portal</li>
                  <li className="flex items-start gap-2 text-blue-500/80 text-xs leading-tight font-medium mt-2">✓ ₹0 setup fee</li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 text-sm mt-auto">Connect with Sales</button>
              </motion.div>

              {/* Essentials */}
              <motion.div variants={fadeIn} className="bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-6 flex flex-col hover:border-slate-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Essentials</h3>
                <p className="text-slate-500 text-sm mb-6 h-12">Mid-market companies transitioning from email/Excel.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-slate-900 tracking-tighter">₹4,999</span><span className="text-slate-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Source-to-Pay Core', 'Vendor Portal (100 vendors)', 'Basic Analytics & Reporting', 'Dynamic Custom Fields', 'Unlimited Users'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-xs leading-tight"><CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                  <li className="flex items-start gap-2 text-slate-500 text-xs leading-tight mt-4 pt-4 border-t border-slate-200"><span className="text-slate-400 font-bold shrink-0">✕</span> No AI or ERP sync</li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 text-sm mt-auto">Connect with Sales</button>
              </motion.div>

              {/* Growth */}
              <motion.div variants={fadeIn} className="bg-white border-2 border-blue-500 rounded-[2rem] p-6 shadow-xl flex flex-col relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">Growth</h3>
                <p className="text-slate-600 text-sm mb-6 h-12">For enterprises looking for automation and AI efficiency.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-slate-900 tracking-tighter">₹4,999</span><span className="text-slate-600">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in Essentials', 'Dorc AI Swarm (Web/Mobile)', 'Advanced Analytics Dashboard', 'Unlimited Vendors in Portal', 'License Manager'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-800 text-xs leading-tight"><CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all shadow-md text-sm mt-auto border border-blue-700">Connect with Sales</button>
              </motion.div>

              {/* Enterprise */}
              <motion.div variants={fadeIn} className="bg-white backdrop-blur-sm border border-slate-200 rounded-[2rem] p-6 flex flex-col hover:border-slate-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-500 text-sm mb-6 h-12">Custom tailored for massive scale & compliance.</p>
                <div className="mb-6 flex flex-col"><span className="text-4xl font-black text-slate-900 tracking-tighter">₹39,999+</span><span className="text-slate-500">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in Growth', 'Contract Analyzer (AI)', 'Supplier Risk Scoring (AI)', '2-Way ERP Sync (SAP/Oracle)', 'Dorc Desktop App'].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-xs leading-tight"><CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-bold text-center text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 text-sm mt-auto">Connect with Sales</button>
              </motion.div>
            </div>
        </motion.div>
      </section>
      
      
      <footer className="relative z-10 bg-slate-50 pt-24 pb-12 border-t border-slate-200 overflow-hidden mt-12">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            
            {/* Brand Col */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo_transparent.png" alt="ProcGen Logo" className="w-12 h-12 object-contain drop-shadow-none" style={{  }} />
                <span className="font-bold text-2xl tracking-tight text-slate-900">ProcGen</span>
              </div>
              <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
                The AI-powered procurement engine built for hyperscale. Automate workflows, run reverse auctions, and slash costs effortlessly.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/procgen/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all shadow-lg hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:connect.procgen@gmail.com" className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all shadow-lg hover:scale-110">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 className="text-slate-900 font-bold mb-6 tracking-wide">Platform</h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#cortex" className="hover:text-blue-400 transition-colors">Cortex AI</a></li>
                <li><Link href="/vendor-register" className="hover:text-blue-400 transition-colors">Vendor Registration</Link></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="/vip" className="hover:text-blue-400 transition-colors flex items-center gap-2">Global Summit <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Live</span></a></li>
                
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="text-slate-900 font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li><a href="mailto:connect.procgen@gmail.com" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
              <Mail size={14} className="text-slate-600" /> connect.procgen@gmail.com
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
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-8 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Connect with Sales</h3>
              <p className="text-slate-600 text-sm mb-6">Drop your details below and our enterprise team will reach out to schedule a demo.</p>

              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h4>
                  <p className="text-slate-600 text-sm">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-200 transition-colors text-slate-900 placeholder-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Work Email</label>
                    <input 
                      type="email" required
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-200 transition-colors text-slate-900 placeholder-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text" required
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-200 transition-colors text-slate-900 placeholder-slate-600"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="mt-4 w-full py-4 rounded-xl font-bold text-center text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center disabled:opacity-50"
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
