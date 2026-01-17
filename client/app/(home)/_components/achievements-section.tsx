"use client"

import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import Counter from "@/components/ui/counter"
import { motion } from "motion/react"

export function AchievementsSection() {
  return (
    <section className="bg-stripe-dark-blue text-white md:bg-background md:text-foreground">
      {/* Mobile Layout (Stripe Global Scale) */}
      <div className="container py-24 md:hidden">
         <div className="mb-6">
            <h4 className="text-base font-bold text-stripe-teal">Global scale</h4>
         </div>
         <h2 className="mb-12 text-4xl font-bold leading-tight">
            The backbone for global commerce
         </h2>
         <p className="mb-12 text-lg text-white/80">
            Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of euros each year for ambitious businesses of all sizes.
         </p>

         <div className="space-y-8">
            <div className="border-l-2 border-stripe-teal pl-6">
                <h3 className="text-3xl font-bold">500M+</h3>
                <p className="mt-2 text-white/70">API requests per day, peaking at 13,000 requests a second.</p>
            </div>
            <div className="border-l-2 border-stripe-teal pl-6">
                <h3 className="text-3xl font-bold">99.999%</h3>
                <p className="mt-2 text-white/70">historical uptime for <span className="text-stripe-teal">Stripe services</span>.</p>
            </div>
            <div className="border-l-2 border-stripe-teal pl-6">
                <h3 className="text-3xl font-bold">47+</h3>
                <p className="mt-2 text-white/70">countries with local acquiring.</p>
            </div>
            <div className="border-l-2 border-stripe-teal pl-6">
                <h3 className="text-3xl font-bold">135+</h3>
                <p className="mt-2 text-white/70">currencies and payment methods supported.</p>
            </div>
         </div>
      </div>

      {/* Desktop Layout (Original) */}
      <div className="container hidden py-24 md:block md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <TextSlideUpByWord as="h2" className="variant-h2 max-w-screen-lg text-3xl md:text-6xl">
              Let our experienced team elevate your digital goals
            </TextSlideUpByWord>
            <div className="mt-12 flex flex-wrap items-center gap-12 md:mt-24 md:gap-16">
              {(
                [
                  [250, "Five-Star Reviews"],
                  [10, "In-House Experts"],
                ] as const
              ).map(([q, d]) => (
                <motion.div
                  key={d}
                  whileInView="visible"
                  viewport={{ once: true }}
                  initial="hidden"
                  transition={{ staggerChildren: 0.1 }}
                  className="space-y-4 md:space-y-8">
                  <motion.h2
                    variants={{ visible: { translateY: 0 }, hidden: { translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="variant-h2 whitespace-nowrap text-4xl md:text-6xl">
                    <Counter
                      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                      value={q}
                      inViewOnce={true}
                    />
                  </motion.h2>
                  <motion.h4
                    variants={{ visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="variant-h4 whitespace-nowrap text-sm md:text-xl">
                    {d}
                  </motion.h4>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="max-w-full md:max-w-[35.625vw]">
            <h4 className="variant-h4 text-lg leading-relaxed md:text-xl">
              We have successfully completed over 300+ projects from a variety of industries. In our team, designers
              work alongside developers and digital strategists, we believe this is our winning recipe for creating
              digital products that make an impact.
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
