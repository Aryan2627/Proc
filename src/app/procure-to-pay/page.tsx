import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'Procure-to-Pay (P2P) Software | ProcGen',
  description: 'Digitize your entire procure-to-pay cycle. From initial purchase requisition to final invoice matching and payment processing.',
  alternates: {
    canonical: 'https://procgen.ai/procure-to-pay'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="Procure-to-Pay (P2P) Software | ProcGen"
      h1="End-to-End Procure-to-Pay Automation"
      description="Digitize your entire procure-to-pay cycle. From initial purchase requisition to final invoice matching and payment processing."
      canonicalSlug="procure-to-pay"
      features={["Digital purchase requisitions","Automated 3-way matching","Digital Goods Receipt (GRN)","Invoice processing workflows"]}
      benefits={["Eliminate invoice discrepancies","Prevent duplicate payments","Speed up approval bottlenecks","Improve cash flow forecasting"]}
      faqs={[{"q":"What is Procure-to-Pay?","a":"Procure-to-Pay (P2P) is the full lifecycle of a transaction, covering the requisitioning, purchasing, receiving, and paying for goods and services."}]}
    />
  );
}
