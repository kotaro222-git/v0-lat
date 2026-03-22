"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    position: "",
    name: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5vw]">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Contact
          </span>
          <h1 className="mt-4 text-[clamp(32px,5vw,56px)] font-bold text-[var(--off-white)] leading-tight">
            お問い合わせ
          </h1>
          <p className="mt-6 text-[16px] text-[var(--off-white)]/60">
            AIエージェント導入やDXに関するご相談、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-[5vw] pb-32">
        <div className="max-w-[600px] mx-auto">
          {isSubmitted ? (
            /* Success Message */
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-[var(--light-sage)]" />
              </div>
              <h2 className="text-[24px] font-bold text-[var(--off-white)] mb-4">
                送信完了
              </h2>
              <p className="text-[15px] text-[var(--off-white)]/60 leading-relaxed">
                お問い合わせありがとうございます。
                <br />
                内容を確認の上、担当者より2営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[var(--off-white)]/60 uppercase mb-3">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--dark-teal)]/30 border border-[var(--off-white)]/10 rounded-lg text-[var(--off-white)] placeholder-[var(--off-white)]/30 focus:outline-none focus:border-[var(--light-sage)]/50 transition-colors"
                  placeholder="example@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[var(--off-white)]/60 uppercase mb-3">
                  貴社の企業名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--dark-teal)]/30 border border-[var(--off-white)]/10 rounded-lg text-[var(--off-white)] placeholder-[var(--off-white)]/30 focus:outline-none focus:border-[var(--light-sage)]/50 transition-colors"
                  placeholder="株式会社○○"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[var(--off-white)]/60 uppercase mb-3">
                  役職
                  <span className="text-[var(--off-white)]/40 ml-2 normal-case">
                    （任意）
                  </span>
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--dark-teal)]/30 border border-[var(--off-white)]/10 rounded-lg text-[var(--off-white)] placeholder-[var(--off-white)]/30 focus:outline-none focus:border-[var(--light-sage)]/50 transition-colors"
                  placeholder="営業部長"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[var(--off-white)]/60 uppercase mb-3">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--dark-teal)]/30 border border-[var(--off-white)]/10 rounded-lg text-[var(--off-white)] placeholder-[var(--off-white)]/30 focus:outline-none focus:border-[var(--light-sage)]/50 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[var(--off-white)]/60 uppercase mb-3">
                  お問い合わせの内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--dark-teal)]/30 border border-[var(--off-white)]/10 rounded-lg text-[var(--off-white)] placeholder-[var(--off-white)]/30 focus:outline-none focus:border-[var(--light-sage)]/50 transition-colors resize-none"
                  placeholder="ご相談内容をご記入ください"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[var(--off-white)] text-[var(--background)] rounded-full font-bold text-[15px] tracking-wide hover:bg-[var(--light-sage)] transition-all duration-300 group"
                >
                  送信する
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-[12px] text-[var(--off-white)]/40 leading-relaxed">
                送信いただいた情報は、お問い合わせへの回答のみに使用し、
                <br />
                第三者への提供は行いません。
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
