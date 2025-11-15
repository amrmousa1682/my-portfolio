import { getTranslations, getLocale } from 'next-intl/server';
import { getLocaleConfig } from '@/components/shared';
import { generateStoryMetadata } from './metadata';
import { Scene, StoryData } from './types';
import { StoryHeader } from './scenes';
import { StoryInteractive } from './StoryInteractive';
import styles from './StoryMode.module.css';

export default async function StoryMode() {
  const t = await getTranslations('story');
  const locale = await getLocale();
  const localeConfig = getLocaleConfig(locale);

  // Generate JSON-LD Schemas
  const schemas = await generateStoryMetadata(t);

  // Collect story data
  const data: StoryData = {
    exitButton: t('header.exitButton'),
    skipText: t('ui.skipText'),
    scenes: t.raw('scenes') as Record<string, Scene>,
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
          __html: JSON.stringify(schemas.webPageSchema),
        }}
      />

      <div className={styles.container}>
        {/* Header */}
        <StoryHeader exitLabel={data.exitButton} />

        {/* Interactive Story */}
        <StoryInteractive
          scenes={data.scenes}
          skipText={data.skipText}
          fontHeading={localeConfig.fonts.heading}
          fontBody={localeConfig.fonts.body}
          fontMono={localeConfig.fonts.mono}
          isRTL={localeConfig.isRTL}
        />
      </div>
    </>
  );
}
