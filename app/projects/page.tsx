"use client"

import { useState } from "react"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/carousel"
import { Lightbulb, Search, Filter, Star, Users, Zap, ArrowRight, BookOpen } from "lucide-react"
import { ApplicationForm } from "@/components/application-form"

export default function ProjectsPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const levels = ["100", "200", "300", "400"]
  const difficulties = ["Beginner", "Intermediate", "Advanced", "Expert"]

  const projects = [
    // Level 100
    {
      id: 1,
      title: "Personal Portfolio Website",
      level: "100",
      difficulty: "Beginner",
      description: "Build your first portfolio website using HTML, CSS, and JavaScript",
      longDescription:
        "Create a responsive personal portfolio website to showcase your projects and skills. Learn about semantic HTML, CSS layouts, and basic JavaScript interactivity.",
      technologies: ["HTML", "CSS", "JavaScript"],
      duration: "2-3 weeks",
      rating: 4.7,
      students: 1250,
      image: "/portfolio-website.jpg",
      learnings: ["Responsive Design", "CSS Flexbox", "DOM Manipulation"],
      resources: 12,
    },
    {
      id: 2,
      title: "Todo List Application",
      level: "100",
      difficulty: "Beginner",
      description: "Create a functional todo list app with add, delete, and mark complete features",
      longDescription:
        "Build a simple but functional todo list application. Learn about DOM manipulation, local storage, and event handling in JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      duration: "1-2 weeks",
      rating: 4.8,
      students: 1890,
      image: "/todo-app.jpg",
      learnings: ["Event Listeners", "Local Storage", "Array Methods"],
      resources: 8,
    },
    {
      id: 3,
      title: "Weather App",
      level: "100",
      difficulty: "Beginner",
      description: "Fetch weather data from an API and display it beautifully",
      longDescription:
        "Learn to work with APIs by building a weather application. Fetch real-time weather data and display it with a nice UI.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      duration: "2 weeks",
      rating: 4.6,
      students: 1420,
      image: "/weather-app-interface.png",
      learnings: ["Fetch API", "JSON Parsing", "Error Handling"],
      resources: 10,
    },

    // Level 200
    {
      id: 4,
      title: "E-Commerce Product Page",
      level: "200",
      difficulty: "Intermediate",
      description: "Build a dynamic product page with React and state management",
      longDescription:
        "Create a fully functional e-commerce product page with React. Implement shopping cart, product filtering, and checkout flow.",
      technologies: ["React", "JavaScript", "CSS", "State Management"],
      duration: "3-4 weeks",
      rating: 4.8,
      students: 980,
      image: "/ecommerce-page.jpg",
      learnings: ["React Hooks", "State Management", "Component Composition"],
      resources: 18,
    },
    {
      id: 5,
      title: "Chat Application",
      level: "200",
      difficulty: "Intermediate",
      description: "Build a real-time chat app with WebSockets and Node.js",
      longDescription:
        "Create a real-time chat application using WebSockets. Learn about server-client communication and real-time data updates.",
      technologies: ["Node.js", "Socket.io", "React", "MongoDB"],
      duration: "4-5 weeks",
      rating: 4.9,
      students: 750,
      image: "/chat-app.jpg",
      learnings: ["WebSockets", "Real-time Communication", "Database Design"],
      resources: 22,
    },
    {
      id: 6,
      title: "Blog Platform",
      level: "200",
      difficulty: "Intermediate",
      description: "Create a full-stack blog with user authentication and CRUD operations",
      longDescription:
        "Build a complete blog platform with user authentication, post creation, editing, and deletion. Learn full-stack development.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      duration: "4 weeks",
      rating: 4.7,
      students: 1100,
      image: "/blog-platform.jpg",
      learnings: ["Authentication", "CRUD Operations", "Database Queries"],
      resources: 20,
    },

    // Level 300
    {
      id: 7,
      title: "Machine Learning Image Classifier",
      level: "300",
      difficulty: "Advanced",
      description: "Build an ML model to classify images using TensorFlow",
      longDescription:
        "Create a machine learning model that can classify images. Learn about neural networks, training, and model evaluation.",
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas"],
      duration: "5-6 weeks",
      rating: 4.9,
      students: 620,
      image: "/ml-classifier.jpg",
      learnings: ["Neural Networks", "Model Training", "Data Preprocessing"],
      resources: 25,
    },
    {
      id: 8,
      title: "Mobile App with Flutter",
      level: "300",
      difficulty: "Advanced",
      description: "Develop a cross-platform mobile app using Flutter",
      longDescription:
        "Build a feature-rich mobile application for iOS and Android using Flutter. Learn about mobile UI patterns and state management.",
      technologies: ["Flutter", "Dart", "Firebase"],
      duration: "6 weeks",
      rating: 4.8,
      students: 540,
      image: "/flutter-app.jpg",
      learnings: ["Mobile Development", "State Management", "Firebase Integration"],
      resources: 28,
    },
    {
      id: 9,
      title: "Microservices Architecture",
      level: "300",
      difficulty: "Advanced",
      description: "Design and implement a microservices-based system",
      longDescription:
        "Learn about microservices architecture by building a scalable system with multiple services, API gateways, and databases.",
      technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
      duration: "6-7 weeks",
      rating: 4.9,
      students: 480,
      image: "/placeholder.svg?height=200&width=300",
      learnings: ["Microservices", "Docker", "API Design"],
      resources: 30,
    },

    // Level 400
    {
      id: 10,
      title: "AI-Powered Analytics Platform",
      level: "400",
      difficulty: "Expert",
      description: "Build an enterprise analytics platform with AI insights",
      longDescription:
        "Create a comprehensive analytics platform that uses AI to provide insights. Integrate multiple data sources and build real-time dashboards.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      duration: "8-10 weeks",
      rating: 4.9,
      students: 320,
      image: "/placeholder.svg?height=200&width=300",
      learnings: ["Full Stack Development", "AI Integration", "Data Visualization"],
      resources: 40,
    },
    {
      id: 11,
      title: "Distributed System with Blockchain",
      level: "400",
      difficulty: "Expert",
      description: "Implement a blockchain-based distributed system",
      longDescription:
        "Build a blockchain application with smart contracts. Learn about distributed systems, cryptography, and consensus mechanisms.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "Node.js"],
      duration: "8 weeks",
      rating: 4.9,
      students: 280,
      image: "/placeholder.svg?height=200&width=300",
      learnings: ["Blockchain", "Smart Contracts", "Cryptography"],
      resources: 35,
    },
    {
      id: 12,
      title: "Real-Time Collaborative Editor",
      level: "400",
      difficulty: "Expert",
      description: "Build a Google Docs-like collaborative editor",
      longDescription:
        "Create a real-time collaborative text editor with conflict resolution, version control, and multi-user support.",
      technologies: ["React", "Node.js", "WebSockets", "Operational Transformation"],
      duration: "8-9 weeks",
      rating: 4.9,
      students: 250,
      image: "/placeholder.svg?height=200&width=300",
      learnings: ["Real-time Collaboration", "Conflict Resolution", "Advanced Architecture"],
      resources: 38,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesLevel = !selectedLevel || project.level === selectedLevel
    const matchesDifficulty = !selectedDifficulty || project.difficulty === selectedDifficulty
    const matchesSearch =
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesLevel && matchesDifficulty && matchesSearch
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
                <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                Project Ideas
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Build Real Projects
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                Explore curated project ideas from beginner to expert level. Each project includes detailed guides,
                resources, and learning outcomes.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
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

              {/* Difficulty Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedDifficulty(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                    selectedDifficulty === null
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Difficulties
                </button>
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                      selectedDifficulty === difficulty
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {filteredProjects.length > 0 ? (
              <>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
                  </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-40 sm:h-48 bg-muted overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-primary text-primary-foreground text-xs">Level {project.level}</Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              project.difficulty === "Beginner"
                                ? "bg-green-100 text-green-800"
                                : project.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : project.difficulty === "Advanced"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {project.difficulty}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{project.description}</p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <div className="flex items-center gap-1">
                              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-semibold">{project.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                              {project.students}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                              {project.resources} resources
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                          View Project <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                  <Carousel
                    items={filteredProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
                      >
                        <div className="relative h-40 bg-muted overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>

                        <div className="p-4 sm:p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-primary text-primary-foreground text-xs">Level {project.level}</Badge>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                project.difficulty === "Beginner"
                                  ? "bg-green-100 text-green-800"
                                  : project.difficulty === "Intermediate"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : project.difficulty === "Advanced"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-red-100 text-red-800"
                              }`}
                            >
                              {project.difficulty}
                            </Badge>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1">
                                <Zap className="h-3 w-3 text-accent" />
                                <span>{project.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-accent text-accent" />
                                <span className="font-semibold">{project.rating}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {project.students}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {project.resources}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 2}
                              </Badge>
                            )}
                          </div>

                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
                            View Project <ArrowRight className="ml-2 h-3 w-3" />
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
                <Lightbulb className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">No projects found</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button
                  onClick={() => {
                    setSelectedLevel(null)
                    setSelectedDifficulty(null)
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
              Have a Project Idea?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-accent-foreground/90">
              Share your project ideas with the MUITSA community. Help other students learn by contributing project
              guides and resources.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              Submit Project Idea <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}
    </div>
  )
}
