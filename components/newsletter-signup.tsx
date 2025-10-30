"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed:", email)
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-32 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-6 lg:px-12">
        <Card className="p-12 bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <Mail className="h-3 w-3 mr-2 inline" />
                Stay Updated
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get Weekly Tech Insights</h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Subscribe to our newsletter for job opportunities, learning resources, event updates, and exclusive
                content from industry experts.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Weekly job recommendations
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Learning resources and tutorials
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Event announcements and updates
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground text-foreground placeholder:text-muted-foreground"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              {subscribed && <p className="text-sm text-accent font-semibold">Thank you for subscribing!</p>}
              <p className="text-xs text-primary-foreground/70">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}
