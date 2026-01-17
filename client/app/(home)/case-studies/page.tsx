import { OurWorksSection } from "@/app/(home)/_components/our-works-section"
import { getProjects } from "@/lib/actions"

export const dynamic = "force-dynamic"



interface Project {
  id: number;
  title: string;
  slug: string;
  mainImage: string | null;
  industry?: string;
  description?: string;
}

const Page = async () => {
  const projectsRes = await getProjects()

  if (!projectsRes.success) {
    console.error(projectsRes.error)
    throw new Error(projectsRes.error)
  }

  const projects = projectsRes.data as unknown as Project[]

  return (
    <section className="bg-background pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container">
            <div className="mb-24 md:mb-32">
              <h1 className="variant-h1 mb-6 max-w-4xl">
                  Selected Works
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                  A collection of our favorite projects, ranging from brand identities to complex digital products.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, i) => (
                    <a key={project.id} href={`/case-studies/${project.slug}`} className="group block space-y-6">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                            {project.mainImage ? (
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-muted-foreground">No Image</div>
                            )}
                        </div>
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                                    {project.industry || "Digital"}
                                </span>
                                <span className="translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    →
                                </span>
                            </div>
                            <h2 className="variant-h3 text-3xl group-hover:underline decoration-1 underline-offset-4">{project.title}</h2>
                            <p className="mt-2 line-clamp-2 text-muted-foreground">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Page
