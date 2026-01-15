"use client"

import { TextSlideUpByLine, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react"

const MotionCard = motion.create(Card)

export function TrustSection() {
  return (
    <section>
      <div className="container py-24 md:py-huge">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col gap-8 md:block md:gap-6">
            <TextSlideUpByWord as="h2" className="variant-h2 text-4xl md:text-huge">
              Your Digital Partner
            </TextSlideUpByWord>
            <TextSlideUpByLine as="h4" className="variant-h4 mt-6 md:mt-0">
              {`We partner with companies of all sizes to solve\ncomplex business challenges and define their digital\nstrategies and objectives that deliver results. We\nhelp bring ideas to life and create brands, websites\n& digital products that work.`}
            </TextSlideUpByLine>
            <div className="mt-12 md:mt-huge">
              <div className="flex items-center gap-6">
                <div className="flex items-center -space-x-4 md:-space-x-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Avatar key={i} className="size-10 text-sm md:variant-h5 md:size-auto">
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <h5 className="variant-h5 text-muted">Brands who've trusted us...</h5>
              </div>
            </div>
          </div>

          <MotionCard
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{ visible: { scaleY: 1 }, hidden: { scaleY: 0 } }}
            viewport={{ once: true }}
            className="w-full origin-top p-0 md:w-auto">
            <motion.div
              transition={{ delay: 0.9 }}
              variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              className="flex flex-col divide-y-2 divide-x-0 p-8 md:flex-row md:divide-x-2 md:divide-y-0 md:p-16">
              {(
                [
                  [20, "Years on the market"],
                  [500, "Satisfied Customers"],
                ] as const
              ).map((item) => (
                <div key={item[1]} className="flex-1 space-y-2 p-6 text-center md:space-y-4 md:p-[2vw]">
                  <h2 className="text-4xl font-bold md:variant-h2">{item[0]}</h2>
                  <h4 className="text-sm md:variant-h4 whitespace-nowrap">{item[1]}</h4>
                </div>
              ))}
            </motion.div>
          </MotionCard>
        </div>
      </div>
    </section>
  )
}
