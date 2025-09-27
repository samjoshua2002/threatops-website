"use client"

import { useEffect, useState } from "react"
import { Search, AlertTriangle, Shield, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description: "Comprehensive security posture evaluation and threat landscape analysis.",
      details: ["Current security audit", "Risk assessment", "Vulnerability scanning", "Compliance review"],
    },
    {
      icon: Shield,
      title: "Strategy",
      description: "Custom security strategy development based on your specific business needs.",
      details: ["Tailored security roadmap", "Technology recommendations", "Policy development", "Budget planning"],
    },
    {
      icon: AlertTriangle,
      title: "Implementation",
      description: "Expert deployment and configuration of security solutions and processes.",
      details: ["Solution deployment", "Team training", "Process integration", "Testing and validation"],
    },
    {
      icon: CheckCircle,
      title: "Monitoring",
      description: "Continuous monitoring, maintenance, and optimization of your security posture.",
      details: ["24/7 monitoring", "Regular updates", "Performance optimization", "Ongoing support"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to cybersecurity that ensures comprehensive protection and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-0" />
              )}

              <div className="glass-effect p-6 rounded-lg hover:glow-accent transition-all duration-300 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 mx-auto">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                <div className="text-center mb-4">
                  <div className="text-sm text-accent font-semibold mb-1">Step {index + 1}</div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                <p className="text-muted-foreground text-center mb-4">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
