"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BlurTextAnimation from "@/components/ui/blur-text-animation";

// Leadership data
const leadership = {
  president: {
    name: "David Lee",
    email: "dlee60@stuy.edu",
    bio: "Hi everyone! My name's David (he/him), and I'm currently a senior at Stuy. I joined SST during my freshman year summer, and I've been a part of this amazing community since! I live in Elmhurst, Queens, so Flushing Library is my go-to library for SST sessions, but I regularly take the train to Borough Park, Brooklyn, since a few of my friends are tutoring! In my free time, I like to code (competitively or for machine learning / AI), study biology (microbiology & genetics), and watch sports like basketball (go Knicks!) and Formula 1 (vai, Ferrari!). See you around!",
    photo: "/team/president_david_lee.JPG",
  },
  vicePresident: {
    name: "Tiffany Xu",
    email: "txu70@stuy.edu",
    bio: "Hello everyone! My name is Tiffany, and I'm currently a junior at Stuy. I joined SST also during my freshman year summer, and I'm still going strong. I live in Flushing, Queens, so Flushing and McGoldrick are also my go-to library for SST sessions, but I also commute to SNFL, Manhattan to help out! See you around!",
    photo: "/team/vice_president_tiffany_xu.jpg",
  },
};

const branchDirectors = {
  Queens: [
    {
      name: "Alex Shao",
      email: "ashao60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Cody Wong",
      email: "cwong60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Nihal Robi",
      email: "nrobi60@stuy.edu",
      photo: "/team/branch_director_nihal_robi.jpg",
    },
    {
      name: "Ivan Huang",
      email: "ihuang70@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Kalimul Kaif",
      email: "kkaif70@stuy.edu",
      photo: "/team/branch_director_kalimul_kaif.jpeg",
    },
  ],
  Brooklyn: [
    {
      name: "Sofia Pisareva",
      email: "spisareva60@stuy.edu",
      photo: "/team/branch_director_sofia_pisareva.jpeg",
    },
    {
      name: "Belal Hasan",
      email: "bhasan60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Ardian Agoes",
      email: "aagoes60@stuy.edu",
      photo: "/team/branch_director_ardian_agoes.jpg",
    },
  ],
  Manhattan: [
    {
      name: "Hugo Kudera",
      email: "hkudera60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Justin Codner",
      email: "jcodner60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
  ],
  "Staten Island": [
    {
      name: "Alexandru Cimpoiesu",
      email: "acimpoiesu60@stuy.edu",
      photo: "/team/branch_director_alexandru_cimpoiesu.png",
    },
    {
      name: "Alvin Lau",
      email: "alau60@stuy.edu",
      photo: "/team/branch_director_alvin_lau.png",
    },
  ],
};

// Tutors list for Summer 2025-26 (sorted alphabetically by last name)
const tutors = [
  "Mustafa Abdullah",
  "Ardian Agoes",
  "Tafheem Ahrar",
  "Tanvir Ahmed",
  "Syed Ali",
  "Stella Anderson",
  "Arda Ardali",
  "Tahmid Azmir",
  "Yash Balkaran",
  "Sandipta Barai",
  "Amelia Basith",
  "Efim Bensman",
  "Faheem Bhuiyan",
  "Juan Ochoa Bravo",
  "Cody Cai",
  "Jason Chan",
  "Christina Chen",
  "Eric Chen",
  "Jennifer Chen",
  "Leyi Chen",
  "William Chen",
  "Ikenna Chukwu",
  "Alma Dream Esguerra",
  "Sabrina Gao",
  "William Gao",
  "Lawerence Hicks",
  "Shihab Hossain",
  "Kalimul Kaif",
  "Amani Kaushal",
  "Shafin Kazi",
  "Angelina Lee",
  "Becky Lin",
  "Daniel Lin",
  "Nicky Liu",
  "Thomas Liu",
  "Justin Manariov",
  "Kaylee Olguin",
  "Jackson Peng",
  "Albatina Rahman",
  "Dipashak Rajak",
  "Nihal Robi",
  "Saatvik Saha",
  "Alex Shao",
  "Kiran Stanton",
  "Andrew Tang",
  "Sasha Trofimov",
  "Ruby Vaca",
  "Jayden Vallejo",
  "Avery Wenger",
  "Isabella Wong",
  "Benjamin Xie",
  "Mabel Yang",
  "Calvin Ye",
  "Jaedon Yassin",
  "Owen Zeng",
  "Anna Zheng",
  "Eric Zheng",
  "Kathy Zhong",
  "Ei Zin",
];

export default function TeamPage() {
  // Create custom word data for each tutor with gradient colors
  const tutorWords = React.useMemo(() => {
    return tutors.map((name, index) => {
      const progress = index / tutors.length;
      const exponentialDelay = Math.pow(progress, 0.7) * 3;
      const baseDelay = index * 0.15;

      // Create gradient from white (255) to dark grey (128)
      const waveEffect = Math.sin(progress * Math.PI * 6) * 0.5 + 0.5;
      const brightness = 128 + (255 - 128) * waveEffect;

      return {
        text: name,
        duration: 1.8,
        delay: baseDelay + exponentialDelay,
        blur: 15,
        scale: 0.95,
        color: `rgb(${brightness}, ${brightness}, ${brightness})`
      };
    });
  }, []);

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
            The
            <br />
            Team
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
            Meet the dedicated individuals behind Stuyvesant Summer Tutoring
          </motion.p>
        </motion.div>

        {/* President Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-zinc-800 dark:bg-zinc-200 opacity-30 -ml-24 -mt-24 rotate-45" />

            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start relative">
              {/* Photo */}
              <div className="aspect-square bg-zinc-800 dark:bg-zinc-200 relative overflow-hidden">
                <Image
                  src={leadership.president.photo}
                  alt={leadership.president.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold tracking-widest mb-2 opacity-60">
                    PRESIDENT
                  </p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 dark:from-zinc-950 dark:to-zinc-600">
                    {leadership.president.name}
                  </h2>
                  <p className="text-base font-medium opacity-70 mb-6">
                    {leadership.president.email}
                  </p>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  {leadership.president.bio}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vice President Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-950 dark:border-white p-12">
            <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
              {/* Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold tracking-widest mb-2 text-zinc-600 dark:text-zinc-400">
                    VICE PRESIDENT
                  </p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
                    {leadership.vicePresident.name}
                  </h2>
                  <p className="text-base font-medium text-zinc-600 dark:text-zinc-500 mb-6">
                    {leadership.vicePresident.email}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {leadership.vicePresident.bio}
                </p>
              </div>

              {/* Photo */}
              <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden order-first md:order-last">
                <Image
                  src={leadership.vicePresident.photo}
                  alt={leadership.vicePresident.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Branch Directors */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500">
            Branch Directors
          </h2>

          <div className="space-y-12">
            {Object.entries(branchDirectors).map(([borough, directors], boroughIndex) => (
              <motion.div
                key={borough}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + boroughIndex * 0.1 }}
                className="border-l-4 border-zinc-950 dark:border-white pl-8"
              >
                <h3 className="text-3xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
                  {borough}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {directors.map((director, index) => (
                    <div key={index} className="group">
                      {/* Photo */}
                      <div className="aspect-square bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 relative overflow-hidden mb-4 transition-transform group-hover:scale-[1.02]">
                        <Image
                          src={director.photo}
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400">
                          {director.name}
                        </h4>
                        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-500">
                          {director.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tutors Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-black text-white p-12 relative overflow-hidden min-h-[600px]">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 text-white text-center">
                Our Tutors
              </h2>

              {/* Blur Text Animation */}
              <BlurTextAnimation
                words={tutorWords}
                fontSize="text-2xl md:text-3xl lg:text-4xl"
                fontFamily="font-bold"
                animationDelay={3000}
                className="min-h-[400px]"
              />

              <div className="mt-12 pt-8 border-t border-white/20 text-center">
                <p className="text-sm opacity-60">
                  {tutors.length} dedicated tutors and counting...
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </AuroraBackground>
  );
}
