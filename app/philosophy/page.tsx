"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"

const ceoMessage = {
  p1_1: "人類にとって、かつてない時代がやってきました。",
  p1_2: "誰もが創れる。届けられる。届かなかった知識に手が届く。",
  p2_1: "そして、従来のチャットボットではなく、一度セットアップすれば、",
  p2_2: "24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。",
  p3_1: "これから築くべき未来は、AIファーストの時代ではなく、",
  p3_2: "ヒューマンファーストの時代",
  p3_3: "だと、僕たちは信じています。",
  p4_1: "生産のために自分らしさを消耗させる必要がなくなり、",
  p4_2: "何かを生み出すことと、自分らしくいることが、両立する。",
  p5_1: "AIが実務の99%を担っていく時代。",
  p5_2: "人間は、最も尊い1%の意志と創造だけに向き合える。",
  p5_3: "何を美しいと感じ、何に怒り、何を選ぶか。",
  p6_1: "その力を取り戻すために、僕たちは全力でAIエージェントをつくります。",
  signature: "代表取締役 稲葉 幸太郎",
}

const companyOrigin = {
  title: "社名に込めた想い。",
  name: "Lat91",
  line1: "という社名は、地球の緯度が90度で終わることに由来しています。",
  line2: "91度目は、地図上に存在しない。まだ誰も見たことのない景色。",
  line3: "90度までをAIに正しく担わせ、みんなで91度目に立つ。",
  line4: "私は、その景色を見たいしつくりたい。だからこの会社を創りました。",
}

const missionText = {
  title1: "すべての人と企業に",
  title2: "デジタルレイバーを。",
  title3: "AI時代の確かな",
  title4: "産業インフラをつくる",
  p1: "産業革命から続く、人が労働力になる時代は、まもなく歴史の転換点を迎えます。",
  p2: "私たちが提供するのは、自律して実務を完遂するAI、デジタルレイバーという新しい労働力の実装。",
  p3: "電気や水道が社会を底支えするように、この無休の知能を、誰もが当たり前に使える確かなインフラとして日本から敷設する。",
  p4: "実務の摩擦をAIが引き受け、人間が純粋な意思や創造へと向かうための次代の産業インフラを創ります。",
}

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
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Philosophy
            </span>
          </div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-neutral-900 leading-[1.15] tracking-[-0.03em]">
            理念
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            {/* CEO Photo */}
            <div className="relative">
              <div className="aspect-[3/4] w-full max-w-[400px] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/ceo-photo.png"
                  alt="CEO"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <span className="inline-flex items-center gap-3 mt-6">
                <span className="w-8 h-px bg-neutral-300" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  CEO Message
                </span>
              </span>
            </div>

            {/* Message Content */}
            <div className="lg:pt-8">
              <div className="space-y-4 text-[15px] md:text-[17px] leading-[2] text-neutral-600">
                <p>
                  {ceoMessage.p1_1}
                  <br />
                  {ceoMessage.p1_2}
                </p>
                <p>
                  {ceoMessage.p2_1}
                  <br />
                  {ceoMessage.p2_2}
                </p>
                <p>
                  {ceoMessage.p3_1}
                  <br />
                  <span className="text-neutral-900 font-semibold">{ceoMessage.p3_2}</span>
                  {ceoMessage.p3_3}
                </p>
                <p>
                  {ceoMessage.p4_1}
                  <br />
                  {ceoMessage.p4_2}
                </p>
                <p>
                  {ceoMessage.p5_1}
                  <br />
                  {ceoMessage.p5_2}
                  <br />
                  {ceoMessage.p5_3}
                </p>
                <p>{ceoMessage.p6_1}</p>
              </div>
              <p className="mt-12 text-[15px] text-neutral-900 font-medium">
                {ceoMessage.signature}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Name Origin Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div>
              <span className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-neutral-900" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
                  Origin of Name
                </span>
              </span>
              <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-neutral-900 leading-tight mb-10">
                {companyOrigin.title}
              </h2>
              <div className="space-y-0 text-base md:text-lg leading-[2.2] text-neutral-600">
                <p>
                  <span className="text-neutral-900 font-bold">{companyOrigin.name}</span>
                  {companyOrigin.line1}
                </p>
                <p>{companyOrigin.line2}</p>
                <p className="mt-4">{companyOrigin.line3}</p>
                <p>{companyOrigin.line4}</p>
              </div>
            </div>

            {/* Globe Illustration */}
            <div className="flex items-end justify-center lg:justify-start pt-8">
              <div className="relative w-[280px] h-[240px] lg:w-[340px] lg:h-[280px]">
                <Image
                  src="/images/lat91-globe.svg"
                  alt="Lat91 Globe Illustration - 91st degree concept"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-8 h-px bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Mission
            </span>
            <span className="w-8 h-px bg-neutral-300" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.3] tracking-[-0.02em]">
                {missionText.title1}
                <br />
                {missionText.title2}
                <br />
                {missionText.title3}
                <br />
                {missionText.title4}
              </h2>
            </div>
            <div className="lg:col-span-5 max-w-[480px]">
              <div className="space-y-5 text-[15px] text-neutral-500 leading-[2]">
                <p>{missionText.p1}</p>
                <p>{missionText.p2}</p>
                <p>{missionText.p3}</p>
                <p>{missionText.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
