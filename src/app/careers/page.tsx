'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Sparkles, ChevronRight, CheckCircle2, ArrowLeft, Send } from 'lucide-react';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: '', coverLetter: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const positions = [
    {
      id: 'strategy-intern',
      title: 'Strategy Intern',
      department: 'Corporate Strategy',
      type: 'Internship',
      location: 'Remote / Global',
      description: 'Work closely with our executive team to shape the future of enterprise procurement. You will analyze market trends, evaluate potential partnerships, and build strategic growth models.',
      requirements: ['Strong analytical skills', 'Familiarity with SaaS business models', 'Excellent written communication'],
      responsibilities: ['Conduct market research', 'Draft internal strategy memos', 'Assist in partnership evaluation']
    },
    {
      id: 'research-intern',
      title: 'Research Associate Intern',
      department: 'Data & Insights',
      type: 'Internship',
      location: 'Remote / Global',
      description: 'Dive deep into B2B software pricing and vendor landscapes. Your research will directly power our AI Negotiator models and provide critical insights to our top-tier enterprise clients.',
      requirements: ['Data-driven mindset', 'Attention to detail', 'Experience with Excel/Sheets'],
      responsibilities: ['Gather pricing data for major SaaS tools', 'Structure data for AI training', 'Publish internal market reports']
    },
    {
      id: 'bdr-intern',
      title: 'Business Development (BDR) Intern',
      department: 'Sales',
      type: 'Internship',
      location: 'Remote / Global',
      description: 'Be the tip of the spear for ProcGen\'s growth. You will identify key enterprise prospects, craft compelling outreach, and learn the fundamentals of high-ticket B2B SaaS sales.',
      requirements: ['High energy and resilience', 'Desire to learn enterprise sales', 'Strong interpersonal skills'],
      responsibilities: ['Identify target enterprise accounts', 'Craft personalized outreach campaigns', 'Shadow discovery calls with Account Executives']
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-violet-500/30 overflow-x-hidden font-sans">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-violet-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 pt-6 px-6">
        <motion.div 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 20 }}
          className="max-w-5xl mx-auto bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-full h-16 flex items-center justify-between px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite]"></div>
          <Link href="/" className="font-bold text-xl tracking-tight text-white relative z-10 flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg shadow-lg"></div>
            Proc<span className="text-violet-400">Gen</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative z-10">
            Back to Home
          </Link>
        </motion.div>
      </nav>

      <main className="relative z-10 pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold tracking-wide mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-4 h-4" /> WE ARE HIRING
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            Build the Future of <br className="hidden md:block"/>
            <span className="relative">
              <span className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-violet-500 to-cyan-500 text-transparent bg-clip-text">Enterprise Tech</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Enterprise Tech</span>
            </span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            We are looking for driven, ambitious interns to join our fast-growing team. 
            Help us redefine how companies negotiate and manage software globally.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Panel: Roles List */}
          <motion.div 
            variants={containerVariants} initial="hidden" animate="visible" 
            className="lg:col-span-5 space-y-4"
          >
            {positions.map((pos) => (
              <motion.div 
                key={pos.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedRole(pos.id);
                  setIsApplying(false);
                  setStatus('idle');
                }}
                className={`group relative p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedRole === pos.id 
                  ? 'bg-gradient-to-b from-violet-900/40 to-black/60 border border-violet-500/50 shadow-[0_10px_40px_rgba(139,92,246,0.15)]' 
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Indicator Glow */}
                {selectedRole === pos.id && (
                  <motion.div layoutId="activeGlow" className="absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-500/20 to-transparent opacity-50 pointer-events-none" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{pos.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {pos.department}</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                        <span className="flex items-center gap-1.5 text-cyan-400/80"><MapPin className="w-4 h-4" /> {pos.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400/80 text-sm leading-relaxed mb-6 line-clamp-2">{pos.description}</p>
                  
                  <div className="mt-auto pt-5 border-t border-white/10 flex justify-between items-center">
                    <span className={`text-sm font-bold flex items-center gap-1 transition-colors ${selectedRole === pos.id ? 'text-violet-400' : 'text-zinc-500 group-hover:text-white'}`}>
                      {selectedRole === pos.id ? 'Currently viewing' : 'View role'} <ChevronRight className="w-4 h-4" />
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRole(pos.id);
                        setIsApplying(true);
                        setStatus('idle');
                        if (window.innerWidth < 1024) {
                          setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100);
                        }
                      }}
                      className="bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center gap-2 relative z-20"
                    >
                      Apply <span className="hidden sm:inline">Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Panel: Details or Form */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 h-full min-h-[600px]">
            <AnimatePresence mode="wait">
              {!selectedRole && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full min-h-[500px] border border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]"></div>
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-inner border border-white/10">
                    <Briefcase className="w-8 h-8 text-zinc-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Select a position</h3>
                  <p className="text-zinc-500 text-center max-w-xs">Click on any role from the list to view the full description and requirements.</p>
                </motion.div>
              )}

              {selectedRole && !isApplying && selectedPos && (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: 'spring' as const, damping: 25, stiffness: 200 }}
                  className="bg-[#0a0a0a]/80 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
                  
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">{selectedPos.department}</span>
                    <h2 className="text-4xl font-black mb-4 tracking-tight">{selectedPos.title}</h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">{selectedPos.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2 text-lg">
                        <CheckCircle2 className="w-5 h-5 text-violet-400" /> What you'll do
                      </h4>
                      <ul className="space-y-3">
                        {selectedPos.responsibilities.map((r, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/50 shrink-0"></span>
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2 text-lg">
                        <Sparkles className="w-5 h-5 text-cyan-400" /> Requirements
                      </h4>
                      <ul className="space-y-3">
                        {selectedPos.requirements.map((r, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0"></span>
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsApplying(true)}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-black text-lg transition-all shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] hover:-translate-y-1 flex justify-center items-center gap-2 group"
                  >
                    Start Your Application <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}

              {selectedRole && isApplying && (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: 'spring' as const, damping: 25, stiffness: 200 }}
                  className="bg-[#0a0a0a]/90 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500"></div>

                  <div className="flex items-center gap-4 mb-10">
                    <button 
                      onClick={() => setIsApplying(false)} 
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                      <h2 className="text-2xl font-black">Apply Now</h2>
                      <p className="text-sm text-zinc-500">for {selectedPos?.title}</p>
                    </div>
                  </div>
                  
                  {status === 'success' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                      <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-3xl font-black mb-3">Application Received!</h3>
                      <p className="text-zinc-400 max-w-sm mx-auto mb-10">Thank you for applying. Our team will review your profile and get back to you shortly if there's a match.</p>
                      <button onClick={() => {setStatus('idle'); setSelectedRole(null); setIsApplying(false);}} className="text-sm font-bold text-violet-400 hover:text-violet-300 hover:underline">
                        Browse other open roles
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Full Name</label>
                          <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all shadow-inner" placeholder="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address</label>
                          <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all shadow-inner" placeholder="jane@example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Phone Number</label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all shadow-inner" placeholder="+1 (555) 000-0000" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Resume Link <span className="text-zinc-600 normal-case font-normal">(Drive, LinkedIn, Site)</span></label>
                        <input required type="url" value={formData.resume} onChange={e => setFormData({...formData, resume: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all shadow-inner" placeholder="https://..." />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Why ProcGen?</label>
                        <textarea required rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all resize-none shadow-inner" placeholder="Tell us why you'd be a great fit..."></textarea>
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
                        className="w-full py-4 mt-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-lg transition-all disabled:opacity-50 flex justify-center items-center gap-3 group"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
