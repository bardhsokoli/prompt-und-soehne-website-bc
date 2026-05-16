import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { DynamicFrameLayout, type PortfolioItem } from "@/components/ui/dynamic-frame-layout"

export const metadata: Metadata = {
  title: "Work | PROMPT & SÖHNE",
  description:
    "A curated selection of visual worlds across design, motion, AI, and image-making.",
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "SIGNAL",
    category: "Motion & AI",
    poster:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Francis",
    category: "Brand Film",
    poster:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Reanimatori",
    category: "Visual Identity",
    poster:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Luxury Hair Clinic",
    category: "Photography",
    poster:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "La Dor\u00e9e",
    category: "Editorial & Design",
    poster:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Katana Heroes",
    category: "Campaign",
    poster:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "String Solutions",
    category: "Web & Brand",
    poster:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "O Club",
    category: "Event & Photography",
    poster:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Direct the Machine",
    category: "AI Production",
    poster:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=700&fit=crop",
    link: "#",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-light tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        <Link href="/" aria-label="PROMPT &amp; SÖHNE">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="PROMPT &amp; SÖHNE"
            className="h-7 w-auto invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>

      {/* Header */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-[10px] md:text-xs font-light tracking-[0.22em] uppercase text-muted-foreground mb-5">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.05] text-balance mb-6">
          Built to be seen.
        </h1>
        <p className="text-sm md:text-base font-light text-muted-foreground max-w-xl leading-relaxed">
          A curated selection of visual worlds across design, motion, AI, and
          image-making.
        </p>
      </section>

      {/* Portfolio grid */}
      <section className="px-4 md:px-6 lg:px-10 max-w-7xl mx-auto pb-24 md:pb-32">
        <DynamicFrameLayout items={portfolioItems} />
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-10 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-4 text-balance">
              Have a project in mind?
            </h2>
            <p className="text-sm md:text-base font-light text-muted-foreground">
              Let&apos;s build something people remember.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-xs font-light tracking-[0.18em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm whitespace-nowrap"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
