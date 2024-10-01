"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export function ScrollingHeaderComponent() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollThreshold = viewportHeight * 0.1 // 10% of viewport height
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
      const buttonsWidth = 190 
      const availableSpace = headerWidth - buttonsWidth

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
      ref={headerRef}
      className="sticky top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border"
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center justify-between w-full relative">
          <div className="flex-1 flex items-center">
            <div 
              className="font-bold absolute left-[23vw] sm:left-[60px] md:left-[250px] text-white"
              style={textStyle}
            >
              Dzień dobry, tu Dawid
            </div>
          </div>
          <div 
            className="flex space-x-2 absolute left-0 gap-3"
            style={buttonContainerStyle}
          >
            <a href='https://github.com/dawidoczek' target="_blank" rel="noopener noreferrer">
            <Image src='/projekty/github.svg' alt='mój github' width={50} height={50}/>
            </a>
            <a href='https://www.linkedin.com/in/dawid-rej-570582236' target="_blank" rel="noopener noreferrer">
            <Image alt="mój linkedin" src='/projekty/linkedin.svg' width={50} height={50}/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100010370318760' target="_blank" rel="noopener noreferrer">
            <Image alt="mój facebook" src='/projekty/facebook.svg' width={50} height={50}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
