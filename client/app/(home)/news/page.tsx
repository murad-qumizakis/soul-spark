"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"

const news = [
  {
    id: 1,
    title: "Movement: Designing for Serendipity",
    date: "October 24, 2024",
    categories: ["Insights", "Work"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2600&auto=format&fit=crop",
    excerpt: "How artificial intelligence is reshaping the way designers and developers collaborate, from concept to code.",
  },
  {
    id: 2,
    title: "Minimalism vs. Brutalism: 2025 Trends",
    date: "September 15, 2024",
    categories: ["News", "Interviews"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2600&auto=format&fit=crop",
    excerpt: "As user interfaces become more complex, the pendulum swings between clean minimalism and raw, structural brutalism.",
  },
  {
    id: 3,
    title: "Scaling E-Commerce Infrastructure",
    date: "August 02, 2024",
    categories: ["Work", "News"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Preparing your platform for peak traffic isn't just about server capacity—it's about resilient architecture.",
  },
  {
    id: 4,
    title: "The Randomness Factor in UI",
    date: "July 12, 2024",
    categories: ["Insights", "Interviews"],
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Can we engineer happy accidents? Exploring how algorithmic randomness can create more human experiences.",
  },
]

// Exact categories from screenshot
const categories = ["All", "News", "Insights", "Work", "Interviews"]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredNews = activeCategory === "All" 
    ? news 
    : news.filter(item => item.categories.includes(activeCategory))

  return (
    <section className="bg-background min-h-screen pt-32 pb-24 md:pt-[180px] md:pb-32">
      <div className="container max-w-[1200px] px-6 md:px-8">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
            <h1 className="variant-h1 text-5xl md:text-[80px] leading-[0.9] tracking-tight mb-12">
                <span className="block">Latest news &</span>
                <span className="block text-muted-foreground/60">insights</span>
            </h1>
            
            {/* Filter Grid - Exact Match from Screenshot */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:flex-wrap md:gap-8 border-b border-foreground/10 pb-12">
                {categories.map(category => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary",
                                isActive ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {/* Square Indicator */}
                            <span className={cn(
                                "size-3 border", 
                                isActive ? "bg-foreground border-foreground" : "border-foreground/40"
                            )} />
                            {category}
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Vertical Feed */}
        <div className="space-y-20 md:space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
                <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                >
                    <div className="flex flex-col gap-6">
                        {/* Top Tags - Purple Dashed Style from Screenshot Inspiration */}
                        <div className="flex flex-wrap items-center gap-2">
                             {item.categories.map((cat, idx) => (
                                <span key={cat} className={cn(
                                    "px-3 py-1 border border-foreground/20 text-sm font-medium uppercase tracking-wider",
                                    idx === 0 ? "bg-primary/10 border-primary/20 text-primary" : "text-muted-foreground"
                                )}>
                                    {cat}
                                </span>
                             ))}
                        </div>

                        {/* Large Title */}
                        <Link href={`/news/${item.id}`} className="block">
                            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight transition-colors group-hover:text-primary">
                                {item.title}
                            </h2>
                        </Link>

                        {/* Image */}
                        <Link href={`/news/${item.id}`} className="block w-full overflow-hidden mt-2">
                             <div className="relative aspect-[4/3] w-full bg-muted transition-transform duration-700 group-hover:scale-[1.02] md:aspect-[16/9]">
                                <Image 
                                    src={item.image} 
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                             </div>
                        </Link>

                        {/* Excerpt */}
                         <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground mt-2">
                            {item.excerpt}
                        </p>
                    </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
