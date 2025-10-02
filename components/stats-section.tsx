"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const layers = [
  {
    title: "Protect",
    description:
      "We harden your defenses by identifying and remediating vulnerabilities across applications, networks, Active Directory, and cloud infrastructure through comprehensive assessments and risk management, securing your foundational assets.",
  },
  {
    title: "Detect",
    description:
      "We empower your vigilance through continuous SIEM monitoring and test your security with targeted phishing campaigns, assumed breach scenarios, and Red Team exercises to swiftly identify lurking threats.",
  },
  {
    title: "Respond",
    description:
      "We fortify your ability to act by validating and refining your incident response capabilities through Red Team and Assumed Breach simulations, ensuring swift and effective action against detected threats with Purple Team collaboration.",
  },
]

export function StatsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left side - Circles */}
        <div className="relative flex items-center justify-center w-[600px] h-[600px] mx-auto">
          {layers.map((layer, index) => {
            const size = 300 + index * 120
            const radius = size / 2 - 30
            const isVisible = hovered === null || hovered === index || index >= hovered

            return (
              <motion.div
                key={index}
                className="absolute rounded-full flex items-center justify-center border"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  borderWidth: "2px",
                  borderColor: "rgba(253,161,114,0.4)",
                  backgroundImage: `
                    linear-gradient(rgba(253,161,114,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(253,161,114,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "25px 25px",
                  zIndex: 10 - index,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                animate={
                  hovered === index
                    ? {
                        boxShadow: "0 0 60px rgba(253,161,114,0.7)",
                        borderColor: "rgba(253,161,114,1)",
                      }
                    : {
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                        borderColor: "rgba(253,161,114,0.4)",
                      }
                }
                transition={{ duration: 0.4 }}
              >
                {/* Curved text inside each ring */}
                <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="absolute"
                >
                  <defs>
                    <path
                      id={`arc-${index}`}
                      d={`M ${size / 2 - radius},${size / 2} 
                          A ${radius},${radius} 0 0,1 ${size / 2 + radius},${size / 2}`}
                    />
                  </defs>
                  <text
                    fill="#FDA172"
                    fontSize="20"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    <textPath
                      href={`#arc-${index}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {layer.title}
                    </textPath>
                  </text>
                </svg>

                {/* Tooltip + Button */}
                {isVisible && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <AnimatePresence>
                      {hovered === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3 }}
                          className="mb-2 w-72 bg-black/90 border border-[#FDA172] rounded-lg 
                                     p-4 text-center shadow-xl backdrop-blur-md relative"
                        >
                          <h3 className="text-md font-bold text-[#FDA172]">
                            {layer.title}
                          </h3>
                          <p className="text-xs text-gray-300 mt-1">
                            {layer.description}
                          </p>
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 
                                       bg-black/90 border-l border-t border-[#FDA172] rotate-45"
                            style={{ bottom: "-6px" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* + Button */}
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(253,161,114,0.8)",
                      }}
                      className="flex items-center justify-center w-6 h-6 rounded-full 
                                 bg-gradient-to-r from-[#FDA172] to-[#FDA172] text-black font-bold 
                                 shadow-lg cursor-pointer"
                    >
                      +
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}

          {/* Center Heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl font-extrabold text-[#FDA172]">
              Prevent Breaches
            </h2>
          </div>
        </div>

        {/* Right side description */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#FDA172]">
            Prevent Breaches
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Protect, Detect, and Respond — all powered by real-world offensive
            expertise. We bring hacker-level precision to fortify your security
            posture.
          </p>
        </div>
      </div>
    </section>
  )
}
