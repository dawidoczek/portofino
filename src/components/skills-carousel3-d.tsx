"use client"

// import React, { useState, useEffect, useCallback } from 'react'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from 'lucide-react'

interface Skill {
  name: string
  icon: string
}

interface SkillsData {
  [category: string]: Skill[]
}

const skillsData: SkillsData = {
  "Języki programowania": [
    { name: "Python", icon: "https://skillicons.dev/icons?i=py&theme=light" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js&theme=light" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts&theme=light" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java&theme=light" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp&theme=light" },
    { name: "C#", icon: "https://skillicons.dev/icons?i=cs&theme=light" },
  ],
  "Technologie front-end": [
    { name: "React", icon: "https://skillicons.dev/icons?i=react&theme=light" },
    { name: "Angular", icon: "https://skillicons.dev/icons?i=angular&theme=light" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap&theme=light" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind&theme=light" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs&theme=light" },
    { name: "jQuery", icon: "https://skillicons.dev/icons?i=jquery&theme=light" },
  ],
  "Technologie back-end": [
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs&theme=light" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express&theme=light" },
    { name: "Mysql", icon: "https://skillicons.dev/icons?i=mysql&theme=light" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
    { name: "PHP", icon: "https://skillicons.dev/icons?i=php&theme=light" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres&theme=light" },
  ],
  "Narzędzia & Frameworki": [
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs&theme=light" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase&theme=light" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman&theme=light" },
    { name: "WordPress", icon: "https://skillicons.dev/icons?i=wordpress&theme=light" },
    { name: "Android Studio", icon: "https://skillicons.dev/icons?i=androidstudio&theme=light" },
    { name: "Unity", icon: "https://skillicons.dev/icons?i=unity&theme=light" },
  ],
  
}
let intervalId: NodeJS.Timeout | null = null;

export function SkillsCarousel3DComponent() {
  const categories = Object.keys(skillsData)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isWideScreen, setIsWideScreen] = useState(false)

  // const resetAutoRotation = useCallback((): void => {
  //   if (intervalId) clearInterval(intervalId)
    
  //   if (isAutoRotating) {
  //     intervalId = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
  //     }, 5000) 
  //   }
  // }, [isAutoRotating, categories.length])

  // const nextCategory = useCallback((): void => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
  //   if (intervalId) clearInterval(intervalId)
  //   resetAutoRotation() // Reset timer on click
  // }, [categories.length, resetAutoRotation])

  // const prevCategory = useCallback((): void => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)
  //   if (intervalId) clearInterval(intervalId)
  //   resetAutoRotation() // Reset timer on click
  // }, [categories.length, resetAutoRotation])

  // Auto-rotate categories
  useEffect(() => {
    if (isAutoRotating) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
      }, 5000)
    }
    return () => {
      if (intervalId) clearInterval(intervalId) // Clean up interval on unmount
    }
    setIsAutoRotating(true)
  }, [isAutoRotating, categories.length])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(true)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const getVisibleCategories = () => {
    const prev = (currentIndex - 1 + categories.length) % categories.length
    const next = (currentIndex + 1) % categories.length
    return [prev, currentIndex, next, (next + 1) % categories.length]
  }

  // const toggleAutoRotation = () => {
  //   if (intervalId) clearInterval(intervalId)
  //   setIsAutoRotating((prev) => !prev)
  // }

  return (
    
    <div className="w-full mx-auto p-0">
          <h1 className="text-3xl font-bold text-center mb-0">Moje umiejętności</h1>

      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1500px' }}>
        {getVisibleCategories().map((categoryIndex, index) => (
  <motion.div
    key={categories[categoryIndex]}
    className="absolute"
    initial={false}
    animate={{
      rotateY: (index - 1) * 40,
      z: index === 1 ? 0 : -120,
      x: index != 3 ? `${(index - 1) * 90}%` : 0,
      opacity: index === 1 ? 1 : 0.6, 
      scale: index === 1 ? 1 : index === 3 ? 0 : 0.75,
    }}
    transition={{ duration: 1.2, ease: 'easeInOut' }} 
    onAnimationStart={() => {
      // Custom logic when animation starts
      if (index === 0) {
        console.log(categoryIndex);

      }
    }}
    style={{
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center',
      width: isWideScreen ? '28%' : '70%',
      height:"400px",
      minWidth: "200px",
    }}
  >
    <Card className="w-full h-[300px] bg-background shadow-lg overflow-hidden">
      <CardContent className="h-full p-2 relative">
        <h2 className="text-xl font-bold mb-2 text-center">{categories[categoryIndex]}</h2>
        <div className="grid grid-cols-2 gap-1 overflow-y-auto max-h-[350px]">
          {skillsData[categories[categoryIndex]].map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-2">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-1" />
              <p className="text-center text-xs font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
))}

        </div>
        {/* <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          onClick={prevCategory}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          onClick={nextCategory}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
          onClick={toggleAutoRotation}
        >
          {isAutoRotating ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </Button> */}
      </div>
    </div>
  )
}