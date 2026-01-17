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
    title: "The Rise of Generative AI in Creative Workflows",
    date: "October 24, 2024",
    categories: ["AI", "Tech"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2600&auto=format&fit=crop",
    excerpt: "How artificial intelligence is reshaping the way designers and developers collaborate, from concept to code. We explore the tools that are defining the next generation of digital products.",
  },
  {
    id: 2,
    title: "Minimalism vs. Brutalism: 2025 Design Trends",
    date: "September 15, 2024",
    categories: ["Design", "Strategy"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2600&auto=format&fit=crop",
    excerpt: "As user interfaces become more complex, the pendulum swings between clean minimalism and raw, structural brutalism. Which approach drives better engagement?",
  },
  {
    id: 3,
    title: "Scaling E-Commerce Infrastructure for Black Friday",
    date: "August 02, 2024",
    categories: ["Tech", "Strategy"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Preparing your platform for peak traffic isn't just about server capacity—it's about resilient architecture. Our engineering team breaks down the key strategies.",
  },
  {
    id: 4,
    title: "Designing for Serendipity: The Randomness Factor",
    date: "July 12, 2024",
    categories: ["Design", "AI"],
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2600&auto=format&fit=crop",
    excerpt: "Can we engineer happy accidents? Exploring how algorithmic randomness can create more human, delightful digital experiences.",
  },
]

const categories = ["All", "AI", "Design", "Tech", "Strategy"]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredNews = activeCategory === "All" 
    ? news 
    : news.filter(item => item.categories.includes(activeCategory))

  return (
    <section className="bg-background pt-32 pb-24 md:pt-[180px] md:pb-32">
      <div className="container max-w-5xl">
        <div className="mb-16 md:mb-24 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <TextSlideUpByWord as="h1" className="variant-h1 max-w-2xl leading-[0.9]">
            Latest news & insights
            </TextSlideUpByWord>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            activeCategory === category ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
                <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group border-t border-border pt-12 md:pt-16"
                >
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Top Meta */}
                        <div className="flex flex-wrap items-center gap-4">
                            {item.categories.map(cat => (
                                <Badge key={cat} variant="outline" className="rounded-full border-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background">
                                    {cat}
                                </Badge>
                            ))}
                            <span className="text-sm font-medium text-muted-foreground">{item.date}</span>
                        </div>

                        {/* Large Title */}
                        <Link href={`/news/${item.id}`} className="block">
                            <h2 className="variant-h2 text-4xl md:text-6xl lg:text-7xl transition-colors group-hover:text-primary leading-[0.95]">
                                {item.title}
                            </h2>
                        </Link>

                        {/* Image */}
                        <Link href={`/news/${item.id}`} className="block aspect-[4/3] w-full overflow-hidden rounded-md md:aspect-[16/9]">
                             <div className="relative h-full w-full bg-muted transition-transform duration-700 group-hover:scale-105">
                                <Image 
                                    src={item.image} 
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                             </div>
                        </Link>

                        {/* Excerpt */}
                         <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
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
