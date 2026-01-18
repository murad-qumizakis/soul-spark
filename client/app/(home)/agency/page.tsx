import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"

export default function AgencyPage() {
  return (
    <section className="bg-background pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="container">
        <TextSlideUpByWord as="h1" className="variant-h1 mb-8 max-w-4xl">
          We accelerate growth for ambitious brands.
        </TextSlideUpByWord>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg text-muted-foreground md:text-xl">
            <p>
              We aren't just a digital agency; we are your growth partners. Born in London and operating globally,
              we specialize in building high-performance digital ecosystems that convert visitors into loyal customers.
            </p>
            <p>
              Our methodology is rooted in data and executed with precision. We combine aesthetic excellence with
              rigorous analytics to ship products that scale your revenue, not just your ego.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted relative">
             {/* Placeholder for agency image */}
             <div className="flex h-full w-full items-center justify-center text-muted-foreground bg-neutral-900 text-neutral-500">
                Agency Image Placeholder
             </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
             <h2 className="variant-h2 mb-12">Our Core Principles</h2>
             <div className="grid gap-8 md:grid-cols-3">
                {[
                    { title: "Data-Driven Results", desc: "We don't guess. We measure, analyze, and optimize for maximum ROI." },
                    { title: "Rapid Execution", desc: "Speed wins. We prototype, test, and ship faster than the competition." },
                    { title: "Transparent Partnership", desc: "No jargon, no hidden fees. Just clear communication and shared goals." }
                ].map((item) => (
                    <div key={item.title} className="rounded-2xl border bg-card p-8 hover:border-foreground/50 transition-colors">
                        <h3 className="variant-h3 mb-4 text-2xl">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  )
}
