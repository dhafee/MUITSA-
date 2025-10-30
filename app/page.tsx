"use client"

import { useState } from "react"
import   Link  from "next/link"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/carousel"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Users,
  MessageSquare,
  Code,
  Zap,
  Trophy,
  ExternalLink,
  MapPin,
  Clock,
  User,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import { ApplicationForm } from "@/components/application-form"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { StatsShowcase } from "@/components/stats-showcase"

export default function Home() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [likedJobs, setLikedJobs] = useState<number[]>([])

  const toggleJobLike = (id: number) => {
    setLikedJobs((prev) => (prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]))
  }

  const jobsData = [
    {
      id: 1,
      title: "Full-Stack Development Intern",
      company: "Xacent Global Technologies Inc",
      location: "Accra",
      type: "part-time",
      salary: "GHS 3,000",
      tags: ["React", "JavaScript", "CSS"],
      link: "https://www.glmis.gov.gh/JobPostings/JobDetails/2936" 
    },
    {
      id: 2,
      title: "Front End Web Developer Interns (Paid)",
      company: "Base Element",
      location: "Accra",
      type: "part-time",
      salary: "GHS 4,000",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "https://www.baseelement.digital/en/careers/front_end_developer_intern"
    },
    {
      id: 3,
      title: "Programme Intern – Administrative/Programmatic (Impact Investing Ghana)",
      company: "Impact Investing Ghana",
      location: "Ghana",
      type: "Internship",
      salary: "GHS -undisclosed",
      tags: ["Figma", "Design", "Prototyping"],
      link: "https://impactinvestinggh.org/job-openings/call-for-programme-interns/"
    },
    {
      id: 4,
      title: "Web Developer Intern",
      company: "TechJobsInGhana",
      location: "Accra, Remote",
      type: "Internship",
      salary: "Stipend Available",
      tags: ["html", "javascript", "SQL"],
      link: "https://techjobsinghana.com/tjig-jobs/web-developer-intern/"
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "Wise Soft Lab",
      location: "Accra / Remote",
      type: "Internship",
      salary: "Stipend Available",
      tags: ["TypeScript", "React", "Next.js"],
      link: "https://www.ghanajob.com/job-vacancies-ghana/software-engineer-intern-159663"
    },
    {
      id: 6,
      title: "IT Internship” listings portal – multiple roles",
      company: "LinkedIn Jobs for IT internships in Ghana (updated daily)",
      location: "Ghana",
      type: "Internship",
      salary: "Stipend Available",
      tags: ["Daily listing", "various field"],
      link: "linkedin.com/jobs/it-internship-jobs?utm_source=chatgpt%2Ecom&originalSubdomain=gh"
    },
  ]

  const eventsData = [
    {
      date: "OCT 30",
      title: "About MUITSA & Website Launch",
      description: "Learn more MUITSA and explore our new website features",
      attendees: 45,
      type: "Workshop",
    },
    {
      date: "Nov 22",
      title: "Hackathon 2024",
      description: "48-hour coding challenge with prizes and networking",
      attendees: 20,
      type: "Hackathon",
    },
    {
      date: "Dec 5",
      title: "Tech Talk: AI & Machine Learning",
      description: "Industry experts discuss latest trends in AI/ML",
      attendees: 80,
      type: "Talk",
    },
    {
      date: "Dec 12",
      title: "Career Fair",
      description: "Meet top tech companies and explore job opportunities",
      attendees: 30,
      type: "Fair",
    },
  ]

  const membersData = [
    { name: "Kwame Asante", role: "Full Stack Developer", year: "3rd Year", skills: "React, Node.js" },
    { name: "Ama Osei", role: "Data Scientist", year: "2nd Year", skills: "Python, ML" },
    { name: "Kofi Mensah", role: "UI/UX Designer", year: "3rd Year", skills: "Figma, Design" },
    { name: "Abena Boateng", role: "DevOps Engineer", year: "4th Year", skills: "Docker, AWS" },
  ]

  return (
    <div className="min-h-screen">
      <SideNav onApplyClick={() => setShowApplicationForm(true)} />

      {/* Main Content with left padding for side nav */}
      <main className="lg:pl-20">
        {/* Hero Section - Bold MUISA Branding */}
        <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <Badge className="bg-accent text-accent-foreground text-xs sm:text-sm px-3 sm:px-4 py-2 w-fit">
                  <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                  MUITSA -  Excellence Hub
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight sm:leading-none text-balance">
                  CODE YOUR
                  <span className="block text-primary">FUTURE</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Methodist University IT Student Association - Empowering the next generation of tech innovators,
                  developers, and digital leaders.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Join MUITSA <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto bg-transparent w-full sm:w-auto"
                  >
                    Explore Resources
                  </Button>
                </div>

                {/* Stats Row - Made responsive with flex-wrap */}
                <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Members</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">150+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Resources</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Job Listings</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Overlapping Cards - Hidden on mobile, visible on lg */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:block">
                {/* Large Image Card */}
                <Card className="absolute top-0 right-0 w-[300px] sm:w-[350px] lg:w-[400px] h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden shadow-2xl">
                  <img
                    src="/it-students-coding-together-in-modern-tech-lab.jpg"
                    alt="MUITSA Members"
                    className="w-full h-full object-cover"
                  />
                </Card>

                {/* Floating Info Card */}
                <Card className="absolute bottom-0 left-0 p-4 sm:p-6 bg-accent text-accent-foreground shadow-xl max-w-[250px] sm:max-w-[280px]">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                  <p className="text-xs sm:text-sm">Career Support & Mentorship</p>
                </Card>

                {/* Small Accent Card */}
                <Card className="absolute top-20 left-20 p-3 sm:p-4 bg-primary text-primary-foreground shadow-lg">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                  <p className="text-xs sm:text-sm font-semibold">Tech Workshops</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Hub Section - Made responsive with carousel on mobile */}
        <section id="knowledge-hub" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">Knowledge Hub</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                IT Resources & Learning
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Comprehensive collection of tutorials, guides, and resources to accelerate your IT career and academic
                growth.
              </p>
            </div>

            {/* Bento Grid Layout - Desktop */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
              {/* Large Card - Programming */}
              <Card className="lg:col-span-2 lg:row-span-2 p-6 sm:p-8 bg-primary text-primary-foreground hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <Code className="h-10 sm:h-12 w-10 sm:w-12 mb-3 sm:mb-4" />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Programming Languages</h3>
                    <p className="text-sm sm:text-base text-primary-foreground/90 mb-4 sm:mb-6">
                      Master Python, JavaScript, Java, C++, and more with curated tutorials and projects.
                    </p>
                  </div>
                   <Link href="/tutorials">
                  <Button
                    variant="secondary"
                    className="w-fit group-hover:translate-x-2 transition-transform text-xs sm:text-sm"
                  >
                    Explore <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  </Link>
                </div>
              </Card>

              {/* Medium Card - Web Dev */}
              <Card className="lg:col-span-1 lg:row-span-1 p-4 sm:p-6 bg-accent text-accent-foreground hover:shadow-xl transition-shadow group cursor-pointer">
                <BookOpen className="h-8 sm:h-10 w-8 sm:w-10 mb-2 sm:mb-3" />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Web Development</h3>
                <p className="text-xs sm:text-sm text-accent-foreground/90">React, Vue, Node.js guides</p>
              </Card>

              {/* Medium Card - Data Science */}
              <Card className="lg:col-span-1 lg:row-span-1 p-4 sm:p-6 hover:shadow-xl transition-shadow group cursor-pointer">
                <Trophy className="h-8 sm:h-10 w-8 sm:w-10 mb-2 sm:mb-3 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Data Science</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">ML, AI, Analytics resources</p>
              </Card>

              {/* Wide Card - Certifications */}
              <Card className="lg:col-span-2 lg:row-span-1 p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-accent/10 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between h-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Certification Paths</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">AWS, Azure, Google Cloud prep</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-transparent flex-shrink-0"
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Mobile Carousel - Carousel for mobile view */}
            <div className="lg:hidden">
              <Carousel
                items={[
                  <Card
                    key="prog"
                    className="p-6 bg-primary text-primary-foreground h-full flex flex-col justify-between"
                  >
                    <div>
                      <Code className="h-10 w-10 mb-3" />
                      <h3 className="text-xl font-bold mb-3">Programming Languages</h3>
                      <p className="text-sm text-primary-foreground/90 mb-4">
                        Master Python, JavaScript, Java, C++, and more with curated tutorials and projects.
                      </p>
                    </div>
                    <Button variant="secondary" className="w-fit text-xs">
                      Explore <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Card>,
                  <Card key="web" className="p-6 bg-accent text-accent-foreground h-full flex flex-col justify-between">
                    <div>
                      <BookOpen className="h-10 w-10 mb-3" />
                      <h3 className="text-xl font-bold mb-2">Web Development</h3>
                      <p className="text-sm text-accent-foreground/90">React, Vue, Node.js guides</p>
                    </div>
                  </Card>,
                  <Card key="data" className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <Trophy className="h-10 w-10 mb-3 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Data Science</h3>
                      <p className="text-sm text-muted-foreground">ML, AI, Analytics resources</p>
                    </div>
                  </Card>,
                  <Card
                    key="cert"
                    className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2">Certification Paths</h3>
                      <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud prep</p>
                    </div>
                  </Card>,
                ]}
                itemsPerView={1}
                autoPlay={true}
                autoPlayInterval={5000}
              />
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                { title: "Video Tutorials", count: "45+", icon: "🎥", link: "/tutorials" },
                { title: "Code Snippets", count: "200+", icon: "📝", link: "/snippets" },
                { title: "Project Ideas", count: "80+", icon: "💡", link: "/projects" },
              ].map((resource, idx) => (
                <Card key={idx} className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{resource.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{resource.count}</p>
                  
                  <Link href={resource.link}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform text-xs sm:text-sm"
                  >
                    Browse <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Portal Section - Made responsive with carousel on mobile */}
        <section id="job-portal" className="py-16 sm:py-24 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0 mb-12 sm:mb-16">
              <div>
                <Badge className="mb-3 sm:mb-4 bg-background text-foreground text-xs sm:text-sm">Job Portal</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
                  IT Career Opportunities
                </h2>
              </div>
              <Button
                variant="outline"
                className="hidden md:flex bg-transparent border-background text-background hover:bg-background hover:text-foreground text-sm"
              >
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobsData.map((job) => (
                <Card
                  key={job.id}
                  className="p-6 bg-background text-foreground hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{job.company}</p>
                    </div>
                    <button
                      onClick={() => toggleJobLike(job.id)}
                      className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                    >
                      <ThumbsUp className={`h-5 w-5 ${likedJobs.includes(job.id) ? "fill-accent text-accent" : ""}`} />
                    </button>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      {job.type}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-primary">{job.salary}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

               <Button
  variant="outline"
  size="sm"
  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-xs sm:text-sm"
  onClick={() => window.open(job.link, "_blank")}
>
  View Details <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
</Button>

                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <Carousel
                items={jobsData.map((job) => (
                  <Card
                    key={job.id}
                    className="p-4 sm:p-6 bg-background text-foreground hover:shadow-xl transition-all group cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {job.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{job.company}</p>
                      </div>
                      <button
                        onClick={() => toggleJobLike(job.id)}
                        className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0 ml-2"
                      >
                        <ThumbsUp
                          className={`h-4 w-4 ${likedJobs.includes(job.id) ? "fill-accent text-accent" : ""}`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2 mb-3 sm:mb-4 flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 flex-shrink-0" />
                        {job.type}
                      </div>
                      <div className="text-xs font-semibold text-primary">{job.salary}</div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-xs"
                    >
                      View Details <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </Card>
                ))}
                itemsPerView={1}
                autoPlay={true}
                autoPlayInterval={6000}
              />
            </div>
          </div>
        </section>

        <StatsShowcase />

        {/* Events Section - Made responsive with carousel on mobile */}
        <section id="events" className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-accent text-accent-foreground text-xs sm:text-sm">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                Upcoming Events
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                MUITSA Events Calendar
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl">
                Join us for workshops, hackathons, networking events, and tech talks throughout the year.
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {eventsData.map((event, idx) => (
                <Card
                  key={idx}
                  className="p-6 sm:p-8 bg-primary-foreground text-foreground hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{event.date}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm flex-shrink-0">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Users className="h-4 w-4 flex-shrink-0" />
                      {event.attendees} attending
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-xs sm:text-sm"
                    >
                      Register <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <Carousel
                items={eventsData.map((event, idx) => (
                  <Card
                    key={idx}
                    className="p-4 sm:p-6 bg-primary-foreground text-foreground hover:shadow-2xl transition-all group cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{event.date}</div>
                        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs flex-shrink-0">{event.type}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-1 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3 flex-shrink-0" />
                        {event.attendees}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-xs"
                      >
                        Register <ArrowRight className="ml-2 h-2 w-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
                itemsPerView={1}
                autoPlay={true}
                autoPlayInterval={5000}
              />
            </div>
          </div>
        </section>

        {/* Member Directory Section - Made responsive with carousel on mobile */}
        <section id="members" className="py-16 sm:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">Member Directory</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Meet Our Community
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Connect with talented IT students and professionals in our growing community.
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membersData.map((member, idx) => (
                <Card key={idx} className="p-4 sm:p-6 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-3 sm:mb-4 flex items-center justify-center text-white text-lg sm:text-2xl font-bold flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-1 sm:mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-2 sm:mb-3">{member.year}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {member.skills.split(", ").map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <Carousel
                items={membersData.map((member, idx) => (
                  <Card
                    key={idx}
                    className="p-4 sm:p-6 hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
                  >
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-3 sm:mb-4 flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-2 flex-1">{member.year}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.split(", ").map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
                itemsPerView={1}
                autoPlay={true}
                autoPlayInterval={4000}
              />
            </div>
          </div>
        </section>

        {/* Discussion Forum Section */}
        <section id="forum" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">Community Forum</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Latest Discussions
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Ask questions, share knowledge, and collaborate with fellow IT enthusiasts.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Best practices for React performance optimization",
                  author: "Kwame Asante",
                  replies: 12,
                  views: 245,
                  tags: ["React", "Performance"],
                },
                {
                  title: "How to prepare for AWS certification exam?",
                  author: "Abena Boateng",
                  replies: 8,
                  views: 156,
                  tags: ["AWS", "Certification"],
                },
                {
                  title: "Recommended resources for learning Machine Learning",
                  author: "Ama Osei",
                  replies: 15,
                  views: 312,
                  tags: ["ML", "Learning"],
                },
              ].map((thread, idx) => (
                <Card key={idx} className="p-4 sm:p-6 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {thread.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 sm:h-4 sm:w-4" />
                          {thread.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {thread.replies}
                        </div>
                        <div>{thread.views}</div>
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {thread.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-0 sm:ml-4 bg-transparent text-xs sm:text-sm flex-shrink-0"
                    >
                      View <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
            >
              Start New Discussion - feature unlocks soon<MessageSquare className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        <Testimonials />

        <NewsletterSignup />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 sm:mb-8 text-balance">
              Ready to Join MUITSA?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-accent-foreground/90">
              Become part of a thriving community of IT enthusiasts, developers, and innovators. Access exclusive
              resources, job opportunities, and networking events.
            </p>
            <Button
              size="lg"
              onClick={() => setShowApplicationForm(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto w-full sm:w-auto"
            >
              Join Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}
    </div>
  )
}
