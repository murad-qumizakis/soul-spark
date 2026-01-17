"use client"

import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import { allLogos } from "@/data/logos"

export function PartnersSection() {
  return (
    <section>
      <div className="container py-24 md:py-24">
        <TextSlideUpByWord as="h2" className="variant-h2 max-w-screen-xl text-3xl md:text-6xl">
          From ambitious startups to global companies, we partner with great businesses and industry leaders.
        </TextSlideUpByWord>

        <LogoCarousel columnCount={5} logos={allLogos} className="mt-16 justify-between md:mt-24" />
      </div>
    </section>
  )
}
