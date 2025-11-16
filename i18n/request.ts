import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';
import { getTranslationVariables, injectVariables } from '@/lib/i18n-helpers';

const messages = {
  en,
  ar
};
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  
  const rawMessages = messages[locale as keyof typeof messages];
  
  // Extract variables from data section and environment
  const variables = getTranslationVariables(rawMessages, locale);
  
  // Inject variables into all translation strings
  const processedMessages = injectVariables(rawMessages, variables) as typeof rawMessages;
 
  return {
    locale,
    messages: processedMessages
  };
});