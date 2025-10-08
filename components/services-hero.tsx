"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Shield, Target, Bug, Eye, Cloud, Smartphone, Network, Server } from "lucide-react"
import { useEffect, useState } from "react"

interface ServicesHeroProps {
  onServiceSelect: (serviceId: string) => void
}

export function ServicesHero({ onServiceSelect }: ServicesHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      id: "security-assessment",
      title: "Security Assessments",
      description: "Comprehensive technical security testing for applications and infrastructure to identify vulnerabilities and security flaws.",
      icon: Shield,
      features: [
        "Web Application Security Testing",
        "Mobile Application Security Assessment", 
        "API Security Testing",
        "Network Infrastructure Assessment",
        "Active Directory Security Review"
      ]
    },
    {
      id: "posture-assessment",
      title: "Security Posture",
      description: "Advanced security testing methodologies to evaluate organizational resilience against real-world threats and attacks.",
      icon: Target,
      features: [
        "Phishing Awareness Campaigns",
        "Mystery Guest Physical Testing",
        "Assumed Breach Simulation",
        "Traditional Red Team Exercises"
      ]
    }
  ]

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16">
     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
           

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            
              
              <span className="text-white">Cybersecurity Services</span>
         
             
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From proactive threat hunting to rapid incident response, we provide comprehensive cybersecurity solutions
              tailored to your business needs.
            </p>
          </div>

          {/* Services Navigation Tabs */}
          <div className="w-full items-center mb-12">
            <Tabs defaultValue="security-assessment" className="w-full items-center">
              <TabsList className="grid grid-cols-2 gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-2xl h-auto border border-border/50 shadow-xl mb-12">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="flex flex-col items-center gap-2 py-4 px-2 data-[state=active]:bg-background data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                      onClick={() => onServiceSelect(service.id)}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-data-[state=active]:text-accent transition-colors" />
                      <span className="text-xs md:text-sm font-medium text-center leading-tight">{service.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

           
            </Tabs>
          </div>

         
        </div>
      </div>
    </section>
  )
}