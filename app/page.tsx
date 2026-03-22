"use client"

import { FixedSectionsContainer } from "@/components/fixed-sections-container"
import { ServicesSection } from "@/components/sections/services-section"
import { CoverageSection } from "@/components/sections/coverage-section"
import { StrengthSection } from "@/components/sections/strength-section"
import { CTASection } from "@/components/sections/cta-section"
import { MediaSection } from "@/components/sections/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      {/* Fixed container with Hero and Mission (with 100vh spacer) */}
      <FixedSectionsContainer />
      
      {/* Normal scroll sections starting from Services */}
      <ServicesSection />
      <CoverageSection />
      <StrengthSection />
      <CTASection />
      <MediaSection />
      <Footer />
    </main>
  )
}
