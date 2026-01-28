'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-20 pb-8 md:pt-32 md:pb-16 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-secondary px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Launching Soon</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                Brew the Royal Tradition
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance">
                Experience the authentic taste of premium instant chai tea, crafted from the secret blends of royal Indian households. Pure spices, pure heritage, pure indulgence.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Reserve Your Spot
              </button>
              <button
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/20 rounded-full blur-2xl"></div>

              {/* Logo showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/logo.png"
                    alt="Royal Chai Premium Blend"
                    fill
                    className="object-contain drop-shadow-2xl animate-float"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-24 h-24 text-accent opacity-20">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L61 40 L92 40 L67 60 L78 90 L50 70 L22 90 L33 60 L8 40 L39 40 Z" />
                </svg>
              </div>
              <div className="absolute bottom-10 left-10 w-32 h-32 text-secondary opacity-20">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
