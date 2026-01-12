"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BlurTextAnimation from "@/components/ui/blur-text-animation";
import { Typewriter } from "@/components/ui/typewriter";

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
      name: "Rahul Deb",
      email: "rdeb60@stuy.edu",
      photo: "/team/branch_director_rahul_deb.jpg",
    },
    {
      name: "Ivan Huang",
      email: "ihuang70@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Kalimul Kaif",
      email: "kkaif60@stuy.edu",
      photo: "/team/branch_director_kalimul_kaif.jpeg",
    },
    {
      name: "Nihal Robi",
      email: "nrobi60@stuy.edu",
      photo: "/team/branch_director_nihal_robi.jpg",
    },
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
  ],
  Brooklyn: [
    {
      name: "Ardian Agoes",
      email: "aagoes60@stuy.edu",
      photo: "/team/branch_director_ardian_agoes.jpg",
    },
    {
      name: "Belal Hasan",
      email: "bhasan60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Sofia Pisareva",
      email: "spisareva60@stuy.edu",
      photo: "/team/branch_director_sofia_pisareva.jpeg",
    },
  ],
  Manhattan: [
    {
      name: "Justin Codner",
      email: "jcodner60@stuy.edu",
      photo: "/team/default_avatar.png",
    },
    {
      name: "Hugo Kudera",
      email: "hkudera60@stuy.edu",
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
  "Saatvik Saha",
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
  const [isDark, setIsDark] = React.useState(true);
  const [showUnderline, setShowUnderline] = React.useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = React.useState(0);

  React.useEffect(() => {
    // Check if dark mode is active
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (showUnderline && titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, [showUnderline]);

  // Create custom word data for each tutor with gradient colors
  const tutorWords = React.useMemo(() => {
    return tutors.map((name, index) => {
      const progress = index / tutors.length;
      const exponentialDelay = Math.pow(progress, 0.7) * 3;
      const baseDelay = index * 0.15;

      // Create gradient - inverted for light mode
      const waveEffect = Math.sin(progress * Math.PI * 6) * 0.5 + 0.5;

      let brightness;
      if (isDark) {
        // Dark mode: white (255) to dark grey (128)
        brightness = 128 + (255 - 128) * waveEffect;
      } else {
        // Light mode: black (0) to medium grey (127) - inverted
        brightness = 0 + 127 * waveEffect;
      }

      return {
        text: name,
        duration: 1.8,
        delay: baseDelay + exponentialDelay,
        blur: 15,
        scale: 0.95,
        color: `rgb(${brightness}, ${brightness}, ${brightness})`
      };
    });
  }, [isDark]);

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
              words={["The Team"]}
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

        {/* President Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-white dark:bg-black border-2 border-zinc-950 dark:border-zinc-400 text-zinc-950 dark:text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-zinc-200 dark:bg-zinc-800 opacity-20 -ml-24 -mt-24 rotate-45" />

            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start relative">
              {/* Photo */}
              <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
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
                  <p className="text-sm font-bold tracking-widest mb-2 text-zinc-600 dark:text-zinc-300">
                    PRESIDENT
                  </p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3 text-zinc-950 dark:text-white">
                    {leadership.president.name}
                  </h2>
                  <p className="text-base font-medium text-zinc-600 dark:text-zinc-300 mb-6">
                    {leadership.president.email}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
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
          <div className="bg-white dark:bg-black border-2 border-zinc-950 dark:border-zinc-400 text-zinc-950 dark:text-white p-12">
            <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
              {/* Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold tracking-widest mb-2 text-zinc-600 dark:text-zinc-300">
                    VICE PRESIDENT
                  </p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3 text-zinc-950 dark:text-white">
                    {leadership.vicePresident.name}
                  </h2>
                  <p className="text-base font-medium text-zinc-600 dark:text-zinc-300 mb-6">
                    {leadership.vicePresident.email}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
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
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 text-zinc-950 dark:text-white">
            Branch Directors
          </h2>

          <div className="space-y-12">
            {Object.entries(branchDirectors).map(([borough, directors], boroughIndex) => (
              <motion.div
                key={borough}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + boroughIndex * 0.1 }}
                className="bg-white dark:bg-black border-2 border-zinc-950 dark:border-zinc-400 p-8"
              >
                <h3 className="text-3xl font-black tracking-tight mb-8 text-zinc-950 dark:text-white">
                  {borough}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {directors.map((director, index) => (
                    <div key={index} className="group">
                      {/* Photo */}
                      <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden mb-4 transition-transform group-hover:scale-[1.02]">
                        <Image
                          src={director.photo}
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                          {director.name}
                        </h4>
                        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
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
          <div className="bg-white dark:bg-black border-2 border-zinc-950 dark:border-zinc-400 text-zinc-950 dark:text-white p-12 relative overflow-hidden min-h-[600px]">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-zinc-950 dark:text-white text-center">
                Thanks to Our Summer '25 Tutors
              </h2>

              {/* Border */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="h-1 bg-zinc-950 dark:bg-zinc-400 mx-auto mb-12"
              />

              {/* Blur Text Animation */}
              <BlurTextAnimation
                words={tutorWords}
                fontSize="text-2xl md:text-3xl lg:text-4xl"
                fontFamily="font-bold"
                animationDelay={3000}
                className="min-h-[400px]"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </AuroraBackground>
  );
}
