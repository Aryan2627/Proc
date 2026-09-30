'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Swords, FileText, Activity, MessageCircle, Database, Globe, Network, Shield, Zap, Search, Layout, FileCode2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 px-4 md:px-8 overflow-hidden font-sans">
      
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

      <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
        
        {/* LEFT COLUMN: Labels */}
        <div className="hidden md:flex flex-col justify-between w-48 shrink-0 text-slate-500 font-bold text-sm uppercase tracking-widest pt-4 pb-4">
          <div className="h-32 flex items-center">Interfaces &amp; Agents</div>
          <div className="h-32 flex items-center text-blue-600">Open Context<br/>Layer</div>
          <div className="h-32 flex items-center">Core Systems</div>
        </div>

        {/* RIGHT COLUMN: Interactive Nodes */}
        <div className="flex-1 flex flex-col w-full">
          
          {/* LAYER 1: Agents */}
          <div className="flex flex-col md:flex-row justify-between gap-6 h-32">
            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">Autonomous Agents</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Bot size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Dorc SDR</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Swords size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Negotiator AI</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">Procurement Tools</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Activity size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Workflow Builder</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <FileText size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Contract Editor</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">Interfaces</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <Layout size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Supplier Portal</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer group relative">
                  <MessageCircle size={20} />
                  <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Slack/Teams</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CONNECTION 1 TO 2 */}
          <div className="relative h-16 w-full hidden md:block">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* Left Line */}
              <line x1="16.6%" y1="0" x2="16.6%" y2="30%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="16.6%" y1="30%" x2="33.3%" y2="30%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="33.3%" y1="30%" x2="33.3%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              
              {/* Center Line */}
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              
              {/* Right Line */}
              <line x1="83.3%" y1="0" x2="83.3%" y2="30%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="83.3%" y1="30%" x2="66.6%" y2="30%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="66.6%" y1="30%" x2="66.6%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              
              {/* Connection points on bottom */}
              <circle cx="33%" cy="100%" r="4" fill="#3b82f6" />
              <circle cx="50%" cy="100%" r="4" fill="#3b82f6" />
              <circle cx="66%" cy="100%" r="4" fill="#3b82f6" />
            </svg>
          </div>
          <div className="h-8 md:hidden"></div> {/* Mobile spacer */}

          {/* LAYER 2: Enterprise Context */}
          <motion.div whileHover={{ scale: 1.01 }} className="w-full bg-white border-2 border-blue-600/20 rounded-3xl p-8 relative overflow-visible shadow-[0_8px_30px_-4px_rgba(37,99,235,0.1)] z-20">
            {/* Top connection context tags */}
            <div className="hidden md:flex absolute -top-3 left-[33%] -translate-x-1/2 bg-white border border-blue-200 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">CONTEXT REPO</div>
            <div className="hidden md:flex absolute -top-3 left-[50%] -translate-x-1/2 bg-white border border-blue-200 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">CONTEXT REPO</div>
            <div className="hidden md:flex absolute -top-3 left-[66%] -translate-x-1/2 bg-white border border-blue-200 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">CONTEXT REPO</div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
            
            <h3 className="text-center font-black text-xl text-slate-900 tracking-widest mb-8 mt-2">
              PROCGEN <span className="text-blue-600">CONTEXT</span> LAYER
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 transition-colors cursor-default">
                <span className="font-semibold text-slate-800 text-sm">AI-Ready Spend Data</span>
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Search size={12} /></div>
              </div>
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 transition-colors cursor-default">
                <span className="font-semibold text-slate-800 text-sm">Vendor Ontology</span>
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Network size={12} /></div>
              </div>
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 transition-colors cursor-default">
                <span className="font-semibold text-slate-800 text-sm">Agent Skill Repo</span>
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Zap size={12} /></div>
              </div>
            </div>
          </motion.div>

          {/* CONNECTION 2 TO 3 */}
          <div className="relative h-16 w-full hidden md:block">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* Straight drops */}
              <line x1="16.6%" y1="0" x2="16.6%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
              <line x1="83.3%" y1="0" x2="83.3%" y2="100%" stroke="#94a3b8" strokeWidth="2" className="flow-line" />
            </svg>
          </div>
          <div className="h-8 md:hidden"></div> {/* Mobile spacer */}

          {/* LAYER 3: Core Systems */}
          <div className="flex flex-col md:flex-row justify-between gap-6 h-32">
            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">ERP / Systems of Record</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Database size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Globe size={20} /></div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">Data Lakes</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Database size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Search size={20} /></div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] z-10 relative">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">Compliance & Docs</h4>
              <div className="flex justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><Shield size={20} /></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"><FileCode2 size={20} /></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

