import { getTranslations } from "next-intl/server";
import StoryMode from "@/components/story/StoryMode";
import { generateMetadataFromTranslations } from "@/components/shared";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateMetadataFromTranslations(
    await getTranslations("seo"),
    { locale, pageType: 'story' }
  );
}

export default StoryMode;
