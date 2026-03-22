"use client"

import { useEffect, useRef, useCallback } from "react"

interface SectionConfig {
  id: string
  nextId?: string
  prevId?: string
}

const sections: SectionConfig[] = [
  { id: "hero", nextId: "mission", prevId: undefined },
  { id: "mission", nextId: "services", prevId: "hero" },
]

export function useSectionScrollSnap() {
  const isScrollingRef = useRef(false)
  const lastScrollTimeRef = useRef(0)
  const debounceDelay = 800

  const getCurrentSection = useCallback((): SectionConfig | null => {
    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight

    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (!element) continue

      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const elementBottom = elementTop + rect.height

      // Check if viewport center is within this section
      const viewportCenter = scrollY + viewportHeight / 2
      if (viewportCenter >= elementTop && viewportCenter < elementBottom) {
        return section
      }
    }

    return null
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    isScrollingRef.current = true
    element.scrollIntoView({ behavior: "smooth", block: "start" })

    // Reset scrolling state after animation completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, debounceDelay)
  }, [])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const now = Date.now()

      // Debounce check
      if (now - lastScrollTimeRef.current < debounceDelay) {
        return
      }

      // Skip if already scrolling
      if (isScrollingRef.current) {
        return
      }

      const currentSection = getCurrentSection()
      if (!currentSection) return

      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0

      let targetId: string | undefined

      if (isScrollingDown && currentSection.nextId) {
        targetId = currentSection.nextId
      } else if (isScrollingUp && currentSection.prevId) {
        targetId = currentSection.prevId
      }

      if (targetId) {
        e.preventDefault()
        lastScrollTimeRef.current = now
        scrollToSection(targetId)
      }
    },
    [getCurrentSection, scrollToSection]
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleWheel])
}
