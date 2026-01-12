"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function AboutPage() {
  const { t } = useTranslation("common");

  const sections = [
    {
      title: t("about.mission.title"),
      href: "/about/mission",
      description: t("about.mission.description"),
      icon: Target,
    },
    {
      title: t("about.team.title"),
      href: "/about/team",
      description: t("about.team.description"),
      icon: Users,
    },
    {
      title: t("about.impact.title"),
      href: "/about/impact",
      description: t("about.impact.description"),
      icon: TrendingUp,
    },
  ];

  return (
    <AuroraBackground className="!h-auto min-h-screen !items-start !justify-start pt-32 pb-20 px-6" showRadialGradient={false}>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500">
            About
            <br />
            Us
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-2 w-32 bg-zinc-950 dark:bg-white" />
            <div className="h-2 w-16 bg-zinc-600 dark:bg-zinc-400" />
            <div className="h-2 w-8 bg-zinc-400 dark:bg-zinc-600" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 max-w-2xl"
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={section.href}
                  className="block p-10 border-4 border-zinc-950 dark:border-white relative group hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300 h-full"
                >
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-zinc-950 dark:bg-white group-hover:bg-white dark:group-hover:bg-zinc-950 rotate-45 transition-colors" />
                  <Icon className="w-16 h-16 mb-6" />
                  <h2 className="text-3xl font-black tracking-tight mb-4">{section.title}</h2>
                  <p className="text-base leading-relaxed opacity-80">{section.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AuroraBackground>
  );
}
