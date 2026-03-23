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

      {/* CEO Message Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
                CEO Message
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mt-6 leading-tight">
                経営課題の解決が、<br />
                僕たちの仕事です。
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                AIの急速な進化により、これまで数ヶ月かかった業務が数秒で完結する時代が来ました。しかし、テクノロジーを導入するだけでは何も変わりません。重要なのは、経営課題を本質的に理解し、業務プロセスを根本から再設計し、テクノロジーを使いこなしことです。
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mt-6">
                DXは単なるツール導入ではなく、経営課題を解決するための戦略的な変革です。Lat91では、顧客の本質的なニーズを深掘りし、最適なソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Origin Section */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
                Company Origin
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 leading-tight">
                AIが本当に必要とされる場面を創る
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-8">
                Lat91は、DXやAI導入の課題に直面する企業と、その課題を本当に解決したいと考えるエンジニアが出会う場として設立されました。私たちは、テクノロジーを使いこなす企業文化を創り、経営課題から実装まで一気通貫でサポートします。
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl" />
              <div className="absolute inset-4 border-2 border-dashed border-neutral-300 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
              Mission
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 leading-tight">
              実務の摩擦をAIが引き受け、人間が純粋な意思や創造へと向かうための次代の産業インフラを創ります。
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">課題発見力</h3>
              <p className="text-base text-neutral-600">
                経営層から現場まで、複数のステークホルダーから情報を収集し、本質的な課題を特定します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">実装力</h3>
              <p className="text-base text-neutral-600">
                最先端のAI技術を活用し、課題解決に最適なソリューションを設計・実装します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">伴走力</h3>
              <p className="text-base text-neutral-600">
                導入後も継続的にサポートし、効果測定と改善を通じて価値を最大化します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">人間力</h3>
              <p className="text-base text-neutral-600">
                AIの可能性を理解しつつ、最後の判断は人間が行う。そうした価値観を大切にしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
