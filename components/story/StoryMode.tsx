import { getTranslations, getLocale } from "next-intl/server";
import { StoryHeader } from "./scenes";
import { StoryInteractive } from "./StoryInteractive";
import styles from "./StoryMode.module.css";
import JsonLdScript from "../shared/JsonLdScript";

export default async function StoryMode() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <JsonLdScript />
      <div className={styles.container}>
        <StoryHeader exitLabel={t("storyMode.headerReturnButton")} />
        <StoryInteractive
          scenes={t.raw("story.scenes")}
          skipText={t("storyMode.skipText")}
          isRTL={isArabic}
        />
      </div>
    </>
  );
}
