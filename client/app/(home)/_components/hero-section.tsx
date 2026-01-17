"use client"

import { BlockSlideUp } from "@/components/higher-order-block-animate-components"
import { TextSlideUpByLine, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { AnimatedLink } from "@/components/ui/animated-button"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { allLogos } from "@/data/logos" // Ensure this path is correct or use logic to get logos
import Image from "next/image"
import { AchievementsBadge } from "./achievements-badge"

const stripeLogos = [
  { name: "OpenAI", src: "/logos/openai.svg" }, // Placeholders, will use text or generic logos if files don't satisfy
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Google", src: "/logos/google.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "Marriott", src: "/logos/marriott.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
]

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-stripe-purple via-purple-500 to-stripe-teal md:bg-none">
      {/* Mobile Layout (Stripe Style) */}
      <div className="container flex min-h-[100svh] flex-col justify-center gap-y-8 py-32 text-white md:hidden">
         <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
            Building digital experiences that matter.
         </h1>
         <p className="text-lg leading-relaxed text-white/90">
            We help ambitious brands define their digital strategy and build products that drive real growth. From initial concept to final deployment, we provide end-to-end solutions.
         </p>
         <div className="flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-stripe-dark-blue px-6 py-6 text-base font-medium hover:bg-stripe-dark-blue/90">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="link" className="px-0 text-base font-medium text-white hover:text-white/90 decoration-transparent">
              View our work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
         </div>
         
         <div className="mt-12 grid grid-cols-2 gap-8 gap-y-12 opacity-90">
            {/* Using text for logos to avoid broken images if assets missing, mimicking the clean look */}
            <h3 className="text-2xl font-bold">OpenAl</h3>
            <h3 className="text-2xl font-bold">amazon</h3>
            <h3 className="text-2xl font-bold">Google</h3>
            <h3 className="text-2xl font-bold">ANTHROP\C</h3>
            <h3 className="text-2xl font-bold">Marriott</h3>
            <h3 className="text-2xl font-bold">shopify</h3>
         </div>
      </div>

      {/* Desktop Layout (Original) */}
      <div className="container hidden min-h-[100svh] flex-col justify-end gap-y-16 py-16 md:flex md:gap-y-32 md:py-32">
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
