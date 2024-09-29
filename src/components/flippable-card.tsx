'use client'

import React, {useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
interface FlippableCardProps {
  project: {
    title: string;
    technology: string[];
    description: string;
    demoLink: string;
    codeLink: string;
    imageUrl?: string;
  }
}

export function FlippableCardComponent({ project }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isClickLocked, setIsClickLocked] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const contentEl = contentRef.current;

    if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
      setIsScrollable(true);
    }

    const handleScroll = () => {
      if (contentEl && contentEl.scrollHeight - contentEl.scrollTop === contentEl.clientHeight) {
        setIsScrollable(false);
      }
    };

    if (contentEl) {
      contentEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentEl) {
        contentEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  const imageUrl = project.imageUrl || "/placeholder.svg?height=300&width=400"

  const handleMouseEnter = () => {
    if (!isClickLocked) setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    if (!isClickLocked) setIsFlipped(false)
  }

  const handleClick = () => {
    return;
    setIsClickLocked(!isClickLocked)
    setIsFlipped(isFlipped)
  }
  

  return (
    <div 
      className="flip-card-container " 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >

      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <Image src={imageUrl} fill={true} alt={project.title} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="flex gap-2">
              {project.technology.map((tek, index) => (
                <Image key={index} src={`https://skillicons.dev/icons?i=${tek}&theme=light`} width={24} height={24} alt={tek} className="inline-block" />
              ))}
            </div>
          </div>
        </div>
        <div className="flip-card-back backdrop-blur-lg">
          <Card className="h-full bg-transparent backdrop-blur-lg border-gray-400">
            <CardHeader>
              <CardTitle className="text-white flex gap-6">{project.title}
              {project.technology.map((tek,key)=>(
                    <Image alt={tek} key={key} src={"https://skillicons.dev/icons?i="+tek+"&theme=light"} width={20} height={20}/>
                    ))}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white max-h-36 overflow-y-scroll " ref={contentRef}>{project.description}</p>
              {isScrollable && (
            <div className="absolute bottom-14 left-0 right-0  flex justify-center text-gray-300 text-sm">
              Zjedź aby czytać dalej <ChevronDownIcon className="ml-1 w-4 h-4" />
            </div>
          )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
              <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}