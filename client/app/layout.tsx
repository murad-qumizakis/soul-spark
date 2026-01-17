import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { Preloader } from "@/components/preloader"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aesthetic Webworks",
  description: "A Web Design and Development agency landing page",
  metadataBase: new URL("https://aesthetic-webworks.vercel.app"),
  openGraph: {
    title: "Aesthetic Webworks",
    description: "A Web Design and Development agency landing page",
    url: "https://aesthetic-webworks.vercel.app",
    siteName: "Aesthetic Webworks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Webworks",
    description: "A Web Design and Development agency landing page",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
