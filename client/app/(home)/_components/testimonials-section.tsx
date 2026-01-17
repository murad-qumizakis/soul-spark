"use client"

import { useRef } from "react"
import Link from "next/link"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Testimonial } from "@/lib/schemas"
import { LoaderCircle } from "lucide-react"
import { MotionValue, motion, useScroll } from "motion/react"

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  })
  return !!testimonials.length && (
    <section
      style={{
        backgroundImage:
          "radial-gradient(circle at -30% 21%,hsl(var(--primary)) 0,transparent 30%),radial-gradient(circle at 120% 80%,hsl(var(--primary)) 0,transparent 30%)",
      }}
      className="relative min-h-screen bg-foreground text-background">
      <div className="container w-full py-24 md:max-w-[84.375vw] md:py-huge">
        <Heading />
        <div ref={target} className="relative mt-8 space-y-12">
          {testimonials.map((testimonial) => (
            <TestimonialComponent key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="container relative flex h-full justify-end pb-[16rem] pt-[30rem]">
          <div className="sticky right-0 top-1/2 h-max -translate-y-1/2">
            <ProgressBar progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Heading() {
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  })
  return (
    <motion.div
      ref={target}
      style={{ ["--progress" as string]: scrollYProgress }}
      className="scale-[calc(100%_-_(var(--progress)_*_10%))] space-y-8">
      <TextSlideUpByWord as="h2" className="variant-h2">
        Client Feedback
      </TextSlideUpByWord>
      <div className="flex items-end justify-between gap-4">
        <TextSlideUpByText as="h4" className="variant-h4">
          We’re collaborators - We build tight-knit partnerships with our clients.
        </TextSlideUpByText>
        <div className="variant-h4 inline-flex items-center gap-4 text-muted">
          <LoaderCircle className="animate-spin" size={40} />
          <span>Keep scrolling</span>
        </div>
      </div>
    </motion.div>
  )
}

function TestimonialComponent({ id, author: { name, company, image }, content }: Testimonial) {
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "start start"],
  })
  return (
    <motion.div
      ref={target}
      style={{ ["--progress" as string]: scrollYProgress }}
      className="rounded-[24px] bg-transparent p-6 text-background ring-1 ring-[#fff3] md:scale-[calc(0.9_+_(var(--progress)_*_0.1))] md:p-[2vw]">
      <div className="mb-4 mt-4 md:mb-6 md:mt-6">
        <p className="line-clamp-3 text-lg font-medium leading-relaxed md:text-xl">"{content}"</p>
        <Link href="/testimonials" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">
          Read full review
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Avatar className="size-10 md:size-12">
            <AvatarImage src={image ? `${process.env.NEXT_PUBLIC_API_URL}${image}` : undefined} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h5 className="text-base font-semibold text-muted md:text-lg">{name}</h5>
        </div>
        <h4 className="text-base text-primary md:text-lg">{company}</h4>
      </div>
    </motion.div>
  )
}

function ProgressBar({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="relative h-[200px] w-2 overflow-hidden rounded-full bg-secondary">
      <motion.div
        style={{ ["--progress" as string]: progress }}
        className="h-full w-full flex-1 translate-y-[calc((var(--progress)_*_100%)_-_100%)] bg-primary"></motion.div>
    </div>
  )
}
