"use client"

import { X, Check, ArrowRight } from "lucide-react"

export function StrengthSection() {
  return (
    <section className="relative bg-[var(--dark-teal)] py-32 px-[5vw] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--light-sage)]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--light-sage)]/60">
            Our Approach
          </span>
          <h2 className="mt-4 text-[clamp(22px,3vw,32px)] font-bold text-[var(--off-white)] leading-tight">
            AIから考えない。
            <br className="sm:hidden" />
            経営課題から考え、戦略を設計し、実装する。
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Wrong Approach */}
          <div className="relative bg-[var(--background)]/60 rounded-xl p-8 border border-red-500/20">
            <div className="absolute -top-3 left-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full">
                <X size={14} className="text-red-400" />
                <span className="font-mono text-[11px] tracking-wider text-red-400">
                  他社のアプローチ（AI起点）
                </span>
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-[12px] text-red-400 font-mono">
                  1
                </span>
                <p className="text-[14px] text-[var(--off-white)]/70">
                  AIでできることを考える
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-[12px] text-red-400 font-mono">
                  2
                </span>
                <p className="text-[14px] text-[var(--off-white)]/70">
                  経営や現場に当てはめる
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-[12px] text-red-400 font-mono">
                  3
                </span>
                <p className="text-[14px] text-[var(--off-white)]/70">
                  回らない → 成果が出ない
                </p>
              </div>
            </div>
          </div>

          {/* Right Approach */}
          <div className="relative bg-gradient-to-br from-[var(--light-sage)]/10 to-[var(--mid-teal)]/10 rounded-xl p-8 border border-[var(--light-sage)]/30">
            <div className="absolute -top-3 left-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--light-sage)]/10 border border-[var(--light-sage)]/30 rounded-full">
                <Check size={14} className="text-[var(--light-sage)]" />
                <span className="font-mono text-[11px] tracking-wider text-[var(--light-sage)]">
                  Lat91のアプローチ（現場起点）
                </span>
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "経営課題の特定",
                "事業戦略の整理",
                "ボトルネックの分析",
                "業務プロセス再設計",
                "AIエージェント実装",
                "運用・改善",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center text-[12px] text-[var(--light-sage)] font-mono">
                    {index + 1}
                  </span>
                  <p className="text-[14px] text-[var(--off-white)]">{step}</p>
                  {index < 5 && (
                    <ArrowRight
                      size={12}
                      className="text-[var(--light-sage)]/40 ml-auto hidden sm:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
