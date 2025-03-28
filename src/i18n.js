import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Załaduj tłumaczenia
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            en: { translation: en },
            pl: { translation: pl },
        },
        lng: 'pl', 
        fallbackLng: 'en', 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
