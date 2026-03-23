"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function PhilosophyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []) // cache reset v2

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
                私たちLat91は、単なるAIツール提供企業ではなく、クライアントの経営課題を徹底的に理解し、その解決に全力でコミットするパートナーです。DX・AI導入の失敗を避け、真の成功をつかむために。
              </p>
              <p className="text-base text-neutral-500 mt-8 font-mono">
                代表取締役CEO<br />
                稲葉 幸太郎
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Origin Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
                Company Origin
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 leading-tight">
                DX・AI導入の失敗を<br />
                本気で解決する。
              </h2>
            </div>
            <div className="lg:order-1">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="100" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="2"/>
                <circle cx="150" cy="120" r="40" fill="#e0e0e0"/>
                <circle cx="250" cy="120" r="40" fill="#e0e0e0"/>
                <path d="M 200 180 Q 190 200 200 210 Q 210 200 200 180" fill="#e0e0e0"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-[45%_1fr] gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase mb-4 block">
                Mission
              </span>
              <div className="h-1 w-16 bg-neutral-900 mb-8" />
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                すべての人と企業に<br />
                デジタルレイバーを。<br />
                AI時代の確かな<br />
                産業インフラをつくる
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-base text-neutral-600 leading-relaxed">
                産業革命から続く、人が労働力になる時代は、
                <br />
                まもなく歴史の転換点を迎えます。
              </p>

              <p className="text-base text-neutral-600 leading-relaxed">
                私たちが提供するのは、自信して実務を完遂する
                <br />
                AI、デジタルレイバーという新しい労働力の実装。
              </p>

              <p className="text-base text-neutral-600 leading-relaxed">
                電気や水道が社会を底支えするように、この無体の
                <br />
                知能を、誰もが当たり前に使える確かなインフラと
                <br />
                して日本から散設する。
              </p>

              <p className="text-base text-neutral-600 leading-relaxed">
                実務の摩擦をAIが引き受け、人間が純粋な意思や創造へと向かうための次代の産業インフラを創ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
