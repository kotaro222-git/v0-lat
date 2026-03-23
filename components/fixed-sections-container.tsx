"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/sections/mission-section"

type Section = "hero" | "mission"

export function FixedSectionsContainer() {
  const [currentSection, setCurrentSection] = useState<Section>("hero")
  const [isAnimating, setIsAnimating] = useState(false)
  const [showFixedContainer, setShowFixedContainer] = useState(true)
  const lastWheelTime = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((e: WheelEvent) => {
    // If fixed container is hidden, let normal scrolling happen
    if (!showFixedContainer) return
    
    // Touch device check
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    
    // Ignore micro-scrolls
    if (Math.abs(e.deltaY) < 5) return
    
    const now = Date.now()
    
    // Skip if animating
    if (isAnimating) {
      e.preventDefault()
      return
    }

    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    if (currentSection === "hero" && isScrollingDown) {
      // Hero to Mission transition - keep the special animation
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
      // Mission to Hero transition - keep the special animation
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
      // Mission to Services - just hide the fixed container and allow normal scroll
      setShowFixedContainer(false)
    }
  }, [currentSection, isAnimating, showFixedContainer])

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  // Handle scroll position to show/hide fixed container
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // If at top and fixed container is hidden, show it again (back to mission)
      if (scrollY === 0 && !showFixedContainer) {
        setShowFixedContainer(true)
        setCurrentSection("mission")
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showFixedContainer])

  // When fixed container is hidden, don't render it
  if (!showFixedContainer) {
    return null
  }

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
          transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out",
          pointerEvents: currentSection === "mission" ? "auto" : "none",
        }}
      >
        <MissionSection />
      </div>
    </div>
  )
}
