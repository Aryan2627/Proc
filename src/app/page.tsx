"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target, MessageCircle, Send, Globe, Database, Lock, Trophy, Star, ArrowUpRight, PlayCircle, TerminalSquare, FileText, Search, Handshake, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const [meteors, setMeteors] = useState<{x: number, y: number, delay: number, duration: number}[]>([]);

  // Synthesized notification bell using Web Audio API
  const playNotificationBell = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      
      const playTone = (freq: number, vol: number, dur: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + dur);
      };
      
      // Play a beautiful, professional two-tone chime (A5 and A6)
      playTone(880, 0.4, 1.2); 
      playTone(1760, 0.15, 0.8);
    } catch (e) {
      console.error("Audio playback failed:", e);
    }
  };

  // Auto-open chat logic: Trigger 3s after first scroll
// Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const hasAutoOpened = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!hasAutoOpened.current && window.scrollY > 100) {
        hasAutoOpened.current = true;
        setTimeout(() => {
          playNotificationBell();
          setIsChatOpen(true);
        }, 3000);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMeteors([...Array(15)].map(() => ({
      x: Math.random() * 2000, // Spanning wider
      y: Math.random() * -300 - 100, // Starting above
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2
    })));
  }, []);


  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', content: "Hi there! I'm the Dorc AI Sales Rep. How can I help you transform your procurement today?" }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');


  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
    setTimeout(() => {
      setIsModalOpen(false);
      setFormState('idle');
      setFormData({ name: '', email: '', company: '' });
    }, 2500);
  };

  const fadeIn: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  


  return (
    <div className="min-h-screen bg-[#F9F9FC] font-sans text-slate-900 selection:bg-blue-500/30 overflow-hidden relative font-inter">
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[200]" style={{ scaleX }} />

      
      {/* --- ATLAN-STYLE MINIMALIST NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <img src="/dorc-logo.png" alt="Dorc AI" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Platform <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Solutions <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </div>
              <a href="/p/customers" className="hover:text-blue-600 transition-colors py-5">Customers</a>
              <Link href="/know/enterprise-context-layer" className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors group py-5">
                Resources <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:-rotate-180 transition-all duration-300" />
              </Link>
              <a href="#pricing" className="hover:text-blue-600 transition-colors py-5">Pricing</a>
              <Link href="/ai-lab" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-500 font-bold transition-colors py-5 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                AI Lab
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            
            <button onClick={() => setIsModalOpen(true)} className="text-[15px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all flex items-center gap-2">
              Request Demo
            </button>
          </div>
          <button className="lg:hidden text-slate-600"><Menu size={24} /></button>
        </div>
      </nav>


      {/* --- HIGH-CONTRAST HERO (ATLAN VIBE) --- */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 z-10 bg-[#0B101E] overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Meteor Shower */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {meteors.map((m, i) => (
            <motion.div
              key={i}
              className="absolute h-[1.5px] w-[100px] bg-gradient-to-r from-blue-300 via-cyan-300 to-transparent rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              initial={{ opacity: 0, x: m.x, y: m.y, rotate: 215 }}
              animate={{
                opacity: [0, 1, 0],
                x: m.x - 1000,
                y: m.y + 1000
              }}
              transition={{
                duration: m.duration,
                repeat: Infinity,
                delay: m.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative text-center flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide mb-8 backdrop-blur-sm">
              <Sparkles size={14} /> Meet Dorc AI: The Procurement Agent
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white mb-6 leading-[1.05] max-w-5xl">
              Your AI doesn't know your supply chain. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Let’s fix that.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-normal">
              Enterprise procurement fails not because of vendors, but because of missing context. ProcGen unifies your ERP, PDFs, and negotiations into one autonomous control tower.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button onClick={() => setIsModalOpen(true)} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-all text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                Take a Tour <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#features" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-base backdrop-blur-sm">
                Explore the Platform
              </a>
            </motion.div>
          </motion.div>
        </div>
        
          </header>

      
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


      {/* --- ATLAN BENTO BOX / FEATURES SECTION --- */}
      
      {/* --- PIPELINE MANIFESTO SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-[#02040A] text-white border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] mb-6 text-white max-w-3xl mx-auto">
              Context doesn't come from a <span className="text-slate-400">prompt.</span> It comes from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">pipeline.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              LLMs hallucinate on raw data. We structure your enterprise knowledge before the AI ever sees it.
            </p>
          </motion.div>

          {/* Advanced Animated Pipeline UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl"
          >
             {/* Left: Raw Data Sources */}
             <div className="w-full lg:w-1/4 flex flex-col gap-5 relative z-10">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"><Globe size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">SAP Ariba</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Unstructured POs</div>
                   </div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"><TerminalSquare size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">Legacy ERP</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Raw Inventory</div>
                   </div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-slate-500 transition-colors">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"><Network size={24}/></div>
                   <div>
                     <div className="text-base font-bold text-white">SharePoint</div>
                     <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">Messy PDFs</div>
                   </div>
                </div>
             </div>

             {/* Middle: The Animated Context Pipeline */}
             <div className="flex-1 w-full flex flex-col items-center justify-center relative py-16 lg:py-0 min-h-[200px]">
                {/* Horizontal flow line for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,1)]"
                  />
                </div>
                {/* Vertical flow line for mobile */}
                <div className="lg:hidden absolute top-0 left-1/2 h-full w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ y: ["-100%", "200%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,1)]"
                  />
                </div>

                <div className="relative z-10 bg-[#0A0F1C] border border-blue-500/40 p-8 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.2)] flex flex-col items-center transform hover:scale-105 transition-transform duration-500">
                   <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/50 relative">
                      <div className="absolute inset-0 bg-blue-400/20 animate-ping rounded-2xl"></div>
                      <Activity className="text-blue-300 relative z-10" size={36} />
                   </div>
                   <div className="text-xl font-black text-white tracking-widest uppercase text-center">ProcGen Context Layer</div>
                   <div className="text-sm text-blue-400 mt-3 font-mono bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-900/50 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                     Resolving Entity Graph...
                   </div>
                </div>
             </div>

             {/* Right: The AI Agent */}
             <div className="w-full lg:w-1/4 relative z-10">
                <div className="bg-blue-900/20 backdrop-blur-md border border-blue-500/20 p-8 rounded-3xl shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col items-center text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-colors"></div>
                   
                   <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
                      <img src="/dorc-logo.png" alt="Dorc AI" className="w-14 h-14 object-contain filter brightness-0 invert drop-shadow-md" />
                   </div>
                   <div className="text-2xl font-black text-white mb-3 tracking-tight">Dorc AI Agent</div>
                   <div className="text-sm text-blue-200 leading-relaxed font-medium">
                     Receives structured context. Negotiates with 100% precision.
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      
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

      <section id="features" className="py-24 bg-[#F9F9FC]"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 font-bold text-sm tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm">
                 <Sparkles size={16} className="text-blue-600" /> The Core Platform
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-4xl md:text-[56px] font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Features built for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  autonomous procurement.
                </span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                Dorc AI isn't just a chatbot wrapper. It reads your ERP, analyzes live vendor matrices, and orchestrates negotiations end-to-end without human intervention.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Bento Card 1: Large */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Live Vision OCR (Local)</h3>
                <p className="text-slate-600 leading-relaxed max-w-md font-medium">
                  Dorc AI natively analyzes your screen in real-time, extracting data from supplier PDFs and legacy ERPs without requiring backend integrations or risking data leaks.
                </p>
              </div>
              
              <div className="mt-8 relative h-64 w-full bg-slate-50 rounded-2xl border border-slate-100/80 overflow-hidden flex items-center justify-center p-6 shadow-inner group-hover:border-blue-100 transition-colors">
                 {/* Fake Document UI */}
                 <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-lg p-5 overflow-hidden">
                    {/* Animated Scanner Line */}
                    <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,1)] z-20"
                    />
                    
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-rose-400/20"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                           <div className="w-3 h-3 rounded-full bg-emerald-400/20"></div>
                        </div>
                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                    
                    <div className="flex gap-4 mb-6">
                       <div className="w-16 h-16 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center"><FileText className="text-slate-300" size={24}/></div>
                       <div className="flex-1 space-y-3 pt-1">
                          <div className="h-2.5 w-3/4 bg-slate-200 rounded"></div>
                          <div className="h-2.5 w-1/2 bg-slate-100 rounded"></div>
                          <div className="h-2.5 w-full bg-slate-100 rounded"></div>
                       </div>
                    </div>
                    
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-center justify-between">
                         <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Extracted Total</span>
                         <span className="text-sm font-mono text-blue-700 font-black">$1,452,000.00</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">AI Spend Control</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Track real-time budget variances and categorize tail-spend instantly.
                </p>
              </div>

              <div className="mt-8 relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-end gap-1.5 shadow-inner">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Q4 Variance</div>
                  <div className="flex items-end justify-between gap-2 h-full w-full">
                      {[40, 65, 45, 95, 55, 75].map((height, i) => (
                          <motion.div 
                              key={i} 
                              initial={{ height: 0 }} 
                              whileInView={{ height: `${height}%` }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className={`w-full rounded-t-md transition-colors ${i === 3 ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-200 group-hover:bg-slate-300'}`}
                          />
                      ))}
                  </div>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Swords size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Negotiation Agent</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Autonomously sends counter-offers to rank bids and drive costs down.
                </p>
              </div>

              <div className="mt-8 relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col gap-3 overflow-hidden shadow-inner justify-end">
                  <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.2}} className="self-start bg-white border border-slate-200 p-3 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
                      <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.6}} className="self-end bg-purple-600 p-3 rounded-xl rounded-tr-sm shadow-md max-w-[85%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="h-2 w-20 bg-white/90 rounded mb-2 relative z-10"></div>
                      <div className="h-2 w-16 bg-purple-300 rounded relative z-10"></div>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:1.0}} className="self-start bg-white border border-slate-200 p-3 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
                       <div className="flex gap-1.5 items-center">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                         <div className="h-2 w-12 bg-slate-200 rounded"></div>
                       </div>
                  </motion.div>
              </div>
            </div>

            {/* Bento Card 4: Wide */}
            <div className="md:col-span-3 bg-[#0A0F1C] rounded-[2rem] border border-slate-800 p-10 flex flex-col md:flex-row justify-between items-center gap-10 hover:border-slate-700 hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-white group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/30 transition-colors duration-700"></div>
              
              <div className="relative z-10 md:w-1/2">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                  <Network size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Multi-Agent Swarm</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-lg">
                  Deploy over 14 specialized autonomous agents working in concert. From Supplier Discovery to Invoice 3-way Matching, scale your procurement ops 100x without adding headcount.
                </p>
                <div className="mt-8 flex gap-2 flex-wrap">
                  {['Guided Intake', 'Supplier Discovery', 'Auto-Award', 'Should-Cost', 'Fraud Detection'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated Node Graph Representation */}
              <div className="relative z-10 w-full md:w-1/2 h-64 border border-white/10 bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden">
                 <div className="absolute w-full h-full">
                    {/* Background lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                       <path d="M50 150 C 150 150, 200 50, 350 150" stroke="cyan" strokeWidth="2" fill="none" className="path-animate" />
                       <path d="M50 150 C 150 150, 200 250, 350 150" stroke="indigo" strokeWidth="2" fill="none" className="path-animate" />
                    </svg>
                 </div>
                 
                 {/* Central Node */}
                 <div className="absolute w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] z-20">
                    <img src="/dorc-logo.png" alt="Dorc AI" className="w-8 h-8 object-contain filter brightness-0 invert drop-shadow-sm" />
                 </div>
                 
                 {/* Orbiting / Connected Nodes */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[280px] h-[280px] border border-white/5 rounded-full flex items-center justify-center">
                    <div onClick={() => setActiveAgent("fraud")} className="absolute top-0 w-8 h-8 bg-slate-800 border-2 border-slate-500 rounded-full -translate-y-1/2 shadow-lg cursor-pointer hover:scale-150 hover:bg-slate-700 transition-all z-30"></div>
                    <div onClick={() => setActiveAgent("cost")} className="absolute bottom-0 w-8 h-8 bg-slate-800 border-2 border-slate-500 rounded-full translate-y-1/2 shadow-lg cursor-pointer hover:scale-150 hover:bg-slate-700 transition-all z-30"></div>
                 </motion.div>
                 
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[180px] h-[180px] border border-white/5 rounded-full flex items-center justify-center">
                    <div onClick={() => setActiveAgent("discovery")} className="absolute left-0 w-6 h-6 bg-cyan-600 border-2 border-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)] cursor-pointer hover:scale-150 transition-all z-30"></div>
                    <div onClick={() => setActiveAgent("award")} className="absolute right-0 w-6 h-6 bg-indigo-600 border-2 border-indigo-400 rounded-full translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.8)] cursor-pointer hover:scale-150 transition-all z-30"></div>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-white border-t border-slate-200"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Pricing that makes sense.</h2>
            <p className="text-lg text-slate-600">No hidden fees. Scale your procurement effortlessly.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Essentials */}
            <div className="bg-[#F9F9FC] border border-slate-200 rounded-3xl p-8 flex flex-col transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">For small teams and low-touch adoption.</p>
              <div className="mb-8"><span className="text-4xl font-bold text-slate-900">₹999</span><span className="text-slate-500">/mo</span></div>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all mb-8">Start Free Trial</button>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 1 procurement workflow</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Up to 3 internal users</li>
                <li className="flex items-center gap-3 text-slate-400"><X size={18} /> No AI or ERP sync</li>
              </ul>
            </div>

            {/* Growth */}
            <div className="bg-white border-2 border-blue-500 rounded-3xl p-8 flex flex-col relative shadow-xl md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">Essentials</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">For mid-market companies scaling ops.</p>
              <div className="mb-8"><span className="text-4xl font-bold text-slate-900">₹4,999</span><span className="text-slate-500">/mo</span></div>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md transition-all mb-8">Get Started</button>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Source-to-Pay Core</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Vendor Portal (100 vendors)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Advanced Analytics</li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-[#F9F9FC] border border-slate-200 rounded-3xl p-8 flex flex-col transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Full AI efficiency & limitless scale.</p>
              <div className="mb-8"><span className="text-4xl font-bold text-slate-900">₹14,999</span><span className="text-slate-500">/mo</span></div>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-3 rounded-xl font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all mb-8">Contact Sales</button>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Dorc AI Swarm</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Unlimited Vendors</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 2-Way ERP Sync (SAP/Oracle)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      </section>
      
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
                        className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
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

      {/* --- MEGA FOOTER --- */}
      <footer className="bg-[#0B101E] pt-24 pb-12 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/dorc-logo.png" alt="Dorc AI" className="w-8 h-8 object-contain filter brightness-0 invert" />
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
                  <li><a href="/p/dorc-ai-agents" className="hover:text-blue-400 transition-colors">Dorc AI Agents</a></li>
                  <li><a href="/p/enterprise-data-graph" className="hover:text-blue-400 transition-colors">Enterprise Data Graph</a></li>
                  <li><a href="/p/live-vision-ocr" className="hover:text-blue-400 transition-colors">Live Vision OCR</a></li>
                  <li><a href="/p/security" className="hover:text-blue-400 transition-colors">Security & Trust</a></li>
                  <li><a href="/#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                <ul className="space-y-4">
                  <li><a href="/p/direct-spend" className="hover:text-blue-400 transition-colors">For Direct Spend</a></li>
                  <li><a href="/p/indirect-spend" className="hover:text-blue-400 transition-colors">For Indirect Spend</a></li>
                  <li><a href="/p/sap-ariba" className="hover:text-blue-400 transition-colors">For SAP Ariba Users</a></li>
                  <li><a href="/p/finance-teams" className="hover:text-blue-400 transition-colors">For Finance Teams</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><a href="/p/about-us" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers (We're Hiring!)</a></li>
                  <li><a href="/p/blog-news" className="hover:text-blue-400 transition-colors">Blog & News</a></li>
                  <li><a href="/p/contact-sales" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-slate-500">
              <p>&copy; 2026 ProcGen Inc. Built for the future of procurement.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="/p/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/p/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/p/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
        </div>
      </footer>


      {/* --- CONNECT WITH SALES MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 overflow-hidden">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Connect with Sales</h3>
              <p className="text-slate-600 text-sm mb-6">Drop your details below and our team will schedule a demo.</p>

              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h4>
                  <p className="text-slate-600 text-sm">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Work Email</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900" placeholder="john@company.com" />
                  </div>
                  <button type="submit" disabled={formState === 'submitting'} className="mt-4 w-full py-4 rounded-xl font-bold text-center text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center justify-center disabled:opacity-50">
                    {formState === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* --- AI SDR CHAT WIDGET --- */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-105 z-[90] ${isChatOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={32} />
      </button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Dorc AI SDR</h4>
                  <p className="text-[10px] text-blue-100 uppercase tracking-widest">Online</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-blue-100 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="h-[320px] p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'ai' ? 'bg-white border border-slate-200 text-slate-800 self-start rounded-tl-sm' : 'bg-blue-600 text-white self-end rounded-tr-sm'}`}>
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-slate-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if(!currentMessage.trim()) return;
                  const newMsgs = [...chatMessages, { role: 'user', content: currentMessage }];
                  setChatMessages(newMsgs);
                  setCurrentMessage('');
                  // Mock AI reply
                  setTimeout(() => {
                     setChatMessages([...newMsgs, { role: 'ai', content: "That sounds like a perfect use case for our autonomous agents. Would you like me to connect you with one of our human product specialists to discuss further?" }]);
                  }, 1200);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900"
                />
                <button type="submit" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 shrink-0 shadow-sm transition-transform hover:scale-105 disabled:opacity-50" disabled={!currentMessage.trim()}>
                  <Send size={16} className="-ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
