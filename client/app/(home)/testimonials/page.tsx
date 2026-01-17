
import { getTestimonials } from "@/lib/actions"
import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const dynamic = "force-dynamic"

export default async function TestimonialsPage() {
  const testimonialsRes = await getTestimonials()

  if (!testimonialsRes.success) {
    throw new Error(testimonialsRes.error)
  }

  const testimonials = testimonialsRes.data

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container">
        <div className="mb-24 max-w-4xl">
           <TextSlideUpByWord as="h1" className="variant-h1 mb-8">
            Client Feedback
          </TextSlideUpByWord>
          <p className="text-xl text-muted-foreground md:text-2xl">
            We build tight-knit partnerships with our clients. Here is what they have to say about working with us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col justify-between rounded-3xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-8">
                 <p className="text-lg leading-relaxed text-card-foreground">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                 <Avatar className="size-12">
                    <AvatarImage src={testimonial.author.image ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial.author.image}` : undefined} />
                    <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-semibold text-foreground">{testimonial.author.name}</h5>
                    <p className="text-sm text-primary">{testimonial.author.company}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
