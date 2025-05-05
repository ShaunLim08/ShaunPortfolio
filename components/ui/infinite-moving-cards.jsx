"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) => {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
    // Add window resize listener to handle responsiveness
    window.addEventListener("resize", addAnimation)
    return () => {
      window.removeEventListener("resize", addAnimation)
    }
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Clear existing cloned items first
      const originalItems = Array.from(scrollerRef.current.children).slice(0, items.length)
      scrollerRef.current.innerHTML = ""

      // Add original items back
      originalItems.forEach((item) => {
        scrollerRef.current.appendChild(item.cloneNode(true))
      })

      // Then add clones
      originalItems.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-0 py-0 sm:w-[350px] md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={`${item.name}-${idx}`}
          >
            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>
              <div className="px-6 pb-6">
                <div className="mb-4">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">{item.name}</span>
                  <span className="block text-sm leading-[1.6] text-gray-400 font-normal">{item.title}</span>
                </div>
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">{item.quote}</span>
                </blockquote>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
