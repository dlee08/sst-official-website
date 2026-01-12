"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Award, Users, MapPin, Heart, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { Typewriter } from "@/components/ui/typewriter";

export default function MissionPage() {
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
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h1
            ref={titleRef}
            className="text-7xl md:text-8xl font-black tracking-tighter mb-6 pb-2 leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500 inline-block overflow-visible"
          >
            <Typewriter
              words={["Our Mission"]}
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
              className="h-1 bg-zinc-950 dark:bg-white"
            />
          )}
        </motion.div>

        {/* Our History */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-zinc-800 dark:bg-zinc-200 opacity-20 rotate-45" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-12 h-12" />
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
                  Nearly a Decade
                </h2>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90 max-w-4xl">
                For nearly a decade, Stuyvesant Summer Tutoring has empowered students across New York City.
                Every summer, we recruit dedicated Stuyvesant students to join us in this formidable undertaking,
                creating a tight-knit community united in our mission to help make the world a more equitable place for all.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Partnership & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Partnerships */}
            <div className="border-4 border-zinc-950 dark:border-white p-10 relative group hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-zinc-950 dark:bg-white group-hover:bg-white dark:group-hover:bg-zinc-950 rotate-45 transition-colors" />

              <Award className="w-16 h-16 mb-6" />
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Certified Volunteer Hours
              </h3>
              <p className="text-lg leading-relaxed opacity-90">
                Earn certified volunteer hours accredited by our partner organizations including
                Stuyvesant's ARISTA, Red Cross, and Key Club. Hard work does not go unrewarded.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-950 dark:border-white p-10 relative">
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-zinc-950 dark:bg-white rotate-45" />

              <Users className="w-16 h-16 mb-6 text-zinc-950 dark:text-white" />
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-zinc-950 dark:text-white">
                Tight-Knit Community
              </h3>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Join a community of passionate students committed to educational equity.
                We continue to grow in numbers and thrive each year.
              </p>
            </div>
          </div>
        </motion.section>

        {/* By The Numbers (2024) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500">
            Last Summer's Impact
          </h2>

          <div className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "10", label: "Branch Directors" },
                { value: "50", label: "Tutors" },
                { value: "200", label: "Tutees" },
                { value: "1,350+", label: "Volunteer Hours" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl md:text-6xl font-black tracking-tighter mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold tracking-tight opacity-80">
                    {stat.label}
                  </div>
                  <div className="h-1 w-12 bg-white dark:bg-zinc-950 mt-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Locations */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="border-l-4 border-zinc-950 dark:border-white pl-8">
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="w-12 h-12 text-zinc-950 dark:text-white" />
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
                Across NYC
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {["Manhattan", "Queens", "Brooklyn"].map((borough, index) => (
                <motion.div
                  key={borough}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-zinc-100 dark:bg-zinc-900 p-6 border-l-4 border-zinc-950 dark:border-white"
                >
                  <div className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
                    {borough}
                  </div>
                  <div className="text-sm font-bold tracking-tight text-zinc-600 dark:text-zinc-400 mt-2">
                    In-person library sessions
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="bg-white dark:bg-zinc-800 p-6 border-2 border-zinc-950 dark:border-white relative group hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black tracking-tight">
                      Staten Island
                    </div>
                    <div className="text-sm font-bold tracking-tight opacity-60 mt-2">
                      Coming Soon
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8" />
                </div>
              </motion.div>
            </div>

            <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">
              Sessions run from early July to late August, with plans to officially expand
              to Staten Island this summer.
            </p>
          </div>
        </motion.section>

        {/* Tutor Experience */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-950 dark:border-white p-12 relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-zinc-200 dark:bg-zinc-800 opacity-30 -ml-16 -mt-16 rotate-45" />

            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
                The Tutor Experience
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">
                  SST tutors form the foundation of our organization—dedicated Stuyvesant students
                  willing to give up some time in their summer to help younger students thrive and
                  succeed at an early age.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-zinc-950 dark:text-white">What You'll Do</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Work alongside a branch director during each session</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Be assigned one or a few tutees of a specific grade level</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Access study materials for ELA, Math, and Science</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-zinc-950 dark:text-white">Your Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Certified volunteer hours (including transportation)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Flexible commitment—choose your schedule</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-zinc-950 dark:bg-white mt-2 rotate-45 flex-shrink-0" />
                        <span>Supportive, well-organized environment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="font-medium italic">
                  Overall, the tutoring experience at SST is very accommodating, with tutors able to
                  choose their level of commitment according to their wants and needs.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 p-12 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-800 dark:bg-zinc-200 opacity-20 -mr-32 -mb-32 rotate-45" />

            <div className="relative">
              <blockquote className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-8">
                "Now that you are familiar with the workings of SST as a volunteer organization,
                you are ready to make a difference."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link
                  href="https://forms.gle/6dFS9zWzaXAyZZ2m9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white px-8 py-4 font-black text-lg hover:scale-105 transition-transform border-4 border-white dark:border-zinc-950"
                >
                  Apply as a Tutor
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <p className="text-base font-medium opacity-80 max-w-md">
                  Be yourself, say as much as you feel is needed, and reveal the best, most telling parts of your person.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </AuroraBackground>
  );
}
