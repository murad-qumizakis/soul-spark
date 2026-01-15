"use client"

import { useRef } from "react"
import Image from "next/image"
import { HorizontalScrollTrigger } from "@/components/horizontal-scroll-trigger"
import { AnimatedLink } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Project } from "@/lib/schemas"
import { motion, useInView } from "motion/react"

export const OurWorksSection = ({ projects }: { projects: Project[] }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  if (!projects.length) return null

  return (
    <>
      {/* Desktop View (Horizontal Scroll) */}
      <div className="hidden md:block">
        <HorizontalScrollTrigger>
          <div className="flex h-dvh items-center py-[7.5vw]">
            <div ref={ref} className="flex flex-nowrap space-x-[2.5vw] px-[5.625rem]">
              <Heading />
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
              <Ending />
            </div>
          </div>
        </HorizontalScrollTrigger>
      </div>

      {/* Mobile View (Vertical List) */}
      <div className="block md:hidden py-24 px-6 space-y-16">
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
             <h2 className="text-3xl font-bold tracking-tight text-foreground/90">Work</h2>
             <div className="grid size-10 place-items-center rounded-full border border-border text-xs font-medium text-muted-foreground">
               13
             </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
             A selection of our crafted work, built from scratch by our talented in-house team.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} isInView={true} isMobile />
          ))}
        </div>

        <div className="pt-12 flex flex-col items-center gap-6">
           <h2 className="text-2xl font-bold tracking-tight">View More</h2>
           <AnimatedLink href="/case-studies" variant="outline" className="px-8 h-12">Case Studies</AnimatedLink>
        </div>
      </div>
    </>
  )
}

const ProjectCard = ({ project, index, isInView, isMobile = false }: { project: Project; index: number; isInView: boolean, isMobile?: boolean }) => (
  <motion.a
    href={`/case-studies/${project.slug}`}
    className={isMobile ? "block w-full" : ""}
    initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 20 : 0 }}
    animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 20 : 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}>
    <Card className={`relative overflow-hidden bg-transparent text-primary-foreground ring-0 ring-primary transition-shadow duration-300 hover:ring-4 ${isMobile ? "aspect-[4/3] w-full" : "aspect-[1.25] min-w-[43.125vw]"}`}>
      <Image
        src={
          project.image
            ? `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
            : "/project-placeholder-image.jpg"
        }
        alt={project.title}
        fill
        className="inset-0 -z-10 object-cover"
        priority={index === 0}
      />
      <div className="flex size-full flex-col gap-4 p-6">
        <div className="self-end">{project.isLatest && <Badge>Latest</Badge>}</div>
        <h2 className={`mt-auto font-bold ${isMobile ? "text-2xl" : "variant-h2"}`}>{project.title}</h2>
        <div className="flex flex-wrap gap-2">
          {project.categories?.map((category) => (
            <Badge key={category} variant="outline" className="text-white border-white/40">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  </motion.a>
)

const Heading = () => {
  return (
    <div className="flex min-w-[32.5625vw] flex-col">
      <div className="flex items-center gap-4">
        <h2 className="variant-h2">Work</h2>
        <div className="grid aspect-square size-[70px] place-items-center rounded-full border border-muted">
          <h5 className="variant-h5">13</h5>
        </div>
      </div>
      <h4 className="variant-h4 mt-12 max-w-[20vw]">
        A selection of our crafted work, built from scratch by our talented in-house team.
      </h4>
      <div className="mt-auto">
        <AnimatedLink href="/case-studies" variant="outline">
          Case Studies
        </AnimatedLink>
      </div>
    </div>
  )
}

const Ending = () => {
  return (
    <div className="flex aspect-[1.25] min-w-[32.5625vw] flex-col items-center justify-center gap-5">
      <h2 className="variant-h2">View More</h2>
      <AnimatedLink href="/case-studies" variant="outline">
        Case Studies
      </AnimatedLink>
    </div>
  )
}
