import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amrmousa.vercel.app';
  const locales = ['en', 'ar'];
  const pages = ['', '/classic', '/story']; // empty string for home page
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Generate sitemap entries for all locale and page combinations
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            ar: `${baseUrl}/ar${page}`,
          },
        },
      });
    });
  });
  
  return sitemap;
}
