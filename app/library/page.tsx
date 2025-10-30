"use client"

import { useState } from "react"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/carousel"
import { ArrowRight, BookOpen, FileText, Download, Search, Filter, Star } from "lucide-react"
import { ApplicationForm } from "@/components/application-form"


export default function LibraryPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPdf, setSelectedPdf] = useState<any | null>(null)


  const levels = ["100", "200", "300", "400"]
  const categories = ["eBooks", "Past Questions", "Lecture Notes", "Tutorials", "Projects"]

  const resources = [
    // Level 100
    {
      id: 1,
      title: "Introduction to Programming with Python",
      level: "100",
      category: "eBooks",
      author: "Dr. Kwesi Mensah",
      downloads: 234,
      rating: 4.8,
      pages: 320,
      description: "Comprehensive guide to Python fundamentals for beginners",
      tags: ["Python", "Basics", "Programming"],
    },
    {
      id: 2,
      title: "Principles of distributed system - Past Questions 2024/2025",
      level: "400",
      category: "Past Questions",
      author: "MUITSA",
      downloads: 6,
      rating: 4.6,
      pages: 3,
      description: "Complete past exam questions",
      tags: ["Exam Prep", "CS Fundamentals"],
       fileUrl: "/past-questions/principle-distributed.pdf"
    },
    {
      id: 3,
      title: "Digital Logic & Computer Architecture Notes",
      level: "100",
      category: "Lecture Notes",
      author: "Prof. Ama Osei",
      downloads: 189,
      rating: 4.7,
      pages: 156,
      description: "Detailed lecture notes covering digital logic concepts",
      tags: ["Digital Logic", "Architecture"],
      fileUrl:"/past-questions/foundation-ebusiness.pdf"
    },
    {
      id: 4,
      title: "Web Development Basics Tutorial",
      level: "100",
      category: "Tutorials",
      author: "Kofi Dev",
      downloads: 312,
      rating: 4.9,
      pages: 0,
      description: "Interactive tutorial for HTML, CSS, and JavaScript basics",
      tags: ["Web Dev", "HTML", "CSS", "JavaScript"],
    },

    // Level 200
    {
      id: 5,
      title: "PROFESSIONAL, LEGAL AND ETHICAL ISSUES IN COMPUTING ",
      level: "400",
      category: "past questions",
      author: "Dr. Abena Boateng",
      downloads: 3,
      rating: 4.9,
      pages: 3,
      description: "theory questions",
      tags: ["DSA", "CS",],
      fileUrl: "/past-questions/prof-legal-ethics.pdf"
    },
    {
      id: 6,
      title: " Management Information Systems - 2024/2025 ",
      level: "400",
      category: "Past Questions",
      author: "MUITSA",
      downloads: 8,
      rating: 4.7,
      pages: 3,
      description: "2024/205 exam questions",
      tags: ["DBMS", "SQL", "Exam Prep"],
      fileUrl: "/past-questions/management-infomation.pdf"
    },
    {
      id: 7,
      title: "Object-Oriented Programming Lecture Notes",
      level: "200",
      category: "Lecture Notes",
      author: "Prof. Kwame Asante",
      downloads: 245,
      rating: 4.8,
      pages: 200,
      description: "Complete OOP concepts with Java examples",
      tags: ["OOP", "Java", "Design Patterns"],
    },
    {
      id: 8,
      title: "React.js Advanced Patterns Tutorial",
      level: "200",
      category: "Tutorials",
      author: "Sarah Tech",
      downloads: 423,
      rating: 4.8,
      pages: 0,
      description: "Master advanced React patterns and hooks",
      tags: ["React", "JavaScript", "Web Dev"],

    },
    {
      id: 9,
      title: "Build a Todo App - Beginner Project",
      level: "200",
      category: "Projects",
      author: "Dev Community",
      downloads: 289,
      rating: 4.6,
      pages: 0,
      description: "Step-by-step guide to build your first web application",
      tags: ["Project", "Web Dev", "Beginner"],
    },

    // Level 300
    {
      id: 10,
      title: "Software Engineering Principles & Practices",
      level: "300",
      category: "eBooks",
      author: "Dr. Yaw Mensah",
      downloads: 412,
      rating: 4.9,
      pages: 520,
      description: "Complete guide to software development lifecycle",
      tags: ["Software Engineering", "SDLC", "Best Practices"],
    },
    {
      id: 11,
      title: "Web Technologies - Comprehensive Exam Papers",
      level: "300",
      category: "Past Questions",
      author: "MUITSA",
      downloads: 334,
      rating: 4.7,
      pages: 150,
      description: "Past 3 years of web technologies exams",
      tags: ["Web Tech", "Exam Prep"],
    },
    {
      id: 12,
      title: "Mobile App Development with Flutter",
      level: "300",
      category: "Lecture Notes",
      author: "Prof. Ama Darkwah",
      downloads: 298,
      rating: 4.8,
      pages: 280,
      description: "Complete guide to Flutter development",
      tags: ["Flutter", "Mobile", "Dart"],
    },
    {
      id: 13,
      title: "Machine Learning Fundamentals Course",
      level: "300",
      category: "Tutorials",
      author: "AI Academy",
      downloads: 567,
      rating: 4.9,
      pages: 0,
      description: "Comprehensive ML course with Python and scikit-learn",
      tags: ["Machine Learning", "Python", "AI"],
    },
    {
      id: 14,
      title: "E-Commerce Platform Project",
      level: "300",
      category: "Projects",
      author: "Tech Mentors",
      downloads: 445,
      rating: 4.8,
      pages: 0,
      description: "Build a full-stack e-commerce application",
      tags: ["Project", "Full Stack", "Advanced"],
    },

    // Level 400
    {
      id: 15,
      title: "Cloud Computing & DevOps Mastery",
      level: "400",
      category: "eBooks",
      author: "Dr. Kofi Mensah",
      downloads: 523,
      rating: 4.9,
      pages: 600,
      description: "Advanced cloud architecture and DevOps practices",
      tags: ["Cloud", "DevOps", "AWS", "Docker"],
    },
    {
      id: 16,
      title: "Final Year Project Guidelines & Past Projects",
      level: "400",
      category: "Past Questions",
      author: "MUITSA",
      downloads: 289,
      rating: 4.8,
      pages: 200,
      description: "FYP guidelines with successful project examples",
      tags: ["FYP", "Capstone", "Guidelines"],
    },
    {
      id: 17,
      title: "Cybersecurity & Network Security",
      level: "400",
      category: "Lecture Notes",
      author: "Prof. Abena Mensah",
      downloads: 367,
      rating: 4.9,
      pages: 350,
      description: "Advanced cybersecurity concepts and implementations",
      tags: ["Cybersecurity", "Network Security", "Encryption"],
    },
    {
      id: 18,
      title: "Advanced AI & Deep Learning Specialization",
      level: "400",
      category: "Tutorials",
      author: "Deep Learning Institute",
      downloads: 612,
      rating: 4.9,
      pages: 0,
      description: "Master deep learning with TensorFlow and PyTorch",
      tags: ["Deep Learning", "AI", "Neural Networks"],
    },
    {
      id: 19,
      title: "Capstone: AI-Powered Analytics Platform",
      level: "400",
      category: "Projects",
      author: "Industry Experts",
      downloads: 378,
      rating: 4.9,
      pages: 0,
      description: "Build an enterprise-grade analytics platform",
      tags: ["Project", "Capstone", "Enterprise"],
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesLevel = !selectedLevel || resource.level === selectedLevel
    const matchesCategory = !selectedCategory || resource.category === selectedCategory
    const matchesSearch =
      !searchQuery ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesLevel && matchesCategory && matchesSearch
  })

  const resourcesByLevel = {
    "100": resources.filter((r) => r.level === "100"),
    "200": resources.filter((r) => r.level === "200"),
    "300": resources.filter((r) => r.level === "300"),
    "400": resources.filter((r) => r.level === "400"),
  }


  return (
    <div className="min-h-screen">
      <SideNav onApplyClick={() => setShowApplicationForm(true)} />

      <main className="lg:pl-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                MUITSA Resource Library
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                IT Learning Hub
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                Access comprehensive IT resources including eBooks, past questions, lecture notes, tutorials, and
                projects organized by academic level (100-400).
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources by title or topic..."
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
                  All Types
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

        {/* Resources Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {filteredResources.length > 0 ? (
              <>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredResources.length}</span> resources
                  </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <Card
                      key={resource.id}
                      className="p-6 hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className="mb-3 bg-primary text-primary-foreground text-xs">
                            Level {resource.level}
                          </Badge>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {resource.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{resource.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-muted-foreground">{resource.author}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-semibold">{resource.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            {resource.downloads}
                          </div>
                          {resource.pages > 0 && (
                            <div className="flex items-center gap-1">
                              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                              {resource.pages} pages
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
  size="sm"
  onClick={() => {
    if (resource.fileUrl) {
      const link = document.createElement("a")
      link.href = resource.fileUrl
      link.download = resource.title + ".pdf"
      link.click()
    }
  }}
>
  {resource.category === "Tutorials" || resource.category === "Projects" ? "Access" : "Download"}
  <Download className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
</Button>

                    </Card>
                  ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                  <Carousel
                    items={filteredResources.map((resource) => (
                      <Card
                        key={resource.id}
                        className="p-4 sm:p-6 hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <Badge className="mb-2 bg-primary text-primary-foreground text-xs">
                            Level {resource.level}
                          </Badge>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-1 line-clamp-2">
                          {resource.description}
                        </p>

                        <div className="space-y-2 mb-3 sm:mb-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{resource.author}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-accent text-accent" />
                              <span className="font-semibold">{resource.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {resource.downloads}
                            </div>
                            {resource.pages > 0 && (
                              <div className="flex items-center gap-1">
                                <FileText className="h-3 w-3" />
                                {resource.pages}p
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {resource.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                    <Button
  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
  size="sm"
  onClick={() => {
    if (resource.fileUrl) {
      const link = document.createElement("a")
      link.href = resource.fileUrl
      link.download = resource.title + ".pdf"
      link.click()
    }
  }}
>
  {resource.category === "Tutorials" || resource.category === "Projects" ? "Access" : "Download"}
  <Download className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
</Button>

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
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">No resources found</h3>
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

        {/* Level-Based Overview */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">Resources by Level</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Explore curated resources for each academic level
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {levels.map((level) => (
                <Card key={level} className="p-6 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-3 sm:mb-4">{level}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Level {level}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resourcesByLevel[level as keyof typeof resourcesByLevel].length} resources available
                  </p>
                  <div className="space-y-2 mb-4">
                    {resourcesByLevel[level as keyof typeof resourcesByLevel].slice(0, 3).map((resource) => (
                      <div key={resource.id} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {resource.category}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    onClick={() => setSelectedLevel(level)}
                  >
                    Explore <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Contribute Your Resources
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-accent-foreground/90">
              Have valuable IT resources to share? Help fellow students by contributing your notes, projects, or
              tutorials to the library.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              Submit Resource <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}
