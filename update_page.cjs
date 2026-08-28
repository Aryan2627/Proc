const fs = require('fs');

const code = `
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 overflow-hidden">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://app.procgen.in/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Client Login
            </Link>
            <a href="#book" className="text-sm font-semibold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg shadow-blue-600/20">
              Book a Session
            </a>
          </div>
          <button className="md:hidden text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              ProcGen 2.0 is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Enterprise Sourcing, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Simplified.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Automate your purchase requests, run dynamic reverse auctions, and collaborate with vendors—all in one secure, unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-lg hover:scale-105">
                Book a Strategy Session
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* DYNAMIC DASHBOARD MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-2xl border border-slate-200/50 bg-slate-50/50 backdrop-blur-sm p-2 shadow-2xl shadow-blue-900/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[16/9] shadow-inner flex flex-col relative">
                
                {/* Fake UI Header */}
                <div className="w-full h-12 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-4 gap-2 z-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: "128px" }} transition={{ delay: 1, duration: 1 }}
                    className="ml-auto h-5 bg-slate-700/50 rounded-md"
                  ></motion.div>
                </div>

                {/* Fake UI Content Area */}
                <div className="flex w-full flex-1 p-6 gap-6">
                  {/* Sidebar */}
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                    className="w-48 flex flex-col gap-4 hidden md:flex"
                  >
                    <div className="h-6 w-3/4 bg-blue-500/20 rounded mb-4"></div>
                    {[1,2,3,4].map(i => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="h-4 w-full bg-slate-800 rounded"></motion.div>
                    ))}
                  </motion.div>

                  {/* Main View */}
                  <div className="flex-1 flex flex-col gap-6">
                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 + (i * 0.1) }}
                          className="h-24 bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-end"
                        >
                          <motion.div 
                            initial={{ width: 0 }} animate={{ width: i === 1 ? "60%" : i === 2 ? "80%" : "40%" }} transition={{ delay: 1.5, duration: 1 }}
                            className="h-2 bg-blue-500/50 rounded-full"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart Area */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
                      className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-xl relative overflow-hidden flex items-end p-6 gap-3"
                    >
                      {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                        <motion.div 
                          key={i} initial={{ height: 0 }} animate={{ height: h + "%" }} transition={{ delay: 1.5 + (i * 0.05), duration: 0.8, type: "spring" }}
                          className="flex-1 bg-blue-500/30 rounded-t hover:bg-blue-400/50 transition-colors"
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Everything you need to source smarter.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, title: "Internal Intake Requests", desc: "Streamline employee purchase requests with multi-level approval workflows.", color: "blue" },
              { icon: Gavel, title: "Dynamic Sourcing Events", desc: "Launch standard RFQs or live Reverse Auctions in seconds using smart templates.", color: "indigo" },
              { icon: Users, title: "Secure Vendor Network", desc: "A private directory to onboard suppliers. Chat with them in real-time.", color: "emerald" },
              { icon: Receipt, title: "Automated PO Ledger", desc: "Instantly convert awarded bids into finalized Purchase Orders and track fulfillment.", color: "amber" }
            ].map((feature, i) => (
              <motion.div 
                key={i} variants={fadeIn} whileHover={{ y: -5 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className={"w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600"}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-slate-50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Simple, transparent pricing.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Perfect for small teams standardizing purchasing.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">₹14,999</span><span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Up to 10 vendors', 'Standard RFQs', 'Basic Workflows'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {f}</li>
                ))}
              </ul>
            </motion.div>

            {/* Professional */}
            <motion.div variants={fadeIn} className="bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-blue-900/30 flex flex-col relative transform md:-translate-y-4 border border-slate-700 hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">For enterprises running complex auctions.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">₹39,999</span><span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited vendors', 'Reverse Auctions', 'Multi-level Approvals'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle2 size={18} className="text-blue-400 shrink-0" /> {f}</li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Custom tailored for massive scale.</p>
              <div className="mb-8"><span className="text-4xl font-extrabold text-slate-900">Custom</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {['ERP Integrations', 'Single Sign-On (SSO)', 'White-labeling'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {f}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 text-sm">
        <p>&copy; 2026 ProcGen. All rights reserved.</p>
      </footer>
    </div>
  );
}
`;
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
console.log("Updated page.tsx via Node");
