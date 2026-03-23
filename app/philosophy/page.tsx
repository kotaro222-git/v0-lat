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
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Philosophy
            </span>
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            AI時代に、
            <br />
            人間の意志と創造が輝く世界を創る
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
                  alt="代表取締役 稲葉幸太郎"
                  fill
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
            <div className="space-y-6 text-base md:text-lg leading-[2] text-neutral-600">
              <p>
                人類にとって、かつてない時代がやってきました。
                <br />
                誰もが創れる。届けられる。届かなかった知識に手が届く。
              </p>

              <p>
                そして、従来のチャットボットではなく、一度セットアップすれば、
                <br />
                24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。
              </p>

              <p>
                これから築くべき未来は、AIファーストの時代ではなく、
                <br />
                <span className="text-neutral-900 font-medium">
                  ヒューマンファーストの時代
                </span>
                だと、僕たちは信じています。
              </p>

              <p>
                生産のために自分らしさを消耗させる必要がなくなり、
                <br />
                何かを生み出すことと、自分らしくいることが、両立する。
              </p>

              <p>
                AIが実務の99%を担っていく時代。
                <br />
                人間は、最も尊い1%の意志と創造だけに向き合える。
                <br />
                何を美しいと感じ、何に怒り、何を選ぶか。
              </p>

              <p>
                もし今の仕事のほとんどがなくなったとして、僕たちは何に集中するだろう。
                <br />
                誰の代わりでもない、自分にしか生み出せない価値はなんだろうか。
              </p>

              <p>
                僕たちはその瞬間を創り、純度の高い創造で世界を前へ進めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Name Origin Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Origin of Name
            </span>
          </span>
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-neutral-900 leading-tight mb-10">
            社名に込めた想い。
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-[2] text-neutral-600 max-w-2xl">
            <p>
              <span className="text-neutral-900 font-bold">Lat91</span>
              という社名は、地球の緯度が90度で終わることに由来しています。
              <br />
              91度目は、地図上に存在しない。まだ誰も見たことのない景色。
            </p>
            <p>
              90度までをAIに正しく担わせ、みんなで91度目に立つ。
              <br />
              私は、その景色を見たいしつくりたい。だからこの会社を創りました。
            </p>
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
            人間の意志と創造が輝く
            <br />
            世界を築く
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
              私たちの価値観
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
