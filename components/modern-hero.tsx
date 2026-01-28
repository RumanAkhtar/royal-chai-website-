'use client';

import React from "react"

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Twitter, Loader2 } from 'lucide-react';

export function ModernHero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);

    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Logo & Badge */}
          <div className="animate-slide-down">
            <div className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Royal Chai"
                width={80}
                height={80}
                className="w-16 sm:w-20 h-auto"
              />
            </div>
            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest letter-spacing">
              Premium Chai Experience
            </p>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up space-y-4" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-foreground leading-tight">
              Brew the
              <br />
              <span className="text-accent font-semibold">Royal Tradition</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.4s' }}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Premium instant chai tea premix inspired by royal Indian households. Experience the authentic taste of
              tradition with the convenience of modern living.
            </p>
          </div>

          {/* Launching Soon Badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-subtle-pulse"></span>
              <span className="text-sm font-medium text-accent">Launching Soon</span>
            </div>
          </div>

          {/* Email Signup */}
          <div className="animate-fade-in-up w-full max-w-md" style={{ animationDelay: '0.8s' }}>
            <form onSubmit={handleSubscribe} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex flex-col sm:flex-row gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-2">
                <div className="flex-1 flex items-center gap-2 px-4 py-2">
                  <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || isSubscribed}
                  className={`px-6 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
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
            <p className="text-xs text-muted-foreground mt-2">Be first to experience the royal blend</p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up flex gap-4 mt-8" style={{ animationDelay: '1s' }}>
            <a
              href="#"
              className="p-3 rounded-lg bg-card/50 border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-muted-foreground hover:text-accent"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-card/50 border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-muted-foreground hover:text-accent"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-card/50 border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-muted-foreground hover:text-accent"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="animate-fade-in-up text-xs text-muted-foreground mt-12" style={{ animationDelay: '1.2s' }}>
            <p>Crafted with tradition. Built for modern times.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
