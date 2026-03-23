"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function PhilosophyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  return (
    <main className="bg-white min-h-screen" suppressHydrationWarning>
      <Header />
      
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
                CEO Message
              </div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3] mb-8">
                経営層の決定から<br />現場の実行まで、<br />AIが業務全体を<br />最適化します。
              </h2>
              <p className="text-[14px] text-neutral-500 leading-[2] max-w-[440px] pb-1 mb-6">
                AIは単なるツールではなく、貴社の経営判断を強化し、実行力を高める戦略パートナーです。私たちは、経営層から現場まで、全階層が恩恵を受けられるAI活用を実現します。
              </p>
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="text-[12px] text-neutral-600 mb-2">LAT91 CEO</div>
                <div className="text-[13px] font-semibold text-neutral-900">田中 太郎</div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src="/images/ceo.jpg"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src="/images/company-origin.jpg"
                alt="Company Origin"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
                Company Origin
              </div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3] mb-8">
                AI革命の中で、<br />人間の価値を<br />最大化する。
              </h2>
              <p className="text-[14px] text-neutral-500 leading-[2] max-w-[440px] pb-1 mb-6">
                産業革命から続く、人が労働力になる時代は、まもなく歴史の転換点を迎えます。今、私たちが提供するのは、自信して実務を完遂する、AI、デジタルレイバーという新しい労働力の実装。電気や水道が社会を底支えするように、この無体の知能を、誰もが当たり前に使えるインフラとして日本から散設する。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
              Mission
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.2] mb-8">
              すべての人と企業に<br />デジタルレイバーを。<br />AI時代の確かな<br />産業インフラをつくる
            </h2>
            <p className="text-[16px] text-neutral-600 leading-[1.8] max-w-[600px] mx-auto">
              実務の摩擦をAIが引き受け、人間が純粋な意思や創造へと向かうための次代の産業インフラを創ります。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Efficiency",
                description: "業務プロセスの自動化により、人間は創造的な業務に専念できる環境を実現。",
              },
              {
                title: "Accessibility",
                description: "あらゆる企業規模、業種を問わず、AI導入のハードルを大幅に低減。",
              },
              {
                title: "Sustainability",
                description: "テクノロジーと人間の協働による、持続可能な経営モデルの構築。",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <h3 className="text-[16px] font-bold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-[13px] text-neutral-500 leading-[1.8]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
