"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, ShieldAlert, TerminalSquare, AlertTriangle, Crosshair, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  role: 'buyer' | 'supplier' | 'system';
  content: string;
};

export default function WarRoomSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'sys-1',
      role: 'system',
      content: 'SIMULATION INITIALIZED. DIGITAL TWIN LOADED: "Arthur Pendelton" (VP Sales, Acme Global Steel). BEHAVIORAL PROFILE: Aggressive, focuses on raw material costs, bluffs about other buyers.'
    },
    {
      id: 'sup-1',
      role: 'supplier',
      content: 'Hi there. I reviewed your RFQ for 10,000 tons of cold-rolled steel. Given the current logistics crunch and raw material shortages, our baseline quote is $950/ton. Let me know if you want to proceed.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leverageScore, setLeverageScore] = useState(45); // out of 100
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), role: 'buyer', content: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = "";
      let systemAnalysis = "";
      let newLeverage = leverageScore;
      
      const buyerMsgCount = messages.filter(m => m.role === 'buyer').length + 1;

      if (buyerMsgCount === 1) {
        aiResponse = "I understand budgets are tight, but iron ore is up 12% this quarter. The absolute best I can do is $920/ton, and I'm honestly taking a hit on the freight costs at that price.";
        systemAnalysis = "TACTIC DETECTED: 'The Phantom Freight Cost'. He is inflating shipping costs to protect margin. Push back on the 12% index claim.";
        newLeverage = 55;
      } else if (buyerMsgCount === 2) {
        aiResponse = "Look, if you can commit to a 12-month lock-in today, I will drop it to $870/ton. Otherwise, I have three other manufacturers waiting for this inventory allocations. It's your call.";
        systemAnalysis = "TACTIC DETECTED: 'The Exploding Offer'. He has excess inventory, there are no other buyers. Do not accept the 12-month lock-in.";
        newLeverage = 70;
      } else if (buyerMsgCount === 3) {
        aiResponse = "You drive a hard bargain. Fine. $850/ton. But I am waiving the Net-90 terms; it has to be Net-30. Deal?";
        systemAnalysis = "SUCCESS. Target price achieved. Proceed to finalize terms.";
        newLeverage = 95;
      } else {
        aiResponse = "Send over the final PO and we'll get it signed. Good doing business with you.";
        newLeverage = 100;
      }

      setMessages(prev => {
        const updated = [...prev];
        if (systemAnalysis) {
          updated.push({ id: Date.now().toString() + 'sys', role: 'system', content: systemAnalysis });
        }
        updated.push({ id: Date.now().toString() + 'sup', role: 'supplier', content: aiResponse });
        return updated;
      });
      setLeverageScore(newLeverage);
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-[#050914] font-sans text-slate-300 selection:bg-rose-500/30 flex flex-col h-screen overflow-hidden">
      
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0B101E]/80 backdrop-blur-md shrink-0 relative z-20">
        <div className="flex items-center gap-4">
          <Link href="/ai-lab" className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex items-center gap-2 text-rose-500 font-bold tracking-widest uppercase text-sm">
            <TerminalSquare size={16} /> War-Room Simulator
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Live Simulation
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="w-80 border-r border-white/10 bg-[#0B101E]/40 backdrop-blur-md p-6 flex flex-col z-10 hidden md:flex overflow-y-auto">
          <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><TargetIcon /> Mission Briefing</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Target Supplier</div>
              <div className="text-white font-medium">Acme Global Steel</div>
              <div className="text-sm text-slate-400 mt-1">Lead Negotiator: Arthur P.</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Objective</div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xl">
                <AlertTriangle size={18} /> Below $850 / ton
              </div>
              <div className="text-sm text-slate-400 mt-2">Baseline Quote: $950/ton</div>
            </div>

            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <div className="text-xs text-rose-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1"><ShieldAlert size={14}/> Personality Profile</div>
              <p className="text-sm text-rose-200/70 leading-relaxed">
                Aggressive closer. Frequently uses phantom shipping costs to protect margin. Will attempt to force 12-month lock-ins. Do not yield to time-pressure tactics.
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-white/10">
             <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">Negotiation Leverage</div>
             <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/10">
               <motion.div 
                 initial={{ width: '45%' }}
                 animate={{ width: `${leverageScore}%` }}
                 className={`h-full ${leverageScore > 75 ? 'bg-emerald-500' : leverageScore > 50 ? 'bg-amber-500' : 'bg-rose-500'}`}
               />
             </div>
             <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
                <span>Weak</span>
                <span>Strong</span>
             </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col z-10 relative">
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'buyer' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'system' ? (
                    <div className="w-full flex justify-center my-4">
                      <div className="max-w-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono p-3 rounded-lg flex gap-3 shadow-lg backdrop-blur-sm">
                        <Zap size={16} className="shrink-0 text-rose-400" />
                        <span>{msg.content}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`max-w-2xl p-5 rounded-2xl ${
                      msg.role === 'buyer' 
                        ? 'bg-blue-600 text-white rounded-br-none shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                        : 'bg-white/10 border border-white/10 text-slate-200 rounded-bl-none backdrop-blur-md'
                    }`}>
                      <div className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">
                        {msg.role === 'buyer' ? 'You (Procurement)' : 'Arthur (Supplier)'}
                      </div>
                      <div className="text-[15px] leading-relaxed">
                        {msg.content}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                   <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-none p-4 backdrop-blur-md flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-[#050914] border-t border-white/10">
            <div className="max-w-4xl mx-auto relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Negotiate your terms... (Try pushing back on the price)"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-6 pr-14 py-4 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all font-medium placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-3 w-10 h-10 bg-rose-600 hover:bg-rose-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-3 text-xs text-slate-600 font-mono">
              The AI Supplier will dynamically respond to your negotiation tactics.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TargetIcon() {
  return <Crosshair size={20} className="text-rose-500" />;
}
