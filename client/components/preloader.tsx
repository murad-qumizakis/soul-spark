"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds simple text display

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              SOULSPARK MEDIA
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
