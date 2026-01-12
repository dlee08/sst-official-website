"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Typewriter } from "@/components/ui/typewriter";

export default function DisclaimerPage() {
  const [showUnderline, setShowUnderline] = React.useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = React.useState(0);

  React.useEffect(() => {
    if (showUnderline && titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, [showUnderline]);

  return (
    <AuroraBackground className="!h-auto min-h-screen !items-start !justify-start pt-32 pb-20 px-6" showRadialGradient={false}>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-black tracking-tighter mb-4 pb-2 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500 inline-block overflow-visible"
          >
            <Typewriter
              words={["Gallery Disclaimer"]}
              speed={100}
              cursor={true}
              cursorChar="|"
              onComplete={() => setShowUnderline(true)}
            />
          </h1>

          {showUnderline && titleWidth > 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: titleWidth }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-zinc-950 dark:bg-white mb-12"
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-lg leading-relaxed"
        >
          <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
            At Stuyvesant Summer Tutoring, we value the privacy and consent of
            all participants in our program.
          </p>

          {/* Consent section with bold treatment */}
          <div className="relative bg-zinc-100 dark:bg-zinc-900 border-l-4 border-zinc-950 dark:border-white p-8">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-zinc-950 dark:bg-white rotate-45" />
            <h2 className="text-3xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
              Photo Consent
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Before taking any photographs featured in our gallery, we obtained
              explicit consent from both parents/guardians and tutees. We are
              committed to respecting the wishes of all families involved in our
              program.
            </p>
          </div>

          {/* Removal request section */}
          <div className="space-y-6 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 p-8">
            <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 dark:from-zinc-950 dark:to-zinc-600">
              Request Photo Removal
            </h2>
            <p className="leading-relaxed">
              If you would like a photo removed from our gallery for any reason,
              we will honor your request promptly and without question.
            </p>
            <div className="space-y-4">
              <p>Please email us at:</p>
              <a
                href="mailto:stuyvesantsummertutoring@gmail.com"
                className="inline-block text-2xl font-bold hover:opacity-70 transition-opacity underline decoration-2 underline-offset-4"
              >
                stuyvesantsummertutoring@gmail.com
              </a>
            </div>

            <div className="pt-6 space-y-3">
              <p className="font-bold">Include this info:</p>
              <ul className="space-y-3 text-base">
                {[
                  "Description of the photo or photos you'd like removed",
                  "The gallery page where the photo appears (if known)",
                  "Any additional details to help us identify the image",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm opacity-80 pt-4 border-t border-white/20 dark:border-zinc-950/20">
                We will respond to your request within 48 hours and remove the
                photo(s) as quickly as possible.
              </p>
            </div>
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <p className="text-base italic text-zinc-700 dark:text-zinc-400 leading-relaxed">
              Thank you for being part of the Stuyvesant Summer Tutoring
              community. Your trust and participation make our program possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
