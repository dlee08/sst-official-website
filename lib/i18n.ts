import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Supported languages
export const languages = ["en", "es", "zh"] as const;
export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
  zh: { label: "中文", flag: "🇨🇳" },
};

i18n
  // Load translations using http backend
  .use(HttpBackend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: "en",
    lng: "en",
    supportedLngs: languages,

    // Namespace configuration
    ns: ["common"],
    defaultNS: "common",

    // Backend configuration
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    // Language detection configuration
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },

    // React configuration
    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
