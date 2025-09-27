import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function WhitepapersSection() {
  const whitepapers = [
    {
      title: "The State of Cybersecurity 2024",
      description:
        "Comprehensive analysis of current threat landscape and emerging security challenges facing organizations.",
      pages: "45 pages",
      category: "Industry Report",
      downloadCount: "2.3K downloads",
    },
    {
      title: "Zero Trust Implementation Guide",
      description: "Step-by-step methodology for implementing Zero Trust architecture in enterprise environments.",
      pages: "32 pages",
      category: "Implementation Guide",
      downloadCount: "1.8K downloads",
    },
    {
      title: "Advanced Persistent Threats: Detection & Response",
      description: "In-depth analysis of APT tactics and proven strategies for detection and mitigation.",
      pages: "28 pages",
      category: "Threat Analysis",
      downloadCount: "1.5K downloads",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="whitepapers">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Research</span> & Whitepapers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download our comprehensive research reports and implementation guides to strengthen your security posture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whitepapers.map((paper, index) => (
            <Card key={index} className="glass-effect hover:glow-accent transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                  <span className="px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent">
                    {paper.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">{paper.title}</CardTitle>
                <CardDescription className="text-base">{paper.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span>{paper.pages}</span>
                  <span>{paper.downloadCount}</span>
                </div>

                <Button className="w-full glow-accent group/btn">
                  <Download className="mr-2 h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
