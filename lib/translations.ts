export const translations = {
  en: {
    title: "Stuyvesant Summer Tutoring",
    subtitle: "A Free, K-9 ELA & Math Tutoring Organization",
    cta: "Get Started",
  },
  es: {
    title: "Tutoría de Verano de Stuyvesant",
    subtitle: "Una Organización Gratuita de Tutoría de ELA y Matemáticas K-9",
    cta: "Comenzar",
  },
  zh: {
    title: "史岱文森暑期辅导",
    subtitle: "免费的 K-9 英语和数学辅导组织",
    cta: "开始",
  },
  fr: {
    title: "Tutorat d'été de Stuyvesant",
    subtitle: "Une Organisation Gratuite de Tutorat en ELA et Mathématiques K-9",
    cta: "Commencer",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
