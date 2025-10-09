import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, Monitor, Zap, Users, ArrowRight, Sparkles, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ManagedSecurityServices() {
  const serviceTypes = [
    {
      id: "mss",
      title: "Managed Security",
      fullTitle: "Managed Security Services",
      icon: Shield,
      description: "Comprehensive 24/7 security monitoring and management to protect your organization from evolving cyber threats with our expert security team.",
      features: [
        "24/7 Security Operations Center (SOC)",
        "Proactive threat hunting and monitoring",
        "Incident response and management",
        "Security device management",
        "Regular security reporting and analytics"
      ],
      highlights: ["24/7 Monitoring", "Expert SOC Team", "Proactive Defense"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "siem",
      title: "SIEM & Threat Detection",
      fullTitle: "SIEM Monitoring & Threat Detection",
      icon: Monitor,
      description: "Advanced Security Information and Event Management with real-time threat detection and correlation across your entire IT infrastructure.",
      features: [
        "Real-time log collection and analysis",
        "Advanced threat correlation rules",
        "Behavioral analytics and UEBA",
        "Custom detection use cases",
        "Threat intelligence integration"
      ],
      highlights: ["Real-time Analysis", "Behavioral Analytics", "Threat Intel"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "vulnerability",
      title: "Vulnerability Management",
      fullTitle: "Vulnerability Management",
      icon: Zap,
      description: "Continuous vulnerability assessment and management program to identify, prioritize, and remediate security vulnerabilities across your environment.",
      features: [
        "Continuous vulnerability scanning",
        "Risk-based vulnerability prioritization",
        "Remediation guidance and tracking",
        "Compliance reporting",
        "Patch management coordination"
      ],
      highlights: ["Continuous Scanning", "Risk Prioritization", "Remediation Tracking"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "purple-team",
      title: "Purple Team",
      fullTitle: "Purple Team Exercises",
      icon: Users,
      description: "Collaborative security testing that combines red team attack simulations with blue team defense improvements to enhance your overall security posture.",
      features: [
        "Coordinated attack simulations",
        "Defensive capability testing",
        "Real-time collaboration between teams",
        "Security control validation",
        "Continuous improvement feedback loop"
      ],
      highlights: ["Collaborative Testing", "Control Validation", "Continuous Improvement"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "threat-intel",
      title: "Threat Intelligence",
      fullTitle: "Threat Intelligence Services",
      icon: Eye,
      description: "Actionable threat intelligence to help you understand and defend against relevant cyber threats targeting your industry and organization.",
      features: [
        "Strategic threat intelligence reports",
        "Tactical IOC feeds and analysis",
        "Threat actor profiling",
        "Industry-specific threat landscape",
        "Proactive threat hunting"
      ],
      highlights: ["Actionable Intel", "Industry Focus", "Proactive Hunting"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    }
  ]

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Proactive Security Operations
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Managed Security Services
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive security operations and monitoring services to protect your organization 24/7 with expert-led threat detection and response
          </p>
        </div>

        <Tabs defaultValue="mss" className="w-full items-center">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-2xl h-auto border border-border/50 shadow-xl mb-12">
            {serviceTypes.map((service) => {
              const Icon = service.icon
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center gap-2 py-4 px-2 data-[state=active]:bg-background data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-data-[state=active]:text-accent transition-colors" />
                  <span className="text-xs md:text-sm font-medium text-center leading-tight">{service.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {serviceTypes.map((service) => {
            const Icon = service.icon
            return (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border">
                            <Icon className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold text-accent">{service.title}</span>
                          </div>

                          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            {service.fullTitle}
                          </h3>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {service.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-sm font-semibold">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-accent" />
                            <h4 className="text-xl font-bold">Service Features</h4>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                            {service.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/30 transition-all duration-300 hover:translate-x-1 group"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative lg:order-last order-first">
                        <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${service.gradient} border border-border overflow-hidden shadow-2xl`}>
                          <div className="w-full h-full flex items-center justify-center">
                            <Icon className="w-48 h-48 text-foreground/10" strokeWidth={0.5} />
                          </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}