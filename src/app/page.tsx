import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Gavel, Users, Receipt, CheckCircle2, Menu } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ProcGen</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://app.procgen.in/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Client Login
            </Link>
            <a href="#book" className="text-sm font-semibold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg shadow-blue-600/20">
              Book a Session
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
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
            <a href="#book" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-lg">
              Book a Strategy Session
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 font-semibold px-8 py-4 rounded-full hover:bg-slate-50 transition-all text-lg shadow-sm">
              Explore Features
            </a>
          </div>

          {/* Dashboard Mockup */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
            <div className="relative rounded-2xl border border-slate-200/50 bg-slate-50/50 backdrop-blur-sm p-2 shadow-2xl shadow-blue-900/5 overflow-hidden">
              <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[16/9] shadow-inner flex items-center justify-center relative">
                 {/* Fake UI Header */}
                 <div className="absolute top-0 w-full h-12 bg-slate-800/80 border-b border-slate-700 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 {/* Fake UI Content */}
                 <div className="mt-12 flex w-full h-full p-6 gap-6">
                   <div className="w-64 bg-slate-800/50 rounded-lg hidden md:block"></div>
                   <div className="flex-1 flex flex-col gap-6">
                     <div className="h-32 bg-blue-600/20 border border-blue-500/20 rounded-xl"></div>
                     <div className="flex-1 bg-slate-800/50 rounded-xl"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Everything you need to source smarter.
            </h2>
            <p className="text-slate-600 text-lg">
              ProcGen replaces messy email threads and spreadsheets with a single, transparent source of truth for your entire supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Internal Intake Requests</h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline employee purchase requests with customized forms and multi-level approval workflows. Never lose track of a PR again.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Gavel size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dynamic Sourcing Events</h3>
              <p className="text-slate-600 leading-relaxed">
                Launch standard RFQs or live Reverse Auctions in seconds using smart templates. Auto-rank bids to ensure you get the absolute best price.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Vendor Network</h3>
              <p className="text-slate-600 leading-relaxed">
                A private, tenant-isolated directory to onboard suppliers. Chat with them in real-time natively inside the platform—no more lost emails.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <Receipt size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated PO Ledger</h3>
              <p className="text-slate-600 leading-relaxed">
                Instantly convert awarded bids into finalized Purchase Orders. Track fulfillment status and integrate effortlessly with your existing ERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="text-slate-600 text-lg">
              Choose the plan that fits your procurement volume. No hidden implementation fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Perfect for small teams standardizing their purchasing.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">₹14,999</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Up to 10 active vendors', 'Standard RFQs', 'Basic Intake Workflows', 'Email Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#book" className="w-full py-3 px-4 rounded-xl font-semibold text-center text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
                Contact Sales
              </a>
            </div>

            {/* Professional */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl shadow-blue-900/20 flex flex-col relative transform md:-translate-y-4 border border-slate-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">For growing enterprises running complex auctions.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">₹39,999</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited active vendors', 'Live Reverse Auctions', 'Multi-level Approvals', 'Vendor Chat Portal', 'Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#book" className="w-full py-3 px-4 rounded-xl font-semibold text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors">
                Book a Demo
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Custom tailored for massive scale and compliance.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Custom ERP Integrations', 'Single Sign-On (SSO)', 'White-labeling', 'Dedicated Account Manager', 'On-premise deployment options'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#book" className="w-full py-3 px-4 rounded-xl font-semibold text-center text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOK A SESSION (LEAD FORM) --- */}
      <section id="book" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Ready to transform your procurement?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Book a personalized 30-minute session with our sourcing experts. We'll show you exactly how ProcGen can save your company time and capital.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span>Fast 30-minute demo.<br/>No commitment required.</span>
            </div>
          </div>
          
          <div className="w-full md:w-[400px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8">
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email</label>
                <input type="email" placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
                <input type="text" placeholder="Acme Corp" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <button type="button" className="mt-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">ProcGen</span>
          </div>
          <div className="text-sm">
            &copy; 2026 ProcGen Technologies. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
