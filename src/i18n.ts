import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: true,
      fallbackLng: 'en',
      backend: {
         // Вкажи шлях до файлів перекладу
         loadPath: '/locales/{{lng}}/translation.json',  // або '/portfolio/locales/{{lng}}/translation.json', якщо сайт в підкаталозі
      },
      react: {
         useSuspense: false,
      },
   });

export default i18n;
