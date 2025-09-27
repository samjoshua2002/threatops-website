import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, AlertTriangle, Shield, Users, Target, Zap } from "lucide-react"

export function ServiceDetails() {
  const services = [
    {
      id: "threat-hunting",
      icon: Search,
      title: "Advanced Threat Hunting",
      description: "Proactive identification and neutralization of sophisticated threats before they cause damage.",
      features: [
        "24/7 continuous monitoring and analysis",
        "AI-powered behavioral analytics",
        "Custom threat intelligence integration",
        "Advanced persistent threat (APT) detection",
        "Zero-day vulnerability identification",
        "Comprehensive threat landscape mapping",
      ],
      benefits: [
        "Reduce dwell time from months to minutes",
        "Prevent data breaches before they occur",
        "Stay ahead of emerging threat vectors",
        "Minimize business disruption",
      ],
      pricing: "Starting at $5,000/month",
    },
    {
      id: "incident-response",
      icon: AlertTriangle,
      title: "Rapid Incident Response",
      description: "Expert-led incident containment and remediation with minimal business impact.",
      features: [
        "Emergency response team activation",
        "Forensic analysis and evidence collection",
        "Threat containment and eradication",
        "System recovery and restoration",
        "Post-incident analysis and reporting",
        "Legal and regulatory compliance support",
      ],
      benefits: [
        "Average response time under 5 minutes",
        "Minimize financial and reputational damage",
        "Ensure business continuity",
        "Meet compliance requirements",
      ],
      pricing: "Starting at $3,000/month",
    },
    {
      id: "consulting",
      icon: Shield,
      title: "Strategic Security Consulting",
      description: "Comprehensive cybersecurity strategy development and implementation guidance.",
      features: [
        "Security posture assessments",
        "Risk analysis and mitigation planning",
        "Compliance audits and remediation",
        "Security architecture design",
        "Policy development and implementation",
        "Vendor security assessments",
      ],
      benefits: [
        "Align security with business objectives",
        "Reduce overall security risks",
        "Ensure regulatory compliance",
        "Optimize security investments",
      ],
      pricing: "Starting at $2,500/month",
    },
    {
      id: "training",
      icon: Users,
      title: "Security Awareness Training",
      description: "Transform your employees into your strongest line of defense against cyber threats.",
      features: [
        "Customized training programs",
        "Phishing simulation campaigns",
        "Interactive security workshops",
        "Ongoing education and updates",
        "Performance tracking and reporting",
        "Incident response training",
      ],
      benefits: [
        "Reduce human error incidents by 90%",
        "Build security-conscious culture",
        "Meet compliance training requirements",
        "Improve overall security posture",
      ],
      pricing: "Starting at $1,500/month",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Security Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect, detect, and respond to threats at every level.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <Card className="glass-effect hover:glow-accent transition-all duration-300">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 rounded-lg bg-accent/10">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                      <div className="text-accent font-semibold mt-1">{service.pricing}</div>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Target className="w-5 h-5 text-accent mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-accent mr-2" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      {/* <Button className="glow-accent">Learn More</Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
