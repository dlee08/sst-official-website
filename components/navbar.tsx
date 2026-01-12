"use client";

import { Home, Users, Image, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navbar() {
  const { t } = useTranslation("common");

  const navItems = [
    {
      name: t("nav.home"),
      url: "/",
      icon: Home
    },
    {
      name: t("nav.about"),
      icon: Users,
      subItems: [
        {
          title: t("about.mission.title"),
          href: "/about/mission",
          description: t("about.mission.description"),
        },
        {
          title: t("about.team.title"),
          href: "/about/team",
          description: t("about.team.description"),
        },
        {
          title: t("about.impact.title"),
          href: "/about/impact",
          description: t("about.impact.description"),
        },
      ],
    },
    {
      name: t("nav.gallery"),
      icon: Image,
      subItems: [
        {
          title: t("gallery.disclaimer.title"),
          href: "/gallery/disclaimer",
          description: t("gallery.disclaimer.description"),
        },
        {
          title: t("gallery.summer2025.title"),
          href: "/gallery/summer-2025",
          description: t("gallery.summer2025.description"),
        },
      ],
    },
    {
      name: t("nav.apply"),
      icon: FileCheck,
      subItems: [
        {
          title: t("apply.tutor.title"),
          href: "https://forms.gle/6dFS9zWzaXAyZZ2m9",
          description: t("apply.tutor.description"),
        },
        {
          title: t("apply.tutee.title"),
          href: "https://forms.gle/12oAL7JcGRuegpiX9",
          description: t("apply.tutee.description"),
        },
      ],
    },
  ];

  return <NavBar items={navItems} />;
}
