"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"

const values = [
  {
    title: "Be True",
    subtitle: "純度を大切に",
    description:
      "純粋な意志でコトに向き合い、自らの内なる声に真っ直ぐに従うこと。",
  },
  {
    title: "Stay Kind",
    subtitle: "善くあること",
    description:
      "相手を深く尊重し、共に歩むこと。巧詐は拙誠に如かず。",
  },
  {
    title: "Build, Don't Decorate",
    subtitle: "中身を大切に",
    description:
      "本当に価値のある本質を泥臭く積み上げること。見せかけの完成度より、実を伴う力強さを。",
  },
]

const ceoMessage = {
  p1: "人類にとって、かつてない時代がやってきました。",
  p1b: "誰もが創れる。届けられる。届かなかった知識に手が届く。",
  p2: "そして、従来のチャットボットではなく、一度セットアップすれば、",
  p2b: "24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。",
  p3a: "これから築くべき未来は、AIファーストの時代ではなく、",
  p3b: "ヒューマンファーストの時代",
  p3c: "だと、僕たちは信じています。",
  p4: "生産のために自分らしさを消耗させる必要がなくなり、",
  p4b: "何かを生み出すことと、自分らしくいることが、両立する。",
  p5a: "AIが実務の99%を担っていく時代。",
  p5b: "人間は、最も尊い1%の意志と創造だけに向き合える。",
  p5c: "何を美しいと感じ、何に怒り、何を選ぶか。",
  p6: "もし今の仕事のほとんどがなくなったとして、僕たちは何に集中するだろう。",
  p6b: "誰の代わりでもない、自分にしか生み出せない価値はなんだろうか。",
  p7: "僕たちはその瞬間を創り、純度の高い創造で溢れる世界を目指してます。",
}

const companyOrigin = {
  title: "社名に込めた想い。",
  name: "Lat91",
  line1: "という社名は、地球の緯度が90度で終わることに由来しています。",
  line2: "91度目は、地図上に存在しない。まだ誰も見たことのない景色。",
  line3: "90度までをAIに正しく担わせ、みんなで91度目に立つ。",
  line4: "私は、その景色を見たいしつくりたい。だからこの会社を創りました。",
}

const heroText = {
  line1: "AI時代に、",
  line2: "人間の意志と創造が輝く世界を創る",
}

const missionText = {
  line1: "人間の意志と創造が",
  line2: "輝く世界を創る",
}

export default function PhilosophyPageContent() {
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
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Philosophy
            </span>
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            {heroText.line1}
            <br />
            {heroText.line2}
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">
            {/* CEO Photo */}
            <div className="lg:sticky lg:top-32">
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-neutral-200">
                <Image
                  src="/images/ceo-photo.png"
                  alt="CEO"
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  CEO & Founder
                </p>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {"稲葉 幸太郎"}
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-4 text-[15px] md:text-[17px] leading-[2] text-neutral-600">
              <p>
                {ceoMessage.p1}
                <br />
                {ceoMessage.p1b}
              </p>

              <p>
                {ceoMessage.p2}
                <br />
                {ceoMessage.p2b}
              </p>

              <p>
                {ceoMessage.p3a}
                <br />
                <span className="text-neutral-900 font-medium">
                  {ceoMessage.p3b}
                </span>
                {ceoMessage.p3c}
              </p>

              <p>
                {ceoMessage.p4}
                <br />
                {ceoMessage.p4b}
              </p>

              <p>
                {ceoMessage.p5a}
                <br />
                {ceoMessage.p5b}
                <br />
                {ceoMessage.p5c}
              </p>

              <p>
                {ceoMessage.p6}
                <br />
                {ceoMessage.p6b}
              </p>

              <p>{ceoMessage.p7}</p>
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
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 mb-8 mx-auto">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Mission
            </span>
            <span className="w-12 h-px bg-neutral-900" />
          </span>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-neutral-900 leading-tight">
            {missionText.line1}
            <br />
            {missionText.line2}
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 mb-6 mx-auto">
              <span className="w-12 h-px bg-white/20" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500">
                Value
              </span>
              <span className="w-12 h-px bg-white/20" />
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-white">
              {"私たちの価値観"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative bg-white rounded-2xl p-10 group hover:shadow-2xl transition-shadow duration-500"
              >
                <span className="absolute top-8 right-8 font-mono text-7xl font-bold text-neutral-100 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-8">
                    {value.subtitle}
                  </p>
                  <p className="text-base leading-relaxed text-neutral-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
