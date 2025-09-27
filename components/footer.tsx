import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "Threat Hunting", href: "/services#threat-hunting" },
      { name: "Incident Response", href: "/services#incident-response" },
      { name: "Security Consulting", href: "/services#consulting" },
      { name: "Security Training", href: "/services#training" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "/resources" },
      { name: "Case Studies", href: "/resources#case-studies" },
      { name: "Whitepapers", href: "/resources#whitepapers" },
      { name: "Security Alerts", href: "/resources#alerts" },
    ],
  }

  return (
    <footer className="bg-[#031018] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-gradient">ThreatOps</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Advanced cybersecurity solutions that protect your business before threats become breaches. Proactive.
              Reliable. Always vigilant.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                contact@threatops.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                1-800-THREATOPS
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 ThreatOps. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
