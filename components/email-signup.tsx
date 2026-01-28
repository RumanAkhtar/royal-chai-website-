'use client'

import React from "react"

import { useState } from 'react'

export function EmailSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }

    setIsLoading(false)
  }

  return (
    <section id="email-signup" className="py-16 md:py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-border p-8 md:p-12 shadow-lg">
            {/* Content */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Be Among the First
              </h2>
              <p className="text-foreground/70 text-lg">
                Join our exclusive list for early access and special launch offers
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 bg-muted border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-accent/20 border border-accent text-secondary px-6 py-3 rounded-full text-center font-medium">
                    ✓ Thank you! Check your email for exclusive updates.
                  </div>
                </div>
              )}
            </form>

            {/* Footer text */}
            <p className="text-center text-foreground/50 text-sm mt-6">
              We respect your privacy. No spam, just updates about Royal Chai.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
