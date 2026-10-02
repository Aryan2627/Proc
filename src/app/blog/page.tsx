import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Procurement & AI Blog | ProcGen',
  description: 'Read the latest insights on enterprise procurement, AI sourcing automation, and vendor management best practices.',
  alternates: {
    canonical: 'https://procgen.ai/blog'
  }
};

const DUMMY_POSTS = [
  { slug: 'future-of-ai-in-procurement', title: 'The Future of AI in Enterprise Procurement', date: 'Oct 1, 2026', excerpt: 'How autonomous agents are replacing manual PR-to-PO workflows.' },
  { slug: 'vendor-risk-management-strategies', title: 'Top 5 Vendor Risk Management Strategies', date: 'Sep 25, 2026', excerpt: 'Mitigate supply chain risk before you even sign the contract.' },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Procurement Insights</h1>
        <p className="text-xl text-slate-600 mb-12">Latest thoughts, research, and best practices from the ProcGen team.</p>
        
        <div className="grid gap-8">
          {DUMMY_POSTS.map(post => (
            <article key={post.slug} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <time className="text-sm text-cyan-600 font-semibold mb-2 block">{post.date}</time>
              <h2 className="text-2xl font-bold mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-cyan-700">{post.title}</Link>
              </h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-cyan-600 font-semibold hover:underline flex items-center gap-1">
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
