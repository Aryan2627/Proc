
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VIPRegistration() {
  const [timeLeft, setTimeLeft] = useState({ d: 14, h: 5, m: 32, s: 59 });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = prev;
        if (s > 0) s--;
        else { s = 59; if (m > 0) m--; else { m = 59; if (h > 0) h--; else { h = 23; d--; } } }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(r => setTimeout(r, 2000));
    setFormState('success');
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <div className="min-h-screen bg-[#000000] font-sans text-white selection:bg-fuchsia-500/30 overflow-hidden relative flex flex-col">
      
      {/* Background Matrix/Grid effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_40%,transparent_100%)]"></div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute top-[-30%] right-[-10%] w-[80%] h-[80%] bg-fuchsia-600/30 rounded-full blur-[150px] mix-blend-screen"></motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-30%] left-[-10%] w-[80%] h-[80%] bg-violet-600/30 rounded-full blur-[150px] mix-blend-screen"></motion.div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to ProcGen
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            <span className="text-white font-bold tracking-tighter">P</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy & Form */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-6 w-fit shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <Sparkles size={14} className="text-fuchsia-400" />
              Global Summit '26
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
              The AI Sourcing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 animate-gradient-x">
                Revolution.
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Secure your VIP pass today. Get exclusive access to our newest AI reverse auction engine, plus <strong className="text-white">$1,500 in onboarding credits.</strong>
            </motion.p>

            {/* Countdown Timer */}
            <motion.div variants={fadeIn} className="flex gap-4 mb-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <span className="text-2xl font-black text-white">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-zinc-500 text-xs font-bold uppercase mt-2">{unit === 'd' ? 'Days' : unit === 'h' ? 'Hours' : unit === 'm' ? 'Mins' : 'Secs'}</span>
                </div>
              ))}
            </motion.div>

            {/* Registration Form */}
            <motion.div variants={fadeIn} className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                      <Check size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Ticket Secured!</h3>
                    <p className="text-zinc-400 mb-6">Your VIP Pass has been sent to your email. See you at the summit.</p>
                    <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors">Return to Home</Link>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleRegister} className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold text-white mb-2">Claim Your Free Pass</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1 uppercase tracking-wider">First Name</label>
                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 mb-1 uppercase tracking-wider">Last Name</label>
                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 mb-1 uppercase tracking-wider">Work Email</label>
                      <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="john@company.com" />
                    </div>
                    <button type="submit" disabled={formState === 'submitting'} className="w-full mt-2 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-black rounded-xl text-lg shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.6)] transition-all disabled:opacity-50 disabled:scale-100 transform active:scale-95 flex justify-center items-center">
                      {formState === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Generate VIP Ticket"
                      )}
                    </button>
                    <p className="text-center text-xs text-zinc-500 mt-2 flex items-center justify-center gap-1"><Shield size={12}/> Secure 256-bit encryption. No credit card required.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Side: Giant 3D Holographic Ticket */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: 30 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="hidden lg:flex justify-center items-center perspective-[1500px]"
          >
            <motion.div 
              animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0], y: [0, -20, 0] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[1/1.5] rounded-3xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Massive Holographic Glow behind ticket */}
              <div className="absolute inset-0 bg-fuchsia-500/40 blur-[100px] rounded-full scale-110 -z-10"></div>
              
              {/* The Ticket Object */}
              <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border-2 border-white/20 p-8 flex flex-col overflow-hidden shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]">
                
                {/* Shiny Sweep effect */}
                <motion.div animate={{ x: ['-200%', '200%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"></motion.div>

                {/* Ticket Punches */}
                <div className="absolute -left-6 top-[60%] w-12 h-12 bg-[#000] rounded-full border-r-2 border-white/20 shadow-[inset_-10px_0_20px_rgba(0,0,0,1)] z-10"></div>
                <div className="absolute -right-6 top-[60%] w-12 h-12 bg-[#000] rounded-full border-l-2 border-white/20 shadow-[inset_10px_0_20px_rgba(0,0,0,1)] z-10"></div>
                <div className="absolute top-[60%] left-0 w-full border-t-4 border-dashed border-white/10 z-0"></div>

                <div className="flex justify-between items-start mb-12">
                  <Globe size={40} className="text-zinc-500" />
                  <div className="text-right">
                    <p className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm">Admit One</p>
                    <p className="text-zinc-500 font-mono text-sm mt-1">#PRC-8472-VIP</p>
                  </div>
                </div>

                <h2 className="text-5xl font-black text-white leading-none mb-4">SUMMIT<br/>2026</h2>
                <p className="text-xl text-zinc-400 font-light">Global Virtual Masterclass</p>

                <div className="mt-auto z-10 space-y-6 pt-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Date</p>
                      <p className="text-white font-semibold text-lg">Oct 14th</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Time</p>
                      <p className="text-white font-semibold text-lg">10:00 AM PST</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Keynote Speaker</p>
                      <p className="text-white font-semibold text-lg">Aryan, Founder @ ProcGen</p>
                    </div>
                  </div>
                </div>

                {/* Barcode bottom */}
                <div className="absolute bottom-6 left-8 right-8 h-12 flex gap-1.5 opacity-60 mix-blend-overlay">
                  {[4,2,3,5,1,2,6,1,3,2,1,4,5,2,1,3,2,4,1,2,5].map((w, i) => (
                    <div key={i} className="bg-white h-full rounded-sm" style={{ width: `${w * 4}px` }}></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
