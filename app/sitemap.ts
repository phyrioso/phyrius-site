import type { MetadataRoute } from 'next';
import { projetos } from '@/content/site';

const base = 'https://phyrius.pt';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = ['', '/servicos', '/portfolio', '/contactos'].map((p) => ({
    url: `${base}${p}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const casos = projetos.map((p) => ({
    url: `${base}/portfolio/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...paginas, ...casos];
}
