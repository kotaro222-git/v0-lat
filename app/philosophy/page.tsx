"use client"

import dynamic from "next/dynamic"

const PhilosophyPageContent = dynamic(
  () => import("./philosophy-page").then((mod) => mod.default),
  { ssr: false }
)

export default function PhilosophyPage() {
  return <PhilosophyPageContent />
}
