import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ThreatOps transformed our security posture. Their proactive approach caught threats we never would have detected on our own.",
      author: "Sarah Chen",
      title: "CISO, TechCorp Industries",
      rating: 5,
    },
    {
      quote:
        "The incident response was incredible. They contained a potential breach in under 3 minutes and prevented any data loss.",
      author: "Michael Rodriguez",
      title: "IT Director, Financial Services Inc.",
      rating: 5,
    },
    {
      quote:
        "Finally, a cybersecurity partner that understands our business. Their strategic consulting has been invaluable.",
      author: "Jennifer Walsh",
      title: "CEO, Healthcare Solutions",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what our clients say about our cybersecurity services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect hover:glow-accent transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
