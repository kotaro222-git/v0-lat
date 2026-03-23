"use client"

import { useEffect, useRef, useState } from "react"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"

export function FixedSectionsContainer() {
  const [visibleSection, setVisibleSection] = useState<"hero" | "mission">("hero")

  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to detect which snap section is visible
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) {
            setVisibleSection("hero")
          } else if (entry.target === missionRef.current) {
            setVisibleSection("mission")
          }
        }
      })
    }, options)

    if (heroRef.current) observer.observe(heroRef.current)
    if (missionRef.current) observer.observe(missionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Panel */}
      <section
        ref={heroRef}
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#050e10",
        }}
      >
        <div
          style={{
            opacity: visibleSection === "hero" ? 1 : 0,
            transform: visibleSection === "hero" ? "translateY(0)" : "translateY(-30px)",
            transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out",
            width: "100%",
            height: "100%",
          }}
        >
          <Hero />
        </div>
      </section>

      {/* Mission Panel */}
      <section
        ref={missionRef}
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            opacity: visibleSection === "mission" ? 1 : 0,
            transform: visibleSection === "mission" ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 600ms ease-in-out, transform 600ms ease-in-out",
            width: "100%",
            height: "100%",
          }}
        >
          <MissionSection />
        </div>
      </section>
    </>
  )
}
