"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");
  const [creditsExpanded, setCreditsExpanded] = React.useState(false);

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="w-full px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* Info Section */}
          <div className="flex flex-col justify-between md:justify-self-start h-full min-h-[208px]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t("title")}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {t("footer.address")}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://linktr.ee/stuyvesantsummertutoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="Linktree"
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/linktree-logo-transparent.webp"
                      alt="Linktree"
                      width={64}
                      height={64}
                      className="object-contain dark:invert"
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/stuyvesantsummertutoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="Instagram"
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/instagram-logo-transparent.png"
                      alt="Instagram"
                      width={64}
                      height={64}
                      className="object-contain dark:invert"
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.facebook.com/groups/252277957410745/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="Facebook"
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/facebook-logo-transparent.png"
                      alt="Facebook"
                      width={64}
                      height={64}
                      className="object-contain dark:invert"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-400 mt-auto">
              {t("footer.copyright")}
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center md:justify-self-center">
            <Link
              href="https://en.wikipedia.org/wiki/Stuyvesant_High_School"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <div className="w-52 h-52 relative">
                <Image
                  src="/stuyvesant-logo-transparent.svg"
                  alt="Stuyvesant High School"
                  width={208}
                  height={208}
                  className="object-contain dark:invert"
                />
              </div>
            </Link>
          </div>

          {/* Credits Section */}
          <div className="space-y-4 md:text-right flex flex-col md:items-end md:justify-self-end">
            <button
              onClick={() => setCreditsExpanded(!creditsExpanded)}
              aria-expanded={creditsExpanded}
              aria-label="Toggle credits"
              className="text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              {t("footer.credits")} {creditsExpanded ? "−" : "+"}
            </button>

            {creditsExpanded && (
              <div className="space-y-2 text-base text-zinc-600 dark:text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-200">
                <p>President & Web Dev Lead: David Lee</p>
                <p>Vice President: Tiffany Xu</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
