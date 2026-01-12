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
        <div className="flex items-center gap-1">
          <div className="w-[72px] h-[42px] rounded-full bg-white/10 dark:bg-black/10" />
          <div className="w-[58px] h-[42px] rounded-full bg-white/10 dark:bg-black/10" />
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
      <div className="flex items-center gap-1">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-white/20 dark:shadow-black/20 hover:bg-white/90 dark:hover:bg-zinc-950/90 transition-all duration-200"
            aria-label="Change language"
          >
            <Languages className="w-[18px] h-[18px] text-zinc-700 dark:text-zinc-300 stroke-[2.5]" />
            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
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
              <div className="absolute right-0 mt-2 w-48 rounded-2xl overflow-hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-white/40 dark:shadow-black/40 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-all duration-150 ${
                      currentLanguage === lang ? "bg-zinc-100/50 dark:bg-zinc-900/50" : ""
                    }`}
                  >
                    <span className="text-lg">{languageLabels[lang].flag}</span>
                    <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
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
          className="px-5 py-2.5 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-white/20 dark:shadow-black/20 hover:bg-white/90 dark:hover:bg-zinc-950/90 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-[18px] h-[18px] text-yellow-500 stroke-[2.5]" />
          ) : (
            <Moon className="w-[18px] h-[18px] text-zinc-700 stroke-[2.5]" />
          )}
        </button>
      </div>
    </header>
  );
}
