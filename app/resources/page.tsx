import { Navigation } from "@/components/navigation"
import { ResourcesHero } from "@/components/resources-hero"
import { BlogSection } from "@/components/blog-section"
import { WhitepapersSection } from "@/components/whitepapers-section"
import { SecurityAlertsSection } from "@/components/security-alerts-section"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ResourcesHero />
      <BlogSection />
      <WhitepapersSection />
      <SecurityAlertsSection />
      <Footer />
    </main>
  )
}
