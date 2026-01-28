'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Instagram, Facebook, Twitter, Loader2 } from 'lucide-react'

export function ModernHero() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setEmail('')
    setIsLoading(false)

    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/background.jpg"
          alt="Royal Chai Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Accent Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <section className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Heading */}
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
              Brew the <br />
              <span className="text-accent font-semibold">Royal Tradition</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up max-w-2xl">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Premium instant chai tea premix inspired by royal Indian households.
              Authentic spices, timeless tradition, crafted for modern living.
            </p>
          </div>

          {/* Launch Badge */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white">
                Launching Soon
              </span>
            </div>
          </div>

          {/* Email Signup */}
          <div className="animate-fade-in-up w-full max-w-md">
            <form onSubmit={handleSubscribe} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-primary/40 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative flex flex-col sm:flex-row gap-2 bg-black/50 backdrop-blur border border-white/20 rounded-xl p-2">
                <div className="flex flex-1 items-center gap-2 px-4 py-2">
                  <Mail className="w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || isSubscribed}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                    isSubscribed
                      ? 'bg-accent/20 text-accent'
                      : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  ) : isSubscribed ? (
                    'Subscribed ✓'
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
            </form>

            <p className="text-xs text-white/60 mt-2">
              Be the first to experience the royal blend
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up flex gap-4 pt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="p-3 rounded-lg bg-black/40 border border-white/20 text-white/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Footer */}
          <p className="animate-fade-in-up text-xs text-white/50 pt-10">
            Crafted with tradition. Built for modern times.
          </p>
        </div>
      </section>
    </main>
  )
}
