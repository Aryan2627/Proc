'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const selectedPos = positions.find(p => p.id === selectedRole);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 overflow-x-hidden font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 pt-6 px-6">
        <div className="max-w-5xl mx-auto bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6">
          <Link href="/" className="font-bold text-xl tracking-tight text-white">
            Proc<span className="text-violet-500">Gen</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold tracking-wide mb-6">
              JOIN THE REVOLUTION
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Build the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Enterprise Tech</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We are looking for driven, ambitious interns to join our fast-growing team. 
            Help us redefine how companies negotiate and manage software globally.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel: Roles List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm">1</div>
              Select a Position
            </h2>
            {positions.map((pos) => (
              <motion.div 
                key={pos.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedRole(pos.id);
                  setIsApplying(false);
                  setStatus('idle');
                }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${selectedRole === pos.id ? 'bg-violet-500/10 border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{pos.title}</h3>
                    <p className="text-sm text-zinc-400">{pos.department} • {pos.type}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-zinc-300">{pos.location}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{pos.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Panel: Details or Form */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {!selectedRole && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="h-full min-h-[400px] border border-dashed border-white/20 rounded-3xl flex items-center justify-center bg-white/5 backdrop-blur-md"
                >
                  <p className="text-zinc-500 font-medium text-lg">Select a position to view details</p>
                </motion.div>
              )}

              {selectedRole && !isApplying && selectedPos && (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
                >
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">{selectedPos.department}</span>
                  <h2 className="text-3xl font-black mb-6">{selectedPos.title}</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-white font-bold mb-2">What you'll do</h4>
                      <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm">
                        {selectedPos.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">What we're looking for</h4>
                      <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm">
                        {selectedPos.requirements.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsApplying(true)}
                    className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    Apply Now
                  </button>
                </motion.div>
              )}

              {selectedRole && isApplying && (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => setIsApplying(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      ←
                    </button>
                    <h2 className="text-2xl font-bold">Submit Application</h2>
                  </div>
                  
                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                      <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                      <p className="text-zinc-400">Thank you for applying. Our team will review your profile and get back to you shortly.</p>
                      <button onClick={() => {setStatus('idle'); setSelectedRole(null); setIsApplying(false);}} className="mt-8 text-sm text-violet-400 hover:text-violet-300">Browse other roles</button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-400">Full Name</label>
                          <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-400">Email Address</label>
                          <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="jane@example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Resume Link (Google Drive, LinkedIn, etc.)</label>
                        <input required type="url" value={formData.resume} onChange={e => setFormData({...formData, resume: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="https://..." />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Why ProcGen? (Cover Letter)</label>
                        <textarea required rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
                      </div>

                      {status === 'error' && (
                        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                      )}

                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                      >
                        {status === 'submitting' ? (
                          <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                        ) : 'Submit Application'}
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
