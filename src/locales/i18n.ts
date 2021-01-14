import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import PT_BR from './PT_BR/translation.json';
import es from './es/translation.json';
import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  PT_BR: {
    translation: PT_BR,
  },
  es: {
    translation: es,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(es);

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
