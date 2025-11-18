import { getTranslations, getLocale } from "next-intl/server";
import styles from "./ClassicMode.module.css";
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
import JsonLdScript from "../shared/JsonLdScript";

export default async function ClassicMode() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLdScript />

      {/* Portfolio Content */}
      <div className={styles.container}>
        {/* Header */}
        <ClassicHeader backButtonLabel={t("classicMode.headerReturnButton")} />

        {/* Main Content */}
         <main className={styles.main} dir={isArabic ? "rtl" : "ltr"}>
          <ClassicHero
            name={t("data.name")}
            title={t('data.title')}
            subtitle={t('data.subtitle')}
          />
          <ClassicAbout title={t('classicMode.aboutTitle')} text={t('data.about')} />

          <ClassicExperience
            title={t('classicMode.experienceTitle')}
            items={t.raw('data.experienceItems')}
          />

          <ClassicSkills
            title={t('classicMode.skillsTitle')}
            categories={t.raw('data.skillsCategories')}
          />

          <ClassicProjects title={t('classicMode.projectsTitle')} items={t.raw('data.projectsItems')} />

          <ClassicTestimonials
            title={t('classicMode.testimonialsTitle')}
            items={t.raw('data.testimonialsItems')}
          />

          <ClassicContact
            title={t('classicMode.contactTitle')}
            subtitle={t('classicMode.contactSubtitle')}
            email={t('classicMode.contactEmail')}
            emailValue={t('data.emailValue')}
            github={t('classicMode.contactGithub')}
            githubValue={t('data.githubLink')}
            linkedin={t('classicMode.contactLinkedin')}
            linkedinValue={t('data.linkedinLink')}
            whatsapLink={t('data.whatsappLink')}
          />
        </main> 

        {/* Footer */}
        <ClassicFooter
          copyright={t('classicMode.footerCopyright')}
          madeWith={t('classicMode.footerMadeWith')}
        /> 
      </div>
    </>
  );
}
