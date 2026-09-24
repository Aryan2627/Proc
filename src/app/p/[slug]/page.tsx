import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Convert slug to title format
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate some dynamic content based on the slug to make it look real
  const getContent = () => {
    if (slug.includes('spend')) {
      return (
        <>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Managing spend across an enterprise requires more than just visibility; it requires autonomous action. Our platform identifies leakage, flags anomalous vendor pricing, and automatically renegotiates terms before the PO is issued.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Automated Cost Reduction</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            By analyzing thousands of historical transactions, the AI builds a robust 'should-cost' model for every line item. When a requisition comes in above the target threshold, the system automatically challenges the supplier with data-backed counter-offers.
          </p>
        </>
      );
    }
    if (slug.includes('agent') || slug.includes('ai') || slug.includes('ocr')) {
      return (
        <>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Our autonomous agents are not just LLM wrappers. They are deterministic state machines backed by deep neural networks designed specifically for procurement, ensuring zero hallucinations and absolute mathematical precision.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">How It Works</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            The agents hook directly into your email and ERP environments. When a supplier sends a quote (even embedded in a messy PDF), our Live Vision OCR pulls the unstructured data, normalizes it against your taxonomy, and decides the next best action in milliseconds.
          </p>
        </>
      );
    }
    return (
      <>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Welcome to the definitive guide on {title}. At ProcGen, we are committed to providing the most advanced enterprise infrastructure available on the market today.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Key Benefits</h2>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3 text-lg text-slate-700"><CheckCircle2 className="text-blue-600" size={24} /> 100% Autonomous execution</li>
          <li className="flex items-center gap-3 text-lg text-slate-700"><CheckCircle2 className="text-blue-600" size={24} /> SOC2 Type II Certified Security</li>
          <li className="flex items-center gap-3 text-lg text-slate-700"><CheckCircle2 className="text-blue-600" size={24} /> Integrates with legacy on-premise systems</li>
        </ul>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Our customers see an average of 40x ROI within the first 60 days of deployment. We don't just provide software; we provide an autonomous digital workforce that scales infinitely with your needs.
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F9FC] font-sans selection:bg-blue-500/30">
      {/* Navbar (Simplified) */}
      <nav className="fixed w-full z-50 bg-[#0B101E]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo_transparent.png" alt="ProcGen" className="w-8 h-8 filter brightness-0 invert" />
            <span className="font-bold text-xl tracking-tight text-white">ProcGen</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-[#0B101E] pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles size={14} /> Platform Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Deep dive into how ProcGen is redefining the standards for modern enterprise procurement and supply chain automation.
          </p>
        </div>
      </header>

      {/* Content Body */}
      <main className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-slate-200 prose prose-lg prose-slate max-w-none">
            {getContent()}
            
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to automate your workflows?</h3>
              <Link href="/" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-600/25 transition-all hover:-translate-y-0.5">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 ProcGen Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
