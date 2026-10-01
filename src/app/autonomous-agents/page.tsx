'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Network, Cpu, CheckCircle2, Zap, Lock, BarChart3 } from 'lucide-react';

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

export default function AutonomousAgentsPage() {
  const [activeAgentId, setActiveAgentId] = useState(AGENTS[0].id);

  const activeAgent = AGENTS.find((a) => a.id === activeAgentId) || AGENTS[0];

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

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
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
      
        {/* Advanced Architecture Section */}
        <div style={{ marginTop: '120px', width: '100%', maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>The Engine Behind the Agents</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Our agents are not generic wrappers. They are deterministic state machines powered by your live enterprise context.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Step 1 */}
            <div style={{ padding: '32px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', color: '#4f46e5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Network size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>1. Data Ingestion</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                We pull structured and unstructured data across your ERPs, emails, and PDFs using Live Vision OCR and native integrations.
              </p>
            </div>
            {/* Step 2 */}
            <div style={{ padding: '32px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#dbeafe', color: '#2563eb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>2. Context Lakehouse</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Data is normalized into a semantic graph. The AI understands the exact relationship between a vendor, a PO, and historical pricing.
              </p>
            </div>
            {/* Step 3 */}
            <div style={{ padding: '32px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#166534' }}>3. Autonomous Execution</h3>
              <p style={{ color: '#15803d', lineHeight: 1.6, fontSize: '0.95rem' }}>
                The agent swarm acts on the graph to negotiate, source, and approve workflows at 100x human speed.
              </p>
            </div>
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
