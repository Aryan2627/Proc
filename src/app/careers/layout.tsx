import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at ProcGen | Join the AI Procurement Revolution',
  description: 'Join the team building the future of autonomous enterprise software. View open engineering, product, and AI research roles at ProcGen.',
  alternates: {
    canonical: 'https://www.procgen.in/careers'
  }
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
