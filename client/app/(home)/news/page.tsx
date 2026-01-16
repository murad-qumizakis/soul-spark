import { TextSlideUpByWord } from "@/components/higher-order-text-animate-components"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "SoulSpark Wins Creative Agency of the Year",
      date: "October 24, 2024",
      category: "Awards",
      excerpt: "We are thrilled to announce that we have been recognized for our work in digital innovation...",
    },
    {
      id: 2,
      title: "The Future of Web Design in 2025",
      date: "September 15, 2024",
      category: "Insights",
      excerpt: "As technology evolves, so do user expectations. Here are the key trends watching out for...",
    },
    {
      id: 3,
      title: "Launching Our New E-Commerce Framework",
      date: "August 02, 2024",
      category: "Product",
      excerpt: "Speed and conversion are everything. Our new framework helps brands scale faster than ever...",
    },
  ]

  return (
    <section className="bg-background pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="container">
        <TextSlideUpByWord as="h1" className="variant-h1 mb-16 max-w-4xl">
          Latest News & Insights.
        </TextSlideUpByWord>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link key={item.id} href="#" className="group">
              <Card className="h-full border-muted/20 bg-card transition-colors hover:border-primary/50">
                <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                        <Badge variant="secondary">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  <CardTitle className="variant-h3 text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
