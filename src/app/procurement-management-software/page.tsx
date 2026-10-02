import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'Procurement Management Software | ProcGen',
  description: 'Learn how ProcGen solves complex supply chain challenges with advanced procurement management software built for the modern enterprise.',
  alternates: {
    canonical: 'https://procgen.ai/procurement-management-software'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="Procurement Management Software | ProcGen"
      h1="Complete Procurement Management"
      description="Discover how our AI-driven capabilities accelerate processing, reduce maverick spend, and improve compliance."
      canonicalSlug="procurement-management-software"
      features={['Automated AI Data Entry', 'Real-time Analytics Dashboard', 'Customizable Approval Workflows', 'Seamless ERP Integrations']}
      benefits={['Save hundreds of hours per month', 'Eliminate human error', 'Scale operations instantly', 'Strengthen vendor relationships']}
      faqs={[{q: 'How does it work?', a: 'By leveraging large language models and a unified context graph, the platform automates complex evaluations and communications.'}]}
    />
  );
}
