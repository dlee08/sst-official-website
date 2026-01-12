"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Typewriter } from "@/components/ui/typewriter-text";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <SparklesText
          text={t("title")}
          className="text-[4rem] md:text-[11rem] font-bold text-black dark:text-white text-center leading-tight"
          colors={{ first: "#3b82f6", second: "#a78bfa" }}
          sparklesCount={15}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "600px" }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent max-w-full"
        />
        <div className="font-extralight text-xl md:text-6xl text-neutral-700 dark:text-neutral-200 py-4 text-center">
          <Typewriter
            text={t("captions", { returnObjects: true }) as string[]}
            speed={80}
            deleteSpeed={40}
            delay={2000}
            loop={true}
            className="font-extralight text-xl md:text-6xl text-neutral-700 dark:text-neutral-200"
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
