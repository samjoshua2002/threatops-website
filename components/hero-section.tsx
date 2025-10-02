"use client"

import { useEffect, useState } from "react"
import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RippleGrid from "./RippleGrid"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text */}
        <div
          className={`relative z-10 max-w-xl text-left transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
         

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#FDA172]">Find the breach point</span>{" "}
            <span className="text-white">before compromise finds you.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Real-world attack simulations and end-to-end cybersecurity—
            proactively protecting your digital assets from emerging threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#FDA172] text-black hover:bg-[#e78950] animate-pulse-glow group">
              Start Your Security Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/services" passHref legacyBehavior>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect bg-transparent text-white border-[#FDA172] hover:bg-[#FDA172] hover:text-black"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Ripple Background */}
        <div className="relative w-full h-[500px] md:h-screen">
          <RippleGrid
            gridColor="#FDA172"
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
      </div>
    </section>
  )
}
