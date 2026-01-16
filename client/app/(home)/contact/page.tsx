import { ContactSection } from "@/app/(home)/_components/contact-section"
import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
        <div className="container mb-[-100px] md:mb-[-150px]">
             <TextSlideUpByWord as="h1" className="variant-h1">
                Let's Start a Conversation.
            </TextSlideUpByWord>
        </div>
      <ContactSection />
    </div>
  )
}
