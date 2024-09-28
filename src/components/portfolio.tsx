'use client'

import React, { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { FlippableCardComponent } from "@/components/flippable-card"
import { ExperienceTimeline } from "./experience-timeline"
import { SkillsCarousel3DComponent } from "./skills-carousel3-d"
import { ScrollingHeaderComponent } from './scrolling-header'
import type { Project } from '@/types'

export function Portfolio() {
  const projects: Project[] = [
    {
      title: "EscapeWheels",
      description: "Działający sklep internetowy którego byłem współtwórcą, oraz głównym Administratorem. Wykorzystuje Wordpressa z Woocomercem.",
      demoLink: "https://escapewheels.pl/",
      codeLink: "/404",
      technology: ["wordpress"],
      imageUrl: "/projekty/escape.png",
    },
    {
      title: "Notifical",
      description: "Drugi powazny projekt, jest to zintegrowany harmonogram posiadający opcje dodawania do kalendarza, wysyłania sms i email, stworzony za pomocą Angulara, express js, Android studio oraz PWA",
      demoLink: "https://notifical.memo-1.usermd.net/home",
      codeLink: "/404",
      technology: ["angular","nodejs","postgresql","express","androidstudio"],
      imageUrl: "/projekty/notifical.png",
    },
    {
      title: "Zsen Kalendarz",
      description: "Angularowy harmonogram do zapisywania wydarzeń, wraz z REST Api do firebase'a, stworzony we współpracy z kolegami jako projekt na zaliczenie ",
      demoLink: "/404",
      codeLink: "https://github.com/dawidoczek/ZSEN-KALENDARZ",
      technology: ["angular","firebase","bootstrap","nodejs"],
      imageUrl: "/projekty/kalendarz.png",
    },
    {
      title: "Radio ZSEN",
      description: "Strona szkolnego radia, stworzona w reactcie wraz z Firebasem. Posiada Api do scrapeowania geniusa w celu szukania brzydkich słów.",
      demoLink: "https://radio-zsen.web.app",
      codeLink: "/404",
      technology: ["react","bootstrap","firebase","nodejs","php"],
      imageUrl: "/projekty/radiozsen.png",
    },
    {
      title: "Kulki the game",
      description: "Gra stworzona w unity, wyświetlana na rzutniku, sterowana telefonem za pomocą specjalnej aplikacji. Wykorzystuje Reacta, Firebase'a oraz unity",
      demoLink: "https://blu-vs-red.web.app/",
      codeLink: "/404",
      technology: ["unity","cs","firebase","react"],
      imageUrl: "/projekty/kulki.png",
    },
    {
      title: "Arkanoid",
      description: "Prosty klon Arkanoida wykonany w c++ za pomocą biblioteki Allegro5, słuzący do nauki Testowania oprogramowania",
      demoLink: "/404",
      codeLink: "https://github.com/dawidoczek/Arkanoid",
      technology: ["cpp"],
      imageUrl: "/projekty/gra2.gif",
    },
  ]
  
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageStyle, setImageStyle] = useState({})
  const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setInitialPosition({ top: rect.top, left: rect.left });
    }
  }, []); 

  
  const handleScroll = useCallback(() => {
    if (imageRef.current) {
      const scrollY = window.scrollY;
      const wSize = window.innerWidth
      // const scaleValue = Math.max(wSize>=725 ?  0.25 : 0.5, 1 - scrollY / 600);
      const scaleValue = wSize>=725 ?  0.25 : 0.5
      // const topValue = Math.max(0, initialPosition.top - scrollY / 2);
      const topValue =0
      // const leftValue = Math.max(0, initialPosition.left - scrollY / 2);
      const leftValue = 0
      if (scrollY>10){
      
      setImageStyle({
        position: 'fixed',
        top: `${topValue}px`,
        left: `${leftValue}px`,
        zIndex: 50,
        transform: `scale(${scaleValue})`,
        transition: 'transform 0.25s ease-out, top 0.25s ease-out, left 0.25s ease-out',
        transformOrigin: 'top left',
      });
    }else{
      setImageStyle({
        position: 'fixed',
        top: `${initialPosition.top - scrollY / 2}px`,
        left: `${initialPosition.left - scrollY / 2}px`,
        zIndex: 50,
        transform: `scale(${1})`,
        transition: 'transform 0.25s ease-out, top 0.25s ease-out, left 0.25s ease-out',
        transformOrigin: 'top left',
      });
    }
  }
  }, [initialPosition]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen bg-no-repeat bg-8  bg-cover  bg-center bg-fixed text-gray-900">
      <ScrollingHeaderComponent />

      <div className="container mx-auto px-4 py-8">
        {/* Photo and Description */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
  <div className="lg:col-span-3">
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* Dummy div to reserve space for the fixed image */}
      <div className="w-32 h-32 md:w-64 md:h-64 flex-shrink-0"></div> 

      {/* Fixed Image Section */}
      <div 
        ref={imageRef}
        className="flex-shrink-0 fixed"
        style={imageStyle}
      >
        <Image
          src="/projekty/dawid.png"
          alt="Zdjęcie twórcy"
          width={256}
          height={256}
          className="rounded-full object-cover w-32 h-32 md:w-64 md:h-64" // Scale down for smaller screens
        />
      </div>

      {/* Description Section */}
      <section className="bg-[#00000075] backdrop-blur-lg p-6 rounded-lg shadow-md border border-gray-200 flex-1">
        <h2 className="text-3xl font-semibold mb-4 text-white">Dzień dobry, tu Dawid</h2>
        <p className="text-lg text-white">
          Jestem tegorocznym absolwentem Zespołu Szkół Energetycznych w Lublinie na profilu technik programista. Mam 19 lat i interesuję się programowaniem od dziewiątego roku życia. Moim ulubionym językiem programowania jest Python, jednak z równie dużym zapałem rozwijam swoje umiejętności w tworzeniu stron internetowych, szczególnie w zakresie backendu.
          <br />
          Posiadam certyfikat INF 0.3, który potwierdza moje kompetencje w tworzeniu oraz administrowaniu stronami i aplikacjami internetowymi oraz bazami danych. Jestem osobą pracowitą, cenię sobie rozwój, a także chętnie pomagam innym w osiąganiu ich celów. Obecnie mieszkam w Lublinie.
          <br />
          Mój email: <a href='mailto:rej.dawid1@gmail.com' className="text-blue-500">rej.dawid1@gmail.com</a>
        </p>
      </section>
      
    </div>
  </div>
</div>



        {/* Skills Carousel, Experience, and Projects */}
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Skills Carousel */}
            <div>
              <SkillsCarousel3DComponent />
            </div>
            
            {/* Experience Timeline */}
            <div>
              <ExperienceTimeline />
            </div>
          </div>
          
          {/* Projects */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Moje projekty</h2>
              {projects.map((project, index) => (
                <FlippableCardComponent key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 mt-8 rounded-t-lg shadow-md">
        <div className="container mx-auto text-center">
          <p>Made with 💛, NextJs, Tailwind CSS, Framer Motion, and Vercel</p>
          <p>Copyright &copy; {new Date().getFullYear()}, Dawid Rej.</p>
        </div>
      </footer>
    </div>
  )
}