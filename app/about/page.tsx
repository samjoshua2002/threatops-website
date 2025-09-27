import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { CompanyStats } from "@/components/company-stats"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyValues />
      <TeamSection />
      <CompanyStats />
      <CTASection />
      <Footer />
    </main>
  )
}
