'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Sparkles, ChevronRight, CheckCircle2, ArrowLeft, Send, BarChart, Database, Network, Globe, Activity } from 'lucide-react';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: '', coverLetter: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const positions = [
    {
      id: 'strategy-intern',
      title: 'Strategy & Operations',
      department: 'Corporate Strategy',
      type: 'Internship',
      location: 'Remote / Global',
      icon: <BarChart className="w-5 h-5 text-blue-400" />,
      description: 'Work closely with our executive team to shape the future of enterprise procurement. You will analyze market trends, evaluate potential partnerships, and build strategic growth models.',
      requirements: ['Strong analytical skills', 'Familiarity with SaaS business models', 'Excellent written communication'],
    },
    {
      id: 'research-intern',
      title: 'Data Intelligence',
      department: 'AI Research',
      type: 'Internship',
      location: 'Remote / Global',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      description: 'Dive deep into B2B software pricing and vendor landscapes. Your research will directly power our AI Negotiator models and provide critical insights to our top-tier enterprise clients.',
      requirements: ['Data-driven mindset', 'Attention to detail', 'Experience with massive datasets'],
    },
    {
      id: 'bdr-intern',
      title: 'Business Development',
      department: 'Sales & Growth',
      type: 'Internship',
      location: 'Remote / Global',
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      description: 'Be the tip of the spear for our growth. You will identify key enterprise prospects, craft compelling outreach, and learn the fundamentals of high-ticket B2B SaaS sales.',
      requirements: ['High energy and resilience', 'Desire to learn enterprise sales', 'Strong interpersonal skills'],
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: selectedRole })
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', resume: '', coverLetter: '' });
      } else {
        const errData = await res.json().catch(() => ({}));
        setErrorMsg(errData.error || 'Server returned ' + res.status);
        setStatus('error');
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Network error');
      setStatus('error');
    }
  };

  const selectedPos = positions.find(p => p.id === selectedRole);

  return (
    <div className="min-h-screen bg-[#0B101E] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-[#0B101E]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-white/10 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all">
              <img loading="lazy" decoding="async" src="/logo_transparent.png" alt="ProcGen Logo" className="w-6 h-6 object-contain scale-110 filter brightness-0 invert" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white ml-1">ProcGen</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/careers" className="text-sm font-semibold text-white transition-colors">Careers</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Sparkles className="w-4 h-4" /> WE ARE HIRING
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
            Build the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Enterprise AI</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join the world's most innovative supply chain AI team. We are looking for exceptional builders to scale our autonomous swarm architecture.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 relative">
          {/* Roles List */}
          <div className={`lg:col-span-12 transition-all duration-500 ease-in-out ${selectedRole ? 'lg:col-span-5' : 'max-w-4xl mx-auto'}`}>
            <div className={`flex items-center justify-between mb-8 ${selectedRole ? 'px-2' : ''}`}>
              <h2 className="text-2xl font-bold">Open Positions</h2>
              <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{positions.length} Roles</span>
            </div>

            <div className="space-y-4">
              {positions.map((pos, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  key={pos.id} 
                  onClick={() => setSelectedRole(pos.id)}
                  className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md ${selectedRole === pos.id ? 'bg-blue-600/10 border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-white/10'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${selectedRole === pos.id ? 'bg-blue-500/20 border-blue-500/30' : 'bg-[#0B101E] border-white/10 group-hover:border-blue-500/30'}`}>
                        {pos.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{pos.title}</h3>
                        <p className="text-sm text-slate-400 font-medium">{pos.department}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                    <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-md border border-white/5"><Briefcase className="w-3.5 h-3.5 text-blue-400" /> {pos.type}</span>
                    <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-md border border-white/5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {pos.location}</span>
                  </div>

                  {!selectedRole && (
                    <div className="mt-6 pt-6 border-t border-white/5 text-sm text-slate-400 leading-relaxed">
                      {pos.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Form Side Panel */}
          <AnimatePresence mode="wait">
            {selectedRole && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 20 }} 
                transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                className="lg:col-span-7"
              >
                {!isApplying ? (
                  <div className="bg-[#02040A]/80 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl h-full flex flex-col">
                    <button onClick={() => setSelectedRole(null)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-slate-400 transition-all mb-8">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    
                    <h2 className="text-3xl font-bold mb-4">{selectedPos?.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{selectedPos?.description}</p>
                    
                    <div className="mb-10">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Requirements</h3>
                      <ul className="space-y-3">
                        {selectedPos?.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <button onClick={() => setIsApplying(true)} className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] flex justify-center items-center gap-2 group">
                        Apply for this position <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#02040A]/80 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                    <div className="flex items-center gap-4 mb-10">
                      <button onClick={() => setIsApplying(false)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-slate-400 transition-all">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold">Apply Now</h2>
                        <p className="text-sm text-slate-400">for {selectedPos?.title}</p>
                      </div>
                    </div>
                    
                    {status === 'success' ? (
                      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Application Received</h3>
                        <p className="text-slate-400 max-w-sm mx-auto mb-8">Thank you for applying. Our team will review your profile and contact you shortly.</p>
                        <button onClick={() => {setStatus('idle'); setSelectedRole(null); setIsApplying(false);}} className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                          Return to Open Positions
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" placeholder="Jane Doe" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" placeholder="jane@example.com" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                          <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" placeholder="+1 (555) 000-0000" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resume Link <span className="text-slate-600 normal-case font-normal">(Drive, LinkedIn, Site)</span></label>
                          <input required type="url" value={formData.resume} onChange={e => setFormData({...formData, resume: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" placeholder="https://..." />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Why ProcGen?</label>
                          <textarea required rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
                        </div>

                        {status === 'error' && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                            <p className="text-red-400 text-sm font-bold mb-1">Application Failed</p>
                            <p className="text-red-400/80 text-xs font-mono break-words">{errorMsg || 'Please try again.'}</p>
                          </motion.div>
                        )}

                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="w-full py-4 mt-2 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-lg transition-all disabled:opacity-50 flex justify-center items-center gap-3 group"
                        >
                          {status === 'submitting' ? (
                            <>
                              <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span> Processing
                            </>
                          ) : (
                            <>
                              Submit Application <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    
      {/* --- MEGA FOOTER --- */}
      <footer className="bg-[#0B101E] pt-24 pb-12 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img loading="lazy" decoding="async" src="/logo_transparent.png" alt="ProcGen Logo" className="w-8 h-8 object-contain filter brightness-0 invert scale-110" />
                  <span className="font-bold text-2xl tracking-tight text-white ml-1">ProcGen</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                  ProcGen is the enterprise AI agent platform for modern supply chains. Unify your context, automate your workflows, and negotiate at scale.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Globe size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white"><Activity size={18} /></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                <ul className="space-y-4">
                  <li><a href="/p/dorc-ai-agents" className="hover:text-blue-400 transition-colors">Dorc AI Agents</a></li>
                  <li><a href="/p/enterprise-data-graph" className="hover:text-blue-400 transition-colors">Enterprise Data Graph</a></li>
                  <li><a href="/p/live-vision-ocr" className="hover:text-blue-400 transition-colors">Live Vision OCR</a></li>
                  <li><a href="/p/security" className="hover:text-blue-400 transition-colors">Security & Trust</a></li>
                  </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                <ul className="space-y-4">
                  <li><a href="/p/direct-spend" className="hover:text-blue-400 transition-colors">For Direct Spend</a></li>
                  <li><a href="/p/indirect-spend" className="hover:text-blue-400 transition-colors">For Indirect Spend</a></li>
                  <li><a href="/p/sap-ariba" className="hover:text-blue-400 transition-colors">For SAP Ariba Users</a></li>
                  <li><a href="/p/finance-teams" className="hover:text-blue-400 transition-colors">For Finance Teams</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><a href="/p/about-us" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="/careers" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group">Careers <span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)]">(We're Hiring!)</span></a></li>
                  <li><a href="/p/blog-news" className="hover:text-blue-400 transition-colors">Blog & News</a></li>
                  <li><a href="/p/contact-sales" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-500">
                © 2026 ProcGen Inc. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-slate-500">
                <a href="/p/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                <a href="/p/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
}