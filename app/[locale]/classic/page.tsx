import { getTranslations } from 'next-intl/server';
import ClassicMode from '@/components/classic/ClassicMode';
import { generateClassicMetadataFromTranslations } from '@/components/classic/metadata';

export async function generateMetadata() {
  const t = await getTranslations('portfolio');
  return generateClassicMetadataFromTranslations(t);
}

export default ClassicMode;
