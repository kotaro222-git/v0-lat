"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MissionContent() {
  return (
    <div className="relative w-full h-full bg-white py-32 md:py-40 px-6 md:px-12 overflow-auto">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Main Title */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.15] text-neutral-900 tracking-tight">
              <span className="text-neutral-400">AI産業時代</span>に
              <br />
              人間の意志と、
              <br />
              純度の高い創造が
              <br />
              溢れる世界を創る。
            </h2>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base md:text-lg leading-[2] text-neutral-600 mb-10">
              AIが99%を引き受ける時代に、
              <br className="hidden md:block" />
              人に残るのは1%の意志と創造だけになる。
            </p>
            <p className="text-base md:text-lg leading-[2] text-neutral-600 mb-12">
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
    </div>
  )
}
