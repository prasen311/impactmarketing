// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './src/locales/en.json';
import gu from './src/locales/gu.json';
import hi from './src/locales/hi.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const preferredLang = RNLocalize.getLocales()[0].languageTag;
    callback(preferredLang);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

const resources = {
    en: {
      translation: en
    },
    gu: {
      translation: gu
    },
    hi: {
      translation: hi
    }
  };

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
