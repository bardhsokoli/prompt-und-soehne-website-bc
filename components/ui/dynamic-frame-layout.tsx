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
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  item: PortfolioItem
  isHovered: boolean
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
      className="relative w-full h-full overflow-hidden bg-black group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
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
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : item.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.poster}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900" />
        )}

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-0 left-0 p-4 md:p-5">
          <p className="text-[10px] md:text-xs font-light tracking-[0.18em] uppercase text-white/60 mb-1">
            {item.category}
          </p>
          <h3 className="text-sm md:text-[15px] font-normal tracking-[0.02em] text-white leading-tight">
            {item.title}
          </h3>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <span
          className="text-white text-center px-6"
          style={{
            fontFamily: '"instrument-serif", serif',
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2rem, 3.8vw, 4.25rem)",
            lineHeight: 0.95,
          }}
        >
          {item.category}
        </span>
      </div>

      <div className="absolute inset-0 border border-white/10 pointer-events-none" />
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
      <div className="hidden lg:flex flex-col gap-[2px] w-full h-screen">
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex flex-row gap-[2px] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] min-h-0 ${getRowGrow(rowIdx)}`}
          >
            {Array.from({ length: cols }).map((_, colIdx) => {
              const itemIdx = rowIdx * cols + colIdx
              const item = items[itemIdx]

              if (!item) {
                return <div key={colIdx} className="flex-1 bg-black" />
              }

              const isHovered = hoveredRow === rowIdx && hoveredCol === colIdx

              return (
                <div
                  key={colIdx}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] min-w-0 min-h-0 ${getColGrow(colIdx)}`}
                >
                  <PortfolioTile
                    item={item}
                    isHovered={isHovered}
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

      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-[2px] min-h-screen bg-black">
        {items.map((item, idx) => (
          <div key={idx} className="aspect-[4/3]">
            <PortfolioTile
              item={item}
              isHovered={true}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </div>
        ))}
      </div>
    </>
  )
}
