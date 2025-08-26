import React from "react";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";
import ProjectContainer from "./components/ProjectContainer";

const page = () => {
  const projects = [
    {
      img: "/2.png",
      title: "Grof's Jewlery",
      text: "Unikatna kolekcija stranice za ručno rađeni nakit od papira, fokus na priču i detalje...",
    },
    {
      img: "/rename.png",
      title: "Simone Design",
      text: "Moderan one-page dizajn za dizajnericu interijera, s naglaskom na estetiku i eleganciju...",
    },
    {
      img: "/homegrass-1.png",

      title: "Homegrass",
      text: "Cjelokupni brand paket – od početne stranice do više podstranica i online identiteta...",
    },
  ];

  return (
    <main className="flex flex-col px-1 lg:px-4 sm:px-16 w-full mt-12">
      <Hero />
      <ProjectContainer posts={projects} />
    </main>
  );
};

export default page;
