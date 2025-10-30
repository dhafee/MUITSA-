import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function StatsShowcase() {
  const stats = [
    { label: "Active Members", value: "500+", icon: "👥" },
    { label: "Learning Resources", value: "150+", icon: "📚" },
    { label: "Job Opportunities", value: "50+", icon: "💼" },
    { label: "Events Hosted", value: "30+", icon: "🎯" },
    { label: "Success Rate", value: "95%", icon: "🚀" },
    { label: "Partner Companies", value: "25+", icon: "🤝" },
  ]

  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-background text-foreground">By The Numbers</Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">MUISA Impact</h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            See how MUISA is transforming IT education and career opportunities at Methodist University.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-8 bg-background text-foreground hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
