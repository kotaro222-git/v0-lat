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
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Philosophy
          </span>
          <h1 className="mt-4 text-[clamp(32px,5vw,56px)] font-bold text-[var(--off-white)] leading-tight">
            AI時代に、
            <br />
            人間の意志と創造が輝く世界を創る
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 px-[5vw] bg-[var(--dark-teal)]/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            {/* CEO Photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[var(--dark-teal)]">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="代表取締役 稲葉幸太郎"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="font-mono text-[12px] tracking-wider text-[var(--light-sage)]">
                  CEO & Founder
                </p>
                <p className="mt-1 text-[18px] font-bold text-[var(--off-white)]">
                  稲葉 幸太郎
                </p>
                <p className="text-[14px] text-[var(--off-white)]/60">
                  Kotaro Inaba
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80">
                  人類にとって、かつてない時代がやってきた。
                  <br />
                  誰もが創れる。届けられる。届かなかった知識に手が届く。
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  学び方が変わり、働き方が変わり、
                  <br />
                  プロフェッショナルの定義そのものが書き換えられている。
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  これはAIファーストの時代ではなくて、
                  <br />
                  かつてないほどの、
                  <span className="text-[var(--light-sage)] font-medium">
                    ヒューマンファーストの時代
                  </span>
                  だと思います。
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  生産のために自分らしさを消耗させる必要がなくなり、
                  <br />
                  結果を出すことと、自分らしくいることが、初めて矛盾しなくなる。
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  AIが99%を引き受ける時代に、人に残るのは1%の意志と創造だけになる。
                  <br />
                  何を美しいと感じるか。何に怒るか。何を選ぶか。
                  <br />
                  <span className="text-[var(--off-white)] font-medium">
                    その1%は、あなたにしか持てない。
                  </span>
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  今、この瞬間に、あなたの仕事が全部なくなったとする。
                  <br />
                  そのとき何をするかも、何もしないことも、あなたにしかできない決定だ。
                </p>

                <p className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mt-6">
                  そこから生まれるものは、あなたにしか生めない。
                  <br />
                  私たちは、その瞬間を作り、純度の高い創造で世界を前に進めたい。
                </p>

                <div className="mt-12 p-8 bg-[var(--background)]/50 rounded-lg border-l-2 border-[var(--light-sage)]">
                  <p className="text-[15px] leading-[2] text-[var(--off-white)]/70">
                    <span className="text-[var(--light-sage)] font-bold">
                      Lat91
                    </span>
                    という社名は、地球の緯度が90度で終わることに由来しています。
                    <br />
                    91度目は、地図上に存在しない。まだ誰も見たことのない景色。
                  </p>
                  <p className="text-[15px] leading-[2] text-[var(--off-white)]/70 mt-4">
                    90度までをAIに正しく担わせ、みんなで91度目に立つ。
                    <br />
                    私は、その景色を見たいしつくりたい。だからこの会社を創りました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-[5vw] bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Mission
          </span>
          <h2 className="mt-8 text-[clamp(28px,4.5vw,52px)] font-bold text-[var(--off-white)] leading-tight">
            人間の意志と創造が輝く
            <br />
            世界を築く
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-[5vw] bg-[var(--dark-teal)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--light-sage)]/60">
              Value
            </span>
            <h2 className="mt-4 text-[clamp(24px,3.5vw,36px)] font-bold text-[var(--off-white)]">
              私たちの価値観
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative bg-[var(--background)]/40 rounded-xl p-10 border border-[var(--off-white)]/5"
              >
                {/* Number */}
                <span className="absolute top-6 right-8 font-mono text-[72px] font-bold text-[var(--light-sage)]/10 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[20px] font-bold text-[var(--off-white)] mb-2">
                  {value.title}
                </h3>
                <p className="font-mono text-[12px] tracking-wider text-[var(--light-sage)] mb-6">
                  {value.subtitle}
                </p>
                <p className="text-[14px] leading-[1.9] text-[var(--off-white)]/70">
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
