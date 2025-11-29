import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import it from "./it.json";
import en from "./en.json";

i18n
  .use(LanguageDetector) // rileva automaticamente la lingua del browser
  .use(initReactI18next) // integra i18n con React
  .init({
    resources: {
      it: { translation: it },
      en: { translation: en },
    },
    fallbackLng: "it", // se la lingua non esiste → italiano
    debug: false, // metti true se vuoi vedere i log di debug
    interpolation: {
      escapeValue: false, // React già gestisce l'escape
    },
    detection: {
      order: ["localStorage", "navigator"], // cerca prima nel localStorage, poi nel browser
      caches: ["localStorage"], // salva la lingua scelta
    },
  });

export default i18n;
