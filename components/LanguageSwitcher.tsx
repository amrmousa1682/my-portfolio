'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: 'en' | 'ar') => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`${styles.button} ${styles.buttonEN} ${
          locale === 'en'
            ? `${styles.buttonActive} ${styles.buttonActiveEN}`
            : styles.buttonInactiveEN
        }`}
      >
        EN
      </button>
      <div className={styles.divider} />
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`${styles.button} ${styles.buttonAR} ${
          locale === 'ar'
            ? `${styles.buttonActive} ${styles.buttonActiveAR}`
            : styles.buttonInactiveAR
        }`}
      >
        AR
      </button>
    </div>
  );
}
