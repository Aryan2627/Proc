import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Procurement Agents | Anveshan, Niti, Tark, Garuda',
  description: 'Meet the ProcGen AI Swarm. Autonomous sourcing, negotiation, risk assessment, and delivery agents built for enterprise procurement.',
  alternates: {
    canonical: 'https://procgen.in/autonomous-agents'
  }
};

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
