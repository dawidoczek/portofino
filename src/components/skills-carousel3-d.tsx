"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'

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

export function SkillsCarousel3DComponent() {
  const categories = Object.keys(skillsData)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressInterval: NodeJS.Timeout
    let rotationInterval: NodeJS.Timeout

    if (isAutoRotating) {
      // progressInterval = setInterval(() => {
      //   setProgress((prev) => (prev + 1/2) % 100)
      // }, 25)

      rotationInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
        setProgress(0)
      }, 2500)
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval)
      if (rotationInterval) clearInterval(rotationInterval)
    }
  }, [isAutoRotating, categories.length])

  const getVisibleCategories = () => {
    const prev = (currentIndex - 1 + categories.length) % categories.length
    const next = (currentIndex + 1) % categories.length
    return [prev, currentIndex, next, (next + 1) % categories.length]
  }

  const handleSwipe = (direction: 'LEFT' | 'RIGHT') => {
    setIsAutoRotating(false)
    if (direction === 'LEFT') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)
    }
    setProgress(0)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    trackMouse: true
  })

  return (
    <div className="w-full mx-auto p-0">
      <h1 className="text-3xl font-bold text-center text-white mb-0">Moje umiejętności</h1>
      <h6 className="text-2xl font-bold text-center text-gray-400 mb-0" >Przesuń aby zmienić kategorie</h6>
      <div {...swipeHandlers} className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1500px' }}>
          {getVisibleCategories().map((categoryIndex, index) => (
            <motion.div
            key={categories[categoryIndex]}
            className="absolute backdrop-blur-lg"
            initial={false}
            animate={{
              rotateY: (index - 1) * 40,
              z: index === 1 ? 0 : -120,
              x: index != 3 ? `${(index - 1) * 90}%` : 0,
              opacity: index === 1 ? 1 : 0.6, 
              scale: index === 1 ? 1 : index === 3 ? 0 : 0.75,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }} 
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center',
              width: '28%',
              height:"300px",
              minWidth: "200px",
            }}
            >
              <Card className="w-full h-[300px] shadow-lg bg-[#00000075] overflow-hidden">
                <CardContent className="h-full p-2 relative">
                  <h2 className="text-xl font-bold mb-2 text-center text-white">{categories[categoryIndex]}</h2>
                  <div className="grid grid-cols-2 gap-1 overflow-y-auto max-h-[350px]">
                    {skillsData[categories[categoryIndex]].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center justify-center p-2">
                        <Image width={32} height={32} src={skill.icon} alt={skill.name} className="w-8 h-8 mb-1" />
                        <p className="text-center text-xs font-medium text-white">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 self-center w-[28%] h-2 bg-gray-200 rounded-full">
          <div className="h-full bg-gray-600" style={{ width: `${progress}%` }} />
        </div> */}
      </div>
    </div>
  )
}