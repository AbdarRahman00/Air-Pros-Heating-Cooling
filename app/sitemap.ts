import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';

const BASE_URL = 'https://airprosmarion.com'; // Placeholder domain

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES.map((service) => ({
    url: `${BASE_URL}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = ['', '/about', '/contact', '/financing'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...routes, ...serviceUrls];
}
