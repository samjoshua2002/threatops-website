"use client"

import { useEffect, useState } from "react"
import { Shield, Users, Target } from "lucide-react"

export function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031018] via-[#0a1a2a] to-[#031018]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,240,224,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
                <Shield className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">About ThreatOps changes</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Defending</span> the Digital
                <br />
                <span className="text-white">Frontier</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded by cybersecurity veterans, ThreatOps was born from the belief that reactive security isn't
                enough. We pioneered proactive threat hunting to stay ahead of evolving cyber threats.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">2019</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">Companies Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 glass-effect rounded-lg">
                    <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Expert Team</div>
                  </div>
                  <div className="text-center p-4 glass-effect rounded-lg">
                    <Target className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Proven Results</div>
                  </div>
                  <div className="text-center p-4 glass-effect rounded-lg col-span-2">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Advanced Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
