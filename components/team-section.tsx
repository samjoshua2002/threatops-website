import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former NSA cybersecurity analyst with 15+ years of experience in threat intelligence and incident response.",
      image: "/professional-woman-ceo-cybersecurity.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google security engineer specializing in AI-powered threat detection and automated response systems.",
      image: "/professional-man-cto-cybersecurity.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Threat Intelligence",
      bio: "PhD in Computer Security with expertise in advanced persistent threats and nation-state attack patterns.",
      image: "/professional-woman-doctor-cybersecurity.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "James Park",
      role: "Director of Incident Response",
      bio: "Former FBI cybercrime investigator with extensive experience in digital forensics and crisis management.",
      image: "/professional-man-director-cybersecurity.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="team">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry veterans with decades of combined experience in cybersecurity, threat intelligence, and incident
            response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="glass-effect hover:glow-accent transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <div className="text-accent text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-lg glass-effect hover:bg-accent/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-lg glass-effect hover:bg-accent/10 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
