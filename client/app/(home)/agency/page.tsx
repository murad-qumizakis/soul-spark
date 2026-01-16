import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"

export default function AgencyPage() {
  return (
    <section className="bg-background pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="container">
        <TextSlideUpByWord as="h1" className="variant-h1 mb-8 max-w-4xl">
          We are SoulSpark Media.
        </TextSlideUpByWord>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg text-muted-foreground md:text-xl">
            <p>
              We are a team of passionate digital craftsmen and strategists, dedicated to defining the future of digital
              experiences. Founded in London, we have grown into a global agency that partners with ambitious brands to
              create impactful digital products.
            </p>
            <p>
              Our philosophy is simple: we believe in the power of design to transform businesses. By combining
              strategy, design, and technology, we build solutions that not only look beautiful but drive real business
              results.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
             {/* Placeholder for agency image */}
             <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                Agency Image Placeholder
             </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
             <h2 className="variant-h2 mb-12">Our Core Values</h2>
             <div className="grid gap-8 md:grid-cols-3">
                {[
                    { title: "Innovation", desc: "We push boundaries and explore new technologies to stay ahead." },
                    { title: "Quality", desc: "We don't cut corners. Every pixel and line of code matters." },
                    { title: "Collaboration", desc: "We work closely with our partners to ensure their vision comes to life." }
                ].map((item) => (
                    <div key={item.title} className="rounded-2xl border bg-card p-8">
                        <h3 className="variant-h3 mb-4 text-2xl">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  )
}
