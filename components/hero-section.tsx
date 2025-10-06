"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RippleGrid from "./RippleGrid"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [primaryColor, setPrimaryColor] = useState("#E5453D") // fallback color

  useEffect(() => {
    setMounted(true)
    const color = getComputedStyle(document.documentElement).getPropertyValue("--primary")
    if (color) setPrimaryColor(color.trim())
  }, [])

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
  ">

  <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

    {/* Left Side - Text */}
    <div className={`relative z-10 max-w-xl text-left transition-all duration-1000 ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <h1 className="text-3xl pt-[100px] sm:pt-[100px] md:pt-[70px] lg:pt-[90px] sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
        <span style={{ color: "var(--primary)" }}>Find the breach point</span>{" "}
        <span style={{ color: "var(--foreground)" }}>before compromise finds you.</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed text-muted-foreground">
        Real-world attack simulations and end-to-end cybersecurity—proactively protecting your digital assets from emerging threats.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="glow-accent animate-pulse-glow group"
          style={{ backgroundColor: "var(--primary)", color: "var(--foreground)" }}
        >
          Start Your Security Assessment
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Link href="/services" passHref legacyBehavior>
          <Button
            variant="outline"
            size="lg"
            className="glass-effect bg-transparent border border-primary text-foreground hover:bg-primary hover:text-foreground transition-colors"
          >
            View Our Services
          </Button>
        </Link>
      </div>
    </div>

    {/* Right Side - Ripple Background */}
    {mounted && (
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] lg:pt-[90px]">
        <RippleGrid
          gridColor={primaryColor}
          rippleIntensity={0.07}
          gridSize={12}
          gridThickness={18}
          fadeDistance={1.5}
          vignetteStrength={2.2}
          glowIntensity={0.2}
          opacity={1}
          gridRotation={0}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
        />
      </div>
    )}
  </div>
</section>

  )
}
