"use client"

import { useRef } from "react"
import Link from "next/link"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Testimonial } from "@/lib/schemas"
import { LoaderCircle } from "lucide-react"
import { MotionValue, motion, useScroll } from "motion/react"

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return !!testimonials.length && (
    <section className="relative bg-foreground py-24 text-background md:py-32 overflow-hidden">
      <div className="container mb-12 md:mb-16">
        <Heading />
      </div>
      
      {/* Carousel Container */}
      <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 pl-6 pr-6 md:gap-8 md:pl-[max(2rem,calc((100vw-1400px)/2))] scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-[85vw] flex-none snap-center md:w-[500px]">
            <TestimonialComponent {...testimonial} />
          </div>
        ))}
        {/* Spacer to allow the last item to snap reasonably if needed, or just end padding */}
        <div className="w-1 shrink-0"></div>
      </div>
    </section>
  )
}

function Heading() {
  return (
    <div className="space-y-6">
      <TextSlideUpByWord as="h2" className="variant-h2">
        Client Feedback
      </TextSlideUpByWord>
      <div className="flex items-end justify-between gap-4">
        <TextSlideUpByText as="h4" className="variant-h4 max-w-xl text-muted-foreground">
          We’re collaborators - We build tight-knit partnerships with our clients.
        </TextSlideUpByText>
        <div className="hidden variant-h4 md:inline-flex items-center gap-4 text-muted">
           {/* Visual cue for scrolling could go here, but swipe is intuitive */}
        </div>
      </div>
    </div>
  )
}

function TestimonialComponent({ id, author: { name, company, image }, content }: Testimonial) {
  return (
    <div className="h-full flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 md:p-10">
      <div className="mb-6">
        <p className="line-clamp-4 text-lg font-medium leading-relaxed md:text-xl">"{content}"</p>
        <Link href="/testimonials" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
          Read full review
        </Link>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Avatar className="size-12 md:size-14">
            <AvatarImage src={image ? `${process.env.NEXT_PUBLIC_API_URL}${image}` : undefined} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
           <h5 className="text-base font-semibold text-white md:text-lg">{name}</h5>
           <h4 className="text-sm text-primary md:text-base">{company}</h4>
        </div>
      </div>
    </div>
  )
}
