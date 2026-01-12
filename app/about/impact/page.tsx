"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Timeline } from "@/components/ui/timeline";

import { useTranslation } from "react-i18next";

export default function ImpactPage() {
  const { t } = useTranslation("common");

  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border-4 border-zinc-950 dark:border-white p-8">
            <div className="mb-8">
              <div className="inline-block bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-4 py-2 font-black tracking-tight mb-4">
                {t("impact.timeline.2025.badge")}
              </div>
              <h3 className="text-4xl font-black tracking-tighter mb-6 text-zinc-950 dark:text-white">
                {t("impact.timeline.2025.title")}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  75
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2025.stats.tutors")}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  225
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2025.stats.students")}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  2,178
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2025.stats.hours")}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  6
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2025.stats.libraries")}
                </div>
              </div>
              <div className="space-y-2 col-span-2">
                <div className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  96%
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2025.stats.satisfaction")}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-zinc-950 dark:border-white">
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {t("impact.timeline.2025.description")}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-8">
            <h3 className="text-4xl font-black tracking-tighter mb-6 text-zinc-950 dark:text-white">
              {t("impact.timeline.2024.title")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <div className="text-4xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  60
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2024.stats.tutors")}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  200
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2024.stats.tutees")}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  1,357
                </div>
                <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {t("impact.timeline.2024.stats.hours")}
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {t("impact.timeline.2024.description")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2015-2023",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 p-8">
            <h3 className="text-3xl font-black tracking-tighter mb-4 text-zinc-950 dark:text-white">
              {t("impact.timeline.earlier.title")}
            </h3>
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-4">
              {t("impact.timeline.earlier.description")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 italic">
              {t("impact.timeline.earlier.disclaimer")}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AuroraBackground className="!h-auto min-h-screen !items-start !justify-start pt-32 pb-20 px-6" showRadialGradient={false}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500">
            Our
            <br />
            Impact
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
            Nearly a decade of empowering students across New York City
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
