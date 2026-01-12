"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubItem {
  title: string
  href: string
  description: string
}

interface NavItem {
  name: string
  url?: string
  icon: LucideIcon
  subItems?: SubItem[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab based on current pathname
  useEffect(() => {
    const active = items.find(
      (item) =>
        item.url === pathname ||
        item.subItems?.some((sub) => sub.href === pathname)
    )
    if (active) {
      setActiveTab(active.name)
    }
  }, [pathname, items])

  const handleTabClick = (itemName: string, url?: string, isSubItem?: boolean) => {
    if (url) {
      setActiveTab(itemName)
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mt-6 pointer-events-none",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-white/80 dark:bg-zinc-950/80 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-2xl shadow-white/20 dark:shadow-black/20 pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const isHovered = hoveredTab === item.name
          const hasSubItems = item.subItems && item.subItems.length > 0

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => !isMobile && setHoveredTab(item.name)}
              onMouseLeave={() => !isMobile && setHoveredTab(null)}
            >
              {item.url ? (
                <Link
                  href={item.url}
                  onClick={() => handleTabClick(item.name, item.url)}
                  className={cn(
                    "relative cursor-pointer text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200",
                    "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white",
                    isActive && "text-black dark:text-white"
                  )}
                >
                  <span className="hidden md:inline relative z-10">{item.name}</span>
                  <span className="md:hidden relative z-10">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-black/10 dark:bg-white/10 rounded-full -z-10 border border-black/30 dark:border-white/30"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-200 rounded-t-full shadow-lg shadow-black/50 dark:shadow-white/50">
                        <div className="absolute w-16 h-8 bg-black/30 dark:bg-white/30 rounded-full blur-xl -top-3 -left-3" />
                        <div className="absolute w-12 h-8 bg-black/40 dark:bg-white/40 rounded-full blur-lg -top-2 left-0" />
                        <div className="absolute w-6 h-6 bg-black/50 dark:bg-white/50 rounded-full blur-md top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              ) : (
                <button
                  className={cn(
                    "relative cursor-pointer text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5",
                    "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white",
                    isHovered && "text-black dark:text-white",
                    isActive && "text-black dark:text-white"
                  )}
                >
                  <span className="hidden md:inline relative z-10">{item.name}</span>
                  <span className="md:hidden relative z-10">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {hasSubItems && (
                    <ChevronDown
                      className={cn(
                        "hidden md:inline-block w-3.5 h-3.5 transition-transform duration-200 relative z-10",
                        isHovered && "rotate-180"
                      )}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-black/10 dark:bg-white/10 rounded-full -z-10 border border-black/30 dark:border-white/30"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-200 rounded-t-full shadow-lg shadow-black/50 dark:shadow-white/50">
                        <div className="absolute w-16 h-8 bg-black/30 dark:bg-white/30 rounded-full blur-xl -top-3 -left-3" />
                        <div className="absolute w-12 h-8 bg-black/40 dark:bg-white/40 rounded-full blur-lg -top-2 left-0" />
                        <div className="absolute w-6 h-6 bg-black/50 dark:bg-white/50 rounded-full blur-md top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </button>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hasSubItems && isHovered && !isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 min-w-[280px] pointer-events-auto"
                  >
                    <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-2xl shadow-white/40 dark:shadow-black/40 overflow-hidden">
                      <div className="p-2">
                        {item.subItems?.map((subItem, idx) => {
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => {
                                handleTabClick(item.name, subItem.href, true)
                                setHoveredTab(null)
                              }}
                              className="block p-4 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-all duration-150 group border border-transparent hover:border-zinc-300/50 dark:hover:border-zinc-800/50"
                            >
                              <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors mb-1">
                                {subItem.title}
                              </div>
                              <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                                {subItem.description}
                              </p>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 dark:bg-zinc-950/95 border-l border-t border-zinc-200/50 dark:border-zinc-800/50 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
