import { Hero } from "@/components/hero"
import { ImpactStats } from "@/components/impact-stats"
import { Mission } from "@/components/mission"
import { ImpactCategories } from "@/components/impact-categories"
import { FeaturedProjects } from "@/components/featured-projects"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <ImpactStats />
      <ImpactCategories />
      <FeaturedProjects />
      <CallToAction />
      <Footer />
    </main>
  )
}
