"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages, languageLabels, Language } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-4 right-4 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10" />
          <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10" />
        </div>
      </header>
    );
  }

  const currentLanguage = i18n.language as Language;
  const currentLanguageData = languageLabels[currentLanguage] || languageLabels.en;

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <header className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-zinc-900 transition-colors"
            aria-label="Change language"
          >
            <Languages className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {currentLanguageData.flag}
            </span>
          </button>

          {/* Language Dropdown */}
          {showLanguageMenu && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowLanguageMenu(false)}
              />
              {/* Menu */}
              <div className="absolute right-0 mt-2 w-48 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 shadow-xl z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      currentLanguage === lang ? "bg-gray-100 dark:bg-gray-800" : ""
                    }`}
                  >
                    <span className="text-lg">{languageLabels[lang].flag}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {languageLabels[lang].label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white dark:hover:bg-zinc-900 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
}
