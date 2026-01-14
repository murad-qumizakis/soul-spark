import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/actions"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project.success) {
    if (project.error === "Project not found") {
      notFound()
    }
    throw new Error(project.error)
  }

  const { data } = project

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{data.title}</h1>
              <div className="flex flex-wrap gap-2">
                {data.categories?.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
              {data.image ? (
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <h2 className="text-2xl font-bold mt-8">The Challenge</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>

              <h2 className="text-2xl font-bold mt-8">The Solution</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Client</dt>
                  <dd className="text-sm">Confidential</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Date</dt>
                  <dd className="text-sm">2024</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Services</dt>
                  <dd className="text-sm">{data.categories?.join(", ")}</dd>
                </div>
              </dl>
              <div className="mt-6 pt-6 border-t">
                <Button className="w-full" size="lg">
                  Visit Live Site <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
