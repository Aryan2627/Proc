import { Metadata } from 'next';
import StructuredData from '../../../components/StructuredData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, fetch post data based on slug. Using placeholder logic.
  const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${title} | ProcGen Blog`,
    description: `Read our comprehensive guide and insights on ${title.toLowerCase()} in enterprise procurement.`,
    alternates: {
      canonical: `https://www.procgen.in/blog/${params.slug}`
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: '2026-10-01T08:00:00+08:00',
    dateModified: '2026-10-01T08:00:00+08:00',
    author: [{
      '@type': 'Organization',
      name: 'ProcGen Editorial Team',
      url: 'https://www.procgen.in'
    }]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.procgen.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.procgen.in/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://www.procgen.in/blog/${params.slug}` }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20 px-6">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-600 hover:underline mb-8 font-semibold">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          <div className="flex items-center text-slate-500 text-sm gap-4">
            <time>October 1, 2026</time>
            <span>•</span>
            <span>By ProcGen Team</span>
          </div>
        </header>
        <div className="prose prose-slate prose-lg max-w-none">
          <p>
            Welcome to the detailed exploration of <strong>{title.toLowerCase()}</strong>. As enterprises scale, 
            the need to automate and refine procurement strategies becomes critical. 
            Here at ProcGen, we use autonomous AI agents to dramatically cut costs and streamline workflows.
          </p>
          <h2>The Core Problem</h2>
          <p>Legacy procurement tools are essentially glorified filing cabinets. They don't actively negotiate, nor do they protect you against global supply chain disruptions automatically.</p>
          <h2>The Solution</h2>
          <p>By leveraging AI Swarms, companies can execute 3-way semantic matching and automated RFx events in seconds rather than weeks.</p>
        </div>
      </article>
    </main>
  );
}
