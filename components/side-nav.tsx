"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Home,
  BookOpen,
  Briefcase,
  Calendar,
  Users,
  MessageSquare,
  Code,
  Library,
  Play,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SideNavProps {
  onApplyClick: () => void
}

export function SideNav({ onApplyClick }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Side Navigation */}
      <nav
        className={`fixed left-0 top-0 h-screen bg-primary text-primary-foreground z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-20 flex flex-col items-center py-8 gap-8`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-1 group">
          <div className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center font-bold text-lg group-hover:bg-primary-foreground/20 transition-colors">
            <Code className="h-6 w-6" />
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col gap-6">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Home className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Home</span>
          </Link>

          <Link
            href="/library"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Knowledge</span>
          </Link>

          <Link
            href="/library"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Library className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Library</span>
          </Link>

          <Link
            href="/snippets"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Briefcase className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Jobs</span>
          </Link>

          <Link
            href="/tutorials"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Events</span>
          </Link>

          <Link
            href="/projects"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Members</span>
          </Link>

          <Link
            href="/snippets"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Forum</span>
          </Link>

          {/* New Links */}
          <Link
            href="/tutorials"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Play className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Tutorials</span>
          </Link>

          <Link
            href="/snippets"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Code className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Snippets</span>
          </Link>

          <Link
            href="/projects"
            className="flex flex-col items-center gap-1 text-xs hover:text-primary-foreground/80 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Lightbulb className="h-5 w-5" />
            </div>
            <span className="text-[10px]">Projects</span>
          </Link>
        </div>

        {/* Join Button */}
        <Button
          onClick={onApplyClick}
          size="sm"
          className="bg-accent hover:bg-accent/90 text-accent-foreground h-10 w-10 p-0 rounded-full"
        >
          <span className="text-xl font-bold">+</span>
        </Button>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
