"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import Image from 'next/image'

interface Experience {
  title: string
  date: string
  description: string
  link?: string
}

const experiences: Experience[] = [
  {
    title: "Zwycięstwa ogólnopolskiej Olimpiady zawodowej 'Rok przed dyplomem'",
    date: "2024",
    description: "Olimpiada rok przed dyplomem organizowana była przez Lubelskie Centrum Doskonalenia Nauczycieli, składała się ona z 3 etapów z finałem na Politechnice Lubelskiej",
    link: "https://www.lscdn.pl/pl/konkursy/olimpiada-zawodowa/14664,Wyniki-etapu-centralnego-Ogolnopolskiej-Olimpiady-Zawodowej-Rok-przed-dyplomem.html"
  },
  {
    title: "Zwycięstwa pierwszej edycji ogólno polskiego konkursu Gigathon",
    date: "2023",
    description: "Wygrałem konkurs Gigantów programowania 'Gigathon' używając pythona, brało w nim udział ponad 8 tysięcy osób. Finał odbył sie 4 lutego 2023 w warszawie.",
    link: "https://www.lublin112.pl/uczen-z-lublina-laureatem-prestizowego-konkursu-programistycznego-gigathon/"
  },
  {
    title: "Zwycięstca Ligi algorytmicznej",
    date: "2023",
    description: "W 2023 roku brałem udział w konkursie Liga algorytmiczna organizowanym przez Centrum mistrzostwa informatycznego. Konkurs ten polegał na rozwiązywaniu zadań algorytmicznych co miesiąc przez długość roku szkolnego, celem uzyskania największej liczby punktów"
  },
  {
    title: "Dwukrotny pół finalista w Zawodach Algorytmicznych",
    date: "2022 - 2023",
    description: "W 2022 drugim oraz 2023 roku wraz z dwójką kompanów dwukrotnie dostaliśmy się do pół finałów, lecz za kadżym razem zabrakło nam punktów do finału. Dzięki temu konkursowi zobaczyłem i rozpocząłem swoją przygode z poważniejszym programowanie konkursowym."
  },
  {
    title: "3 miejsce w konkursie o cyberbezpieczeństwie  'Dzień bezpiecznego komputera'",
    date: "2022",
    description: "Secured 3rd place in the Safe Computer competition."
  },
  {
    title: "Miesięczne praktyki w Slavexie",
    date: "2022",
    description: "Ukończyłem miesięczne praktyki w firmie Slavex, pracując i ucząc sie podstaw helpdesku, naprawiania błedów w kodzie, czy pisania narzędzi i skryptów do wykorzystania w firmie."
  },
  {
    title: "Pół roczne praktyki w Provisto",
    date: "2023-2024",
    description: "Podczas praktyk w firmie Provisto, wykonałem własny harmonogram z wbudowanym kalendarzem, funkcją wysyłania smsów, emaili oraz koordynowaniem pracowników."
  }
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Osiągnięcia & Doświadczenie</h1>
      <div ref={containerRef} className="relative pl-12">
        {/* <div className="absolute left-4 top-0 w-0.5 h-full bg-gray-200"></div> */}
        {experiences.map((experience, index) => (
          <TimelineItem 
            key={index} 
            experience={experience} 
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ 
  experience, 
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  index,
  containerRef
}: { 
  experience: Experience; 
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const itemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.65, 1.0, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.25, 1, 1.0])

  return (
    
    <motion.div
      ref={itemRef}
      className="mb-12 relative"
      style={{ scale, opacity }}
    >
      <div className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg overflow-hidden z-10">
        {/* <Image src="/placeholder.svg?height=32&width=32" alt="" width={32} height={32} /> */}
      </div>
      <motion.div 
        className="bg-white p-4 rounded-lg shadow-md border border-gray-200 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
        <p className="mt-2 text-gray-600">{experience.description}</p>
        {experience.link ? 
          <p><a href={experience.link} target="_blank"> Więcej informacji</a></p> : ""
        }
      </motion.div>
    </motion.div>
  )
}