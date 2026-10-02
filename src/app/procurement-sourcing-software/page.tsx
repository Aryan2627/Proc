import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'Procurement Sourcing Software | ProcGen',
  description: 'Learn how ProcGen solves complex supply chain challenges with advanced procurement sourcing software built for the modern enterprise.',
  alternates: {
    canonical: 'https://procgen.ai/procurement-sourcing-software'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="Procurement Sourcing Software | ProcGen"
      h1="Strategic Sourcing Software"
      description="Discover how our AI-driven capabilities accelerate processing, reduce maverick spend, and improve compliance."
      canonicalSlug="procurement-sourcing-software"
      features={['Automated AI Data Entry', 'Real-time Analytics Dashboard', 'Customizable Approval Workflows', 'Seamless ERP Integrations']}
      benefits={['Save hundreds of hours per month', 'Eliminate human error', 'Scale operations instantly', 'Strengthen vendor relationships']}
      faqs={[{q: 'How does it work?', a: 'By leveraging large language models and a unified context graph, the platform automates complex evaluations and communications.'}]}
    />
  );
}
