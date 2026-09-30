'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Swords, FileText, Activity, MessageCircle, Database, Globe, Network, Shield, Zap, Search, Layout, FileCode2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background SVG for animated connection lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" style={{ minHeight: '800px' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            <style>
              {`
                .flow-line {
                  stroke-dasharray: 6 6;
                  animation: flow 1.5s linear infinite;
                }
                @keyframes flow {
                  from { stroke-dashoffset: 12; }
                  to { stroke-dashoffset: 0; }
                }
              `}
            </style>
          </defs>
          
          {/* Top to Middle Lines (Rough paths, rely on absolute positioning of elements to align visually) */}
          {/* We'll use vertical lines behind the flex columns to simulate connections */}
          <path d="M 25% 150 L 25% 350" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />
          <path d="M 50% 150 L 50% 350" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />
          <path d="M 75% 150 L 75% 350" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />

          {/* Middle to Bottom Lines */}
          <path d="M 25% 550 L 25% 700" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />
          <path d="M 50% 550 L 50% 700" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />
          <path d="M 75% 550 L 75% 700" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="flow-line" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
        
        {/* LEFT COLUMN: Labels */}
        <div className="hidden md:flex flex-col justify-between w-48 shrink-0 text-slate-400 font-bold text-sm uppercase tracking-widest pt-12 pb-24">
          <div className="h-32 flex items-center">Interfaces &amp; Agents</div>
          <div className="h-48 flex items-center text-blue-400">Open Context<br/>Layer</div>
          <div className="h-32 flex items-center">Core Systems</div>
        </div>

        {/* RIGHT COLUMN: Interactive Nodes */}
        <div className="flex-1 flex flex-col gap-16 md:gap-24">
          
          {/* LAYER 1: Agents */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Autonomous Agents</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Bot size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Dorc SDR</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Swords size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Negotiator AI</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Procurement Tools</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Activity size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Workflow Builder</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <FileText size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Contract Editor</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Interfaces</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Layout size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Supplier Portal</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <MessageCircle size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Slack/Teams</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LAYER 2: Enterprise Context */}
          <motion.div whileHover={{ scale: 1.01 }} className="w-full bg-[#1e293b]/50 border-2 border-blue-500/30 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            
            <h3 className="text-center font-black text-xl text-white tracking-widest mb-8">
              PROCGEN <span className="text-blue-400">CONTEXT</span> LAYER
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-[#0f172a] border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 transition-colors cursor-default">
                <span className="font-semibold text-slate-200 text-sm">AI-Ready Spend Data</span>
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Search size={12} /></div>
              </div>
              <div className="flex-1 bg-[#0f172a] border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 transition-colors cursor-default">
                <span className="font-semibold text-slate-200 text-sm">Vendor Ontology</span>
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Network size={12} /></div>
              </div>
              <div className="flex-1 bg-[#0f172a] border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 transition-colors cursor-default">
                <span className="font-semibold text-slate-200 text-sm">Agent Skill Repo</span>
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Zap size={12} /></div>
              </div>
            </div>
          </motion.div>

          {/* LAYER 3: Core Systems */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">ERP / Systems of Record</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Database size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Globe size={20} /></div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Data Lakes</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Database size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Search size={20} /></div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-[#0f172a] border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Compliance & Docs</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Shield size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><FileCode2 size={20} /></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
