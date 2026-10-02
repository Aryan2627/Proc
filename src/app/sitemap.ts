import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://procgen.ai';

  const routes = [
    '',
    '/autonomous-agents',
    '/ai-lab',
    '/careers',
    '/know',
    '/p',
    '/blog',
    '/procurement-software',
    '/ai-procurement',
    '/vendor-management',
    '/procure-to-pay',
    '/procurement-automation',
    '/procurement-management-software',
    '/purchase-order-software',
    '/procurement-workflow-automation',
    '/procurement-sourcing-software',
    '/rfq-management',
    '/vendor-onboarding'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
