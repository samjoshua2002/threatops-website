import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,224,0.1),transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-effect p-12 rounded-2xl glow-accent">
          <Shield className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Secure Your Future</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Don't wait for a security incident to realize the importance of proactive cybersecurity. Get started with a
            comprehensive security assessment today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-accent animate-pulse-glow group">
              Get Your Free Security Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform hover:text-white" />
            </Button>
            <Button variant="outline" size="lg" className="glass-effect bg-transparent">
              Schedule a Consultation
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • Expert consultation • Tailored recommendations
          </p>
        </div>
      </div>
    </section>
  )
}
