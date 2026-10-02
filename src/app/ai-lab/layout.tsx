import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lab & Research | ProcGen',
  description: 'Explore the cutting edge of procurement automation, LLM fine-tuning, and multi-agent AI research at the ProcGen AI Lab.',
  alternates: {
    canonical: 'https://www.procgen.in/ai-lab'
  }
};

export default function AILabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
