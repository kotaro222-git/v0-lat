"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="relative bg-white py-32 md:py-40 px-6 md:px-12 overflow-hidden">
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
        

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Main Title */}
          <div className="lg:col-span-7 text-left" style={{ lineHeight: 1.4 }}>
            <h3 className="text-[0.875rem] text-[#999] mb-4">MISSION</h3>
            <h2 className="text-[2.5rem] font-bold text-neutral-900 mb-2">すべての人と企業に</h2>
            <h2 className="text-[2.5rem] font-bold text-neutral-900 mb-8">デジタルレイバーを。</h2>
            <p className="text-[1.25rem] mb-2">
              <span className="text-[#999]">私たちは、AI時代の</span>
            </p>
            <p className="text-[1.25rem] font-bold text-neutral-900">
              なめらかな産業インフラをつくる。
            </p>
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
    </section>
  )
}
