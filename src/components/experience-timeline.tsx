"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Experience {
  title: string
  date: string
  description: string
  link?: string
  photo: string
}

const experiences: Experience[] = [
  {
    title: "Zwycięstwo w ogólnopolskiej Olimpiadzie zawodowej „Rok przed dyplomem”",
    date: "2024",
    photo:"trophy",
    description: "Olimpiada „Rok przed dyplomem”, organizowana przez Lubelskie Centrum Doskonalenia Nauczycieli, składała się z trzech etapów, które miały na celu wyłonić uzdolnionych uczniów którzy przystąpią do kwalifikacji INF.04. Finał konkursu odbył się na Politechnice Lubelskiej, oferując uczestnikom możliwość zaprezentowania swoich osiągnięć w akademickim środowisku.",
    link: "https://www.lscdn.pl/pl/konkursy/olimpiada-zawodowa/14664,Wyniki-etapu-centralnego-Ogolnopolskiej-Olimpiady-Zawodowej-Rok-przed-dyplomem.html"
  },
  {
    title: "Zwycięstwo w pierwszej edycji ogólnopolskiego konkursu Gigathon",
    photo:"trophy",
    date: "2023",
    description: "Wygrałem konkurs Gigantów Programowania „Gigathon”, w którym uczestniczyło ponad 8 tysięcy osób. Do rywalizacji przystąpiłem, wykorzystując swoje umiejętności w Pythonie. Finał odbył się 4 lutego 2023 roku w Warszawie, gdzie miałem okazję zaprezentować swoje rozwiązania i zdobyć cenne doświadczenie.",
    link: "https://www.lublin112.pl/uczen-z-lublina-laureatem-prestizowego-konkursu-programistycznego-gigathon/"
  },
  {
    title: "Zwycięzca Ligi Algorytmicznej Centrum Misotrzostwa Informatycznego",
    photo:"trophy",
    date: "2023",
    description: "W 2023 roku uczestniczyłem w konkursie „Liga Algorytmiczna”, organizowanym przez Centrum Mistrzostwa Informatycznego. Konkurs ten polegał na comiesięcznym rozwiązywaniu zadań algorytmicznych przez cały rok szkolny, a moim celem było zdobycie jak największej liczby punktów. To doświadczenie pozwoliło mi na rozwinięcie umiejętności analitycznych oraz programistycznych.",
    link: "https://old.zsen.lublin.eu/kolejny-sukces-uczniow-z-kola-informatycznego-w-ramach-projektu-centrum-mistrzostwa-informatycznego/"
  },
  {
    title: "Dwukrotny półfinalista w Zawodach Algorytmicznych",
    photo:"trophy",
    date: "2022 - 2023",
    description: "W 2022 i 2023 roku, wraz z dwójką kolegów, dwukrotnie dostaliśmy się do półfinałów konkursu. Udział w tym konkursie był dla mnie ważnym krokiem, który otworzył drzwi do poważniejszego programowania konkursowego i pozwolił mi na rozwój umiejętności w tej dziedzinie.",
    link:"https://old.zsen.lublin.eu/zawody-algorytmiczne-w-ramach-projektu-centrum-mistrzostwa-informatycznego/"
  },
  {
    title: "3. miejsce w konkursie o cyberbezpieczeństwie „Dzień Bezpiecznego Komputera”",
    photo:"lock",
    date: "2021",
    description: "Zająłem 3. miejsce w ogólnopolskim konkursie o cyberbezpieczeństwie „Dzień Bezpiecznego Komputera”, rywalizując z uczniami z 42 szkół z całej Polski. To osiągnięcie potwierdza moją wiedzę w dziedzinie bezpieczeństwa komputerowego oraz zaangażowanie w rozwijanie umiejętności w tej ważnej tematyce.",
    link:'https://old.zsen.lublin.eu/dawid-rej-uczen-klasy-iict-technik-programista-laureatem-xvii-regionalnego-konkursu-informatycznego-dzien-bezpiecznego-komputera/'
  },
  {
    title: "Miesięczne praktyki w Slavexie",
    photo:"briefcase",
    date: "2022",
    description: "Ukończyłem miesięczne praktyki w firmie Slavex, podczas których zdobywałem wiedzę i umiejętności w zakresie podstaw helpdesku, naprawy błędów w kodzie oraz pisania narzędzi i skryptów do wykorzystania w firmie. To doświadczenie pozwoliło mi na praktyczne zastosowanie mojej wiedzy oraz rozwój umiejętności technicznych w realnym środowisku pracy."
  },
  {
    title: "Pół roczne praktyki w Provisto",
    photo:"briefcase",
    date: "2023-2024",
    description: "Podczas praktyk w firmie Provisto stworzyłem własny harmonogram, który zawierał wbudowany kalendarz oraz funkcje wysyłania SMS-ów i e-maili. Dodatkowo, narzędzie umożliwiało koordynację pracowników, co znacząco usprawniło organizację pracy w zespole. To doświadczenie pozwoliło mi na praktyczne zastosowanie umiejętności programistycznych oraz zrozumienie potrzeb użytkowników."
  }
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto p-4 space-y-8 ">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Osiągnięcia & Doświadczenie</h1>
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
      className="mb-12 relative backdrop-blur-lg"
      style={{ scale, opacity }}
    >
      <div className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg overflow-hidden z-10">
        <Image src={`/projekty/${experience.photo}.svg`} className="invert"  alt="trophy" width={25} height={25} />
      </div>
      <motion.div 
        className="bg-[#00000075] p-4 rounded-lg shadow-md border border-gray-200 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
        <p className="text-sm text-white mt-1">{experience.date}</p>
        <p className="mt-2 text-white">{experience.description}</p>
        {experience.link ? 
          <p className="text-blue-500"><a href={experience.link} target="_blank"> Więcej informacji</a></p> : ""
        }
      </motion.div>
    </motion.div>
  )
}