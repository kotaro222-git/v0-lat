"use client"

import dynamic from "next/dynamic"

const PhilosophyPageContent = dynamic(
  () => import("./philosophy-page"),
  { ssr: false, loading: () => <div className="min-h-screen bg-white" /> }
)

export default function PhilosophyPage() {
  return (
    <div suppressHydrationWarning>
      <PhilosophyPageContent />
    </div>
  )
}
