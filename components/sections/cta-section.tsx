"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative bg-white py-32 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-neutral-100" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-neutral-100" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-neutral-100" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-3 mb-8 mx-auto">
          <span className="w-12 h-px bg-neutral-900" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
            Contact
          </span>
          <span className="w-12 h-px bg-neutral-900" />
        </span>

        <h2 className="text-[clamp(28px,5vw,48px)] font-bold text-neutral-900 leading-tight mb-6">
          AIで何ができるのか
          <br />
          知りたい企業様へ
        </h2>

        <p className="text-neutral-500 text-lg mb-12">
          まずは無料でご相談ください
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-900 text-white rounded-full font-medium text-base hover:bg-neutral-800 transition-all duration-300 group"
        >
          <span>お問い合わせ</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  )
}
