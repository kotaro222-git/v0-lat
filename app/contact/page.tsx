"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useRef } from "react"
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    position: "",
    name: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setIsSubmitted(true)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("送信に失敗しました。お手数ですが再度お試しください。")
    } finally {
      setIsLoading(false)
    }
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
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 mb-8 mx-auto">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Contact
            </span>
            <span className="w-12 h-px bg-neutral-900" />
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            お問い合わせ
          </h1>
          <p className="mt-6 text-lg text-neutral-500">
            AIエージェント導入やDXに関するご相談、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-12 pb-32">
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            /* Success Message */
            <div className="text-center py-20 bg-neutral-50 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={36} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                送信完了
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                お問い合わせありがとうございます。
                <br />
                担当者より折り返しご連絡いたします。
              </p>
            </div>
          ) : (
            /* Contact Form */
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-3">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  placeholder="example@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-3">
                  貴社の企業名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  placeholder="株式会社○○"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-3">
                    役職
                    <span className="text-neutral-400 font-normal ml-2">
                      （任意）
                    </span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    placeholder="営業部長"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-3">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-3">
                  お問い合わせの内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                  placeholder="ご相談内容をご記入ください"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-neutral-900 text-white rounded-full font-medium text-base hover:bg-neutral-800 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      送信する
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                        <ArrowRight size={16} />
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-neutral-400 leading-relaxed">
                送信いただいた情報は、お問い合わせへの回答のみに使用し、
                <br className="hidden sm:block" />
                第三者への提供は行いません。詳しくは
                <Link href="/privacy" className="text-neutral-700 underline underline-offset-4">
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
