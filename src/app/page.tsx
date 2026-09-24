"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { Bot, ArrowRight, CheckCircle2, Menu, Sparkles, X, Swords, Activity, Network, Receipt, Monitor, ChevronRight, ChevronDown, Plus, Shield, Zap, Target, MessageCircle, Send, Globe, Database, Lock, Trophy, Star, ArrowUpRight, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

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

  const faqs = [
    { q: "How long does it take to implement Dorc AI?", a: "Unlike traditional procurement software that takes 6 months to integrate, Dorc AI uses Live Vision OCR and can be deployed within 48 hours without touching your backend ERP." },
    { q: "Does Dorc AI replace my existing ERP?", a: "No. Dorc acts as an autonomous intelligence layer on top of your existing tools (SAP, Oracle, NetSuite). It does the manual clicking, matching, and emailing so your team doesn't have to." },
    { q: "How does the Negotiation Agent work?", a: "The agent analyzes supplier quotes against historical data and real-time raw material indices, then autonomously emails suppliers with data-backed counter-offers to drive down costs." },
    { q: "Is our financial data secure?", a: "Absolutely. Dorc AI can run locally or in a dedicated private cloud environment. We never train our base models on your proprietary pricing data, ensuring zero data leakage." }
  ];


  return (
    <div className="min-h-screen bg-[#F9F9FC] font-sans text-slate-900 selection:bg-blue-500/30 overflow-hidden relative font-inter">
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[200]" style={{ scaleX }} />

      {/* --- ATLAN-STYLE MINIMALIST NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Platform</a>
            <a href="#agents" className="text-slate-600 hover:text-blue-600 transition-colors">AI Agents</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Link href="/careers" className="text-slate-600 hover:text-blue-600 transition-colors">Careers</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">Log in</button>
            <button onClick={() => setIsModalOpen(true)} className="text-sm font-bold bg-blue-600 text-white px-5 py-2 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow transition-all">
              Request Demo
            </button>
          </div>
          <button className="md:hidden text-slate-600"><Menu size={24} /></button>
        </div>
      </nav>

      {/* --- HIGH-CONTRAST HERO (ATLAN VIBE) --- */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 z-10 bg-[#0B101E] overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

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

      {/* --- LOGO STRIP --- */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-widest">Trusted by AI-forward enterprise supply chains</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
             <div className="text-2xl font-black tracking-tighter">HAVELLS</div>
             <div className="text-2xl font-black tracking-tighter">SIGNATURE GLOBAL</div>
             <div className="text-2xl font-black tracking-tighter">ZUARI</div>
             <div className="text-2xl font-black tracking-tighter">VEDANTA</div>
          </div>
        </div>
      </section>

      {/* --- ATLAN BENTO BOX / FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-[#F9F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Context doesn't come from a prompt. <br/>It comes from a pipeline.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dorc AI isn't just a chatbot wrapper. It runs locally on your machine, reads your ERP, analyzes live vendor matrices, and orchestrates negotiations autonomously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Bento Card 1: Large */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Live Vision OCR (Local)</h3>
                <p className="text-slate-600 leading-relaxed max-w-md">
                  Dorc AI natively analyzes your screen in real-time, extracting data from supplier PDFs and legacy ERPs without requiring backend integrations or risking data leaks.
                </p>
              </div>
              <div className="mt-8 relative h-48 w-full bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center">
                 <div className="text-slate-400 font-mono text-sm">Vision OCR Processing...</div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-shadow group">
              <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Spend Control</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Track real-time budget variances, categorize tail-spend instantly, and proactively aggregate demand across departments.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-shadow group">
              <div>
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                  <Swords size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Negotiation Agent</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Autonomously sends counter-offers to rank bids and drive costs down, forcing suppliers into real-time bidding wars.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Wide */}
            <div className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-10 flex flex-col justify-between hover:shadow-2xl transition-shadow relative overflow-hidden text-white">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Network size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">The Multi-Agent Swarm</h3>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  Deploy over 14 specialized autonomous agents working in concert. From Supplier Discovery to Invoice 3-way Matching, scale your procurement ops 100x without adding headcount.
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap relative z-10">
                {['Guided Intake', 'Supplier Discovery', 'Auto-Award', 'Should-Cost', 'Fraud Detection'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-white border-t border-slate-200">
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
      </section>
      
      {/* --- FOOTER --- */}
      <footer className="bg-[#0B101E] pt-20 pb-10 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Dorc AI Agents</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Procure-to-Pay</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Vendor Portal</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50">
              <p>&copy; {new Date().getFullYear()} ProcGen Technologies. Built for the future.</p>
              <p>connect.procgen@gmail.com</p>
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
