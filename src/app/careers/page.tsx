'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Cpu, Zap, Fingerprint, Crosshair, ArrowLeft, Send, Network, ShieldAlert, Eye, Code2, Database } from 'lucide-react';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', resume: '', coverLetter: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  
  const fullTerminalText = '> ESTABLISHING SECURE UPLINK TO DORC AI NEURAL CORE...\n> CONNECTION STABLE.\n> ANALYZING INCOMING HUMAN METRICS...\n> 3 CRITICAL NODES REQUIRE HUMAN OVERSIGHT.\n> INITIATE RECRUITMENT_PROTOCOL.EXE';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTerminalText(fullTerminalText.slice(0, i));
      i++;
      if (i > fullTerminalText.length) clearInterval(typing);
    }, 30);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const positions = [
    {
      id: 'strategy-intern',
      title: 'Strategy Operations (Node 1)',
      department: 'Corporate Strategy',
      type: 'Level 1 Clearance',
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      description: 'Human oversight required for macro-level expansion. Architect market models, evaluate ecosystem vulnerabilities, and map the expansion of our autonomous procurement network.',
    },
    {
      id: 'research-intern',
      title: 'Data Intelligence (Node 2)',
      department: 'Neural Training',
      type: 'Level 1 Clearance',
      icon: <Database className="w-6 h-6 text-blue-400" />,
      description: 'Feed the swarm. Construct high-density B2B pricing datasets, synthesize vendor metadata, and directly train the Dorc AI Negotiator algorithms.',
    },
    {
      id: 'bdr-intern',
      title: 'Growth Infiltration (Node 3)',
      department: 'Expansion',
      type: 'Level 1 Clearance',
      icon: <Crosshair className="w-6 h-6 text-indigo-400" />,
      description: 'Act as the tip of the spear. Identify enterprise vulnerabilities, execute targeted outreach vectors, and establish initial neural links with Fortune 500 targets.',
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
        setFormData({ name: '', email: '', resume: '', coverLetter: '' });
      } else {
        setStatus('idle');
        alert('Transmission failed. Check network connection.');
      }
    } catch (error: any) {
      setStatus('idle');
      alert('Transmission failed. Check network connection.');
    }
  };

  const selectedPos = positions.find(p => p.id === selectedRole);

  return (
    <div className="min-h-screen bg-[#02040A] text-white overflow-hidden font-mono selection:bg-cyan-500/30 relative">
      
      {/* MOUSE SPOTLIGHT */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.06), transparent 40%)`
        }}
      />

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [perspective:1000px]">
          <motion.div 
            animate={{ backgroundPosition: ['0px 0px', '0px 64px'] }} 
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
          />
        </div>

        {/* Central Core Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 border-b border-cyan-500/20 bg-[#02040A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Cpu className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
            </div>
            <span className="font-bold tracking-widest text-white uppercase text-sm">Dorc.AI_Core</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-400 tracking-widest">
            <span className="animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div> SYSTEM_ONLINE</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isApplying ? (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>
              
              {/* TERMINAL HEADER */}
              <div className="mb-20 max-w-3xl mx-auto">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
                  <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs border-b border-slate-800 pb-2">
                    <Terminal size={14} /> terminal.exe — dorc_recruitment_v2.0
                  </div>
                  <div className="text-cyan-400 font-mono text-sm leading-relaxed whitespace-pre-wrap min-h-[120px]">
                    {terminalText}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>

              {/* NODE GRID */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Open Nodes</h2>
                <p className="text-cyan-500/80 text-sm tracking-widest font-bold">SELECT A VECTOR TO INITIATE UPLINK</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {positions.map((pos, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + (idx * 0.2), duration: 0.5 }}
                    key={pos.id}
                    onHoverStart={() => setSelectedRole(pos.id)}
                    className="group relative bg-black/40 border border-cyan-500/20 hover:border-cyan-400 rounded-xl p-8 backdrop-blur-md transition-all cursor-pointer overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >
                    {/* Hover Scanline */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                        {pos.icon}
                      </div>
                      
                      <div className="text-[10px] text-cyan-500 font-bold mb-2 tracking-[0.2em]">{pos.department} // {pos.type}</div>
                      <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-cyan-300 transition-colors">{pos.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{pos.description}</p>
                      
                      <button onClick={() => { setSelectedRole(pos.id); setIsApplying(true); }} className="w-full py-3 border border-cyan-500/50 text-cyan-400 font-bold tracking-[0.2em] text-[10px] uppercase rounded hover:bg-cyan-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                        Initiate Sequence <Zap size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto mt-10">
              
              <div className="bg-black/60 border border-cyan-500/40 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(34,211,238,0.15)] backdrop-blur-xl relative overflow-hidden">
                
                {/* Decorative Tech Elements */}
                <div className="absolute top-4 right-4 text-cyan-500/20"><ShieldAlert size={60} strokeWidth={1} /></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                
                <button onClick={() => setIsApplying(false)} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 text-xs font-bold tracking-[0.2em] uppercase">
                  <ArrowLeft size={14} /> Abort Sequence
                </button>

                <div className="mb-10 relative z-10">
                  <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-2">Secure Uplink</h2>
                  <p className="text-cyan-400 text-xs font-bold tracking-[0.2em]">DESTINATION: <span className="text-white">{selectedPos?.title}</span></p>
                </div>

                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 relative z-10">
                    <div className="w-24 h-24 mx-auto border-2 border-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)] relative">
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20"></div>
                      <Fingerprint className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-black tracking-widest text-white mb-2 uppercase">Identity Verified</h3>
                    <p className="text-slate-400 text-sm">Your data block has been successfully transmitted to the neural core. Await further instructions via comm-link.</p>
                    <button onClick={() => {setStatus('idle'); setIsApplying(false);}} className="mt-8 px-8 py-3 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase rounded hover:bg-cyan-500/10 transition-colors">
                      Return to Grid
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2"><Eye size={12}/> Operative Name</label>
                        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/80 border border-slate-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-mono text-sm placeholder:text-slate-700" placeholder="Enter designation..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2"><Zap size={12}/> Comm Link (Email)</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/80 border border-slate-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-mono text-sm placeholder:text-slate-700" placeholder="address@domain.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2"><Code2 size={12}/> Encrypted Data Block (Resume URL)</label>
                      <input required type="url" value={formData.resume} onChange={e => setFormData({...formData, resume: e.target.value})} className="w-full bg-black/80 border border-slate-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-mono text-sm placeholder:text-slate-700" placeholder="https://..." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2"><Terminal size={12}/> Initialization parameters (Cover Letter)</label>
                      <textarea required rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full bg-black/80 border border-slate-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-mono text-sm resize-none placeholder:text-slate-700" placeholder="Why are you suited for the swarm?"></textarea>
                    </div>

                    <button type="submit" disabled={status === 'submitting'} className="w-full py-4 mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-sm tracking-[0.2em] uppercase transition-all disabled:opacity-50 flex justify-center items-center gap-3 relative overflow-hidden group rounded-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                      {status === 'submitting' ? (
                        <>TRANSMITTING DATA...</>
                      ) : (
                        <>
                          <span className="relative z-10 flex items-center gap-2">Execute Uplink <Send size={16} /></span>
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[scan_1s_ease-in-out_infinite]"></div>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
