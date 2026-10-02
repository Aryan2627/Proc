import React from 'react';

export default function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-defined reusable schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ProcGen',
  url: 'https://www.procgen.in',
  logo: 'https://www.procgen.in/logo_cyan.png',
  description: 'Enterprise procurement software and AI sourcing automation.',
  sameAs: [
    'https://www.linkedin.com/company/procgen'
  ]
};

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ProcGen',
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description: 'AI-powered procurement and vendor management software.'
};
