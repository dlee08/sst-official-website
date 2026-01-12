"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Image, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function GalleryPage() {
  const { t } = useTranslation("common");

  const galleries = [
    {
      title: t("gallery.disclaimer.title"),
      href: "/gallery/disclaimer",
      description: t("gallery.disclaimer.description"),
      icon: AlertCircle,
    },
    {
      title: t("gallery.summer2025.title"),
      href: "/gallery/summer-2025",
      description: t("gallery.summer2025.description"),
      image: "/gallery/summer-2025-preview.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t("gallery.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block p-8 rounded-2xl border border-border bg-card hover:bg-accent transition-colors h-full"
                >
                  {Icon && <Icon className="w-12 h-12 mb-4 text-primary" />}
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
