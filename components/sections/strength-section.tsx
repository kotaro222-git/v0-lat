"use client"

import { X, Check } from "lucide-react"

const lat91Steps = [
  { num: "01", text: "経営目標から、解決すべき課題を特定し、戦略を立案" },
  { num: "02", text: "業務プロセスを再設計し、エージェントを組み込む" },
  { num: "03", text: "運用・改善まで伴走し、成果を定着させる" },
]

export function StrengthSection() {
  return (
    <section className="relative bg-neutral-900 py-32 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-3 mb-6 mx-auto">
            <span className="w-12 h-px bg-white/20" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500">
              Approach
            </span>
            <span className="w-12 h-px bg-white/20" />
          </span>
          <h2 className="text-[clamp(24px,4vw,40px)] font-bold text-white leading-tight">
            AIから考えない。
            <br />
            経営目標から逆算する。
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-[40%_55%] gap-8 lg:gap-[5%]">
          {/* Wrong Approach */}
          <div className="relative">
            {/* External Label */}
            <span className="block font-mono text-[12px] tracking-[0.2em] uppercase text-neutral-500 mb-3">
              AI起点
            </span>
            <div className="bg-[#1e1e1e] rounded-3xl p-10 border border-neutral-700/50 h-full">
              <div className="flex items-center gap-3 mb-10">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <X size={18} className="text-red-400" />
                </span>
                <span className="text-sm font-medium text-neutral-400">
                  よくあるアプローチ
                </span>
              </div>

              <div className="space-y-5">
                {[
                  "AIでできることから考える",
                  "既存業務にアドオンする",
                  "現場にハマらない、成果が出ない。",
                ].map((step) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="text-neutral-600 text-lg leading-none">—</span>
                    <p className="text-neutral-400 text-[15px] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Result indicator */}
              <div className="mt-10 pt-8 border-t border-neutral-700/50">
                <p className="text-sm text-red-400/70">
                  → 半年後、誰も使っていないAIが残る
                </p>
              </div>
            </div>
          </div>

          {/* Right Approach */}
          <div className="relative">
            {/* External Label */}
            <span className="block font-mono text-[12px] tracking-[0.2em] uppercase text-neutral-400 mb-3">
              経営課題起点
            </span>
            <div 
              className="bg-white rounded-3xl p-10 h-full"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900">
                  <Check size={18} className="text-white" />
                </span>
                <span className="text-sm font-medium text-neutral-900">
                  Lat91のアプローチ
                </span>
              </div>

              <div className="space-y-4">
                {lat91Steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <span className="font-mono text-xs text-neutral-300 pt-0.5">
                      {step.num}
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* Result indicator */}
              <div className="mt-10 pt-8 border-t border-neutral-100">
                <p className="text-sm text-neutral-600 font-medium">
                  → 半年後、AIが経営数値を動かしている
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
