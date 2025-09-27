import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Essential",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small to medium businesses looking to establish basic security foundations.",
      features: [
        "Basic threat monitoring",
        "Monthly security reports",
        "Email support",
        "Basic incident response",
        "Security awareness training",
        "Compliance guidance",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Comprehensive security for growing businesses with advanced threat protection needs.",
      features: [
        "24/7 threat hunting",
        "Advanced incident response",
        "Weekly security reports",
        "Priority phone support",
        "Custom security training",
        "Compliance audits",
        "Vulnerability assessments",
        "Security consulting",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored security solutions for large organizations with complex requirements.",
      features: [
        "Dedicated security team",
        "Real-time threat intelligence",
        "Custom integrations",
        "24/7 dedicated support",
        "Executive security briefings",
        "Advanced compliance support",
        "Custom security architecture",
        "Unlimited consulting hours",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the security plan that fits your business needs. All plans include our core security services with no
            hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-effect transition-all duration-300 relative ${
                plan.popular ? "glow-accent scale-105 border-accent/50" : "hover:glow-accent hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "glow-accent" : ""} group hover:text-white`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom solution? We work with organizations of all sizes.</p>
          <Button variant="outline" className="glass-effect bg-transparent">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
