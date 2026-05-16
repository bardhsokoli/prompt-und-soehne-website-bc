"use client"
import { useRef, useState } from "react"
import Link from "next/link"
export interface PortfolioItem {
  title: string
  category: string
  video?: string
  poster?: string
  link?: string
}
interface DynamicFrameLayoutProps {
  items: PortfolioItem[]
}
function PortfolioTile({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: PortfolioItem
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleMouseEnter = () => {
    onMouseEnter()
    if (videoRef.current && item.video) {
      videoRef.current.play().catch(() => {})
    }
  }
  const handleMouseLeave = () => {
    onMouseLeave()
    if (videoRef.current && item.video) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }
  const content = (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl bg-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.video ? (
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : item.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.poster}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-secondary" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        <p className="text-[10px] md:text-xs font-light tracking-[0.18em] uppercase text-white/50 mb-1">
          {item.category}
        </p>
        <h3 className="text-sm md:text-[15px] font-normal tracking-[0.02em] text-white leading-tight">
          {item.title}
        </h3>
      </div>
    </div>
  )
  return item.link ? (
    <Link href={item.link} className="block w-full h-full">
      {content}
    </Link>
  ) : (
    content
  )
}
export function DynamicFrameLayout({ items }: DynamicFrameLayoutProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [hoveredCol, setHoveredCol] = useState<number | null>(null)
  const cols = 3
  const rows = Math.ceil(items.length / cols)
  const getColGrow = (col: number) => {
    if (hoveredCol === null) return "flex-1"
    return hoveredCol === col ? "flex-[1.6]" : "flex-[0.9]"
  }
  const getRowGrow = (row: number) => {
    if (hoveredRow === null) return "flex-1"
    return hoveredRow === row ? "flex-[1.6]" : "flex-[0.9]"
  }
  return (
    <>
      <div
        className="hidden lg:flex flex-col gap-1.5"
        style={{ height: "min(80vh, 720px)" }}
      >
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex flex-row gap-1.5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] min-h-0 ${getRowGrow(rowIdx)}`}
          >
            {Array.from({ length: cols }).map((_, colIdx) => {
              const itemIdx = rowIdx * cols + colIdx
              const item = items[itemIdx]
              if (!item) {
                return <div key={colIdx} className="flex-1" />
              }
              return (
                <div
                  key={colIdx}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] min-w-0 min-h-0 ${getColGrow(colIdx)}`}
                >
                  <PortfolioTile
                    item={item}
                    onMouseEnter={() => {
                      setHoveredRow(rowIdx)
                      setHoveredCol(colIdx)
                    }}
                    onMouseLeave={() => {
                      setHoveredRow(null)
                      setHoveredCol(null)
                    }}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="aspect-[4/3]">
            <PortfolioTile
              item={item}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </div>
        ))}
      </div>
    </>
  )
}
