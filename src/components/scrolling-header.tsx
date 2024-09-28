"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"

export function ScrollingHeaderComponent() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null) // Reference to header element

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollThreshold = viewportHeight * 0.08 // 8% of viewport height
      const scrollPercentage = Math.min(position / scrollThreshold, 1)
      setScrollPosition(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const calculateTranslateX = () => {
    if (headerRef.current) {
      const headerWidth = headerRef.current.offsetWidth
      const buttonsWidth = 200 // Estimated buttons width (can be adjusted based on button size)
      const availableSpace = headerWidth - buttonsWidth

      // Translate buttons to the right, proportional to the scroll percentage
      return scrollPosition * availableSpace
    }
    return 0
  }

  const buttonContainerStyle = {
    transform: `translateX(${calculateTranslateX()}px)`,
    transition: 'transform 0.3s ease-out',
  }

  const textStyle = {
    transform: `scale(${1 + scrollPosition * 0.5})`,
    transition: 'transform 0.3s ease-out',
    opacity: scrollPosition,
    fontSize: "2vw",
  }

  return (
    <header 
      ref={headerRef} // Set reference to header
      className="sticky top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border"
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center justify-between w-full relative">
          <div className="flex-1 flex items-center">
            <div 
              className="font-bold absolute left-[70px] sm:left-[60px] md:left-[150px] "
              style={textStyle}
            >
              Dzień dobry, tu Dawid
            </div>
          </div>
          <div 
            className="flex space-x-2 absolute left-0 gap-4"
            style={buttonContainerStyle}
          >
            <a href='https://github.com/dawidoczek' target="_blank" rel="noopener noreferrer">
            <img src='https://skillicons.dev/icons?i=github&theme=light'/>
            </a>
            <a href='https://www.linkedin.com/in/dawid-rej-570582236' target="_blank" rel="noopener noreferrer">
            <img src='https://skillicons.dev/icons?i=linkedin&theme=light'/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100010370318760' target="_blank" rel="noopener noreferrer">
            <img src='https://skillicons.dev/icons?i=discord&theme=light'/>
            </a>
            <img/>
          </div>
        </div>
      </div>
    </header>
  )
}
