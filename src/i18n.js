import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationHE from './locales/he/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    he: {
        translation: translationHE,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'he',
        lng: 'he', // default language
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
