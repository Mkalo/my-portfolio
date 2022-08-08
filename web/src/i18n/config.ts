import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function getLanguageTranslations(language: string) {
  return {
    common: require(`./locales/${language}/common.json`),
  };
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: getLanguageTranslations('en'),
    pt: getLanguageTranslations('pt'),
  },
  ns: ['common'],
  defaultNS: 'common',
});

i18n.languages = ['en', 'pt'];

export default i18n;
