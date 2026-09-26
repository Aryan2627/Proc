"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Network, Activity, ShieldAlert, Cpu, Zap, Lock, EyeOff, Globe, Database, ArrowRight, TerminalSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DarkPoolDashboard() {
  const [volume, setVolume] = useState(8200); // Target is 10000
  const [joined, setJoined] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[10:42:01] POOL INITIALIZED: Industrial Steel (Cold Rolled)",
    "[10:45:12] Anonymous Node 4a9f committed 2,500 tons.",
    "[11:12:05] Anonymous Node 8b1c committed 1,200 tons.",
    "[12:30:44] Supplier 'Acme Corp' Tier 2 discount locked (-12%).",
    "[14:02:11] Anonymous Node 2f3a committed 4,500 tons."
  ]);

  useEffect(() => {
    if (executing) return;
    const interval = setInterval(() => {
      const randomNode = Math.random().toString(36).substring(2, 6);
      const randomAmount = Math.floor(Math.random() * 50) + 10;
      setVolume(v => Math.min(9999, v + randomAmount));
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'})}] Anonymous Node ${randomNode} evaluating pool...`]);
    }, 4500);
    return () => clearInterval(interval);
  }, [executing]);

  const handleJoinSwarm = () => {
    if (joined) return;
    setJoined(true);
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'})}] ⚠️ LOCAL NODE COMMITTED 1,800 TONS.`]);
    
    let current = volume;
    const target = 10000;
    const step = (target - current) / 20;
    
    const fillInterval = setInterval(() => {
      current += step;
      if (current >= target) {
        setVolume(10000);
        clearInterval(fillInterval);
        triggerExecution();
      } else {
        setVolume(Math.floor(current));
      }
    }, 50);
  };

  const triggerExecution = () => {
    setExecuting(true);
    setTimeout(() => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] THRESHOLD REACHED: 10,000 TONS.`]), 500);
    setTimeout(() => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] LOCKING TIER-3 MEGA-DISCOUNT (-24%).`]), 1500);
    setTimeout(() => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] INITIATING SMART CONTRACT WITH SUPPLIER...`]), 3000);
    setTimeout(() => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] EXECUTION SUCCESSFUL. ROUTING SAVINGS TO LOCAL NODES.`]), 5000);
  };

  const progress = Math.min(100, (volume / 10000) * 100);
  const savings = joined ? (executing ? 425000 : 210000) : 185000;

  return (
    <div className="min-h-screen bg-[#02060D] font-sans text-slate-300 selection:bg-emerald-500/30 flex flex-col h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <header className="h-16 border-b border-emerald-900/30 flex items-center justify-between px-6 bg-[#040A15]/80 backdrop-blur-md shrink-0 relative z-20 shadow-lg">
        <div className="flex items-center gap-6">
          <Link href="/ai-lab" className="w-10 h-10 bg-emerald-950/30 border border-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-500 hover:text-emerald-300 hover:bg-emerald-900/50 transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-emerald-400 font-black tracking-widest uppercase text-sm">
               <Network size={16} /> Dark Pool Syndicate
             </div>
             <div className="text-[10px] text-emerald-600/70 font-mono">DECENTRALIZED CARTEL DYNAMICS</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-900/50 text-xs font-bold text-emerald-500 font-mono">
             <EyeOff size={14} /> SECURE ANONYMOUS NETWORK
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative z-10 p-6 gap-6 max-w-[1600px] mx-auto w-full">
        
        <div className="w-80 flex flex-col gap-6 shrink-0">
          <div className="bg-[#050C1A] border border-emerald-900/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
            <h2 className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2"><Database size={16} /> Active Swarm Pools</h2>
            
            <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <div className="font-bold text-white text-sm">Industrial Steel (CR)</div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1"></div>
                </div>
                <div className="text-xs text-emerald-400/70 font-mono mb-3 relative z-10">Supplier: Acme Global</div>
                <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden relative z-10">
                   <div className="h-full bg-emerald-500" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4 opacity-50 cursor-not-allowed">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-white text-sm">Lithium Ion Cells</div>
                  <Lock size={12} className="text-slate-500 mt-1" />
                </div>
                <div className="text-xs text-slate-500 font-mono mb-3">Supplier: SinoTech Energy</div>
                <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                   <div className="h-full bg-slate-500 w-[45%]"></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4 opacity-50 cursor-not-allowed">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-white text-sm">Semiconductor Wafers</div>
                  <Lock size={12} className="text-slate-500 mt-1" />
                </div>
                <div className="text-xs text-slate-500 font-mono mb-3">Supplier: TS-Micro</div>
                <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                   <div className="h-full bg-slate-500 w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#050C1A] border border-emerald-900/30 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
           <motion.div 
             animate={{ rotate: executing ? 360 : 360 }} 
             transition={{ duration: executing ? 5 : 40, repeat: Infinity, ease: "linear" }}
             className="absolute w-[600px] h-[600px] border border-emerald-900/20 rounded-full"
           ></motion.div>
           <motion.div 
             animate={{ rotate: executing ? -360 : -360 }} 
             transition={{ duration: executing ? 7 : 60, repeat: Infinity, ease: "linear" }}
             className="absolute w-[450px] h-[450px] border border-emerald-800/20 rounded-full border-dashed"
           ></motion.div>

           <div className="relative z-20 flex flex-col items-center">
             <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="88" fill="none" stroke="#064e3b" strokeWidth="4" />
                  <motion.circle 
                    cx="96" cy="96" r="88" 
                    fill="none" 
                    stroke={executing ? "#10b981" : "#059669"} 
                    strokeWidth="6" 
                    strokeDasharray="553" 
                    strokeDashoffset={553 - (553 * progress) / 100} 
                    className="transition-all duration-300"
                  />
                </svg>
                <div className={`w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-colors duration-700 ${executing ? 'bg-emerald-500 shadow-[0_0_100px_rgba(16,185,129,0.6)]' : 'bg-[#022c22]'}`}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${executing ? 'text-emerald-950' : 'text-emerald-500'}`}>Pool Volume</div>
                  <div className={`text-2xl font-black font-mono ${executing ? 'text-white' : 'text-emerald-300'}`}>{volume.toLocaleString()}</div>
                  <div className={`text-[9px] font-mono mt-1 ${executing ? 'text-emerald-900' : 'text-emerald-600'}`}>/ 10,000 TONS</div>
                </div>
             </div>

             <div className="mt-12">
               {!joined ? (
                 <button onClick={handleJoinSwarm} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 flex items-center gap-3 group">
                   <Activity size={18} className="group-hover:animate-pulse" /> Inject 1,800 Tons
                 </button>
               ) : executing ? (
                 <div className="px-8 py-4 bg-emerald-950 border border-emerald-500 text-emerald-400 font-black uppercase tracking-widest text-sm rounded-xl flex items-center gap-3">
                   <ShieldAlert size={18} /> EXECUTING MEGA-ORDER
                 </div>
               ) : (
                 <div className="px-8 py-4 bg-white/5 border border-white/10 text-emerald-500 font-bold uppercase tracking-widest text-sm rounded-xl flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Awaiting Threshold
                 </div>
               )}
             </div>
           </div>

           <div className="absolute inset-0 pointer-events-none">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
               <div className="absolute top-[80px] w-10 h-10 bg-[#064e3b] border border-emerald-600/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                 <Globe size={14} className="text-emerald-500" />
               </div>
               <motion.div animate={{ height: [0, 150, 0], opacity: [0, 1, 0], top: ['100px', '250px', '250px'] }} transition={{ duration: 1, repeat: Infinity }} className="absolute w-0.5 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)]"></motion.div>
             </motion.div>

             <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
               <div className="absolute bottom-[120px] left-[150px] w-8 h-8 bg-[#064e3b] border border-emerald-600/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                 <Globe size={12} className="text-emerald-500" />
               </div>
             </motion.div>

             <AnimatePresence>
               {joined && (
                 <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="absolute bottom-[220px] right-[100px] w-12 h-12 bg-emerald-500 border-2 border-emerald-300 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.8)]">
                      <Cpu size={20} className="text-emerald-950" />
                    </div>
                    <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 180, opacity: 1 }} className="absolute bottom-[240px] right-[140px] h-1 bg-emerald-400 origin-right shadow-[0_0_20px_rgba(16,185,129,1)] -rotate-[25deg]"></motion.div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
        </div>

        <div className="w-96 flex flex-col gap-6 shrink-0">
          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest mb-2">Projected Pool Savings</div>
            <div className="text-4xl font-black text-white font-mono mb-2">
              ${savings.toLocaleString()}
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
              <ArrowRight size={14} /> ${(savings / 3).toLocaleString()} allocated to your node
            </div>
          </div>

          <div className="flex-1 bg-[#03070E] border border-slate-800/50 rounded-2xl p-1 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-[#050C1A]">
               <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2"><TerminalSquare size={14} /> System Execution Log</div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-3 flex flex-col justify-end">
               {logs.map((log, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: -10 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   className={log.includes('THRESHOLD REACHED') || log.includes('MEGA-DISCOUNT') ? 'text-emerald-400 font-bold' : log.includes('LOCAL NODE') ? 'text-white font-bold bg-white/5 p-1 rounded' : 'text-slate-500'}
                 >
                   {log}
                 </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}