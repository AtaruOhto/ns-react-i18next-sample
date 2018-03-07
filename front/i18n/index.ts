import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import resources from 'i18n/locales';

export default i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'ja',
        whitelist: ['en', 'ja'],
        nonExplicitWhitelist: true,
        debug: process.env.NODE_ENV !== 'production',
        react: {
            wait: true,
        },
    });
