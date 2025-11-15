import { BackButton } from '@/components/shared';
import styles from '../StoryMode.module.css';

interface StoryHeaderProps {
  exitLabel: string;
}

export async function StoryHeader({ exitLabel }: StoryHeaderProps) {
  return (
    <header className={styles.header}>
      <BackButton label={exitLabel} className={styles.backButton} />
    </header>
  );
}
