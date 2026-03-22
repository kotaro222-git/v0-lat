"use client"

import { useEffect, useRef, useCallback } from "react"

// Hook to handle scroll back from Services to Mission
export function useServicesScrollSnap(onScrollBackToFixed: () => void) {
  const lastWheelTime = useRef(0)
  const isScrollingRef = useRef(false)

  const handleWheel = useCallback((e: WheelEvent) => {
    // Touch device check
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    
    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight
    
    // Only handle when in the services+ area (scrolled past the fixed container area)
    if (scrollY < viewportHeight - 100) return
    
    // Check if scrolling up and at the top of services section
    if (e.deltaY < -5) {
      const services = document.getElementById("services")
      if (services) {
        const servicesRect = services.getBoundingClientRect()
        // If services top is near viewport top, scroll back to fixed container
        if (servicesRect.top >= -50 && servicesRect.top <= 150) {
          const now = Date.now()
          if (now - lastWheelTime.current < 800) {
            e.preventDefault()
            return
          }
          if (isScrollingRef.current) {
            e.preventDefault()
            return
          }
          
          e.preventDefault()
          lastWheelTime.current = now
          isScrollingRef.current = true
          
          // Scroll back to top (fixed container will show)
          window.scrollTo({ top: 0, behavior: "smooth" })
          onScrollBackToFixed()
          
          setTimeout(() => {
            isScrollingRef.current = false
          }, 800)
        }
      }
    }
  }, [onScrollBackToFixed])

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])
}
