import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, Cloud, Container, Server, ArrowRight, Sparkles, Cpu, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CloudSecurityAssessment() {
  const assessmentTypes = [
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure",
      fullTitle: "Cloud Infrastructure Security Assessment",
      icon: Cloud,
      description: "Comprehensive security evaluation of your cloud infrastructure across AWS, Azure, and GCP to ensure robust protection against cloud-specific threats.",
      features: [
        "Cloud configuration and misconfiguration review",
        "Identity and Access Management (IAM) audit",
        "Network security group and ACL assessment",
        "Storage and database security analysis",
        "Logging and monitoring configuration review"
      ],
      highlights: ["Multi-Cloud Support", "CIS Benchmarks", "Real-time Compliance"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "container",
      title: "Container Security",
      fullTitle: "Container Security Assessment",
      icon: Container,
      description: "End-to-end security assessment for your containerized applications, covering image vulnerabilities, runtime security, and orchestration configuration.",
      features: [
        "Container image vulnerability scanning",
        "Runtime security monitoring",
        "Container network policy review",
        "Registry security assessment",
        "Build pipeline security analysis"
      ],
      highlights: ["Image Scanning", "Runtime Protection", "CI/CD Integration"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "kubernetes",
      title: "Kubernetes Security",
      fullTitle: "Kubernetes Security Assessment",
      icon: Cpu,
      description: "In-depth security analysis of your Kubernetes clusters to identify misconfigurations, pod security issues, and cluster-level vulnerabilities.",
      features: [
        "Kubernetes RBAC and policy review",
        "Pod security standards assessment",
        "Network policy and service mesh security",
        "ETCD and control plane security",
        "Cluster hardening and compliance"
      ],
      highlights: ["CIS K8s Benchmark", "Pod Security", "Cluster Hardening"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "cloud-native",
      title: "Cloud Native",
      fullTitle: "Cloud Native Security Assessment",
      icon: Server,
      description: "Holistic security assessment for cloud-native applications covering serverless functions, microservices, and cloud-native technologies.",
      features: [
        "Serverless function security testing",
        "Microservices communication security",
        "Service mesh configuration review",
        "API gateway security assessment",
        "Cloud-native storage security"
      ],
      highlights: ["Serverless Security", "Microservices", "Service Mesh"],
      gradient: "from-accent/20 via-primary/20 to-accent/20"
    },
    {
      id: "cloud-compliance",
      title: "Cloud Compliance",
      fullTitle: "Cloud Compliance Assessment",
      icon: Shield,
      description: "Ensure your cloud environment meets regulatory requirements and industry standards with our comprehensive compliance assessment.",
      features: [
        "SOC 2 compliance gap analysis",
        "GDPR and data privacy assessment",
        "HIPAA security rule compliance",
        "PCI DSS cloud requirements",
        "ISO 27001 cloud controls"
      ],
      highlights: ["Multi-Standard", "Gap Analysis", "Remediation Guidance"],
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
              Cloud Security Excellence
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Cloud Security Assessments
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your cloud infrastructure, containers, and Kubernetes environments with our specialized cloud security assessment services
          </p>
        </div>

        <Tabs defaultValue="cloud-infrastructure" className="w-full items-center">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-2xl h-auto border border-border/50 shadow-xl mb-12">
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
                            <h4 className="text-xl font-bold">Assessment Coverage</h4>
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