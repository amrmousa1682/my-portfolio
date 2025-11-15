import { Metadata } from 'next';

export interface JSONLDSchema {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export interface BaseMetadataConfig {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  mode: 'classic' | 'story';
}

/**
 * Generate Person Schema for JSON-LD
 */
export function generatePersonSchema(config: BaseMetadataConfig): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    jobTitle: config.jobTitle,
    description: config.description,
    url: config.url,
    email: config.email,
    sameAs: [config.githubUrl, config.linkedinUrl],
  };
}

/**
 * Generate BreadcrumbList Schema for JSON-LD
 */
export function generateBreadcrumbSchema(
  config: Pick<BaseMetadataConfig, 'url' | 'mode'>
): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: config.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: config.mode === 'classic' ? 'Classic Mode' : 'Story Mode',
        item: `${config.url}/${config.mode}`,
      },
    ],
  };
}

/**
 * Generate WebPage Schema for JSON-LD
 */
export function generateWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
  siteName: string;
}): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    isPartOf: {
      '@type': 'WebSite',
      name: config.siteName,
      url: config.url.replace(/\/(classic|story)$/, ''),
    },
  };
}

/**
 * Generate Next.js Metadata object
 */
export function generatePageMetadata(config: {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Amr Mousa' }],
    creator: 'Amr Mousa',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      url: config.canonicalUrl,
      siteName: 'Amr Mousa Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.twitterTitle || config.title,
      description: config.twitterDescription || config.description,
    },
    robots: 'index, follow',
    alternates: {
      canonical: config.canonicalUrl,
    },
  };
}
