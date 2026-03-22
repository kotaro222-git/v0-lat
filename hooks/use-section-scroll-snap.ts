"use client"

import { useEffect, useRef, useCallback } from "react"

// Simple scroll snap hook for Hero -> Mission -> Services
// Uses smooth scrolling with debounce
export function useSectionScrollSnap() {
  const isScrollingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    console.log("[v0] Scrolling to section:", sectionId, "element:", element)
    if (element) {
      isScrollingRef.current = true
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      
      // Reset after scroll completes + debounce time
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 800)
    }
  }, [])

  const getCurrentSection = useCallback((): string | null => {
    const hero = document.getElementById("hero")
    const mission = document.getElementById("mission")
    const services = document.getElementById("services")

    if (!hero || !mission || !services) return null

    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight

    const heroBottom = hero.offsetTop + hero.offsetHeight
    const missionBottom = mission.offsetTop + mission.offsetHeight

    // Determine which section is currently "active"
    // Use center of viewport as reference point
    const viewportCenter = scrollY + viewportHeight / 2

    if (viewportCenter < heroBottom) {
      return "hero"
    } else if (viewportCenter < missionBottom) {
      return "mission"
    } else {
      return "services"
    }
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    // Skip if already scrolling (debounce)
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    // Ignore micro-scrolls (trackpad sensitivity)
    if (Math.abs(e.deltaY) < 10) return

    const currentSection = getCurrentSection()
    console.log("[v0] Current section:", currentSection, "deltaY:", e.deltaY)
    if (!currentSection) return

    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    // Handle snap scrolling only for hero and mission sections
    if (currentSection === "hero" && isScrollingDown) {
      e.preventDefault()
      scrollToSection("mission")
    } else if (currentSection === "mission" && isScrollingDown) {
      e.preventDefault()
      scrollToSection("services")
    } else if (currentSection === "mission" && isScrollingUp) {
      e.preventDefault()
      scrollToSection("hero")
    } else if (currentSection === "services" && isScrollingUp) {
      // Check if we're at the top of services section
      const services = document.getElementById("services")
      if (services) {
        const servicesTop = services.getBoundingClientRect().top
        // If services section top is near viewport top, snap back to mission
        if (servicesTop >= -20 && servicesTop <= 100) {
          e.preventDefault()
          scrollToSection("mission")
        }
        // Otherwise, allow normal scroll within services
      }
    }
    // Services section and beyond: normal scrolling (no preventDefault)
  }, [getCurrentSection, scrollToSection])

  useEffect(() => {
    // Check if touch device - disable snap on touch devices for better UX
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleWheel])
}
