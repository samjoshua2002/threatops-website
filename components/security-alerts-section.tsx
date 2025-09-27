import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, TrendingUp } from "lucide-react"

export function SecurityAlertsSection() {
  const alerts = [
    {
      title: "Critical: New Windows RCE Vulnerability",
      description: "Microsoft patches critical remote code execution vulnerability affecting Windows 10/11 systems.",
      severity: "Critical",
      date: "2 hours ago",
      cve: "CVE-2024-1234",
      affected: "Windows 10/11",
    },
    {
      title: "High: Apache Struts Security Update",
      description: "Apache releases security update addressing multiple vulnerabilities in Struts framework.",
      severity: "High",
      date: "6 hours ago",
      cve: "CVE-2024-5678",
      affected: "Apache Struts 2.x",
    },
    {
      title: "Medium: Chrome Browser Update Available",
      description: "Google Chrome security update addresses several medium-severity vulnerabilities.",
      severity: "Medium",
      date: "1 day ago",
      cve: "CVE-2024-9012",
      affected: "Chrome 120.x",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "text-red-400 bg-red-400/20"
      case "High":
        return "text-orange-400 bg-orange-400/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-400/20"
      default:
        return "text-accent bg-accent/20"
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="alerts">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Security</span> Alerts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest security vulnerabilities and threats affecting your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {alerts.map((alert, index) => (
            <Card key={index} className="glass-effect hover:glow-accent transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors mb-2">
                        {alert.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">{alert.description}</CardDescription>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className={`px-3 py-1 rounded-full font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {alert.date}
                        </div>
                        <span className="text-muted-foreground">CVE: {alert.cve}</span>
                        <span className="text-muted-foreground">Affects: {alert.affected}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="glass-effect bg-transparent group">
            <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Subscribe to Security Alerts
          </Button>
        </div>
      </div>
    </section>
  )
}
