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
                  alt="CEO Kotaro Inaba"
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  CEO & Founder
                </p>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  Kotaro Inaba
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-6 text-[15px] md:text-[17px] leading-[2] text-neutral-600">
              <p>
                A new era has arrived for humanity.
                <br />
                Anyone can create. Anyone can deliver. Knowledge once out of reach is now accessible.
              </p>

              <p>
                And now, AI agents have emerged that autonomously handle work and improvements 24/7, once set up.
              </p>

              <p>
                The future we must build is not an AI-first era, but
                <br />
                <span className="text-neutral-900 font-medium">
                  a human-first era
                </span>
                —that is what we believe.
              </p>

              <p>
                No longer do we need to exhaust our authenticity for the sake of production.
                <br />
                Creating something and being true to yourself can finally coexist.
              </p>

              <p>
                In an era where AI handles 99% of practical work,
                <br />
                humans can focus solely on the most precious 1%: will and creativity.
                <br />
                What do you find beautiful? What angers you? What do you choose?
              </p>

              <p>
                If most of our work disappeared today, what would we focus on?
                <br />
                What value can only we create, irreplaceable by anyone else?
              </p>

              <p>
                We create those moments and move the world forward with pure creativity.
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
            The meaning behind our name.
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-[2] text-neutral-600 max-w-2xl">
            <p>
              <span className="text-neutral-900 font-bold">Lat91</span>
              {" "}comes from the fact that Earth's latitude ends at 90 degrees.
              <br />
              The 91st degree doesn't exist on any map. A view no one has ever seen.
            </p>
            <p>
              Let AI properly handle the first 90 degrees, and together we stand at the 91st.
              <br />
              I want to see and create that view. That's why I founded this company.
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
            Building a world where
            <br />
            human will and creativity shine
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
              Our Values
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
