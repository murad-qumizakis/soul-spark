import { OurWorksSection } from "@/app/(home)/_components/our-works-section"
import { getProjects } from "@/lib/actions"

export const dynamic = "force-dynamic"

const Page = async () => {
  const projectsRes = await getProjects()

  if (!projectsRes.success) {
    console.error(projectsRes.error)
    throw new Error(projectsRes.error)
  }
  return (
    <>
      <OurWorksSection projects={projectsRes.data} />
    </>
  )
}

export default Page
