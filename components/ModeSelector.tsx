'use client';
import styles from './ModeSelector.module.css';
import { motion } from 'motion/react';
import { Play, Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export function ModeSelector() {
  const t = useTranslations('modeSelector');
  const locale = useLocale();
  const router = useRouter();

  const handleModeSelect = (mode: 'story' | 'classic') => {
    router.push(`/${mode}`);
  };

  const isArabic = locale === 'ar';

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.contentWrapper}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${styles.subtitle} ${isArabic ? styles.subtitleAR : styles.subtitleEN}`}
        >
          {t('subtitle')}
        </motion.h1>

        <div className={styles.buttonContainer}>
          <motion.button
            onClick={() => handleModeSelect('story')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.button} ${styles.storyButton}`}
          >
            <div className={styles.storyGradient} />
            <div className={styles.buttonContent}>
              <Play className={`${styles.buttonIcon} ${styles.storyIcon}`} />
              <span className={`${styles.buttonText} ${styles.buttonTextEN} ${styles.storyText}`}>
                {t('story')}
              </span>
            </div>
          </motion.button>

          <motion.button
            onClick={() => handleModeSelect('classic')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.button} ${styles.classicButton}`}
          >
            <div className={styles.classicGradient} />
            <div className={styles.buttonContent}>
              <Menu className={`${styles.buttonIcon} ${styles.classicIcon}`} />
              <span className={`${styles.buttonText} ${styles.buttonTextEN} ${styles.classicText}`}>
                {t('classic')}
              </span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
