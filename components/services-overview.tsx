import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Search, AlertTriangle, Users, ArrowRight } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Search,
      title: "Threat Hunting",
      description:
        "Proactive identification and neutralization of advanced persistent threats before they cause damage.",
      features: ["24/7 monitoring", "Advanced analytics", "Custom threat intelligence"],
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid containment and remediation of security incidents with minimal business disruption.",
      features: ["Emergency response", "Forensic analysis", "Recovery planning"],
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Strategic cybersecurity guidance to strengthen your overall security posture and compliance.",
      features: ["Risk assessments", "Compliance audits", "Security architecture"],
    },
    {
      icon: Users,
      title: "Security Training",
      description:
        "Comprehensive cybersecurity awareness training to transform your team into your first line of defense.",
      features: ["Phishing simulations", "Security workshops", "Ongoing education"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Comprehensive</span> Security Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From proactive threat hunting to rapid incident response, we provide the full spectrum of cybersecurity
            services your business needs to stay protected.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect hover:glow-accent transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="glow-accent group">
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
