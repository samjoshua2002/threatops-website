"use client"

import { useEffect, useState } from "react"
import { BookOpen, FileText, AlertTriangle } from "lucide-react"

export function ResourcesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031018] via-[#0a1a2a] to-[#031018]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,240,224,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-25">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Cybersecurity</span>
            <br />
            <span className="text-white">Knowledge Hub</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest cybersecurity insights, threat intelligence, and best practices from our
            expert team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ">
            <div className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300 ">
              <BookOpen className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Expert Blog</h3>
              <p className="text-muted-foreground text-sm">
                In-depth analysis and insights from our cybersecurity experts.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300">
              <FileText className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Whitepapers</h3>
              <p className="text-muted-foreground text-sm">Comprehensive research and strategic guidance documents.</p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Security Alerts</h3>
              <p className="text-muted-foreground text-sm">Real-time threat intelligence and security advisories.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
