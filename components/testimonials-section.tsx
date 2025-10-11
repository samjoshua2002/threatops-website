"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Cloud, ArrowRight, Eye } from "lucide-react";

export function TestimonialsSection() {
  const features = [
    {
      title: "Personalized, Expert Service",
      description:
        "Work with hand-picked consultants and industry-recognized professionals, each committed to your security success.",
      icon: Shield,
    },
    {
      title: "Real-World Attack Simulation",
      description:
        "Experience assessments modeled after genuine adversary techniques—delivering clarity on your true risk exposure.",
      icon: Target,
    },
    {
      title: "End-to-End Security",
      description:
        "From cloud to infrastructure, applications to networks, we provide comprehensive coverage against today’s advanced threats.",
      icon: Cloud,
    },
    {
      title: "Continuous Security Improvement",
      description:
        "Our mission is to leave you stronger—not just protected while we’re there, but resilient for the long term.",
      icon: ArrowRight,
    },
    {
      title: "Proven Experience",
      description:
        "Over half our team consists of highly trained cybersecurity engineers, architects, and consultants with experience across commercial and government sectors.",
      icon: Eye,
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[var(--theme-dark-base)] text-[var(--theme-text-primary)]">
      {/* Floating accent blobs */}
      <motion.div
        className="absolute top-10 left-20 w-48 h-48 rounded-full bg-[var(--theme-accent)]/10 blur-3xl animate-float"
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-56 h-56 rounded-full bg-[var(--theme-accent-dim)]/10 blur-3xl animate-float"
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-14 text-center text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect border border-[var(--theme-border)] hover:glow-accent hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between text-left">
                  <CardContent className="px-4 py-3 flex flex-col h-full">
                    {/* Icon + Title */}
                    {/* Icon + Title */}
                    <div className="flex items-start gap-2 mb-3">
                      <div className="relative flex-shrink-0">
                        <motion.h2
                          className="text-3xl md:text-5xl font-bold mb-14 text-center text-gradient"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Icon
                            className="w-6 h-6" // Apply same gradient as title
                            strokeWidth={2}
                          />
                        </motion.h2>
                      </div>
                      <h3 className="font-semibold text-xl text-[var(--theme-accent)] leading-snug">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed text-left">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
