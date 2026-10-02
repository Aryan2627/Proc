import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData, { organizationSchema, softwareSchema } from "../components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.procgen.in'),
  title: {
    template: '%s | ProcGen',
    default: 'ProcGen | AI Enterprise Procurement & Vendor Management',
  },
  description: 'Automate purchase requests, manage vendors, and run AI-powered sourcing events in one secure enterprise procurement platform.',
  keywords: ['procurement software', 'AI procurement', 'vendor management', 'purchase order software', 'procure to pay'],
  authors: [{ name: 'ProcGen' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.procgen.in',
    siteName: 'ProcGen',
    title: 'ProcGen | AI Enterprise Procurement Software',
    description: 'Automate purchase requests and manage vendors with AI.',
    images: [{ url: '/logo_cyan.png', width: 1200, height: 630, alt: 'ProcGen Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProcGen | AI Enterprise Procurement Software',
    description: 'Automate purchase requests and manage vendors with AI.',
    images: ['/logo_cyan.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <StructuredData data={organizationSchema} />
        <StructuredData data={softwareSchema} />
        {children}
      </body>
    </html>
  );
}
