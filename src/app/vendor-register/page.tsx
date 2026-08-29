'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const industries = [
  "Manufacturing", "Automotive", "Pharmaceuticals", "Chemicals", "Oil & Gas",
  "Petrochemicals", "Steel & Metals", "Mining", "Construction", "Infrastructure",
  "Real Estate", "Cement", "Power & Energy", "Renewable Energy", "Electrical & Electronics",
  "Telecommunications", "Information Technology (IT)", "Software / SaaS", "IT Hardware",
  "Semiconductors", "Consumer Electronics", "FMCG", "Food & Beverage", "Agriculture",
  "Textiles", "Apparel & Fashion", "Leather & Footwear", "Paper & Packaging", "Printing",
  "Plastics & Rubber", "Glass", "Ceramics", "Furniture", "Home & Building Materials",
  "Retail", "Wholesale & Distribution", "E-commerce", "Logistics", "Transportation",
  "Warehousing", "Shipping & Maritime", "Aviation", "Railways", "Healthcare",
  "Hospitals", "Medical Devices", "Biotechnology", "Education", "Hospitality",
  "Hotels & Resorts", "Restaurants & Catering", "Travel & Tourism", "Banking & Financial Services",
  "Insurance", "Real Estate Services", "Professional Services", "Consulting", "Legal Services",
  "Accounting & Audit", "Marketing & Advertising", "Media & Entertainment", "Government & Public Sector",
  "Defense & Aerospace", "Security Services", "Facility Management", "Cleaning & Housekeeping",
  "Human Resources / Staffing", "Engineering Services", "Industrial Equipment", "Machinery & Equipment",
  "Industrial Automation", "Robotics", "HVAC", "Fire & Safety", "Water & Waste Management",
  "Environmental Services", "Energy & Utilities", "Telecom Infrastructure", "Printing & Office Supplies",
  "Packaging & Materials", "Furniture & Office Infrastructure", "Chemicals & Industrial Consumables",
  "Lubricants & Oils", "Tools & Hardware", "Safety Equipment / PPE", "Laboratory Equipment & Supplies",
  "Medical Supplies", "Agricultural Equipment", "Renewable Energy Equipment", "Solar",
  "Wind Energy", "Battery & Energy Storage", "EV & EV Components", "Aerospace Components",
  "Marine & Shipbuilding", "Railway Equipment", "Defense Manufacturing", "Luxury Goods", "Jewellery"
];

export default function VendorRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    industry: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('https://cpanel-swart.vercel.app/api/vendors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error('Registration failed');
      setStatus('success');
    } catch(err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
      <Link href="/" className="absolute top-6 left-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
      </Link>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Vendor Network</h1>
          <p className="text-zinc-400">Join ProcGen as a supplier to receive direct RFQs from enterprise buyers.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-fade-in">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Registration Complete</h2>
            <p className="text-zinc-400">Your profile has been added to our supplier database. We will automatically match you with buyers in the {formData.industry} sector.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-6">
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                An error occurred during registration. Please try again.
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={e => setFormData(p => ({ ...p, companyName: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Acme Supplier Ltd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Material / Category</label>
                <input
                  list="vendor-industries"
                  required
                  value={formData.industry}
                  onChange={e => setFormData(p => ({ ...p, industry: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Type to search or select category..."
                />
                <datalist id="vendor-industries">
                  {industries.map(i => (
                    <option key={i} value={i} />
                  ))}
                </datalist>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Registering...' : 'Register as Vendor'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
