"use client"

import * as React from "react"
import type { ForwardedRef } from "react"
import { createContext, forwardRef, useContext, useState } from "react"
import Link from "next/link"
import { AnimatedLink } from "@/components/ui/animated-button"
import { cn } from "@/lib/utils"
import * as RadixDialog from "@radix-ui/react-dialog"
import { BlockSlideUp } from "./higher-order-block-animate-components"
import { TextFadeInByText, TextSlideUpByText } from "./higher-order-text-animate-components"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const DialogOpenContext = createContext<boolean>(false)

export function DialogRoot({ children, ...props }: RadixDialog.DialogProps) {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <DialogOpenContext.Provider value={isOpen}>
      <RadixDialog.Root onOpenChange={setOpen} {...props}>
        {children}
      </RadixDialog.Root>
    </DialogOpenContext.Provider>
  )
}

export const DialogTrigger = RadixDialog.Trigger

const startDelay: number = 0.5
const endDelay: number = 0.3
// transition: {when: "beforeChildren"} doesnt work maybe due to Radix components in between motion components
const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.5, delay: endDelay } },
  open: { opacity: 1, transition: { duration: startDelay } },
}

const dialogVariants = {
  initial: { opacity: 0, scaleY: 2, y: "-100%" },
  open: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      default: { delay: startDelay, duration: 0.3, staggerChildren: 0.1 },
      scaleY: { delay: 0.3, duration: 0.8 },
    },
  },
  closed: { opacity: 0, transition: { duration: endDelay } },
}

let dialogContainer: HTMLDivElement

function getEnsureDialogContainer() {
  if (!dialogContainer) {
    dialogContainer = document.createElement("div")
    dialogContainer.className = "fixed inset-0 z-[999] grid place-items-center pointer-events-none"
    document.body.append(dialogContainer)
  }

  return dialogContainer
}

function DialogContentCore(
  { children, className, title, ...props }: RadixDialog.DialogContentProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const isOpen = useContext(DialogOpenContext)

  return (
    <AnimatePresence>
      {isOpen && (
        <RadixDialog.Portal forceMount container={getEnsureDialogContainer()}>
          <RadixDialog.Overlay asChild>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <RadixDialog.Content forceMount ref={forwardedRef} asChild {...props}>
                <motion.div
                  variants={dialogVariants}
                  initial="initial"
                  animate="open"
                  exit="closed"
                  className={cn(
                    "relative mx-auto flex w-[95vw] max-w-[940px] origin-bottom items-center justify-center",
                    className
                  )}>
                  <RadixDialog.Title className="hidden">{title}</RadixDialog.Title>
                  {/* {children} */}
                  <div className="h-[90dvh] w-full overflow-y-auto rounded-3xl bg-foreground text-background">
                    <div className="sticky top-0 z-10 flex items-center justify-between bg-inherit p-6 md:p-12">
                      <TextFadeInByText
                        as="h5"
                        className="font-base text-lg leading-snug text-muted-foreground md:text-xl">
                        Navigation
                      </TextFadeInByText>
                      <RadixDialog.Close className="group grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/25">
                        <X className="transition-transform group-hover:scale-110" />
                      </RadixDialog.Close>
                    </div>

                    <div className="p-6 md:p-12 pt-0">
                      {/* Nav menu */}
                      <div className="mb-12 space-y-4 md:space-y-6">
                        {[
                          { title: "Case Studies", href: "/case-studies" },
                          { title: "Services", href: "/services" },
                          { title: "Testimonials", href: "/testimonials" },
                          { title: "Contact Us", href: "/contact" },
                          { title: "News", href: "/news" },
                        ].map(({ title, href }, i) => (
                          <motion.div
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.2 }}
                            viewport={{ once: false }}
                            style={{ opacity: 0 }}
                            key={title}
                            className="flex items-center gap-4">
                            <RadixDialog.Close asChild>
                              <AnimatedLink
                                href={href}
                                className="rounded-none border-0 bg-transparent p-0 text-3xl font-semibold outline-none ring-0 hover:bg-transparent hover:ring-0 md:text-5xl lg:text-6xl">
                                {title}
                              </AnimatedLink>
                            </RadixDialog.Close>

                            {title === "Case Studies" && (
                              <div className="grid size-12 place-items-center rounded-full border border-muted text-sm md:size-[72px] md:text-xl">
                                <span>13</span>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/10 py-8 md:flex-row md:items-center">
                        <div className="font-base flex flex-col gap-4 text-base md:flex-row md:gap-8">
                          <p className="text-muted-foreground">Follow Us</p>
                          <div className="flex flex-wrap gap-6">
                            {[
                                { href: "/", label: "Instagram" },
                                { href: "/", label: "LinkedIn" },
                                { href: "/", label: "Twitter" },
                            ].map(({ href, label }, i) => (
                                <div key={label} className="overflow-hidden">
                                <motion.div
                                    whileInView={{ translateY: "0%" }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.2 }}
                                    viewport={{ once: false }}
                                    style={{ translateY: "100%" }}>
                                    <Link
                                    href={href}
                                    className="relative hover:text-white/80 hover:underline">
                                    {label}
                                    </Link>
                                </motion.div>
                                </div>
                            ))}
                          </div>
                        </div>
                        <BlockSlideUp transition={{ delay: 0.4, duration: 0.3 }}>
                          <AnimatedLink href="/admin" className="text-sm md:text-base">Admin Panel</AnimatedLink>
                        </BlockSlideUp>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RadixDialog.Content>
            </motion.div>
          </RadixDialog.Overlay>
        </RadixDialog.Portal>
      )}
    </AnimatePresence>
  )
}

export const DialogContent = forwardRef(DialogContentCore)
