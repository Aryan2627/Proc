const fs = require('fs');

const advancedWarRoom = `"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, ShieldAlert, TerminalSquare, AlertTriangle, Crosshair, Zap, Activity, LineChart, Cpu } from 'lucide-react';
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
      content: 'SIMULATION INITIALIZED. DIGITAL TWIN LOADED: "Arthur Pendelton" (VP Sales, Acme Global Steel). BEHAVIORAL PROFILE: Aggressive, focuses on raw material costs, bluffs about other buyers.',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    },
    {
      id: 'sup-1',
      role: 'supplier',
      content: 'Hi there. I reviewed your RFQ for 10,000 tons of cold-rolled steel. Given the current logistics crunch and raw material shortages, our baseline quote is $950/ton. Let me know if you want to proceed.',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leverageScore, setLeverageScore] = useState(45);
  const [currentQuote, setCurrentQuote] = useState(950);
  const [quoteHistory, setQuoteHistory] = useState<number[]>([950]);
  const [supplierSentiment, setSupplierSentiment] = useState('Confident');
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const newUserMsg: Message = { id: Date.now().toString(), role: 'buyer', content: inputValue, timestamp: timeStr };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = newUserMsg.content.toLowerCase();
      let aiResponse = "";
      let systemAnalysis = "";
      let newQuote = currentQuote;
      let newSentiment = supplierSentiment;
      let newLeverage = leverageScore;

      if (lowerInput.includes('850') || lowerInput.includes('800') || lowerInput.includes('lower') || lowerInput.includes('too high') || lowerInput.includes('discount')) {
          if (currentQuote === 950) {
              aiResponse = "I can't just jump to your target price immediately. Logistics costs are brutal right now. Best I can do today is $920/ton.";
              systemAnalysis = "TACTIC DETECTED: 'The Phantom Freight Cost'. He dropped $30 but is testing your resolve. Maintain pressure.";
              newQuote = 920;
              newSentiment = 'Defensive';
              newLeverage = 60;
          } else if (currentQuote === 920) {
              aiResponse = "Look, if you commit to a 12-month lock-in today, I will drop it to $870/ton. Otherwise, I have three other manufacturers waiting for this inventory.";
              systemAnalysis = "TACTIC DETECTED: 'The Exploding Offer'. He has excess inventory and is bluffing about other buyers. Reject the lock-in.";
              newQuote = 870;
              newSentiment = 'Pressured';
              newLeverage = 80;
          } else {
              aiResponse = "You drive an incredibly hard bargain. Fine. $850/ton. But I am waiving the Net-90 terms; it has to be Net-30. Deal?";
              systemAnalysis = "SUCCESS. Target price achieved. Proceed to finalize terms.";
              newQuote = 850;
              newSentiment = 'Yielding';
              newLeverage = 95;
          }
      } else if (lowerInput.includes('deal') || lowerInput.includes('yes') || lowerInput.includes('agree') || lowerInput.includes('ok')) {
           aiResponse = "Excellent. I'll send over the updated contract right now. Good doing business with you.";
           systemAnalysis = "NEGOTIATION CONCLUDED. Contract generated and routed to legal automatically.";
           newSentiment = 'Yielding';
           newLeverage = 100;
      } else {
           aiResponse = "I hear what you're saying, but the market data doesn't support that. We are at $" + currentQuote + "/ton. Are you going to issue the PO or not?";
           systemAnalysis = "WARNING: Supplier is attempting to stall and control the frame. Redirect the conversation back to price reduction.";
           newLeverage = Math.max(30, leverageScore - 5);
      }

      const resTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      
      setMessages(prev => {
        const updated = [...prev];
        if (systemAnalysis) {
          updated.push({ id: Date.now().toString() + 'sys', role: 'system', content: systemAnalysis, timestamp: resTime });
        }
        updated.push({ id: Date.now().toString() + 'sup', role: 'supplier', content: aiResponse, timestamp: resTime });
        return updated;
      });
      
      setCurrentQuote(newQuote);
      if (newQuote !== currentQuote) {
         setQuoteHistory(prev => [...prev, newQuote]);
      }
      setSupplierSentiment(newSentiment);
      setLeverageScore(newLeverage);
      setIsTyping(false);
    }, 2500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-[#02050A] font-sans text-slate-300 selection:bg-rose-500/30 flex flex-col h-screen overflow-hidden relative">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0B101E]/90 backdrop-blur-md shrink-0 relative z-20 shadow-lg">
        <div className="flex items-center gap-6">
          <Link href="/ai-lab" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-rose-500 font-black tracking-widest uppercase text-sm">
               <TerminalSquare size={16} /> War-Room Simulator
             </div>
             <div className="text-[10px] text-slate-500 font-mono">POWERED BY DORC AI NEURAL ENGINE</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest">
             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Live Simulation
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative z-10">
        
        {/* Left Sidebar: Context & Objectives */}
        <div className="w-80 border-r border-white/10 bg-[#060913]/90 backdrop-blur-xl p-6 flex flex-col z-10 hidden md:flex overflow-y-auto shadow-2xl">
          <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2"><TargetIcon /> Mission Briefing</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full"></div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Target Supplier</div>
              <div className="text-white font-bold text-lg relative z-10">Acme Global Steel</div>
              <div className="text-xs text-slate-400 mt-1 relative z-10 flex items-center gap-1"><Cpu size={12}/> Digital Twin: Arthur P.</div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest mb-2">Primary Objective</div>
              <div className="flex items-center gap-2 text-emerald-400 font-black text-2xl">
                <AlertTriangle size={20} /> <span className="tracking-tight">Below $850/ton</span>
              </div>
              <div className="text-xs text-slate-400 mt-2 font-mono">Baseline Quote: $950/ton</div>
            </div>

            <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-rose-500/70 font-bold uppercase tracking-widest mb-2 flex items-center gap-1"><ShieldAlert size={14}/> Personality Profile</div>
              <p className="text-xs text-rose-200/80 leading-relaxed font-medium">
                Aggressive closer. Frequently uses phantom shipping costs to protect margin. Will attempt to force 12-month lock-ins. Do not yield to time-pressure tactics.
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-white/10">
             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3 flex justify-between">
                <span>Negotiation Leverage</span>
                <span className="text-blue-400 font-mono">{leverageScore}%</span>
             </div>
             <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden border border-white/10 shadow-inner">
               <motion.div 
                 initial={{ width: '45%' }}
                 animate={{ width: \`\${leverageScore}%\` }}
                 transition={{ type: 'spring', stiffness: 50 }}
                 className={\`h-full \${leverageScore > 75 ? 'bg-emerald-500' : leverageScore > 50 ? 'bg-amber-500' : 'bg-rose-500'}\`}
               />
             </div>
          </div>
        </div>

        {/* Center: Chat Interface */}
        <div className="flex-1 flex flex-col z-10 relative bg-[#02050A]/50 backdrop-blur-sm">
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className={\`flex flex-col \${msg.role === 'buyer' ? 'items-end' : 'items-start'}\`}
                >
                  {msg.role === 'system' ? (
                    <div className="w-full flex justify-center my-4">
                      <div className="max-w-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs p-4 rounded-xl flex gap-3 shadow-[0_0_30px_rgba(225,29,72,0.1)] backdrop-blur-md">
                        <Zap size={18} className="shrink-0 text-rose-500 animate-pulse" />
                        <span className="font-mono leading-relaxed">{msg.content}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={\`max-w-2xl p-5 rounded-2xl shadow-xl relative group \${
                      msg.role === 'buyer' 
                        ? 'bg-blue-600/90 text-white rounded-br-sm border border-blue-500/50 backdrop-blur-md' 
                        : 'bg-[#111827]/90 border border-white/10 text-slate-200 rounded-bl-sm backdrop-blur-md'
                    }\`}>
                      <div className="flex items-center gap-3 mb-2">
                         <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                           {msg.role === 'buyer' ? 'You (Procurement)' : 'Arthur P. (Acme Steel)'}
                         </div>
                         <div className="text-[9px] font-mono opacity-40">{msg.timestamp}</div>
                      </div>
                      <div className="text-[15px] leading-relaxed font-medium">
                        {msg.content}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                   <div className="bg-[#111827]/90 border border-white/10 rounded-2xl rounded-bl-sm p-5 backdrop-blur-md flex items-center gap-2 shadow-xl">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-[#0B101E]/90 backdrop-blur-xl border-t border-white/10 shrink-0">
            <div className="max-w-4xl mx-auto relative flex items-center shadow-2xl">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your counter-offer... (Hint: tell him the price is too high or target $850)"
                className="w-full bg-[#050914] border border-white/10 text-white rounded-xl pl-6 pr-16 py-5 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all font-medium placeholder:text-slate-600 shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-3 w-12 h-12 bg-white text-black hover:bg-slate-200 disabled:bg-white/5 disabled:text-white/20 rounded-lg flex items-center justify-center transition-all disabled:shadow-none shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Live Telemetry */}
        <div className="w-80 border-l border-white/10 bg-[#060913]/90 backdrop-blur-xl p-6 hidden lg:flex flex-col z-10 shadow-2xl">
           <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2"><LineChart size={18} className="text-blue-500" /> Live Telemetry</h2>
           
           <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-6 mb-8 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="text-[10px] text-blue-400/80 font-bold uppercase tracking-widest mb-2">Active Quote</div>
              <motion.div 
                 key={currentQuote}
                 initial={{ scale: 1.2, color: '#fff' }}
                 animate={{ scale: 1, color: '#60A5FA' }}
                 className="text-5xl font-black mb-1"
              >
                \${currentQuote}<span className="text-xl opacity-50">/ton</span>
              </motion.div>
              <div className="text-xs text-emerald-400 mt-3 font-mono bg-emerald-500/10 inline-block px-2 py-1 rounded border border-emerald-500/20">Target: $850</div>
           </div>
           
           <div className="mb-8">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Quote Trajectory</div>
              <div className="h-32 w-full border-b border-l border-white/10 flex items-end justify-around gap-2 pb-0 px-2 relative">
                 {/* Graph Grid Lines */}
                 <div className="absolute top-0 w-full border-t border-white/5 border-dashed"></div>
                 <div className="absolute top-1/2 w-full border-t border-white/5 border-dashed"></div>
                 
                 {quoteHistory.map((q, i) => {
                    const heightPercent = Math.max(10, ((q - 800) / 200) * 100);
                    return (
                      <motion.div 
                         key={i} 
                         initial={{ height: 0, opacity: 0 }} 
                         animate={{ height: \`\${heightPercent}%\`, opacity: 1 }} 
                         transition={{ type: 'spring', damping: 15 }}
                         className="w-full bg-gradient-to-t from-blue-600/80 to-blue-400 rounded-t-sm relative group max-w-[40px] shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      >
                         <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-1.5 py-0.5 rounded border border-white/20">
                           \${q}
                         </div>
                      </motion.div>
                    );
                 })}
              </div>
           </div>

           <div className="mt-auto bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Supplier Sentiment</div>
              <div className={\`p-3 rounded-lg border text-sm font-bold flex items-center gap-3 transition-colors \${
                  supplierSentiment === 'Confident' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                  supplierSentiment === 'Pressured' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' :
                  'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              }\`}>
                 <Activity size={18} className={supplierSentiment === 'Pressured' ? 'animate-pulse' : ''} /> 
                 {supplierSentiment}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function TargetIcon() {
  return <Crosshair size={18} className="text-emerald-400" />;
}
`;

fs.writeFileSync('src/app/ai-lab/war-room/page.tsx', advancedWarRoom);
console.log('Upgraded War-Room to Advanced Version');
