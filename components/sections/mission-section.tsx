"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="relative bg-white py-[120px] px-6 md:px-12 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="mb-20">
          <span className="inline-flex items-center gap-3">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Mission
            </span>
          </span>
        </div>

        {/* Main Content - Single Column Layout */}
        <div className="flex flex-col">
          {/* Main Title */}
          <div className="w-full text-left">
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.15] text-neutral-900 tracking-tight">
              <span className="text-[#999]">すべての人と企業に</span>デジタルレイバーを。
              <br />
              <span className="text-[#999]">私たちは、AI時代のなめらかな</span>
              <br />
              産業インフラをつくる。
            </h2>
          </div>

          {/* Description */}
          <div className="mt-12 max-w-[560px] text-left">
            <p className="text-[16px] leading-[1.9] text-[#555]">
              AIが99%を引き受ける時代に、
              人に残るのは1%の意志と創造だけになる。
              何を美しいと感じるか。何を選ぶか。何を創るか。
              その1%を応援する会社です。
            </p>

            <Link
              href="/philosophy"
              className="inline-flex items-center gap-4 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group mt-6"
            >
              <span className="tracking-wide">理念を見る</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
