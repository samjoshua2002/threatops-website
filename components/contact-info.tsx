import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "24/7 incident response",
      value: "1-800-THREATOPS",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "General Inquiries",
      description: "Sales and support",
      value: "contact@threatops.com",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support",
      value: "Available 9 AM - 6 PM PST",
      action: "Start Chat",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Emergency Support Only" },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-xl">Get in Touch</CardTitle>
          <CardDescription>Multiple ways to reach our cybersecurity experts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 glass-effect rounded-lg hover:glow-accent transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-accent/10">
                <method.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{method.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                <p className="text-sm font-medium mb-2">{method.value}</p>
                <Button size="sm" variant="outline" className="glass-effect bg-transparent">
                  {method.action}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Clock className="w-5 h-5 text-accent mr-2" />
            Office Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
              >
                <span className="text-sm font-medium">{schedule.day}</span>
                <span className="text-sm text-muted-foreground">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 glass-effect rounded-lg">
            <p className="text-sm text-muted-foreground mb-3">
              <strong className="text-accent">Emergency Support:</strong> Available 24/7 for critical security incidents
            </p>
            <Button size="sm" className="glow-accent">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Line
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <MapPin className="w-5 h-5 text-accent mr-2" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">ThreatOps Headquarters</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                123 Security Boulevard
                <br />
                Suite 500
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
            <Button variant="outline" className="glass-effect bg-transparent">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-effect glow-accent">
        <CardHeader>
          <CardTitle className="text-xl">Quick Actions</CardTitle>
          <CardDescription>Fast-track your security assessment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full glow-accent group">
            <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Schedule Free Consultation
          </Button>
          <Button variant="outline" className="w-full glass-effect bg-transparent">
            <Phone className="w-4 h-4 mr-2" />
            Request Emergency Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
