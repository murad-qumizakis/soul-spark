"use client"

import Link from "next/link"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { AnimatedButton as Button } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react"

const MotionCard = motion.create(Card)

export function ServicesSection() {
  return (
    <section className="container py-24 md:py-huge">
      <TextSlideUpByWord as="h2" className="variant-h2 text-4xl md:text-huge">
        We’re good at
      </TextSlideUpByWord>
      <div className="grid grid-cols-1 gap-12 items-end md:grid-cols-[1fr_50.75vw] md:gap-0">
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
              <Link href={`/services/#`} key={item} className="block overflow-hidden text-3xl font-semibold md:variant-h3 md:text-[2vw]">
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
          className="w-full origin-top bg-primary p-0 text-primary-foreground">
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
    </section>
  )
}
