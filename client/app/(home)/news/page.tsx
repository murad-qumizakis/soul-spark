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
    title: "The Agentic Web: Why AI Agents Are the New UI",
    date: "January 14, 2025",
    categories: ["Insights", "Tech"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2600&auto=format&fit=crop",
    excerpt: "We are moving beyond chatbots. The next generation of the web will be built for autonomous AI agents that browse, negotiate, and act on your behalf.",
  },
  {
    id: 2,
    title: "Design Systems in 2025: From Consistency to Adaptability",
    date: "December 08, 2024",
    categories: ["Design", "Work"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Static component libraries are dead. Learn how adaptive design systems use context and intent to create fluid, personalized user experiences.",
  },
  {
    id: 3,
    title: "Sustainable Web: Reducing Digital Carbon Footprints",
    date: "November 22, 2024",
    categories: ["Insights", "Strategy"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Every byte counts. How optimizing your code, assets, and hosting not only boosts performance but drastically reduces your site's environmental impact.",
  },
  {
    id: 4,
    title: "Spatial Computing: Designing for the Post-Screen Era",
    date: "October 10, 2024",
    categories: ["Interviews", "Tech"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop",
    excerpt: "As mixed reality headsets hit the mainstream, we sat down with our XR lead to discuss the challenges of designing interfaces that float in the real world.",
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
        <div className="space-y-12 md:space-y-20">
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
                    <div className="flex flex-col gap-3">
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
                        <Link href={`/news/${item.id}`} className="block w-full overflow-hidden">
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
                         <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
