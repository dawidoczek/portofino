'use client'

import { Badge } from "@/components/ui/badge"
import type { SkillsData, Project } from '@/types';
import React from "react"
import {FlippableCardComponent} from "@/components/flippable-card"
import Image from "next/image"

export function Portfolio() {

  const skillsData:SkillsData = {
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
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html&theme=light" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css&theme=light" },
    ],
    "Technologie back-end": [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs&theme=light" },
      { name: "Express", icon: "https://skillicons.dev/icons?i=express&theme=light" },
      { name: "Django", icon: "https://skillicons.dev/icons?i=django&theme=light" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php&theme=light" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres&theme=light" },
    ],
    "Narzędzia/Frameworki": [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs&theme=light" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase&theme=light" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman&theme=light" },
      { name: "WordPress", icon: "https://skillicons.dev/icons?i=wordpress&theme=light" },
      { name: "Android Studio", icon: "https://skillicons.dev/icons?i=androidstudio&theme=light" },
      { name: "Unity", icon: "https://skillicons.dev/icons?i=unity&theme=light" },
      { name: "Photoshop", icon: "https://skillicons.dev/icons?i=ps&theme=light" },
    ]
  };

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
      codeLink: "#",
      technology: ["wordpress"],
      imageUrl: "/projekty/escape.png",
    },
    {
      title: "Notifical",
      description: "Drugi powazny projekt, jest to zintegrowany harmonogram posiadający opcje dodawania do kalendarza, wysyłania sms i email, stworzony za pomocą Angulara, express js, Android studio oraz PWA",
      demoLink: "https://notifical.memo-1.usermd.net/home",
      codeLink: "#",
      technology: ["angular","nodejs","postgresql","express","androidstudio"],
      imageUrl: "/projekty/notifical.png",

    },
    {
      title: "Zsen Kalendarz",
      description: "Angularowy harmonogram do zapisywania wydarzeń, wraz z REST Api do firebase'a, stworzony we współpracy z kolegami jako projekt na zaliczenie ",
      demoLink: "#",
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
      codeLink: "#",
      technology: ["react","bootstrap","firebase","nodejs","php"],
      imageUrl: "/projekty/radiozsen.png",

    },
    {
      title: "Kulki the game",
      description: "Gra stworzona w unity, wyświetlana na rzutniku, sterowana telefonem za pomocą specjalnej aplikacji. Wykorzystuje Reacta, Firebase'a oraz unity",
      demoLink: "https://blu-vs-red.web.app/",
      codeLink: "#",
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
      demoLink: "#",
      codeLink: "https://github.com/dawidoczek/Arkanoid",
      technology: ["cpp",],
      imageUrl: "/projekty/gra2.gif",
    },

  ]
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-gray-900 text-white p-6 rounded-b-lg shadow-md flex sticky top-0 z-50">
        <h1 className="text-4xl font-bold text-center">yellow</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Dzień dobry, tu Dawid</h2>
          <p className="text-lg text-gray-700">
            Umiem wiele, po za tym czego nie umiem
          </p>
        </section>
        <section className="bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Moje umiejętności</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">{category}</h3>
                  <div className="flex items-start flex-col space-y-2">
                    {skills.map((skill) => (
                      <Badge key={skill.name} variant={null} className="text-sm py-2 px-3 text-gray-800 flex  gap-2">
                        <Image src={skill.icon} alt={skill.name} width={20} height={20} />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-300 p-6 rounded-lg shadow-md border border-gray-400">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Moje projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FlippableCardComponent key={index} project={project}></FlippableCardComponent>
            ))}
          </div>
        </section>
        {/* TODO włącz to z powrotem i jakoś upiększ */}
        <section style={{display:"none"}} className="bg-gray-400 p-6 rounded-lg shadow-md border border-gray-400">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Osiągnięcia i doświadczenie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><p>Zwycięstwa <a href="https://www.lublin112.pl/uczen-z-lublina-laureatem-prestizowego-konkursu-programistycznego-gigathon/">pierwszej edycji gigathonu</a> (python, 8 tysięcy uczestników, Organizowany przez Gigantów programowania)</p> </div>
            <div><p>Zwycięstca Ligi algorytmicznej w 2023 (Organizowanej przez Centrum Mistrzostwa Informatycznego)</p></div>
            <div><p>Dwukrotny półfinałista Zawodów algorytmicznych w 2022 i 2023 roku (Także organizowane przez Centrum mistrzostwa Informatycznego)</p> </div>
            <div><p>3 miejsce w konkursie Bezpieczny komputer w roku 2022</p> </div>
            <div><p>Miesięczne praktyki w Slavexie w 2022 roku, podczas których robiłem na helpdesku i tworzyłem wewnętrzne narzędzia</p> </div>
            <div><p>Miesięczne praktyki w Provisto w roku 2023, podczas których stworzyłem komercyjną aplikacje Notifical.</p> </div>
          </div>
        </section>
      </main>


      <footer className="bg-gray-900 text-white p-4 mt-8 rounded-t-lg shadow-md">
        <div className="container mx-auto text-center">
          <p>Made with 💛, NextJs and Tailwind CSS</p>
          <p>Copyright &copy; {new Date().getFullYear()}, Dawid Rej.</p>
        </div>
      </footer>
    </div>
  )
}