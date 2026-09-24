"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, TerminalSquare, AlertTriangle, Crosshair, Zap, Activity, LineChart, Cpu, Swords, Shield, Wand2, Handshake, AlertCircle, CheckCircle2, TrendingDown } from 'lucide-react';
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
      content: 'SESSION STARTED. DIGITAL TWIN: Arthur Pendelton (Acme Global Steel). PROFILE: Aggressive. High defense against logical arguments. Vulnerable to competitive leverage.',
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
  const [damageText, setDamageText] = useState<{id: number, text: string, type: 'price' | 'patience'}[]>([]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const addDamageText = (text: string, type: 'price' | 'patience') => {
    const id = Date.now();
    setDamageText(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setDamageText(prev => prev.filter(d => d.id !== id));
    }, 2000);
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

    setTimeout(() => {
      let aiResponse = "";
      let systemAnalysis = "";
      let priceDrop = 0;
      let patienceDrop = 0;

      if (tactic === 'hardball') {
         priceDrop = Math.floor(Math.random() * 15) + 15; 
         patienceDrop = Math.floor(Math.random() * 15) + 20; 
         aiResponse = "Don't threaten me. I have other buyers. I'll drop it a bit to keep the relationship, but push me again and I walk.";
         systemAnalysis = "FIRM STANCE EFFECTIVE. Price dropped, but relationship health degraded significantly.";
      } else if (tactic === 'logic') {
         priceDrop = Math.floor(Math.random() * 10) + 5; 
         patienceDrop = Math.floor(Math.random() * 5) + 2; 
         aiResponse = "The indices don't reflect my actual warehouse overhead. I can give you a small concession, but that's it.";
         systemAnalysis = "MARKET DATA REJECTED. Supplier's defense absorbed most of the logical argument.";
      } else if (tactic === 'bluff') {
         const success = Math.random() > 0.5;
         if (success) {
            priceDrop = Math.floor(Math.random() * 20) + 25; 
            patienceDrop = Math.floor(Math.random() * 10) + 10;
            aiResponse = "Damn it. Fine, I'll match SinoSteel's baseline, but I'm not giving you Net-60.";
            systemAnalysis = "COMPETITIVE LEVERAGE SUCCESSFUL. Massive price drop achieved!";
         } else {
            priceDrop = 0;
            patienceDrop = Math.floor(Math.random() * 20) + 30; 
            aiResponse = "SinoSteel's quality is sub-par and you know it. Go buy from them if you want. My price stands.";
            systemAnalysis = "COMPETITIVE LEVERAGE FAILED. Supplier called the bluff. Relationship health took heavy damage.";
         }
      }

      const newQuote = Math.max(800, currentQuote - priceDrop);
      const newPatience = Math.max(0, patience - patienceDrop);

      if (priceDrop > 0) addDamageText(`-$${priceDrop}/ton`, 'price');
      if (patienceDrop > 0) addDamageText(`-${patienceDrop}% Health`, 'patience');

      setCurrentQuote(newQuote);
      setPatience(newPatience);

      if (newPatience <= 0) {
         aiResponse = "I've had enough of this. We are pulling our quote. Good luck finding this volume anywhere else.";
         systemAnalysis = "CRITICAL FAILURE. RELATIONSHIP HEALTH REACHED ZERO. NEGOTIATION TERMINATED.";
         setGameState('defeat');
      }

      if (newQuote <= 850 && newPatience > 0) {
          aiResponse = `Okay, okay! We will do $${newQuote}/ton. Just send the PO over before I lose my job.`;
          systemAnalysis = "TARGET PRICE ACHIEVED. SUPPLIER CONCEDED.";
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
    <div className="min-h-screen bg-[#F9F9FC] font-sans text-slate-900 selection:bg-blue-500/30 flex flex-col h-screen overflow-hidden">
      
      {/* Game Overlays - Professional Versions */}
      <AnimatePresence>
        {gameState === 'victory' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center p-6">
             <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl border border-slate-200">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Contract Secured</h1>
                <p className="text-slate-500 mb-8">You successfully negotiated the terms.</p>
                
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-slate-500 font-medium">Final Price</span>
                     <span className="text-slate-900 font-bold">${currentQuote}/ton</span>
                   </div>
                   <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                     <span className="text-slate-500 font-medium">Total Savings</span>
                     <span className="text-emerald-600 font-black text-xl">+${((950 - currentQuote) * 10000).toLocaleString()}</span>
                   </div>
                </div>
                
                <button onClick={() => window.location.reload()} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md">
                   Start New Session
                </button>
             </motion.div>
          </motion.div>
        )}

        {gameState === 'defeat' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center p-6">
             <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl border border-slate-200">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle size={40} className="text-rose-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Negotiation Terminated</h1>
                <p className="text-slate-500 mb-8">The supplier ended the relationship due to poor health metrics.</p>
                <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all border border-slate-200">
                   Restart Session
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Damage Text - Minimal Badges */}
      <AnimatePresence>
        {damageText.map(dt => (
          <motion.div 
             key={dt.id}
             initial={{ opacity: 0, y: 0, scale: 0.8 }}
             animate={{ opacity: 1, y: -60, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] font-bold text-sm px-3 py-1 rounded-full shadow-lg pointer-events-none ${dt.type === 'price' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-rose-100 text-rose-700 border border-rose-200'}`}
          >
            {dt.type === 'price' ? <TrendingDown size={14} className="inline mr-1" /> : <AlertTriangle size={14} className="inline mr-1" />}
            {dt.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Header */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0 relative z-20">
        <div className="flex items-center gap-4">
          <Link href="/ai-lab" className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
               Negotiation Training Simulator
             </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-xs font-semibold text-slate-500 px-3 py-1 bg-slate-100 rounded-full">Module 1: Industrial Steel</div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative z-10">
        
        {/* Main Interface Area */}
        <div className="flex-1 flex flex-col z-10 relative bg-white">
          
          {/* Supplier Info Bar */}
          <div className="h-20 border-b border-slate-100 bg-white flex items-center justify-between px-8 shrink-0">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">
                   AP
                </div>
                <div>
                   <div className="text-slate-900 font-bold text-sm">Arthur P. (Acme Steel)</div>
                   <div className="text-xs text-slate-500 font-medium">Tier 1 Enterprise Supplier</div>
                </div>
             </div>
             <div className="w-64">
                <div className="flex justify-between text-xs font-semibold mb-2">
                   <span className="text-slate-600">Relationship Health</span>
                   <span className={patience > 50 ? 'text-emerald-600' : patience > 25 ? 'text-amber-600' : 'text-rose-600'}>{patience}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ width: `${patience}%` }} 
                     className={`h-full ${patience > 50 ? 'bg-emerald-500' : patience > 25 ? 'bg-amber-500' : 'bg-rose-500'}`} 
                   />
                </div>
             </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-50/50">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === 'buyer' ? 'items-end' : 'items-start'}`}
                >
                  {msg.role === 'system' ? (
                    <div className="w-full flex justify-center my-2">
                      <div className="max-w-md bg-blue-50/80 border border-blue-100 text-blue-800 text-xs py-2 px-4 rounded-full flex items-center gap-2">
                        <Activity size={14} className="shrink-0 text-blue-600" />
                        <span className="font-medium">{msg.content}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`max-w-xl p-4 rounded-2xl shadow-sm ${
                      msg.role === 'buyer' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm'
                    }`}>
                      <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">
                         {msg.role === 'buyer' ? 'You' : 'Arthur P.'}
                      </div>
                      <div className="text-[14px] leading-relaxed">
                        {msg.content}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                   <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm p-4 flex items-center gap-2 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          {/* SaaS Action Buttons */}
          <div className="p-6 bg-white border-t border-slate-200 shrink-0">
            <div className="max-w-4xl mx-auto">
               <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Select Tactic</div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  
                  <button onClick={() => handleAction('hardball')} disabled={isTyping} className="bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="text-slate-900 group-hover:text-blue-600 font-semibold text-sm mb-1">Firm Stance</div>
                     <div className="text-[10px] text-slate-500 text-center leading-tight">Demand reduction. High risk to relationship.</div>
                  </button>

                  <button onClick={() => handleAction('logic')} disabled={isTyping} className="bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="text-slate-900 group-hover:text-blue-600 font-semibold text-sm mb-1">Market Data</div>
                     <div className="text-[10px] text-slate-500 text-center leading-tight">Cite indices. Low risk to relationship.</div>
                  </button>

                  <button onClick={() => handleAction('bluff')} disabled={isTyping} className="bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="text-slate-900 group-hover:text-blue-600 font-semibold text-sm mb-1">Competitive Leverage</div>
                     <div className="text-[10px] text-slate-500 text-center leading-tight">Cite competitors. Highly volatile outcome.</div>
                  </button>

                  <button onClick={() => handleAction('concede')} disabled={isTyping} className="bg-slate-900 border border-slate-900 hover:bg-slate-800 text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                     <div className="font-semibold text-sm mb-1">Execute Contract</div>
                     <div className="text-[10px] text-slate-300 text-center leading-tight">Accept current price and finalize terms.</div>
                  </button>

               </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Active Stats */}
        <div className="w-80 border-l border-slate-200 bg-slate-50 p-6 hidden lg:flex flex-col z-10">
           <h2 className="text-slate-900 font-bold text-sm mb-6 flex items-center gap-2">Live Telemetry</h2>
           
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm mb-4">
              <div className="text-xs text-slate-500 font-semibold mb-2">Target Price</div>
              <div className="text-emerald-600 font-black text-2xl">$850<span className="text-sm font-medium text-slate-400">/ton</span></div>
           </div>

           <div className="bg-blue-600 rounded-xl p-5 shadow-md mb-8 text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="text-xs text-blue-100 font-medium mb-1 relative z-10">Current Supplier Quote</div>
              <motion.div 
                 key={currentQuote}
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 className="text-4xl font-black relative z-10 tracking-tight"
              >
                ${currentQuote}
              </motion.div>
           </div>
           
           <div className="mt-auto p-4 bg-slate-100 border border-slate-200 rounded-xl">
              <div className="text-xs text-slate-700 font-semibold mb-2">Guidance</div>
              <div className="text-xs text-slate-500 font-medium leading-relaxed">
                 Monitor Relationship Health carefully. If it drops to 0%, the supplier will terminate the session and the contract will be lost. Use 'Market Data' to mitigate relationship damage.
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
