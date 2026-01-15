import Link from "next/link"
import { AnimatedButton as Button } from "./ui/animated-button"
import { Card } from "./ui/card"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <section>
      <div className="container py-24 md:py-huge">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="space-y-8">
            <h3 className="variant-h3 w-full text-3xl leading-tight md:max-w-[47.917vw] md:text-[2.778vw]">
              We love crafting unforgettable digital experiences, brands and websites with people like you.
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">Get in touch</p>
              <a className="variant-h4 block font-semibold text-xl md:text-2xl" href="tel:+447497877777">
                +44 7497 877777
              </a>
              <a className="variant-h4 block font-semibold text-xl md:text-2xl" href="mailto:sample@gmail.com">
                sample@gmail.com
              </a>
              <p className="variant-h4 font-semibold text-xl md:text-2xl">123 Fake Street, London, UK</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 md:w-[40%] md:min-w-[400px] md:max-w-[27.938vw]">
            <Card className="flex items-center gap-6 bg-foreground p-6 text-background md:p-8">
              <h5 className="variant-h5 me-auto text-xl">Follow Us</h5>
              <Link
                href="#"
                target="_blank"
                className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                <Twitter size={24} />
              </Link>
            </Card>
            <Card className="flex flex-col items-center gap-4 p-8 text-center">
              <h3 className="variant-h3 text-2xl md:text-3xl">Let's get started</h3>
              <p className="text-muted-foreground">We’d love to hear about your project.</p>
              <Button className="mt-6 w-full h-12 text-lg" size="sm">
                Get in touch
              </Button>
            </Card>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 text-sm text-muted-foreground md:mt-12 md:flex-row md:items-center md:gap-8 md:text-base">
          <Link className="variant-p me-auto block md:pt-8 text-muted" href="#">
            © 2024 All rights reserved
          </Link>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <Link className="variant-p block text-muted" href="#">
              Privacy Policy
            </Link>
            <Link className="variant-p block text-muted" href="#">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
