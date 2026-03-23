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

  const isInServices = currentSection === "services"

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isInServices) return
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    if (Math.abs(e.deltaY) < 5) return

    const now = Date.now()

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
      // Mission → Services: scroll to service section BEFORE hiding container
      e.preventDefault()
      const viewportHeight = window.innerHeight
      window.scrollTo({ top: viewportHeight, behavior: "instant" })
      // Use rAF to ensure scroll position is applied before state change
      requestAnimationFrame(() => {
        setCurrentSection("services")
      })
    }
  }, [currentSection, isAnimating, isInServices])

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  // Handle scroll to return from services to mission
  useEffect(() => {
    const handleScroll = () => {
      if (currentSection !== "services") return
      const scrollY = window.scrollY

      // When user scrolls back to the very top, restore mission
      if (scrollY <= 2) {
        setCurrentSection("mission")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentSection])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden"
      style={{
        backgroundColor: currentSection === "hero" ? "#050e10" : "#ffffff",
        transition: isInServices
          ? "opacity 300ms ease-out, visibility 0ms linear 300ms"
          : "background-color 800ms ease-in-out, opacity 300ms ease-in",
        opacity: isInServices ? 0 : 1,
        pointerEvents: isInServices ? "none" : "auto",
        visibility: isInServices ? "hidden" : "visible",
        zIndex: isInServices ? -1 : 10,
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
