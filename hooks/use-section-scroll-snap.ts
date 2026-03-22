"use client"

import { useEffect, useRef, useCallback, useState } from "react"

export type SectionIndex = 0 | 1 | 2 // 0: Hero, 1: Mission, 2: Services (normal scroll)

interface UseSectionTransitionReturn {
  currentSection: SectionIndex
  isTransitioning: boolean
}

export function useSectionTransition(): UseSectionTransitionReturn {
  const [currentSection, setCurrentSection] = useState<SectionIndex>(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const cooldownRef = useRef(false)
  const isTouchDeviceRef = useRef(false)

  // Detect touch device on mount
  useEffect(() => {
    isTouchDeviceRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0
  }, [])

  const transitionTo = useCallback((targetSection: SectionIndex) => {
    if (isTransitioning || cooldownRef.current) return

    setIsTransitioning(true)
    setCurrentSection(targetSection)

    // If transitioning to services (section 2), scroll to services after animation
    if (targetSection === 2) {
      setTimeout(() => {
        const servicesEl = document.getElementById("services")
        if (servicesEl) {
          servicesEl.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setIsTransitioning(false)
        // Set cooldown
        cooldownRef.current = true
        setTimeout(() => {
          cooldownRef.current = false
        }, 1000)
      }, 800) // After fade out animation
    } else {
      // For hero/mission transitions, just wait for animation to complete
      setTimeout(() => {
        setIsTransitioning(false)
        // Set cooldown
        cooldownRef.current = true
        setTimeout(() => {
          cooldownRef.current = false
        }, 1000)
      }, 800)
    }
  }, [isTransitioning])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Skip on touch devices
      if (isTouchDeviceRef.current) return

      // Ignore small deltaY (trackpad micro-scrolls)
      if (Math.abs(e.deltaY) < 5) return

      // Skip if transitioning or in cooldown
      if (isTransitioning || cooldownRef.current) return

      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0

      // Get current scroll position
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // If we're in normal scroll area (services and beyond)
      if (currentSection === 2) {
        // Check if we're at the very top of services and scrolling up
        const servicesEl = document.getElementById("services")
        if (servicesEl && isScrollingUp) {
          const servicesTop = servicesEl.getBoundingClientRect().top
          // If services section is at or near the top of viewport
          if (servicesTop >= -10 && servicesTop <= 50) {
            e.preventDefault()
            transitionTo(1) // Go back to mission
            // Scroll to top for the fixed container
            window.scrollTo({ top: 0, behavior: "instant" })
          }
        }
        return // Normal scrolling otherwise
      }

      // For sections 0 (hero) and 1 (mission), prevent default scroll
      e.preventDefault()

      if (currentSection === 0 && isScrollingDown) {
        transitionTo(1) // Hero -> Mission
      } else if (currentSection === 1 && isScrollingDown) {
        transitionTo(2) // Mission -> Services
      } else if (currentSection === 1 && isScrollingUp) {
        transitionTo(0) // Mission -> Hero
      }
    },
    [currentSection, isTransitioning, transitionTo]
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleWheel])

  return { currentSection, isTransitioning }
}
