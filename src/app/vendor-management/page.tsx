import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'Vendor Management Software (VMS) | ProcGen',
  description: 'Onboard, evaluate, and collaborate with your suppliers using a unified, secure vendor management platform.',
  alternates: {
    canonical: 'https://procgen.ai/vendor-management'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="Vendor Management Software (VMS) | ProcGen"
      h1="Intelligent Vendor Management System"
      description="Onboard, evaluate, and collaborate with your suppliers using a unified, secure vendor management platform."
      canonicalSlug="vendor-management"
      features={["Self-service vendor onboarding","Automated compliance checks","Performance scorecards","Secure chat and document sharing"]}
      benefits={["Accelerate vendor onboarding by 80%","Ensure strict regulatory compliance","Build stronger supplier relationships","Centralize all vendor communication"]}
      faqs={[{"q":"Why is vendor management important?","a":"Effective vendor management mitigates risk, ensures compliance, and drives better performance and pricing from your supply chain partners."}]}
    />
  );
}
