import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

export const metadata: Metadata = {
  title: 'Enterprise Procurement Software | ProcGen',
  description: `Streamline your purchasing workflows, automate purchase orders, and manage vendors seamlessly with ProcGen's enterprise procurement software.`,
  alternates: {
    canonical: 'https://procgen.ai/procurement-software'
  }
};

export default function Page() {
  return (
    <SEOPageTemplate
      title="Enterprise Procurement Software | ProcGen"
      h1="Modern Procurement Software for Enterprises"
      description="Streamline your purchasing workflows, automate purchase orders, and manage vendors seamlessly with ProcGen's enterprise procurement software."
      canonicalSlug="procurement-software"
      features={["Automated PR to PO generation","Role-based approval workflows","Real-time budget tracking","Centralized vendor portal"]}
      benefits={["Reduce procurement cycles by 75%","Achieve 100% compliance on all spends","Eliminate manual data entry","Gain complete spend visibility"]}
      faqs={[{"q":"What is procurement software?","a":"Procurement software automates and manages a company's purchasing processes, from requisition and approvals to purchase orders and vendor management."},{"q":"Does ProcGen integrate with existing ERPs?","a":"Yes, ProcGen seamlessly integrates with major ERPs like SAP, Oracle, and NetSuite to keep your financial data perfectly synced."}]}
    />
  );
}
