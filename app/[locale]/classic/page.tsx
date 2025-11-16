import { getTranslations } from "next-intl/server";
import ClassicMode from "@/components/classic/ClassicMode";
import { generateMetadataFromTranslations } from "@/components/shared";

export async function generateMetadata() {
  return generateMetadataFromTranslations(await getTranslations("seo"));
}

export default ClassicMode;
