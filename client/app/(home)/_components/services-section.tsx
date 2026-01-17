"use client"

import Link from "next/link"
import { BarChart, Code, Globe, Layers, Smartphone, Zap } from "lucide-react"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { AnimatedButton as Button } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react"

const MotionCard = motion.create(Card)

export function ServicesSection() {
  return (
    <section className="container py-24 md:py-24">
      {/* Mobile Layout (Stripe Modular) */}
      <div className="flex flex-col gap-8 md:hidden">
        <div>
          <h4 className="text-base font-bold text-stripe-purple">Holistic design</h4>
        </div>
        <h2 className="text-4xl font-bold leading-tight text-stripe-dark-blue">
            A complete suite of digital services.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
            From initial concept to final deployment, we provide end-to-end design and development solutions tailored to your unique needs. We combine strategy, design, and technology to build products that scale.
        </p>

        <div className="grid grid-cols-3 gap-4">
             {/* Agency Service Icons */}
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <Layers className="size-8" />
             </div>
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <Code className="size-8" />
             </div>
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <Smartphone className="size-8" />
             </div>
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <Zap className="size-8" />
             </div>
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <Globe className="size-8" />
             </div>
             <div className="aspect-square rounded-xl border bg-background shadow-sm flex items-center justify-center text-stripe-purple">
                <BarChart className="size-8" />
             </div>
        </div>
      </div>

      {/* Desktop Layout (Original) */}
      <div className="hidden md:block">
      <TextSlideUpByWord as="h2" className="variant-h2 text-4xl md:text-6xl">
        We’re good at
      </TextSlideUpByWord>
      <div className="grid grid-cols-1 gap-12 items-end md:grid-cols-[1fr_minmax(400px,50.75vw)] md:gap-0">
        <div>
          <div className="mt-6 space-y-4">
            <p className="text-muted-foreground">Services</p>
            {[
              "E-Commerce",
              "Website Design",
              "Web Development",
              "Digital Products",
              "Brand Identities",
              "SEO Optimisation",
            ].map((item) => (
              <Link href={`/services/#`} key={item} className="block overflow-hidden text-3xl font-semibold md:variant-h3 md:text-[2vw] md:leading-tight">
                <TextSlideUpByText>{item}</TextSlideUpByText>
              </Link>
            ))}
          </div>
        </div>
        <MotionCard
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{ visible: { scaleY: 1 }, hidden: { scaleY: 0 } }}
          viewport={{ once: true }}
          className="w-full origin-top bg-primary p-0 text-primary-foreground md:h-full md:flex md:items-center">
          <motion.div
            transition={{ delay: 0.9 }}
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
            className="p-8 md:p-16">
            <h3 className="text-2xl font-medium md:variant-h3">
              Let's start with a conversation about how we can help you! Get in touch, we're a nice bunch.
            </h3>
            <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center">
              <Button variant="ghost" className="w-full py-4 md:w-auto">
                Let's talk
              </Button>
              <Badge size="lg" variant="outline" className="w-full justify-center border-current py-4 whitespace-nowrap md:w-auto">
                020 3456 7890
              </Badge>
            </div>
          </motion.div>
        </MotionCard>
      </div>
      </div>
    </section>
  )
}
