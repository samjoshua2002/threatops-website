"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export function ServicesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031018] via-[#0a1a2a] to-[#031018]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,240,224,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
            <Shield className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm text-muted-foreground">Comprehensive Security Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Advanced</span>
            <br />
            <span className="text-white">Cybersecurity</span>
            <br />
            <span className="text-white">Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From proactive threat hunting to rapid incident response, we provide comprehensive cybersecurity solutions
            tailored to your business needs.
          </p>

          {/* CTA Button */}
          <Button size="lg" className="glow-accent group mb-5">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
