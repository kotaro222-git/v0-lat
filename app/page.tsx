import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CoverageSection } from "@/components/sections/coverage-section"
import { StrengthSection } from "@/components/sections/strength-section"
import { CTASection } from "@/components/sections/cta-section"
import { MediaSection } from "@/components/sections/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Hero />
      <MissionSection />
      <ServicesSection />
      <CoverageSection />
      <StrengthSection />
      <CTASection />
      <MediaSection />
      <Footer />
    </main>
  )
}
