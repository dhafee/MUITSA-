import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Software Engineer at TechStart Ghana",
      image: "K",
      text: "MUISA helped me land my first tech job through their job portal and mentorship program. The resources and community support were invaluable.",
      rating: 5,
    },
    {
      name: "Ama Osei",
      role: "Data Scientist at Analytics Pro",
      image: "A",
      text: "The knowledge hub and workshops transformed my understanding of machine learning. I went from beginner to confident practitioner in 6 months.",
      rating: 5,
    },
    {
      name: "Kofi Mensah",
      role: "UI/UX Designer at Creative Agency",
      image: "K",
      text: "The networking events and career fair connected me with amazing opportunities. MUISA is truly a game-changer for IT students.",
      rating: 5,
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">What Members Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Hear from MUISA members who have transformed their careers and academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
