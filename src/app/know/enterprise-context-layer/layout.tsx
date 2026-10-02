import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Enterprise Context Layer | ProcGen',
  description: 'Understand how ProcGen uses an Enterprise Context Layer to bridge the gap between structured ERP data and unstructured AI intelligence.',
  alternates: {
    canonical: 'https://procgen.in/know/enterprise-context-layer'
  }
};

export default function KnowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
