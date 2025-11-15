import {
  generatePersonSchema,
  generateBreadcrumbSchema,
  generatePageMetadata,
  generateWebPageSchema,
  type BaseMetadataConfig,
} from '@/components/shared';

type TranslationFunction = {
  (key: string): string;
  raw: (key: string) => string[];
};

export async function generateStoryMetadata(t: TranslationFunction) {
  const config: BaseMetadataConfig = {
    name: t('hero.name'),
    jobTitle: t('hero.title'),
    description: t('about.text'),
    url: 'https://amrmousa.com',
    email: t('contact.emailValue'),
    githubUrl: t('contact.githubValue'),
    linkedinUrl: t('contact.linkedinValue'),
    mode: 'classic',
  };

  const personSchema = generatePersonSchema(config);
  const breadcrumbSchema = generateBreadcrumbSchema(config);
  const webPageSchema = generateWebPageSchema({
    title: t('metadata.title'),
    description: t('metadata.description'),
    url: `${config.url}/story`,
    siteName: 'Amr Mousa Portfolio',
  });

  return {
    personSchema,
    breadcrumbSchema,
    webPageSchema,
  };
}

export function generateStoryMetadataFromTranslations(t: TranslationFunction) {
  return generatePageMetadata({
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: t.raw('metadata.keywords'),
    canonicalUrl: t('metadata.canonicalUrl'),
    ogTitle: t('metadata.ogTitle'),
    ogDescription: t('metadata.ogDescription'),
    twitterTitle: t('metadata.twitterTitle'),
    twitterDescription: t('metadata.twitterDescription'),
  });
}
