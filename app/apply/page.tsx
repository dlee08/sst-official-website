"use client";

import { motion } from "framer-motion";
import { UserPlus, Users, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function ApplyPage() {
  const { t } = useTranslation("common");

  const applyOptions = [
    {
      title: t("apply.tutor.title"),
      description: t("apply.tutor.description"),
      href: "https://forms.gle/6dFS9zWzaXAyZZ2m9",
      icon: UserPlus,
    },
    {
      title: t("apply.tutee.title"),
      description: t("apply.tutee.description"),
      href: "https://forms.gle/12oAL7JcGRuegpiX9",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-white">
            {t("apply.title")}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            {t("apply.subtitle")}
            <br />
            <span className="text-white">{t("apply.subtitle2")}</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {applyOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">
                      {option.title}
                    </h2>

                    <p className="text-zinc-400 text-center mb-8 flex-grow">
                      {option.description}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-white font-bold group-hover:gap-3 transition-all">
                      <span>{t("apply.getStarted")}</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
