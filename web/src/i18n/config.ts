import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

function getLanguageTranslations(language: string) {
  return {
    common: require(`./locales/${language}/common.json`),
  };
}

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: getLanguageTranslations('en'),
      pt: getLanguageTranslations('pt'),
    },
    ns: ['common'],
    defaultNS: 'common',
    supportedLngs: ['en', 'pt'],
  });

export default i18n;