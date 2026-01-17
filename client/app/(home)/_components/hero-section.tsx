"use client"

import { BlockSlideUp } from "@/components/higher-order-block-animate-components"
import { TextSlideUpByLine, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { AnimatedLink } from "@/components/ui/animated-button"
import { AchievementsBadge } from "./achievements-badge"

export const HeroSection = () => {
  return (
    <section>
      <div className="container flex min-h-[100svh] flex-col justify-end gap-y-16 py-16 md:gap-y-32 md:py-32">
        <div className="max-w-7xl text-4xl font-semibold leading-tight tracking-tight md:text-huge/tight text-foreground/90">
          <TextSlideUpByWord
            delay={1}
            staggerChildren={0.1}
            segmentClassName={(segment) =>
              segment === "Experiences"
                ? "animate-gradientMove bg-gradient-to-r from-primary via-secondary to-primary bg-[length:1600px_100%] bg-clip-text text-transparent"
                : ""
            }>
            Web & Video Experiences That Drive Connection.
          </TextSlideUpByWord>
        </div>

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <BlockSlideUp transition={{ delay: 1, duration: 0.3 }}>
            <AchievementsBadge />
          </BlockSlideUp>
          <BlockSlideUp containerClassName="ms-0 md:ms-auto max-w-lg" transition={{ delay: 1, duration: 0.3 }}>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-[28.8px]">
              We build engaging websites, brands & innovative e-commerce solutions.
            </p>
          </BlockSlideUp>
          <BlockSlideUp transition={{ delay: 1, duration: 0.3 }}>
            <AnimatedLink href="/case-studies" className="h-12 px-8">Case Studies</AnimatedLink>
          </BlockSlideUp>
        </div>
      </div>
    </section>
  )
}
