"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Eye, Activity, Lock, Globe, Cpu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [threatCount, setThreatCount] = useState(1247)
  const [activeScans, setActiveScans] = useState(23)

  useEffect(() => {
    setMounted(true)

    const threatInterval = setInterval(() => {
      setThreatCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)

    const scanInterval = setInterval(() => {
      setActiveScans((prev) => Math.max(15, prev + Math.floor(Math.random() * 5) - 2))
    }, 2000)

    return () => {
      clearInterval(threatInterval)
      clearInterval(scanInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031018] via-[#0a1a2a] to-[#031018]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,224,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,240,224,0.05),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50" />

      <div className="absolute top-40 right-8 glass-effect p-4 rounded-xl animate-float hidden lg:block">
        <div className="flex items-center space-x-2 mb-2">
          <Activity className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-sm font-medium">Threat Monitor</span>
        </div>
        <div className="text-2xl font-bold text-accent">{threatCount.toLocaleString()}</div>
        <div className="text-xs text-muted-foreground">Threats Blocked Today</div>
      </div>

      <div
        className="absolute top-40 left-8 glass-effect p-4 rounded-xl animate-float hidden lg:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="w-4 h-4 text-accent animate-spin-slow" />
          <span className="text-sm font-medium">Active Scans</span>
        </div>
        <div className="text-2xl font-bold text-accent">{activeScans}</div>
        <div className="text-xs text-muted-foreground">Networks Monitored</div>
      </div>

      <div className="absolute bottom-32 right-12 glass-effect p-3 rounded-lg animate-pulse hidden lg:block">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Secure</span>
        </div>
      </div>

      <div
        className="absolute bottom-40 left-16 glass-effect p-3 rounded-lg animate-bounce hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">AI Active</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mt-5 mb-8">
            <Shield className="w-4 h-4 text-accent mr-2" />
            
            <span className="text-sm text-muted-foreground">Advanced Cybersecurity Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Proactive</span>
            <br />
            <span className="text-white">Cybersecurity</span>
            <br />
            <span className="text-white">That</span> <span className="text-accent">Works</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't wait for attacks to happen. Our advanced threat hunting and incident response services keep your
            business secure before threats become breaches.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="glow-accent animate-pulse-glow group">
              Start Your Security Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/services" passHref legacyBehavior>
              <Button variant="outline" size="lg" className="glass-effect bg-transparent hover:text-white">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300 animate-float">
              <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">24/7 Threat Hunting</h3>
              <p className="text-muted-foreground text-sm">
                Continuous monitoring and proactive threat detection across your entire infrastructure.
              </p>
            </div>

            <div
              className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Eye className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
              <p className="text-muted-foreground text-sm">
                Expert incident response team ready to contain and neutralize threats within minutes.
              </p>
            </div>

            <div
              className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Shield className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Strategic Consulting</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive security strategy development tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
