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
    title: "Project 01",
    category: "Branding",
    poster:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 02",
    category: "Animation",
    poster:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 03",
    category: "Logo",
    poster:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 04",
    category: "Posters",
    poster:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 05",
    category: "Aftermovies",
    poster:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 06",
    category: "Commercials",
    poster:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 07",
    category: "Web Design",
    poster:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 08",
    category: "Photography",
    poster:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Project 09",
    category: "Cinematography",
    poster:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=700&fit=crop",
    link: "#",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/55 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        <Link href="/" aria-label="PROMPT &amp; SÖHNE" className="pointer-events-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="PROMPT &amp; SÖHNE"
            className="h-7 w-auto opacity-85 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>

      <section className="hidden lg:block h-screen w-full pt-24">
        <DynamicFrameLayout items={portfolioItems} />
      </section>

      <section className="lg:hidden pt-28 px-4 pb-10">
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/45 mb-4">
            Selected Work
          </p>
          <h1 className="text-4xl font-light tracking-tight leading-[1.02] mb-4">
            Built to be seen.
          </h1>
          <p className="text-sm text-white/65 max-w-md leading-relaxed">
            A curated selection of visual worlds across design, motion, AI, and image-making.
          </p>
        </div>

        <DynamicFrameLayout items={portfolioItems} />
      </section>
    </main>
  )
}
