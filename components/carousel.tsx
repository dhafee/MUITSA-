"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  items: React.ReactNode[]
  itemsPerView?: number
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Carousel({ items, itemsPerView = 1, autoPlay = false, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - itemsPerView ? 0 : prev + 1))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length, itemsPerView])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - itemsPerView : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - itemsPerView ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} style={{ width: `${100 / itemsPerView}%` }} className="flex-shrink-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={handlePrev}
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border-border hover:bg-primary hover:text-primary-foreground z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        onClick={handleNext}
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border-border hover:bg-primary hover:text-primary-foreground z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: items.length - itemsPerView + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-8" : "bg-muted w-2"}`}
          />
        ))}
      </div>
    </div>
  )
}
