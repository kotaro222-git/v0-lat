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
      {/* Fixed container for Hero and Mission with fade transitions */}
      <FixedSectionsContainer />
      
      {/* Spacer + normal flow sections below fixed container */}
      <div style={{ marginTop: "100vh" }}>
        <ServiceSection />
        <CoverageSection />
        <StrengthSection />
        <CTASection />
        <MediaSection />
        <Footer />
      </div>
    </main>
  )
}
