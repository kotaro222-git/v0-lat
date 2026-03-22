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
        <div className="mb-12">
          <span className="inline-flex items-center gap-3">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Mission
            </span>
          </span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Main Title */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.4] text-neutral-900 tracking-tight">
              <span className="block text-[#999]">すべての人と企業に</span>
              <span className="block">デジタルレイバーを。</span>
              <span className="block text-[#999]">AI時代の確かな</span>
              <span className="block">産業インフラをつくる</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg leading-[1.9] text-neutral-500 mb-8">
              AIが99%を引き受ける時代に、
              <br className="hidden md:block" />
              人に残るのは1%の意志と創造だけになる。
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-neutral-500 mb-10">
              何を美しいと感じるか。何を選ぶか。何を創るか。
              <br className="hidden md:block" />
              その1%を応援する会社です。
            </p>

            <Link
              href="/philosophy"
              className="inline-flex items-center gap-4 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
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
