"use client"

import { FixedSectionsContainer } from "@/components/fixed-sections-container"
import { ServiceSection } from "@/components/sections/service-section"
import { CoverageSection } from "@/components/sections/coverage-section"
import { StrengthSection } from "@/components/sections/strength-section"
import { CTASection } from "@/components/sections/cta-section"
import { MediaSection } from "@/components/sections/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      {/* Hero and Mission sections with fade transitions - normal document flow */}
      <FixedSectionsContainer />
      
      {/* All other sections - normal document flow */}
      <ServiceSection />
      <CoverageSection />
      <StrengthSection />
      <CTASection />
      <MediaSection />
      <Footer />
    </main>
  )
}
