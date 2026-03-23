"use client"

import { useState, useEffect, useRef } from "react"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"

export function FixedSectionsContainer() {
  const [heroVisible, setHeroVisible] = useState(true)
  const [missionInView, setMissionInView] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // IntersectionObserver for Mission section
    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When mission starts entering the viewport
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setMissionInView(true)
            setHeroVisible(false)
          }
        })
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3],
        rootMargin: "-10% 0px -10% 0px"
      }
    )

    // IntersectionObserver for Hero section (to restore when scrolling back up)
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero is mostly visible (scrolled back to top)
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            setHeroVisible(true)
            setMissionInView(false)
          }
        })
      },
      { 
        threshold: [0.5, 0.7, 0.9, 1.0]
      }
    )

    if (missionRef.current) {
      missionObserver.observe(missionRef.current)
    }
    if (heroRef.current) {
      heroObserver.observe(heroRef.current)
    }

    return () => {
      missionObserver.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Hero Section - Normal document flow */}
      <div 
        ref={heroRef}
        className="relative w-full min-h-screen"
        style={{
          backgroundColor: "#050e10",
        }}
      >
        <div
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(-30px)",
            transition: "opacity 800ms ease-in-out, transform 800ms ease-in-out",
          }}
        >
          <Hero />
        </div>
      </div>

      {/* Mission Section - Normal document flow */}
      <div 
        ref={missionRef}
        className="relative w-full"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            opacity: missionInView ? 1 : 0,
            transform: missionInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 600ms ease-in-out, transform 600ms ease-in-out",
          }}
        >
          <MissionSection />
        </div>
      </div>
    </>
  )
}
