"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

type FilterCategory = "all" | "video" | "photography" | "design" | "ai"

interface Project {
  id: string
  title: string
  category: FilterCategory
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Brand Campaign",
    category: "video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    description: "Cinematic brand storytelling",
  },
  {
    id: "2",
    title: "Editorial Series",
    category: "photography",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&h=600&fit=crop",
    description: "High-fashion editorial",
  },
  {
    id: "3",
    title: "Visual Identity",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Complete brand redesign",
  },
  {
    id: "4",
    title: "AI Artwork",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    description: "Generative AI visuals",
  },
  {
    id: "5",
    title: "Music Video",
    category: "video",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    description: "Artistic music visuals",
  },
  {
    id: "6",
    title: "Product Photography",
    category: "photography",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "Luxury product shots",
  },
]

export function WorkSection() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all")

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t("work.filter.all") },
    { key: "video", label: t("work.filter.video") },
    { key: "photography", label: t("work.filter.photography") },
    { key: "design", label: t("work.filter.design") },
    { key: "ai", label: t("work.filter.ai") },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            {t("work.title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {t("work.subtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-sm font-light tracking-wider uppercase ${
                activeFilter === filter.key
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-card cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
