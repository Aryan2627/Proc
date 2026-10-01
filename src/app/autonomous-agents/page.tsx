'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Network, Cpu, CheckCircle2, Zap, Lock, BarChart3, Search, Activity, FileText } from 'lucide-react';


const UnstoppableVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Aggressive play attempt
    const attemptPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        // Browser blocked unmuted autoplay. Mute it and play it so it at least plays visually.
        video.muted = true;
        video.play().catch((e: any) => console.error('Video strictly blocked:', e));
      }
    };

    attemptPlay();

    // The moment the user clicks or scrolls anywhere, unmute it
    const handleInteraction = () => {
      if (video && video.muted) {
        video.muted = false;
        video.play().catch((e: any) => {});
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #e2e8f0', backgroundColor: '#000', position: 'relative', cursor: 'default' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, pointerEvents: 'auto' }} />
      <video 
        ref={videoRef}
        src="/demo-video.mp4" 
        autoPlay 
        loop 
        playsInline
        controls={false}
        style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', objectFit: 'cover' }}
      />
    </div>
  );
};

const AGENTS = [
  {
    id: 'niti',
    name: 'NITI',
    role: 'Negotiation Agent',
    description: 'Fights for the best price, demands favorable payment terms, and prevents long-term vendor lock-in.',
    image: '/niti-avatar.jpg',
  },
  {
    id: 'anveshan',
    name: 'ANVESHAN',
    role: 'Sourcing Agent',
    description: 'Performs deep web scanning to discover sustainable, SOC-2 compliant, and cost-effective global suppliers.',
    image: '/anveshan-avatar.png',
  },
  {
    id: 'tark',
    name: 'TARK',
    role: 'Operations Agent',
    description: 'Automates purchase order creation, routes complex approvals, and enforces strict contract logic flawlessly.',
    image: '/tark-avatar.jpg',
  },
  {
    id: 'garuda',
    name: 'GARUDA',
    role: 'Risk Agent',
    description: 'Monitors real-time supply chain disruptions, geopolitical events, and ESG compliance across your vendor base.',
    image: '/garuda-avatar.png',
  }
];

