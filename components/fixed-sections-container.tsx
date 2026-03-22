"use client"

import { useSectionTransition, type SectionIndex } from "@/hooks/use-section-scroll-snap"
import { HeroContent } from "./hero-content"
import { MissionContent } from "./mission-content"

export function FixedSectionsContainer() {
  const { currentSection, isTransitioning } = useSectionTransition()

  return (
    <>
      {/* Fixed container for Hero and Mission */}
      <div 
        className="fixed inset-0 z-10 overflow-hidden transition-colors duration-[800ms] ease-out"
        style={{
          backgroundColor: currentSection === 0 ? "#050e10" : "#ffffff",
          // Hide when we've transitioned to services
          opacity: currentSection === 2 ? 0 : 1,
          pointerEvents: currentSection === 2 ? "none" : "auto",
        }}
      >
        {/* Hero Content */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-out"
          style={{
            opacity: currentSection === 0 ? 1 : 0,
            transform: currentSection === 0 ? "translateY(0)" : "translateY(-40px)",
            pointerEvents: currentSection === 0 ? "auto" : "none",
          }}
        >
          <HeroContent />
        </div>

        {/* Mission Content */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-out"
          style={{
            opacity: currentSection === 1 ? 1 : 0,
            transform: currentSection === 1 
              ? "translateY(0)" 
              : currentSection === 0 
                ? "translateY(40px)" 
                : "translateY(-40px)",
            transitionDelay: currentSection === 1 ? "200ms" : "0ms",
            pointerEvents: currentSection === 1 ? "auto" : "none",
          }}
        >
          <MissionContent />
        </div>
      </div>

      {/* Spacer to push services down by 100vh */}
      <div className="h-screen" aria-hidden="true" />
    </>
  )
}
