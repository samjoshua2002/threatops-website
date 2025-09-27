"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" }) // triggers earlier

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", description: "Advanced AI-powered detection" },
    { number: "<5min", label: "Average Response Time", description: "Rapid incident containment" },
    { number: "500+", label: "Companies Protected", description: "Trusted by industry leaders" },
    { number: "24/7", label: "Continuous Monitoring", description: "Never-ending vigilance" },
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground">Our track record speaks for itself</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-8 rounded-lg hover:glow-accent transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
