"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative bg-[var(--background)] py-32 px-[5vw] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--off-white) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Mission
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main Title */}
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.3] text-[var(--off-white)] tracking-tight">
              <span className="text-[var(--light-sage)]">AI産業時代</span>に
              <br />
              人間の意志と、純度の高い創造が
              <br />
              溢れる世界を創る。
            </h2>
          </div>

          {/* Right - Description */}
          <div className="space-y-8">
            <p className="text-[16px] leading-[1.9] text-[var(--off-white)]/70">
              AIが99%を引き受ける時代に、人に残るのは1%の意志と創造だけになる。
              <br />
              何を美しいと感じるか。何を選ぶか。何を創るか。
              <br />
              その1%を応援する会社です。
            </p>

            <Link
              href="/philosophy"
              className="inline-flex items-center gap-3 font-mono text-[13px] tracking-[0.1em] text-[var(--light-sage)] hover:text-[var(--off-white)] transition-colors group"
            >
              Read more
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
