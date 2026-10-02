import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import StructuredData from './StructuredData';

interface SEOTemplateProps {
  title: string;
  h1: string;
  description: string;
  features: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  canonicalSlug: string;
}

export default function SEOPageTemplate({ title, h1, description, features, benefits, faqs, canonicalSlug }: SEOTemplateProps) {
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `https://procgen.ai/${canonicalSlug}`
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <StructuredData data={webpageSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{h1}</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.procgen.ai/signup" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-colors flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <Link href="/autonomous-agents" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-colors border border-slate-700">
              Meet the AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <ul className="space-y-6">
              {features.map((feature, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="bg-white py-20 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Internal Linking / Breadcrumbs */}
      <section className="max-w-5xl mx-auto px-6 pt-20">
        <div className="p-8 bg-slate-100 rounded-2xl">
          <h3 className="font-bold mb-4">Explore Related Solutions</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/procurement-software" className="text-cyan-700 hover:underline">Procurement Software</Link>
            <Link href="/ai-procurement" className="text-cyan-700 hover:underline">AI Procurement</Link>
            <Link href="/vendor-management" className="text-cyan-700 hover:underline">Vendor Management</Link>
            <Link href="/procure-to-pay" className="text-cyan-700 hover:underline">Procure-to-Pay (P2P)</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
