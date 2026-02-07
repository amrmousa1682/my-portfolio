import { getTranslations } from "next-intl/server";
import ClassicMode from "@/components/classic/ClassicMode";
import { generateMetadataFromTranslations } from "@/components/shared";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateMetadataFromTranslations(
    await getTranslations("seo"),
    { locale, pageType: 'classic' }
  );
}

export default ClassicMode;
