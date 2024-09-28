'use client'

// import { Badge } from "@/components/ui/badge"
// import type { SkillsData, Project } from '@/types';
import type { Project } from '@/types';
import React ,{useRef, useEffect, useState} from "react"
import {FlippableCardComponent} from "@/components/flippable-card"
import { ExperienceTimeline } from "./experience-timeline";
import Image from "next/image"
import { SkillsCarousel3DComponent } from "./skills-carousel3-d";
import { ScrollingHeaderComponent } from './scrolling-header';
export function Portfolio() {

  const projects:Project[] = [
    // {
    //   title: "Pom Express",
    //   description: "Prosta aplikacja napisana w android studio + firebase do wysyłania powiadomień między uytkownikami, jako przypomnienie o swoim istnieniu dla innych osób",
    //   demoLink: "#",
    //   codeLink: "#",
    //   technology: ["java","androidstudio"],
    // },
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
    // {
    //   title: "get-saved-wifi-passwords",
    //   description: "Robi dokładnie to co napisane, daje nam zapisane hasła na komputerze windows, do pliku txt, zeby się juz więcej nie zastanawiać",
    //   demoLink: "#",
    //   codeLink: "https://github.com/dawidoczek/get-saved-wifi-passwords",
    //   technology: ["cpp"],
    // },
    {
      title: "Radio ZSEN",
      description: "Strona szkolnego radia, wraz z opcją głosowania na to co ma lecieć w radiowęźle, stworzona w reactcie wraz z Firebasem. Połączona wraz z moimi własnymi Api do scrapeowania geniusa w poszukiwaniu brzydków słow, działa z spotify oraz youtube.",
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
    // {
    //   title: "MultiWindowsCamera",
    //   description: "Prosty proof of concept, wykorzystująca Qt do zabawy z kamerą, za pomocą 3 trybów, dzielony ekran, 'połamane lustro' oraz wygaszacz ekranu",
    //   demoLink: "#",
    //   codeLink: "https://github.com/dawidoczek/MultiWindowsCamera",
    //   technology: ["qt","cpp"],
    // },

    {
      title: "Arkanoid",
      description: "Prosty klon Arkanoida wykonany w c++ za pomocą biblioteki Allegro5, słuzący do nauki Testowania oprogramowania",
      demoLink: "/404",
      codeLink: "https://github.com/dawidoczek/Arkanoid",
      technology: ["cpp",],
      imageUrl: "/projekty/gra2.gif",
    },

  ]
  
  
  const imageRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1); // State for scaling image
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleValue = Math.max(0.20, 1 - scrollY / 600);
      console.log(scaleValue) 
      setScale(scaleValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        {/* <header className="bg-gray-900 text-white p-6 rounded-b-lg shadow-md flex sticky top-0 z-50">
          <h1 className="text-4xl font-bold text-center">yellow 2:electric boogaloo</h1>
        </header> */}
        <ScrollingHeaderComponent/>
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Dzień dobry, tu Dawid</h2>
            <p className="text-lg text-gray-700">
              co tu się robi many ale faza
            </p>
          </section>
         <Image
          ref={imageRef}
          src="/projekty/dawid.png"
          alt="Zdjęcie twórcy"
          width={256}
          height={32}
          className="sticky top-0 z-50" style={{
            transform: `scale(${scale})`,
             transition: "transform 0.1s ease-out",
             transformOrigin: "top left", 
              }}
        />
          {/* grid grid-cols-2 */}
        <main className=" gap-10 auto-rows-auto container mx-auto px-4 py-8 space-y-8">


          
          <SkillsCarousel3DComponent />

          <ExperienceTimeline/>
          <section className="bg-gray-300 p-6 rounded-lg shadow-md border border-gray-400 flex flex-col">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Moje projekty</h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <FlippableCardComponent key={index} project={project}></FlippableCardComponent>
              ))}
            </div>
          </section>
        </main>
      <footer className="bg-gray-900 text-white p-4 mt-8 rounded-t-lg shadow-md">
        <div className="container mx-auto text-center">
          <p>Made with 💛, NextJs, Tailwind CSS, Framer Motion, and Vercel</p>
          <p>Copyright &copy; {new Date().getFullYear()}, Dawid Rej.</p>
        </div>
      </footer>
    </div>
  )
}