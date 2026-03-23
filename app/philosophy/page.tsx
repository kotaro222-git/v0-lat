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
              <div className="mt-12 space-y-6">
                <p className="text-[28px] lg:text-[36px] leading-[1.3] text-neutral-900 font-bold">
                  人類にとって、かつてない時代がやってきました。
                </p>
                <p className="text-[18px] text-neutral-600 leading-[1.8]">
                  誰もが創れる。届けられる。届かなかった知識に手が届く。
                </p>

                <div className="pt-6 space-y-6">
                  <p className="text-[14px] text-neutral-500 leading-[1.8]">
                    そして、従来のチャットボットではなく、一度セットアップすれば、24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。
                  </p>

                  <p className="text-[18px] text-neutral-900 font-semibold">
                    これから築くべき未来は、AIファーストの時代ではなく、ヒューマンファーストの時代だと、僕たちは信じています。
                  </p>

                  <p className="text-[14px] text-neutral-500 leading-[1.8]">
                    生産のために自分らしさを消耗させる必要がなくなり、何かを生み出すことと、自分らしくいることが、両立する。
                  </p>

                  <p className="text-[14px] text-neutral-500 leading-[1.8]">
                    AIが実務の99%を担っていく時代。人間は、最も尊い1%の意志と創造だけに向き合える。何を美しいと感じ、何に怒り、何を選ぶか。その本質的な選択の連続こそが、個人の人生であり、企業の未来だと思っています。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/ceo-photo.png"
                alt="CEO"
                fill
                priority
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin of Name Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
                Origin of Name
              </span>
              <h2 className="mt-8 text-[48px] lg:text-[56px] font-bold text-neutral-900 leading-[1.1]">
                社名に込めた想い。
              </h2>

              <div className="mt-12 space-y-0">
                <p className="text-[14px] text-neutral-600 leading-[2.2]">
                  Lat91という社名は、地球の緯度が90度で終わることに由来しています。
                </p>
                <p className="text-[14px] text-neutral-600 leading-[2.2]">
                  91度目は、地図上に存在しない。まだ誰も見たことのない景色。
                </p>
                <p className="text-[14px] text-neutral-600 leading-[2.2] mt-4">
                  90度までをAIに正しく担わせ、みんなで91度目に立つ。
                </p>
                <p className="text-[14px] text-neutral-600 leading-[2.2]">
                  私は、その景色を見たいしつくりたい。だからこの会社を創りました。
                </p>
              </div>
            </div>

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
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto py-24 px-6">
          <div className="grid lg:grid-cols-[35%_1fr] gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
                Mission
              </span>
            </div>

            <div className="space-y-8">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-neutral-900 leading-[1.3]">
                すべての人と企業に<br />
                デジタルレイバーを。<br />
                AI時代の確かな<br />
                産業インフラをつくる
              </h2>

              <p className="text-[14px] text-neutral-600 leading-[1.9] max-w-[440px]">
                産業革命から続く、人が労働力になる時代は、まもなく歴史の転換点を迎えます。
              </p>

              <p className="text-[14px] text-neutral-600 leading-[1.9] max-w-[440px]">
                私たちが提供するのは、自信して実務を完遂する AI、デジタルレイバーという新しい労働力の実装。
              </p>

              <p className="text-[14px] text-neutral-600 leading-[1.9] max-w-[440px]">
                電気や水道が社会を底支えするように、この無体の知能を、誰もが当たり前に使える確かなインフラとして日本から散設する。
              </p>

              <p className="text-[14px] text-neutral-600 leading-[1.9] max-w-[440px]">
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
