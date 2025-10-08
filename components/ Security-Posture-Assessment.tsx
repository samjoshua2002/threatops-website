import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, User, Target, Bug, ArrowRight, Sparkles, Eye, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SecurityPostureAssessment() {
  const assessmentTypes = [
    {
      id: "phishing-campaign",
      title: "Phishing Campaign",
      fullTitle: "Phishing Awareness Campaign",
      icon: User,
      description: "Simulated phishing campaigns to test employee awareness and strengthen your human firewall against social engineering attacks.",
      features: [
        "Customized phishing email templates",
        "Real-time click rate monitoring",
        
      ],
      highlights: ["Real-world Scenarios", "Behavioral Analytics", "Training Integration"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "mystery-guest",
      title: "Mystery Guest",
      fullTitle: "Mystery Guest Physical Security",
      icon: Eye,
      description: "Covert physical security assessments to evaluate your premises, access controls, and security personnel effectiveness.",
      features: [
        "Physical penetration testing",
        "Access control bypass testing",
        
      ],
      highlights: ["Covert Operations", "Physical Security", "Real-time Testing"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "assumed-breach",
      title: "Assumed Breach",
      fullTitle: "Assumed Breach Simulation",
      icon: Bug,
      description: "Assume compromise scenarios to test your incident response, detection capabilities, and recovery processes under realistic conditions.",
      features: [
        "Compromise scenario simulation",
        "Incident response testing",
      
      ],
      highlights: ["Realistic Scenarios", "IR Testing", "Detection Gaps"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "red-team",
      title: "Traditional Red Team",
      fullTitle: "Traditional Red Team Exercise",
      icon: Target,
      description: "Full-scale adversarial simulation exercises mimicking real-world threat actors to comprehensively test your security defenses.",
      features: [
        "Multi-vector attack simulation",
        "Defense evasion techniques",
        "Lateral movement assessment",
        "Persistent access testing"
      ],
      highlights: ["Adversary Simulation", "Multi-phase Attacks", "Comprehensive Testing"],
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
              Advanced Security Testing
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Security Posture Assessment
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Test your organization's resilience against real-world threats with our advanced security assessment methodologies
          </p>
        </div>

        <Tabs defaultValue="phishing-campaign" className="w-full items-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-2xl h-auto border border-border/50 shadow-xl mb-12">
            {assessmentTypes.map((type) => {
              const Icon = type.icon
              return (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="flex flex-col items-center gap-2 py-4 px-2 data-[state=active]:bg-background data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-data-[state=active]:text-accent transition-colors" />
                  <span className="text-xs md:text-sm font-medium text-center leading-tight">{type.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {assessmentTypes.map((type) => {
            const Icon = type.icon
            return (
              <TabsContent key={type.id} value={type.id} className="mt-0">
                <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border">
                            <Icon className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold text-accent">{type.title}</span>
                          </div>

                          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            {type.fullTitle}
                          </h3>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {type.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {type.highlights.map((highlight, index) => (
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
                            <h4 className="text-xl font-bold">Key Assessment Areas</h4>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                            {type.features.map((feature, index) => (
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
                        <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${type.gradient} border border-border overflow-hidden shadow-2xl`}>
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