type TranslationFunction = {
  (key: string): string;
  raw: (key: string) => string[];
};

export interface JSONLDSchema {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export interface MetadataOptions {
  locale: string;
  pageType?: 'home' | 'classic' | 'story';
}

export function generateMetadataFromTranslations(t: TranslationFunction, options: MetadataOptions){
    const { locale, pageType = 'home' } = options;
    const baseUrl = t('siteUrl');
    
    // Build page-specific paths
    const pagePath = pageType === 'home' ? '' : `/${pageType}`;
    const canonicalUrl = `${baseUrl}/${locale}${pagePath}`;
    
    // Generate alternates for all locales
    const locales = ['en', 'ar'];
    const alternateLanguages: Record<string, string> = {};
    
    locales.forEach(loc => {
      alternateLanguages[loc] = `${baseUrl}/${loc}${pagePath}`;
    });
    
    return {
        title: t(`${pageType}.title`),
        description: t(`${pageType}.description`),
        keywords: t.raw('keywords'),
        authors: [{ name: t('name') }],
        creator: t('name'),
        alternates: {
            canonical: canonicalUrl,
            languages: alternateLanguages,
        },
        openGraph: {
            title: t(`${pageType}.title`),
            description: t(`${pageType}.description`),
            url: canonicalUrl,
            siteName: t('ogSiteName'),
            images: [{
                url: t('ogImage'),
                width: 1200,
                height: 630,
                alt: t('ogImageAlt'),
            }],
            locale: t('ogLocale'),
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t(`${pageType}.title`),
            description: t(`${pageType}.description`),
            images: [t('ogImage')],
        },
    }
}

export function generateScheamsFromTranslations(t: TranslationFunction) {
    return {
        personSchema: generatePersonSchemaFromTranslations(t),
        websiteSchema: generateWebsiteSchemaFromTranslations(t),
        breadcrumbSchema: generateBreadcrumbSchemaFromTranslations(t),
    }
}

function generatePersonSchemaFromTranslations(t: TranslationFunction): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t('person.name'),
    jobTitle: t('person.jobTitle'),
    description: t('person.description'),
    url: t('person.url'),
    email: t('person.email'),
    inLanguage: t('person.inLanguage'),
    sameAs: t.raw('person.sameAs'),
  };
}

function generateWebsiteSchemaFromTranslations(t: TranslationFunction): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t('website.name'),
    description: t('website.description'),
    url: t('website.url'),
    inLanguage: t('website.inLanguage'),
  };
}

function generateBreadcrumbSchemaFromTranslations(t: TranslationFunction): JSONLDSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement:t.raw('breadcrumb.itemListElement')
  };
}
