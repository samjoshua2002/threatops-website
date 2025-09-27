"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031018] via-[#0a1a2a] to-[#031018]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,240,224,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8 mt-10">
            <MessageCircle className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm text-muted-foreground">Get in Touch</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Ready to Secure</span>
            <br />
            <span className="text-white">Your Business?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get started with a free security consultation. Our experts are ready to help you build a comprehensive
            cybersecurity strategy.
          </p>
        </div>
      </div>
    </section>
  )
}
