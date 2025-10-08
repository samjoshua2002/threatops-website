"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function StatBar({ value, text }: { value: number; text: string }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 })

  return (
    <div ref={ref} className="group">
      <p className="text-[var(--muted-foreground)] mb-2">{text}</p>
      <div className="w-full bg-[var(--background)/10] rounded-full h-6 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          whileHover={{ width: `${value + 5}%` }}
          className="h-6 rounded-full flex items-center justify-end pr-2
                     bg-gradient-to-r from-[var(--primary)] via-[#c43b2b] to-[#ff7363]
                     bg-[length:200%_200%] animate-gradient-x
                     glow-accent group-hover:animate-pulse"
        >
          <span className="text-sm font-semibold text-[var(--foreground)] drop-shadow-md">
            {value}%
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export function ServicesOverview() {
  const stats = [
    {
      value: 72,
      text: "of security leaders report their organization suffered at least one major cyber attack in the past year.",
    },
    {
      value: 62,
      text: "say that significant cyber attacks led to months-long productivity loss and business impact.",
    },
    {
      value: 25,
      text: "of organizations are confident they can defend against advanced threats before damage is done.",
    },
  ]

  return (
    <section className="relative py-24 px-6 lg:px-12 text-[var(--foreground)] overflow-hidden bg-[var(--background)]">
      {/* Subtle overlay gradient from base theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[#1a1a1a] to-[var(--background)] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Cybersecurity has an{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[#c43b2b] to-[#ff7363] 
                             bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              effectiveness crisis.
            </span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-4">
            Despite record-high investments, organizations continue to face relentless attacks,
            operational disruptions, and rising risk.
          </p>
          <p className="text-2xl font-semibold text-[var(--primary)] mb-8">
            $10.5 Trillion
            <span className="block text-base font-normal text-[var(--muted-foreground)]">
              Estimated global cost of cybercrime by 2025
            </span>
          </p>
        </div>

        {/* Middle Divider Line */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block w-[2px] h-80 rounded-full 
                     bg-gradient-to-b from-[var(--primary)] via-[#c43b2b] to-[#ff7363]
                     bg-[length:200%_200%]"
        />

        {/* Right Side Bars */}
        <div className="space-y-10">
          {stats.map((stat, idx) => (
            <StatBar key={idx} value={stat.value} text={stat.text} />
          ))}
        </div>
      </div>

      {/* Bottom Pitch */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
          At ThreatOps, we close the gap.
        </h3>
        <p className="text-lg text-[var(--muted-foreground)] mb-6">
          We help transform your security posture from reactive to resilient— 
          arming your business to face the threats of today and tomorrow.
        </p>
      </div>
    </section>
  )
}
