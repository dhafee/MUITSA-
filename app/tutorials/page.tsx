"use client"

import { useState } from "react"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/carousel"
import { Play, Search, Filter, Star, Clock, Users, ArrowRight } from "lucide-react"
import { ApplicationForm } from "@/components/application-form"

export default function TutorialsPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const levels = ["100", "200", "300", "400"]
  const categories = ["Web Development", "Mobile Dev", "Data Science", "DevOps", "AI/ML"]

  const tutorials = [
    // Level 100
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      level: "100",
      category: "Web Development",
      instructor: "Kofi Dev",
      duration: "4h 30m",
      students: 1250,
      rating: 4.8,
      description: "Learn the basics of HTML and CSS to build beautiful web pages",
      thumbnail: "/html-css-tutorial.jpg",
      videoCount: 25,
      tags: ["HTML", "CSS", "Beginner"],
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      level: "100",
      category: "Web Development",
      instructor: "Sarah Tech",
      duration: "6h 15m",
      students: 1890,
      rating: 4.9,
      description: "Master JavaScript fundamentals and DOM manipulation",
      thumbnail: "/javascript-tutorial.jpg",
      videoCount: 32,
      tags: ["JavaScript", "DOM", "Beginner"],
    },
    {
      id: 3,
      title: "Python for Beginners",
      level: "100",
      category: "Data Science",
      instructor: "Dr. Kwesi Mensah",
      duration: "5h 45m",
      students: 2100,
      rating: 4.7,
      description: "Start your programming journey with Python",
      thumbnail: "/python-beginner.jpg",
      videoCount: 28,
      tags: ["Python", "Programming", "Beginner"],
    },

    // Level 200
    {
      id: 4,
      title: "React.js Complete Guide",
      level: "200",
      category: "Web Development",
      instructor: "Ama Frontend",
      duration: "8h 20m",
      students: 1650,
      rating: 4.9,
      description: "Build modern web applications with React hooks and state management",
      thumbnail: "/react-tutorial.jpg",
      videoCount: 42,
      tags: ["React", "JavaScript", "Web Dev"],
    },
    {
      id: 5,
      title: "Flutter Mobile Development",
      level: "200",
      category: "Mobile Dev",
      instructor: "Prof. Ama Darkwah",
      duration: "7h 50m",
      students: 980,
      rating: 4.8,
      description: "Create beautiful cross-platform mobile apps with Flutter",
      thumbnail: "/flutter-tutorial.jpg",
      videoCount: 38,
      tags: ["Flutter", "Mobile", "Dart"],
    },
    {
      id: 6,
      title: "Data Analysis with Pandas",
      level: "200",
      category: "Data Science",
      instructor: "Dr. Abena Boateng",
      duration: "6h 30m",
      students: 1420,
      rating: 4.8,
      description: "Learn data manipulation and analysis using Pandas library",
      thumbnail: "/pandas-tutorial.jpg",
      videoCount: 35,
      tags: ["Python", "Data Analysis", "Pandas"],
    },

    // Level 300
    {
      id: 7,
      title: "Advanced React Patterns",
      level: "300",
      category: "Web Development",
      instructor: "Kwame Advanced",
      duration: "9h 15m",
      students: 850,
      rating: 4.9,
      description: "Master advanced React patterns, performance optimization, and testing",
      thumbnail: "/advanced-react.jpg",
      videoCount: 48,
      tags: ["React", "Advanced", "Performance"],
    },
    {
      id: 8,
      title: "Machine Learning Fundamentals",
      level: "300",
      category: "AI/ML",
      instructor: "AI Academy",
      duration: "10h 45m",
      students: 1200,
      rating: 4.9,
      description: "Introduction to machine learning algorithms and scikit-learn",
      thumbnail: "/machine-learning.jpg",
      videoCount: 52,
      tags: ["ML", "Python", "AI"],
    },
    {
      id: 9,
      title: "Docker & Containerization",
      level: "300",
      category: "DevOps",
      instructor: "DevOps Master",
      duration: "7h 20m",
      students: 920,
      rating: 4.8,
      description: "Learn containerization with Docker for scalable applications",
      thumbnail: "/docker-tutorial.jpg",
      videoCount: 40,
      tags: ["Docker", "DevOps", "Containers"],
    },

    // Level 400
    {
      id: 10,
      title: "Deep Learning with TensorFlow",
      level: "400",
      category: "AI/ML",
      instructor: "Deep Learning Institute",
      duration: "12h 30m",
      students: 650,
      rating: 4.9,
      description: "Build neural networks and deep learning models with TensorFlow",
      thumbnail: "/tensorflow-tutorial.jpg",
      videoCount: 58,
      tags: ["Deep Learning", "TensorFlow", "AI"],
    },
    {
      id: 11,
      title: "Kubernetes & Orchestration",
      level: "400",
      category: "DevOps",
      instructor: "Cloud Expert",
      duration: "11h 45m",
      students: 580,
      rating: 4.9,
      description: "Master Kubernetes for container orchestration and deployment",
      thumbnail: "/kubernetes-tutorial.jpg",
      videoCount: 55,
      tags: ["Kubernetes", "DevOps", "Cloud"],
    },
    {
      id: 12,
      title: "Full Stack Web Development Capstone",
      level: "400",
      category: "Web Development",
      instructor: "Full Stack Master",
      duration: "15h 20m",
      students: 420,
      rating: 4.9,
      description: "Build production-ready full stack applications from scratch",
      thumbnail: "/fullstack-capstone.jpg",
      videoCount: 65,
      tags: ["Full Stack", "Advanced", "Capstone"],
    },
  ]

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesLevel = !selectedLevel || tutorial.level === selectedLevel
    const matchesCategory = !selectedCategory || tutorial.category === selectedCategory
    const matchesSearch =
      !searchQuery ||
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesLevel && matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <SideNav onApplyClick={() => setShowApplicationForm(true)} />

      <main className="lg:pl-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                Video Tutorials
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Learn by Watching
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                Access comprehensive video tutorials covering web development, mobile apps, data science, and more.
                Learn at your own pace with expert instructors.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 rounded-lg border border-border bg-background text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sm:py-12 bg-background border-b border-border sticky top-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="space-y-4 sm:space-y-0 sm:flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0">
              <div className="flex items-center gap-2 text-sm font-semibold flex-shrink-0">
                <Filter className="h-4 w-4" />
                Filters:
              </div>

              {/* Level Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                    selectedLevel === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Levels
                </button>
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                      selectedLevel === level
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    Level {level}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                    selectedCategory === null
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {filteredTutorials.length > 0 ? (
              <>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredTutorials.length}</span> tutorials
                  </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTutorials.map((tutorial) => (
                    <Card
                      key={tutorial.id}
                      className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-40 sm:h-48 bg-muted overflow-hidden">
                        <img
                          src={tutorial.thumbnail || "/placeholder.svg"}
                          alt={tutorial.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-12 w-12 text-white fill-white" />
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <Badge className="mb-3 w-fit bg-primary text-primary-foreground text-xs">
                          Level {tutorial.level}
                        </Badge>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {tutorial.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{tutorial.description}</p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-muted-foreground">{tutorial.instructor}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-semibold">{tutorial.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                              {tutorial.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                              {tutorial.students}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutorial.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                          Watch Now <Play className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                  <Carousel
                    items={filteredTutorials.map((tutorial) => (
                      <Card
                        key={tutorial.id}
                        className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
                      >
                        <div className="relative h-40 bg-muted overflow-hidden">
                          <img
                            src={tutorial.thumbnail || "/placeholder.svg"}
                            alt={tutorial.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="h-10 w-10 text-white fill-white" />
                          </div>
                        </div>

                        <div className="p-4 sm:p-6 flex flex-col flex-1">
                          <Badge className="mb-2 w-fit bg-primary text-primary-foreground text-xs">
                            Level {tutorial.level}
                          </Badge>

                          <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {tutorial.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">
                            {tutorial.description}
                          </p>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{tutorial.instructor}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-accent text-accent" />
                                <span className="font-semibold">{tutorial.rating}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {tutorial.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {tutorial.students}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {tutorial.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
                            Watch Now <Play className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                    itemsPerView={1}
                    autoPlay={true}
                    autoPlayInterval={6000}
                  />
                </div>
              </>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <Play className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">No tutorials found</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button
                  onClick={() => {
                    setSelectedLevel(null)
                    setSelectedCategory(null)
                    setSearchQuery("")
                  }}
                  variant="outline"
                  className="text-sm"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Create Your Own Tutorial
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-accent-foreground/90">
              Share your knowledge with the MUISA community. Submit your video tutorials and help other students learn.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              Submit Tutorial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}
    </div>
  )
}