const ActiveAgentAnimation = ({ agentId }: { agentId: string }) => {
  const [step, setStep] = useState(0);

  // Simple animation loop driver
  useEffect(() => {
    setStep(0);
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, [agentId]);

  if (agentId === 'niti') {
    return (
      <div className="p-8 h-full flex flex-col bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 text-lg">Vendor Negotiation: Acme Corp</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Active Session</span>
        </div>
        <div className="flex-1 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all">
            <div className="text-xs text-slate-400 mb-1">Incoming Quote</div>
            <div className="font-bold text-slate-700">10,000 units @ $150/unit</div>
          </div>
          <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                <Activity size={16} className="animate-spin" /> Analyzing historical contracts & should-cost models...
             </div>
          </div>
          <div className={`bg-blue-600 p-4 rounded-xl border border-blue-700 shadow-lg text-white transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-xs text-blue-200 mb-1">NITI Counter-Offer Generated</div>
            <div className="font-bold text-lg mb-2">Targeting $132/unit (Net-60 terms)</div>
            <div className="w-full bg-blue-800 rounded-full h-1.5 mt-4 overflow-hidden">
               <div className={`bg-white h-full transition-all duration-1000 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (agentId === 'anveshan') {
    return (
      <div className="p-8 h-full flex flex-col bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 text-lg">Global Sourcing Scan</h3>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">Deep Web</span>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <Search size={24} className={step >= 1 ? 'text-indigo-600' : 'text-slate-300'} />
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-700">Scanning 1,400+ Suppliers</div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                 <div className={`bg-indigo-500 h-full transition-all duration-1000 ${step >= 1 ? 'w-full' : 'w-[10%]'}`}></div>
              </div>
            </div>
          </div>
          <div className={`bg-white p-4 rounded-xl border border-emerald-200 shadow-sm transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-between">
              <div className="font-bold text-slate-700">TechFlow Logistics GmbH</div>
              <span className="text-emerald-600 text-xs font-bold flex items-center gap-1"><CheckCircle2 size={14}/> SOC-2 Verified</span>
            </div>
            <div className="text-xs text-slate-500 mt-2">ESG Score: 94/100 | Risk: Low</div>
          </div>
        </div>
      </div>
    );
  }

  if (agentId === 'tark') {
    return (
      <div className="p-8 h-full flex flex-col bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 text-lg">PO-992341 Validation</h3>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Ops Validation</span>
        </div>
        <div className="flex-1 space-y-4">
          {[
            { id: 1, text: '3-Way Invoice Match Verified' },
            { id: 2, text: 'Budget Allocation Confirmed' },
            { id: 3, text: 'Approval Routed to VP Finance' }
          ].map((item, idx) => (
            <div key={item.id} className={`flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 transition-all duration-500 ${step >= idx + 1 ? 'opacity-100' : 'opacity-30'}`}>
              <CheckCircle2 size={20} className={step >= idx + 1 ? 'text-emerald-500' : 'text-slate-300'} />
              <div className="font-medium text-slate-700">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // garuda
  return (
    <div className="p-8 h-full flex flex-col bg-slate-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 text-lg">Real-Time Risk Monitor</h3>
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold animate-pulse">Alert</span>
      </div>
      <div className="flex-1 space-y-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <div className="text-red-700 font-bold mb-1">Supply Chain Disruption Detected</div>
          <div className="text-sm text-red-600">Port strike in Hamburg. Estimated delay: 4-6 days.</div>
        </div>
        <div className={`bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <div className="font-bold text-slate-700 text-sm mb-2">Impact Analysis</div>
           <div className="flex justify-between text-xs text-slate-500 border-b pb-2 mb-2">
             <span>Shipments Affected</span> <span className="font-bold text-slate-800">3 POs</span>
           </div>
           <div className="flex justify-between text-xs text-slate-500">
             <span>Value at Risk</span> <span className="font-bold text-slate-800">$1.2M</span>
           </div>
        </div>
        <div className={`bg-blue-50 p-4 rounded-xl border border-blue-200 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <div className="text-blue-700 font-bold text-sm">Mitigation Action Taken</div>
           <div className="text-xs text-blue-600 mt-1">GARUDA has automatically drafted rerouting instructions and supplier notices.</div>
        </div>
      </div>
    </div>
  );
};


export default function AutonomousAgentsPage() {
  const [activeAgentId, setActiveAgentId] = useState(AGENTS[0].id);
  const activeAgent = AGENTS.find((a) => a.id === activeAgentId) || AGENTS[0];

  const [activeSoftwareId, setActiveSoftwareId] = useState(AGENTS[0].id);
  const activeSoftwareAgent = AGENTS.find((a) => a.id === activeSoftwareId) || AGENTS[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Fake Header to mimic marketing site */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            <span style={{ color: '#06b6d4' }}>❖</span> ProcGen
          </div>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>
            <span style={{ color: '#2563eb' }}>Platform</span>
            <span>Solutions</span>
            <span>Customers</span>
            <span>Resources</span>
            <span style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '4px' }}>
               AI Lab
            </span>
          </nav>
        </div>
        <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
          Request Demo
        </button>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Top Typography */}
        <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '60px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Context Agents
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
            The team that makes <br />
            <span style={{ color: '#2563eb' }}>your procurement AI-ready.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginBottom: '32px' }}>
            Supplier relationships have been an unsolved problem for years, and modern procurement needs more diligence than humans can manually provide. Context Agents are the AI teammates that negotiate, source, and continuously manage your supply chain.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <button style={{ backgroundColor: '#0f172a', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              See How it Works <ArrowRight size={18} />
            </button>
            <a href="#" style={{ color: '#0f172a', fontWeight: 600, fontSize: '1rem', textDecoration: 'underline' }}>
              Book a Demo
            </a>
          </div>
        </div>

        {/* Interactive Interactive Team Grid */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          border: '6px solid #2563eb', 
          borderRadius: '24px', 
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
          minHeight: '450px'
        }}>
          
          {/* Left Detail Panel */}
          <div style={{ 
            width: '35%', 
            backgroundColor: '#f8fafc', 
            padding: '40px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #e2e8f0'
          }}>
            <div style={{ 
              width: '140px', 
              height: '140px', 
              backgroundColor: '#fff', 
              borderRadius: '24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              marginBottom: '24px',
              position: 'relative'
            }}>
              {/* Decorative radial glow */}
              <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '24px', boxShadow: 'inset 0 0 20px rgba(37,99,235,0.1)' }} />
              <img src={activeAgent.image} alt={activeAgent.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '16px', zIndex: 1 }} />
            </div>
            
            <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
              {activeAgent.name}
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', textAlign: 'center', lineHeight: 1.5, margin: 0 }}>
              {activeAgent.description}
            </p>
          </div>

          {/* Right Grid Panel */}
          <div style={{ 
            width: '65%', 
            backgroundColor: '#ffffff', 
            padding: '40px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 24px 0', textAlign: 'center' }}>
              Meet your team
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '16px',
              flex: 1
            }}>
              {AGENTS.map((agent) => {
                const isActive = activeAgentId === agent.id;
                return (
                  <div 
                    key={agent.id}
                    onMouseEnter={() => setActiveAgentId(agent.id)}
                    style={{
                      border: isActive ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive ? '#f0f9ff' : '#ffffff',
                      boxShadow: isActive ? '0 4px 12px rgba(37,99,235,0.1)' : 'none'
                    }}
                  >
                    <img src={agent.image} alt={agent.name} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} />
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      {agent.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                      {agent.role}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Animated Software Scrolling Showcase Section */}
        <div className="mt-32 w-full flex flex-col md:flex-row gap-12">
          {/* Left Sidebar (Sticky Tab Selector) */}
          <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col pt-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Watch them work</h3>
            <div className="flex flex-col gap-2 relative">
              {/* Animated selection indicator bar */}
              <div 
                className="absolute left-0 w-1 bg-blue-600 rounded-r-lg transition-all duration-300"
                style={{ 
                  height: '40px', 
                  top: (AGENTS.findIndex(a => a.id === activeSoftwareId) * 64) + "px",
                  marginTop: '12px'
                }}
              />
              {AGENTS.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setActiveSoftwareId(agent.id)}
                  className={`text-left px-6 py-4 rounded-xl font-bold transition-all h-[64px] ${activeSoftwareId === agent.id ? 'bg-slate-50 text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50 border border-transparent'}`}
                >
                  <div className="flex items-center gap-3">
                    <img src={agent.image} alt={agent.name} className={`w-8 h-8 rounded object-cover transition-opacity ${activeSoftwareId === agent.id ? 'opacity-100' : 'opacity-50'}`} />
                    {agent.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Case Study Card like in Atlan mockup */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mt-12">
               <div className="text-blue-600 text-xs font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                 <FileText size={14} /> Case Study
               </div>
               <h4 className="font-bold text-slate-900 mb-2">Inside GlobalCorp's Agentic Rollout</h4>
               <p className="text-sm text-slate-600 mb-6">How GlobalCorp deployed 4 Context Agents to automate 30,000 POs in two weeks, saving $2M.</p>
               <button className="w-full py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">Read the full story</button>
            </div>
          </div>

          {/* Right Content Panel (Animated UI) */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
              Agents that read raw enterprise metadata to build foundational context.
            </h2>
            
            <div className="w-full bg-blue-600 rounded-3xl p-2 sm:p-6 shadow-2xl overflow-hidden relative" style={{ minHeight: '550px' }}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div className="bg-white w-full h-[500px] rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                
                {/* Mockup Header */}
                <div className="border-b border-slate-100 p-4 flex items-center gap-4 bg-white z-20 shadow-sm">
                  <img src={activeSoftwareAgent.image} alt={activeSoftwareAgent.name} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      {activeSoftwareAgent.name} 
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] uppercase tracking-wider">{activeSoftwareAgent.role}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{activeSoftwareAgent.description}</div>
                  </div>
                </div>

                {/* Simulated Software View */}
                <div className="flex-1 bg-slate-50 overflow-hidden relative">
                   <ActiveAgentAnimation agentId={activeSoftwareId} />
                </div>

              </div>
            </div>
          </div>
        </div>
      
        {/* Advanced Architecture Section (Now Video Embed) */}
        <div style={{ marginTop: '120px', width: '100%', maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>See the Swarm in Action</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Watch how our deterministic AI agents execute complex enterprise workflows.
            </p>
          </div>

          <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #e2e8f0', backgroundColor: '#000', position: 'relative' }}>
             {/* Invisible overlay to absolutely prevent clicking/pausing on mobile or desktop */}
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, pointerEvents: 'auto' }} />
             <video 
               src="/demo-video.mp4" 
               autoPlay 
               loop 
               playsInline
               controls={false}
               style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', objectFit: 'cover' }}
             />
          </div>
        </div>

        {/* Security & Guardrails */}
        <div style={{ marginTop: '120px', width: '100%', backgroundColor: '#0f172a', borderRadius: '32px', padding: '80px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px' }}>
              <Shield size={16} color="#60a5fa" /> Enterprise Guardrails
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Absolute Control.<br/>Zero Rogue Executions.
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', maxWidth: '500px' }}>
              We don't believe in unchecked AI. ProcGen runs on a strict Human-in-the-Loop (HITL) architecture. High-risk POs and multi-million dollar negotiations are intercepted for cryptographic certification.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc', fontWeight: 500 }}><CheckCircle2 size={20} color="#34d399" /> Deterministic Output Validation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc', fontWeight: 500 }}><CheckCircle2 size={20} color="#34d399" /> SOC-2 Type II Certified</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc', fontWeight: 500 }}><CheckCircle2 size={20} color="#34d399" /> Role-Based Approval Routing</li>
            </ul>
          </div>
          
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#60a5fa', marginBottom: '12px' }}><Lock size={32} /></div>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Data Isolation Guarantee</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#34d399', marginBottom: '12px' }}><BarChart3 size={32} /></div>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>40x</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Average ROI (Days 1-60)</div>
            </div>
            <div style={{ gridColumn: '1 / -1', backgroundColor: '#1e3a8a', padding: '30px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>Ready to deploy?</div>
                <div style={{ color: '#bfdbfe', fontSize: '0.95rem' }}>Talk to our integration engineers today.</div>
              </div>
              <button style={{ backgroundColor: 'white', color: '#1e3a8a', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
