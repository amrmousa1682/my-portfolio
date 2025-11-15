import { getTranslations } from 'next-intl/server';
import StoryMode from '@/components/story/StoryMode';
import { generateStoryMetadataFromTranslations } from '@/components/story/metadata';

export async function generateMetadata() {
  const t = await getTranslations('story');
  return generateStoryMetadataFromTranslations(t);
}

export default StoryMode;
