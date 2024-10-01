"use client"

import React from 'react'
import Slider from 'react-slick'
import { FlippableCardComponent } from './flippable-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Project {
  title: string
  technology: string[]
  description: string
  demoLink: string
  codeLink: string
  imageUrl?: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-11 z-10 p-2 bg-white rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6" />
  </button>
)

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 -translate-x-11 bg-white rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
)

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    draggable:true,
    touchThreshold:30,
    speed: 500,
    // autoplaySpeed:2000,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="relative px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Moje projekty</h2>
      <h6 className="text-2xl font-bold text-center text-gray-400 mt-0 mb-6" >Przesuń aby zmienić projekty lub kliknij po szczegóły</h6>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <FlippableCardComponent project={project} />
          </div>
        ))}
      </Slider>
    </div>
  )
}