import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"

export const metadata = {
  title: "Company | Lat91",
  description: "株式会社Lat.91の企業情報",
}

const companyInfo = [
  { label: "会社名", value: "株式会社Lat.91" },
  { label: "代表者名", value: "稲葉 幸太郎" },
  { label: "設立", value: "2026年 3月" },
  { label: "所在地", value: "東京都港区赤坂3-13-3 赤坂セントラルビル6F" },
]

const businessAreas = [
  "AIエージェント構築・運用事業",
  "DXソリューション事業",
  "AI社員（Digital Labor）派遣事業",
  "プロダクト開発事業",
]

export default function CompanyPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Company
          </span>
          <h1 className="mt-4 text-[clamp(32px,5vw,56px)] font-bold text-[var(--off-white)] leading-tight">
            企業情報
          </h1>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Company Details */}
            <div>
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
                Company Information
              </h2>

              <div className="space-y-0">
                {companyInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`py-6 ${
                      index !== companyInfo.length - 1
                        ? "border-b border-[var(--off-white)]/10"
                        : ""
                    }`}
                  >
                    <dt className="font-mono text-[11px] tracking-wider text-[var(--off-white)]/40 uppercase mb-2">
                      {item.label}
                    </dt>
                    <dd className="text-[16px] text-[var(--off-white)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Areas */}
            <div>
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
                Business Areas
              </h2>

              <div className="bg-[var(--dark-teal)]/30 rounded-xl p-8 border border-[var(--off-white)]/5">
                <h3 className="text-[14px] font-medium text-[var(--off-white)]/60 mb-6">
                  事業概要
                </h3>
                <ul className="space-y-4">
                  {businessAreas.map((area, index) => (
                    <li key={area} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded bg-[var(--light-sage)]/10 flex items-center justify-center text-[11px] font-mono text-[var(--light-sage)]">
                        {index + 1}
                      </span>
                      <span className="text-[15px] text-[var(--off-white)]">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-[5vw] bg-[var(--dark-teal)]/20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
            Location
          </h2>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            {/* Map Embed */}
            <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[400px] bg-[var(--dark-teal)] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0534366773847!2d139.7344!3d35.6726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8f8ec8a2c5%3A0x5b2b6d5e8e6d5e5e!2z6LWk5Z2C44K744Oz44OI44Op44Or44OT44Or!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lat91 Office Location"
              />
            </div>

            {/* Address Card */}
            <div className="bg-[var(--background)] rounded-xl p-8 border border-[var(--off-white)]/5">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--light-sage)]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[var(--light-sage)]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[var(--off-white)] mb-1">
                    本社オフィス
                  </h3>
                  <p className="text-[13px] text-[var(--off-white)]/50">
                    Head Office
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[14px] text-[var(--off-white)]/70">
                <p>
                  〒107-0052
                  <br />
                  東京都港区赤坂3-13-3
                  <br />
                  赤坂セントラルビル6F
                </p>

                <div className="pt-4 border-t border-[var(--off-white)]/10">
                  <p className="font-mono text-[11px] tracking-wider text-[var(--off-white)]/40 uppercase mb-2">
                    Access
                  </p>
                  <p className="text-[13px] leading-relaxed">
                    東京メトロ 銀座線・丸ノ内線「赤坂見附駅」徒歩3分
                    <br />
                    東京メトロ 千代田線「赤坂駅」徒歩5分
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
