"use client"

import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { SecurityAssessment } from "@/components/Security-Assessment"

import { Footer } from "@/components/footer"
import { SecurityPostureAssessment } from "@/components/ Security-Posture-Assessment"

export default function ServicesPage() {
  const securityAssessmentRef = useRef<HTMLDivElement>(null)
  const postureAssessmentRef = useRef<HTMLDivElement>(null)

  const handleServiceSelect = (serviceId: string) => {
    switch (serviceId) {
      case "security-assessment":
        securityAssessmentRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        break
      case "posture-assessment":
        postureAssessmentRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        break
      default:
        break
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero onServiceSelect={handleServiceSelect} />
      
      <div ref={securityAssessmentRef}>
        <SecurityAssessment />
      </div>
      
      <div ref={postureAssessmentRef}>
       <SecurityPostureAssessment/>
      </div>
      
      <Footer />
    </main>
  )
}