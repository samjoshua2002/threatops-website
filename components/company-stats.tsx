"use client"

import { useEffect, useState } from "react"

export function CompanyStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", description: "Reliable security monitoring" },
    { number: "< 3min", label: "Average Response Time", description: "Rapid threat containment" },
    { number: "500+", label: "Companies Protected", description: "Trusted by industry leaders" },
    { number: "10M+", label: "Threats Blocked", description: "Proactive threat prevention" },
    { number: "24/7", label: "Security Operations", description: "Round-the-clock protection" },
    { number: "15+", label: "Years Experience", description: "Deep cybersecurity expertise" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Proven</span> Track Record
          </h2>
          <p className="text-xl text-muted-foreground">Numbers that demonstrate our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center glass-effect p-8 rounded-lg hover:glow-accent transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
