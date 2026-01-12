"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

// Summer 2025 Gallery Photos
const photos = [
  {
    id: 1,
    src: "/gallery/summer-2025/flushing-1.jpg",
    alt: "Flushing Library tutoring session",
    caption: "Flushing Library",
    description: "Tutors and students engaged in one-on-one learning sessions at the Flushing branch, helping K-9 students excel in math and reading comprehension.",
  },
  {
    id: 2,
    src: "/gallery/summer-2025/flushing-2.jpg",
    alt: "Flushing Library group session",
    caption: "Flushing Library",
    description: "A collaborative tutoring environment where students work together on problem-solving activities, guided by dedicated Stuyvesant tutors.",
  },
  {
    id: 3,
    src: "/gallery/summer-2025/flushing-3.jpg",
    alt: "Flushing Library learning moment",
    caption: "Flushing Library",
    description: "Personalized instruction at Flushing Library, where tutors adapt their teaching methods to each student's unique learning style and needs.",
  },
  {
    id: 4,
    src: "/gallery/summer-2025/borough-park-1.jpg",
    alt: "Borough Park Library session",
    caption: "Borough Park Library",
    description: "Students at Borough Park Library receiving quality tutoring in a supportive environment, making education accessible to all in the Brooklyn community.",
  },
  {
    id: 5,
    src: "/gallery/summer-2025/mcgoldrick-1.jpg",
    alt: "McGoldrick Library tutoring",
    caption: "McGoldrick Library",
    description: "The McGoldrick branch in action, where volunteer tutors dedicate their summer to empowering young students across Brooklyn.",
  },
  {
    id: 6,
    src: "/gallery/summer-2025/snfl-1.jpeg",
    alt: "SNFL Library session",
    caption: "Stavros Niarchos Foundation Library",
    description: "Summer learning at the Stavros Niarchos Foundation Library, where students build confidence and skills in a welcoming, inclusive space.",
  },
];

export default function Summer2025Gallery() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<number | null>(null);

  return (
    <AuroraBackground className="!h-auto min-h-screen !items-start !justify-start pt-32 pb-20 px-6" showRadialGradient={false}>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-500">
            Summer
            <br />
            2025
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
            className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 max-w-2xl mb-4"
          >
            Some memories from our Summer 2025 tutoring program
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/gallery/disclaimer"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white hover:opacity-70 transition-opacity group"
            >
              <span className="border-b-2 border-zinc-950 dark:border-white">
                Photo consent policy
              </span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative aspect-square cursor-pointer border-4 border-zinc-950 dark:border-white overflow-hidden"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Photo */}
              <div className="w-full h-full relative transition-transform group-hover:scale-105">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Caption overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 dark:group-hover:bg-white/90 transition-all duration-300 flex items-end pointer-events-none">
                  <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white dark:text-zinc-950 font-black text-2xl tracking-tight">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal/Lightbox with image and description */}
      <AnimatePresence>
        {selectedPhoto && (() => {
          const photo = photos.find((p) => p.id === selectedPhoto);
          if (!photo) return null;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-bold text-lg group"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                    CLOSE
                  </button>
                </div>

                {/* Image container */}
                <div className="bg-white dark:bg-zinc-900 border-4 border-white p-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </AuroraBackground>
  );
}
