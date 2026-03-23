"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"

type Section = "hero" | "mission" | "services"

export function FixedSectionsContainer() {
  const [currentSection, setCurrentSection] = useState<Section>("hero")
  const [isAnimating, setIsAnimating] = useState(false)
  const lastWheelTime = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((e: WheelEvent) => {
    // If in services mode, let normal scrolling happen
    if (currentSection === "services") return
    
    // Touch device check
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    
    // Ignore micro-scrolls
    if (Math.abs(e.deltaY) < 5) return
    
    // Debounce - 800ms cooldown for hero/mission transitions only
    const now = Date.now()
    
    // Skip if animating
    if (isAnimating) {
      e.preventDefault()
      return
    }

    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    if (currentSection === "hero" && isScrollingDown) {
      if (now - lastWheelTime.current < 800) {
        e.preventDefault()
        return
      }
      e.preventDefault()
      lastWheelTime.current = now
      setIsAnimating(true)
      setCurrentSection("mission")
      setTimeout(() => setIsAnimating(false), 800)
    } else if (currentSection === "mission" && isScrollingUp) {
      if (now - lastWheelTime.current < 800) {
        e.preventDefault()
        return
      }
      e.preventDefault()
      lastWheelTime.current = now
      setIsAnimating(true)
      setCurrentSection("hero")
      setTimeout(() => setIsAnimating(false), 800)
    } else if (currentSection === "mission" && isScrollingDown) {
      // Switch to services mode immediately - no debounce needed
      setCurrentSection("services")
      // Don't prevent default - let the scroll continue naturally
    }
  }, [currentSection, isAnimating])

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  // Handle scroll back from services to mission
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // If scrolled back to top from services, show mission
      if (scrollY < 10 && currentSection === "services") {
        setCurrentSection("mission")
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentSection])

  // Determine visibility - hide when in services mode
  const isHidden = currentSection === "services"

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden z-10"
      style={{
        backgroundColor: currentSection === "hero" ? "#050e10" : "#ffffff",
        transition: "background-color 800ms ease-in-out",
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
        visibility: isHidden ? "hidden" : "visible",
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
          transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out",
          pointerEvents: currentSection === "mission" ? "auto" : "none",
        }}
      >
        <MissionSection />
      </div>
    </div>
  )
}
