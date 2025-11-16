import { getTranslations } from "next-intl/server";
import StoryMode from "@/components/story/StoryMode";
import { generateMetadataFromTranslations } from "@/components/shared";

export async function generateMetadata() {
  return generateMetadataFromTranslations(await getTranslations("seo"));
}

export default StoryMode;
