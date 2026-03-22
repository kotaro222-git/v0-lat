"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"

type Section = "hero" | "mission"

export function FixedSectionsContainer() {
  const [currentSection, setCurrentSection] = useState<Section>("hero")
  const [isAnimating, setIsAnimating] = useState(false)
  const lastWheelTime = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((e: WheelEvent) => {
    // Touch device check
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    
    // Ignore micro-scrolls
    if (Math.abs(e.deltaY) < 5) return
    
    // Debounce - 800ms cooldown
    const now = Date.now()
    if (now - lastWheelTime.current < 800) {
      e.preventDefault()
      return
    }
    
    // Skip if animating
    if (isAnimating) {
      e.preventDefault()
      return
    }

    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    if (currentSection === "hero" && isScrollingDown) {
      e.preventDefault()
      lastWheelTime.current = now
      setIsAnimating(true)
      setCurrentSection("mission")
      setTimeout(() => setIsAnimating(false), 800)
    } else if (currentSection === "mission" && isScrollingUp) {
      e.preventDefault()
      lastWheelTime.current = now
      setIsAnimating(true)
      setCurrentSection("hero")
      setTimeout(() => setIsAnimating(false), 800)
    } else if (currentSection === "mission" && isScrollingDown) {
      // Scroll to services (let it pass through)
      e.preventDefault()
      lastWheelTime.current = now
      // Scroll the page to services section
      const servicesSection = document.getElementById("services")
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [currentSection, isAnimating])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Also listen on window for better capture
    window.addEventListener("wheel", handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleWheel])

  // Handle scroll back from services to mission
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // If scrolled back to top, ensure we're showing the fixed container
      if (scrollY < 10 && currentSection !== "hero") {
        // User scrolled back to very top
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentSection])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden z-10"
      style={{
        backgroundColor: currentSection === "hero" ? "#050e10" : "#ffffff",
        transition: "background-color 800ms ease-in-out",
      }}
    >
      {/* Hero Section */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: currentSection === "hero" ? 1 : 0,
          transform: currentSection === "hero" ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 800ms ease-in-out, transform 800ms ease-in-out",
          pointerEvents: currentSection === "hero" ? "auto" : "none",
        }}
      >
        <Hero />
      </div>

      {/* Mission Section */}
      <div
        className="absolute inset-0 w-full h-full overflow-auto"
        style={{
          opacity: currentSection === "mission" ? 1 : 0,
          transform: currentSection === "mission" ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 800ms ease-in-out, transform 800ms ease-in-out",
          pointerEvents: currentSection === "mission" ? "auto" : "none",
        }}
      >
        <MissionSection />
      </div>
    </div>
  )
}
