type TranslationFunction = {
  (key: string): string;
  raw: (key: string) => string[];
};

export async function generateClassicMetadata(t: TranslationFunction) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("hero.name"),
    jobTitle: t("hero.title"),
    description: t("about.text"),
    url: "https://amrmousa.com",
    email: t("contact.emailValue"),
    telephone: "+1-234-567-8900",
    sameAs: [t("contact.githubValue"), t("contact.linkedinValue")],
    image: "https://amrmousa.com/avatar.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Tech Solutions Inc",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://amrmousa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Classic Mode",
        item: "https://amrmousa.com/classic",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amr Mousa",
    url: "https://amrmousa.com",
    description: t("footer.description"),
    email: t("contact.emailValue"),
    sameAs: [t("contact.githubValue"), t("contact.linkedinValue")],
  };

  return {
    personSchema,
    breadcrumbSchema,
    organizationSchema,
  };
}

export function generateClassicMetadataFromTranslations(t: TranslationFunction) {
  const title = t("metadata.title");
  const description = t("metadata.description");
  const keywords = t.raw("metadata.keywords");
  const ogTitle = t("metadata.ogTitle");
  const ogDescription = t("metadata.ogDescription");
  const ogUrl = t("metadata.ogUrl");
  const ogSiteName = t("metadata.ogSiteName");
  const twitterTitle = t("metadata.twitterTitle");
  const twitterDescription = t("metadata.twitterDescription");
  const canonicalUrl = t("metadata.canonicalUrl");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Amr Mousa" }],
    creator: "Amr Mousa",
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: ogSiteName,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: twitterTitle,
      description: twitterDescription,
    },
    robots: "index, follow",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
