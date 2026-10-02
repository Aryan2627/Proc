import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI Procurement & Autonomous Sourcing | ProcGen',
  description: 'Leverage the ProcGen AI Swarm to autonomously run reverse auctions, negotiate contracts, and evaluate supplier risk in real-time.',
  alternates: {
    canonical: 'https://procgen.in/ai-procurement'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="AI Procurement & Autonomous Sourcing | ProcGen"
      h1="AI Procurement: The Autonomous Supply Chain"
      description="Leverage the ProcGen AI Swarm to autonomously run reverse auctions, negotiate contracts, and evaluate supplier risk in real-time."
      canonicalSlug="ai-procurement"
      features={["AI-driven supplier discovery","Autonomous multi-round negotiations","Predictive risk scoring","Semantic contract analysis"]}
      benefits={["Discover top-tier suppliers globally","Reduce costs through AI negotiation","Mitigate supply chain risks instantly","Free up your team for strategic work"]}
      faqs={[{"q":"How does AI help in procurement?","a":"AI automates repetitive tasks, analyzes massive datasets to identify the best suppliers, and can even autonomously negotiate pricing and terms."}]}
    />
  );
}
