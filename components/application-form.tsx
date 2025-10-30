"use client"

import type React from "react"
import emailjs from "emailjs-com"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface ApplicationFormProps {
  onClose: () => void
}

export function ApplicationForm({ onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    year: "",
    specialization: "",
    interests: [] as string[],
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_0qwmhfs", 
        "template_b1fbovs",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          studentId: formData.studentId,
          year: formData.year,
          specialization: formData.specialization,
          interests: formData.interests.join(", "),
          message: formData.message,
        },
        "Cijg8q0NiZxBNtKFf"
      )

      
      .then(() => {
        alert("Thank you for joining MUITSA! Your application has been received.")
        onClose()
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        alert("Something went wrong. Please try again.")
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl my-8">
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl">Join MUITSA</CardTitle>
          <CardDescription>
            Become a member of Methodist University IT Student Association and unlock exclusive benefits, resources, and opportunities.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+233 XX XXX XXXX" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID *</Label>
                <Input id="studentId" name="studentId" required value={formData.studentId} onChange={handleChange} placeholder="e.g., MUG2024001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study *</Label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">IT Specialization *</Label>
              <select
                id="specialization"
                name="specialization"
                required
                value={formData.specialization}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select specialization</option>
                <option value="web-dev">Web Development</option>
                <option value="mobile-dev">Mobile Development</option>
                <option value="data-science">Data Science & AI</option>
                <option value="devops">DevOps & Cloud</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="general">General IT</option>
              </select>
            </div>

            <div className="space-y-3">
              <Label>Areas of Interest</Label>
              <div className="grid grid-cols-2 gap-3">
                {["Workshops", "Hackathons", "Job Portal", "Mentorship", "Networking", "Projects"].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-4 h-4 rounded border-input"
                    />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell Us About Yourself</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your IT interests, goals, and what you hope to gain from MUISA..."
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">Join MUISA</Button>
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
