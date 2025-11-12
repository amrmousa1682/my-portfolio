import { getTranslations, getLocale } from "next-intl/server";
import styles from "./ClassicMode.module.css";
import { generateClassicMetadata } from "./metadata";
import { PortfolioData } from "./types";
import {
  ClassicHeader,
  ClassicHero,
  ClassicAbout,
  ClassicExperience,
  ClassicSkills,
  ClassicProjects,
  ClassicTestimonials,
  ClassicContact,
  ClassicFooter,
} from "./sections";

export default async function ClassicMode() {
  const t = await getTranslations("portfolio");
  const locale = await getLocale();
  const isArabic = locale === "ar";

  // Generate JSON-LD Schemas
  const schemas = await generateClassicMetadata(t);

  // Collect all portfolio data
  const data: PortfolioData = {
    heroName: t("hero.name"),
    heroTitle: t("hero.title"),
    heroSubtitle: t("hero.subtitle"),
    aboutTitle: t("about.title"),
    aboutText: t("about.text"),
    experienceTitle: t("experience.title"),
    experienceItems: t.raw("experience.items"),
    skillsTitle: t("skills.title"),
    skillsCategories: t.raw("skills.categories"),
    projectsTitle: t("projects.title"),
    projectsItems: t.raw("projects.items"),
    testimonialsTitle: t("testimonials.title"),
    testimonialsItems: t.raw("testimonials.items"),
    contactTitle: t("contact.title"),
    contactSubtitle: t("contact.subtitle"),
    contactEmail: t("contact.email"),
    contactEmailValue: t("contact.emailValue"),
    contactGithub: t("contact.github"),
    contactGithubValue: t("contact.githubValue"),
    contactLinkedin: t("contact.linkedin"),
    contactLinkedinValue: t("contact.linkedinValue"),
    headerBackButton: t("header.backButton"),
    headerModeLabel: t("header.modeLabel"),
    footerDescription: t("footer.description"),
    footerQuickLinksTitle: t("footer.quickLinks.title"),
    footerQuickLinksItems: t.raw("footer.quickLinks.items"),
    footerSocialTitle: t("footer.social.title"),
    footerSocialItems: t.raw("footer.social.items"),
    footerCopyright: t("footer.copyright"),
    footerMadeWith: t("footer.madeWith"),
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.organizationSchema),
        }}
      />

      <div className={styles.container}>
        {/* Header */}
        <ClassicHeader backButtonLabel={data.headerBackButton} />

        {/* Main Content */}
        <main className={styles.main} dir={isArabic ? "rtl" : "ltr"}>
          {/* Hero Section */}
          <ClassicHero
            name={data.heroName}
            title={data.heroTitle}
            subtitle={data.heroSubtitle}
          />

          {/* About Section */}
          <ClassicAbout title={data.aboutTitle} text={data.aboutText} />

          {/* Experience Section */}
          <ClassicExperience
            title={data.experienceTitle}
            items={data.experienceItems}
          />

          {/* Skills Section */}
          <ClassicSkills
            title={data.skillsTitle}
            categories={data.skillsCategories}
          />

          {/* Projects Section */}
          <ClassicProjects title={data.projectsTitle} items={data.projectsItems} />

          {/* Testimonials Section */}
          <ClassicTestimonials
            title={data.testimonialsTitle}
            items={data.testimonialsItems}
          />

          {/* Contact Section */}
          <ClassicContact
            title={data.contactTitle}
            subtitle={data.contactSubtitle}
            email={data.contactEmail}
            emailValue={data.contactEmailValue}
            github={data.contactGithub}
            githubValue={data.contactGithubValue}
            linkedin={data.contactLinkedin}
            linkedinValue={data.contactLinkedinValue}
          />
        </main>

        {/* Footer */}
        <ClassicFooter
          description={data.footerDescription}
          quickLinksTitle={data.footerQuickLinksTitle}
          quickLinksItems={data.footerQuickLinksItems}
          socialTitle={data.footerSocialTitle}
          socialItems={data.footerSocialItems}
          copyright={data.footerCopyright}
          madeWith={data.footerMadeWith}
        />
      </div>
    </>
  );
}
