import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './public/locales/en/translation.json';
import translationSR from './public/locales/sr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  sr: {
    translation: translationSR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
    },
    interpolation: {
      escapeValue: false,
    },
    // For Next.js server-side rendering
    react: {
      useSuspense: false, // Disable Suspense usage for server-side rendering
    },
    // Optional: Specify backend settings if using i18next-http-backend
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
