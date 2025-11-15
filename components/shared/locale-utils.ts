/**
 * Locale utility functions for RTL/LTR support
 */

export function isRTL(locale: string): boolean {
  return locale === 'ar';
}

export function getTextDirection(locale: string): 'rtl' | 'ltr' {
  return isRTL(locale) ? 'rtl' : 'ltr';
}

export function getFontFamily(locale: string, type: 'heading' | 'body' | 'mono'): string {
  const isArabic = isRTL(locale);
  
  const fonts = {
    heading: isArabic ? "'Cairo', sans-serif" : "'Orbitron', 'Courier New', monospace",
    body: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif",
    mono: isArabic ? "'Cairo', sans-serif" : "'Exo 2', monospace",
  };
  
  return fonts[type];
}

export interface LocaleConfig {
  locale: string;
  isRTL: boolean;
  direction: 'rtl' | 'ltr';
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

export function getLocaleConfig(locale: string): LocaleConfig {
  const rtl = isRTL(locale);
  
  return {
    locale,
    isRTL: rtl,
    direction: rtl ? 'rtl' : 'ltr',
    fonts: {
      heading: getFontFamily(locale, 'heading'),
      body: getFontFamily(locale, 'body'),
      mono: getFontFamily(locale, 'mono'),
    },
  };
}
