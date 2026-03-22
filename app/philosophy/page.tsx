import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Philosophy | Lat91",
  description: "AI時代に、人間の意志と創造が輝く世界を創る",
}

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

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[0.875rem] tracking-[0.3em] uppercase text-[#999]">
            Philosophy
          </span>
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-neutral-900 leading-[1.2] tracking-tight mt-4">
            AI時代に、
            <br />
            人間の意志と創造が輝く世界を創る
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* CEO Photo - 30% width */}
            <div className="lg:flex-[0_0_30%]">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-200">
                <Image
                  src="/images/ceo-photo.png"
                  alt="代表取締役 稲葉幸太郎"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-[0.875rem] text-[#999]">
                  CEO & FOUNDER
                </p>
                <p className="mt-1 text-[1.25rem] font-bold text-neutral-900">
                  稲葉 幸太郎
                </p>
              </div>
            </div>

            {/* Message Content - flex 1 */}
            <div className="lg:flex-1 text-[1.125rem] leading-[1.8] text-[#555]">
              <p className="mb-8">
                人類にとって、かつてない時代がやってきました。
                <br />
                誰もが創れる。届けられる。届かなかった知識に手が届く。
              </p>

              <p className="mb-8">
                そして、従来のチャットボットではなく、一度セットアップすれば、
                <br />
                24時間自律的に業務と改善を繰り返す<span className="font-bold text-neutral-900">AIエージェント</span>が誕生しました。
              </p>

              <p className="mb-8">
                これから築くべき未来は、AIファーストの時代ではなく、
                <br />
                <span className="font-bold text-neutral-900">ヒューマンファーストの時代</span>だと、僕たちは信じています。
              </p>

              <p className="mb-8">
                生産のために自分らしさを消耗させる必要がなくなり、
                <br />
                何かを生み出すことと、自分らしくいることが、両立する。
              </p>

              <p className="mb-8">
                <span className="font-bold text-neutral-900">AIが99%を引き受ける時代。</span>
                <br />
                残されるのは、人間のみが持つ1%の<span className="font-bold text-neutral-900">意志と創造</span>だけになる。
                <br />
                何を美しいと感じるか。何に怒り、何を選ぶか。
              </p>

              {/* Pull Quote */}
              <blockquote className="text-[1.5rem] font-bold text-neutral-900 my-12 pl-8 border-l-4 border-neutral-900">
                もし今、僕たちの仕事のほとんどがなくなったとして、何に集中するか。
                <br />
                僕たちにしかできないことはなんだろうか。
              </blockquote>

              <p className="mb-8">
                その純粋な決定から生まれるものこそが、人にしか生み出せない価値です。
                <br />
                僕たちはその瞬間を創り、純度の高い創造で世界を前へ進めたいと考えています。
              </p>

              {/* Company Name Origin - subtle, at the end */}
              <p className="text-[0.875rem] text-[#999] mt-12 leading-[1.9]">
                Lat91（ラット・ナインティワン）という社名は、緯度91度（Lat91）という意味。
                <br />
                90度が北極点であり、緯度91度はこの地球上に存在しない場所。
                <br />
                まだ誰も見たことがない、到達したことがない場所を、僕たちは創り、世界を前へ進める。
                <br />
                その想いを、社名に込めました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - directly after CEO message */}
      <section className="py-20 px-6 md:px-12 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#999] uppercase tracking-[0.3em] text-sm">
              Value
            </p>
            <h2 className="text-[2rem] font-bold text-neutral-900 mt-2">
              私たちの価値観
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative bg-neutral-50 rounded-2xl p-10 group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number */}
                <span className="absolute top-8 right-8 font-mono text-6xl font-bold text-neutral-200 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6">
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
