"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative bg-[var(--background)] py-32 px-[5vw] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-teal)]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[800px] mx-auto text-center">
        <h2 className="text-[clamp(24px,4vw,40px)] font-bold text-[var(--off-white)] leading-tight mb-6">
          AIで何ができるのか知りたい
          <br />
          企業様へ
        </h2>

        <p className="text-[16px] text-[var(--off-white)]/60 mb-10">
          まずは無料でご相談を
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--off-white)] text-[var(--background)] rounded-full font-bold text-[15px] tracking-wide hover:bg-[var(--light-sage)] transition-all duration-300 group"
        >
          お問い合わせ
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}
