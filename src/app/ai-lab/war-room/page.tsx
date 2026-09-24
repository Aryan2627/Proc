"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, ShieldAlert, TerminalSquare, AlertTriangle, Crosshair, Zap, Activity, LineChart, Cpu, Swords, Shield, Wand2, Handshake, Skull } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  role: 'buyer' | 'supplier' | 'system';
  content: string;
  timestamp: string;
};

export default function WarRoomSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'sys-1',
      role: 'system',
      content: 'GAME START. OPPONENT: Arthur Pendelton (Acme Global Steel). BEHAVIORAL PROFILE: Aggressive. High defense against logical arguments. Vulnerable to competitive bluffs.',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    },
    {
      id: 'sup-1',
      role: 'supplier',
      content: 'I saw the RFQ. Given the logistics crunch, our baseline quote is $950/ton. I don\'t have a lot of wiggle room here, so let\'s make this quick.',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(950);
  const [patience, setPatience] = useState(100);
  const [gameState, setGameState] = useState<'playing' | 'victory' | 'defeat'>('playing');
  const [screenShake, setScreenShake] = useState(false);
  const [damageText, setDamageText] = useState<{id: number, text: string, type: 'price' | 'patience'}[]>([]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const addDamageText = (text: string, type: 'price' | 'patience') => {
    const id = Date.now();
    setDamageText(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setDamageText(prev => prev.filter(d => d.id !== id));
    }, 2000);
  };

  const triggerShake = () => {
    setScreenShake(true);
    setTimeout(() => setScreenShake(false), 400);
  };

  const handleAction = (tactic: 'hardball' | 'logic' | 'bluff' | 'concede') => {
    if (gameState !== 'playing' || isTyping) return;

    let buyerText = "";
    if (tactic === 'hardball') buyerText = "This price is unacceptable. We need a massive reduction immediately or we are pulling the entire PO.";
    if (tactic === 'logic') buyerText = "Iron ore indices are down 4% this month and fuel costs stabilized. You can't justify $950/ton.";
    if (tactic === 'bluff') buyerText = "I have SinoSteel on the other line offering $860/ton with Net-60 terms. You need to match it right now.";
    if (tactic === 'concede') buyerText = `Fine. We will accept the contract at $${currentQuote}/ton. Send the paperwork.`;

    const timeStr = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'buyer', content: buyerText, timestamp: timeStr }]);
    
    if (tactic === 'concede') {
       setTimeout(() => {
         setMessages(prev => [...prev, { id: Date.now().toString(), role: 'supplier', content: "Smart decision. I'll get the DocuSign routed to your legal team.", timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
         if (currentQuote <= 880) setGameState('victory');
         else setGameState('defeat');
       }, 1500);
       return;
    }

    setIsTyping(true);

    // RPG Logic Calculation
    setTimeout(() => {
      let aiResponse = "";
      let systemAnalysis = "";
      let priceDrop = 0;
      let patienceDrop = 0;

      if (tactic === 'hardball') {
         priceDrop = Math.floor(Math.random() * 15) + 15; // 15 to 30
         patienceDrop = Math.floor(Math.random() * 15) + 20; // 20 to 35
         aiResponse = "Don't threaten me. I have other buyers. I'll drop it a bit to keep the relationship, but push me again and I walk.";
         systemAnalysis = "CRITICAL HIT ON PRICE. But Supplier Patience dropped significantly!";
         triggerShake();
      } else if (tactic === 'logic') {
         priceDrop = Math.floor(Math.random() * 10) + 5; // 5 to 15
         patienceDrop = Math.floor(Math.random() * 5) + 2; // 2 to 7
         aiResponse = "The indices don't reflect my actual warehouse overhead. I can give you a small concession, but that's it.";
         systemAnalysis = "MODERATE SUCCESS. Supplier's defense absorbed most of the logical argument.";
      } else if (tactic === 'bluff') {
         const success = Math.random() > 0.5;
         if (success) {
            priceDrop = Math.floor(Math.random() * 20) + 25; // 25 to 45
            patienceDrop = Math.floor(Math.random() * 10) + 10;
            aiResponse = "Damn it. Fine, I'll match SinoSteel's baseline, but I'm not giving you Net-60.";
            systemAnalysis = "BLUFF SUCCESSFUL. Massive price drop achieved!";
         } else {
            priceDrop = 0;
            patienceDrop = Math.floor(Math.random() * 20) + 30; // 30 to 50
            aiResponse = "SinoSteel's quality is garbage and you know it. Go buy from them if you want. My price stands.";
            systemAnalysis = "BLUFF FAILED. Supplier called your bluff. Heavy patience damage taken!";
            triggerShake();
         }
      }

      const newQuote = Math.max(800, currentQuote - priceDrop);
      const newPatience = Math.max(0, patience - patienceDrop);

      if (priceDrop > 0) addDamageText(`-$${priceDrop}/ton`, 'price');
      if (patienceDrop > 0) addDamageText(`-${patienceDrop} PATIENCE`, 'patience');

      setCurrentQuote(newQuote);
      setPatience(newPatience);

      if (newPatience <= 0) {
         aiResponse = "I've had enough of this. We are pulling our quote. Good luck finding this volume anywhere else.";
         systemAnalysis = "FATAL ERROR. SUPPLIER PATIENCE REACHED ZERO. NEGOTIATION TERMINATED.";
         setGameState('defeat');
      }

      if (newQuote <= 850 && newPatience > 0) {
          aiResponse = `Okay, okay! We will do $${newQuote}/ton. Just send the PO over before I lose my job.`;
          systemAnalysis = "TARGET PRICE ACHIEVED. SUPPLIER SURRENDERED.";
          setGameState('victory');
      }

      const resTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      setMessages(prev => {
        const updated = [...prev];
        if (systemAnalysis) updated.push({ id: Date.now().toString() + 'sys', role: 'system', content: systemAnalysis, timestamp: resTime });
        updated.push({ id: Date.now().toString() + 'sup', role: 'supplier', content: aiResponse, timestamp: resTime });
        return updated;
      });
      
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <motion.div 
      animate={screenShake ? { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } } : {}}
      className="min-h-screen bg-[#02050A] font-sans text-slate-300 selection:bg-rose-500/30 flex flex-col h-screen overflow-hidden relative"
    >
      
      {/* Game Overlays */}
      <AnimatePresence>
        {gameState === 'victory' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay"></div>
             <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} className="text-center relative z-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_100px_rgba(16,185,129,0.8)]">
                  <Handshake size={48} className="text-emerald-950" />
                </div>
                <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">CONTRACT SECURED</h1>
                <p className="text-2xl text-emerald-400 font-mono mb-8">Final Price: ${currentQuote}/ton</p>
                <div className="bg-emerald-900/50 border border-emerald-500/50 rounded-2xl p-6 mb-8 max-w-md mx-auto">
                   <div className="text-sm text-emerald-400/80 font-bold uppercase tracking-widest mb-1">Total Savings Unlocked</div>
                   <div className="text-5xl font-black text-white">+${((950 - currentQuote) * 10000).toLocaleString()}</div>
                </div>
                <button onClick={() => window.location.reload()} className="px-8 py-4 bg-white text-emerald-950 font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">Play Again</button>
             </motion.div>
          </motion.div>
        )}

        {gameState === 'defeat' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-rose-950/90 backdrop-blur-md flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay"></div>
             <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} className="text-center relative z-10">
                <div className="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_100px_rgba(225,29,72,0.8)]">
                  <Skull size={48} className="text-rose-950" />
                </div>
                <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">NEGOTIATION FAILED</h1>
                <p className="text-2xl text-rose-400 font-mono mb-8">The supplier lost patience and walked away.</p>
                <button onClick={() => window.location.reload()} className="px-8 py-4 bg-white text-rose-950 font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">Restart Mission</button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Damage Text */}
      <AnimatePresence>
        {damageText.map(dt => (
          <motion.div 
             key={dt.id}
             initial={{ opacity: 0, y: 0, scale: 0.5 }}
             animate={{ opacity: 1, y: -100, scale: 1.5 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] font-black text-4xl pointer-events-none drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] ${dt.type === 'price' ? 'text-blue-400' : 'text-rose-500'}`}
          >
            {dt.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Header */}
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0B101E]/90 backdrop-blur-md shrink-0 relative z-20 shadow-lg">
        <div className="flex items-center gap-6">
          <Link href="/ai-lab" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-rose-500 font-black tracking-widest uppercase text-sm">
               <Crosshair size={16} /> Tactical Negotiation Simulator
             </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Level 1: Industrial Steel</div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative z-10">
        
        {/* Main Battle Area */}
        <div className="flex-1 flex flex-col z-10 relative bg-[#02050A]/50">
          
          {/* Boss HUD (Supplier) */}
          <div className="h-24 border-b border-white/5 bg-[#060913]/90 flex items-center justify-between px-8 shrink-0">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-950 border border-rose-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                   <ShieldAlert size={20} className="text-rose-500" />
                </div>
                <div>
                   <div className="text-white font-bold text-lg">Arthur P. (Acme Steel)</div>
                   <div className="text-xs text-rose-400 font-bold uppercase tracking-widest">Boss Level Supplier</div>
                </div>
             </div>
             <div className="w-96">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                   <span className="text-rose-500">Patience (HP)</span>
                   <span className="text-white">{patience}/100</span>
                </div>
                <div className="w-full h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden shadow-inner">
                   <motion.div 
                     animate={{ width: `${patience}%` }} 
                     className={`h-full ${patience > 50 ? 'bg-emerald-500' : patience > 25 ? 'bg-amber-500' : 'bg-rose-500'}`} 
                   />
                </div>
             </div>
          </div>

          {/* Chat / Combat Log */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex flex-col ${msg.role === 'buyer' ? 'items-end' : 'items-start'}`}
                >
                  {msg.role === 'system' ? (
                    <div className="w-full flex justify-center my-4">
                      <div className="max-w-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs p-4 rounded-xl flex gap-3 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md">
                        <Zap size={18} className="shrink-0 text-blue-500 animate-pulse" />
                        <span className="font-mono leading-relaxed font-bold">{msg.content}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`max-w-2xl p-5 rounded-2xl shadow-xl relative ${
                      msg.role === 'buyer' 
                        ? 'bg-emerald-600/90 text-white rounded-br-sm border border-emerald-500/50' 
                        : 'bg-[#111827]/90 border border-white/10 text-slate-200 rounded-bl-sm'
                    }`}>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">
                         {msg.role === 'buyer' ? 'Player Tactic Executed' : 'Supplier Response'}
                      </div>
                      <div className="text-[15px] leading-relaxed font-medium">
                        {msg.content}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                   <div className="bg-[#111827]/90 border border-white/10 rounded-2xl rounded-bl-sm p-5 flex items-center gap-2 shadow-xl">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2">Supplier is formulating counter-offer</div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          {/* Action RPG Menu */}
          <div className="p-6 bg-[#0B101E]/90 backdrop-blur-xl border-t border-white/10 shrink-0">
            <div className="max-w-6xl mx-auto">
               <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Select Tactical Action</div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  <button onClick={() => handleAction('hardball')} disabled={isTyping} className="bg-rose-950/30 border border-rose-500/30 hover:bg-rose-900/50 hover:border-rose-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                        <Swords size={20} />
                     </div>
                     <div className="text-center">
                        <div className="text-white font-black uppercase text-sm mb-1">Hardball</div>
                        <div className="text-[10px] text-slate-400">High DMG / High Patience Loss</div>
                     </div>
                  </button>

                  <button onClick={() => handleAction('logic')} disabled={isTyping} className="bg-blue-950/30 border border-blue-500/30 hover:bg-blue-900/50 hover:border-blue-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Shield size={20} />
                     </div>
                     <div className="text-center">
                        <div className="text-white font-black uppercase text-sm mb-1">Logic</div>
                        <div className="text-[10px] text-slate-400">Low DMG / Low Patience Loss</div>
                     </div>
                  </button>

                  <button onClick={() => handleAction('bluff')} disabled={isTyping} className="bg-purple-950/30 border border-purple-500/30 hover:bg-purple-900/50 hover:border-purple-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                        <Wand2 size={20} />
                     </div>
                     <div className="text-center">
                        <div className="text-white font-black uppercase text-sm mb-1">Bluff</div>
                        <div className="text-[10px] text-slate-400">50% Crit Chance / 50% Miss</div>
                     </div>
                  </button>

                  <button onClick={() => handleAction('concede')} disabled={isTyping} className="bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                        <Handshake size={20} />
                     </div>
                     <div className="text-center">
                        <div className="text-white font-black uppercase text-sm mb-1">Concede</div>
                        <div className="text-[10px] text-slate-400">Accept Price & End Battle</div>
                     </div>
                  </button>

               </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Active Quest HUD */}
        <div className="w-80 border-l border-white/10 bg-[#060913]/90 backdrop-blur-xl p-6 hidden lg:flex flex-col z-10 shadow-2xl">
           <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2"><Crosshair size={18} className="text-blue-500" /> Objective</h2>
           
           <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner mb-6">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Target Price</div>
              <div className="text-emerald-400 font-black text-3xl">$850<span className="text-sm opacity-50">/ton</span></div>
           </div>

           <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-6 mb-8 text-center relative overflow-hidden">
              <div className="text-[10px] text-blue-400/80 font-bold uppercase tracking-widest mb-2">Current Supplier Quote</div>
              <motion.div 
                 key={currentQuote}
                 initial={{ scale: 1.5, color: '#fff' }}
                 animate={{ scale: 1, color: '#60A5FA' }}
                 className="text-6xl font-black mb-1 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                ${currentQuote}
              </motion.div>
           </div>
           
           <div className="mt-auto p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl">
              <div className="text-[10px] text-rose-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-1"><AlertTriangle size={12}/> Warning</div>
              <div className="text-xs text-rose-300/70 font-medium leading-relaxed">
                 If the supplier's Patience hits 0, they will terminate the negotiation and you will lose the contract entirely. Balance your attacks.
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
