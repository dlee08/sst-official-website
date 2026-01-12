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
          className="text-3xl md:text-7xl font-bold text-black dark:text-white text-center"
          colors={{ first: "#3b82f6", second: "#a78bfa" }}
          sparklesCount={15}
        />
        <div className="font-extralight text-base md:text-4xl text-neutral-700 dark:text-neutral-200 py-4 text-center">
          <Typewriter
            text={[
              "Free K-9 ELA, Math & Science Tutoring",
              "Building futures, one student at a time",
              "Join us in making a difference"
            ]}
            speed={80}
            deleteSpeed={40}
            delay={2000}
            loop={true}
            className="font-extralight text-base md:text-4xl text-neutral-700 dark:text-neutral-200"
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
