"use client"

import { useEffect, useState } from "react"

export default function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-10 h-10">
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-1000 ${
          isAnimating ? "animate-spin" : "animate-pulse"
        }`}
      >
        <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
          <div
            className={`w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm transition-transform duration-500 ${
              isAnimating ? "rotate-45 scale-110" : "rotate-0 scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
