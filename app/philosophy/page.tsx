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
  p6_1: "もし今の仕事のほとんどがなくなったとして、僕たちは何に集中するだろう。",
  p6_2: "誰の代わりでもない、自分にしか生み出せない価値はなんだろうか。",
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
  subheading: "AIが99%を引き受ける時代",
  mainMessage: "人間は、最も尊い1%の意志と創造だけに向き合える",
}

const missionText = {
  heading: "我々のミッション",
  description1: "実務的な業務からの解放により、人間が本来果たすべき役割を取り戻す。",
  description2: "AIが精度の高い意思決定と実行をサポートすることで、個人と企業の可能性を最大化する。",
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
      <section className="pt-28 pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
              Philosophy
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">
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
                  稲葉 幸太郎
                </p>
              </div>
            </div>

            {/* Message Content */}
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
                <span className="text-neutral-900 font-medium">
                  {ceoMessage.p3_2}
                </span>
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

              <p>
                {ceoMessage.p6_1}
                <br />
                {ceoMessage.p6_2}
              </p>

              <p>
                {ceoMessage.p7}
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
                  alt="Lat91 Globe"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-neutral-900 leading-tight mb-8">
            {missionText.heading}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <p className="text-lg text-neutral-600 leading-[1.8]">
              {missionText.description1}
            </p>
            <p className="text-lg text-neutral-600 leading-[1.8]">
              {missionText.description2}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-neutral-900 leading-tight mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Integrity</h3>
              <p className="text-neutral-600 leading-relaxed">
                We operate with honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Innovation</h3>
              <p className="text-neutral-600 leading-relaxed">
                We push boundaries to create next-generation solutions.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Impact</h3>
              <p className="text-neutral-600 leading-relaxed">
                We measure success by the positive change we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
