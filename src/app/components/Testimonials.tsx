"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { User } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Testimonials = () => {
  const data = [
    {
      text: "Rad s Adrianom bio je pravo zadovoljstvo. Od početne ideje do završnog proizvoda, sve je bilo jasno, profesionalno i na vrijeme. Dobio sam modernu, funkcionalnu web stranicu koja mi je već pomogla privući nove klijente. Posebno cijenim njegovu sposobnost da sluša moje želje, a pritom ponudi rješenja koja stranicu podižu na višu razinu. Topla preporuka svakome tko traži pouzdanog web dizajnera!",
      icon: <User />,
      name: "Davor Novak",
      city: "Homegrass",
    },
    {
      text: "APDesign je osvježio naš brend. Nova stranica i sustav rezervacija savršeno prenose atmosferu događaja — primijetili smo više upita i nekoliko večeri rasprodano. Profesionalno, kreativno i bez stresa.",
      icon: <User />,
      name: "Tamara",
      city: "Tipsy Muse",
    },
    {
      text: "Adrian je naš webshop učinio jednostavnim i pouzdanim za kupce: brza navigacija, jasni CTA-i i besprijekorna integracija plaćanja. Prodaja i povratne informacije kupaca su se značajno popravile nakon lansiranja. Toplo ga preporučujem svakome tko želi povećati online prihode.",
      icon: <User />,
      name: "Iva",
      city: "Gorf's Jewlery",
    },
    {
      text: "Landing page koji je Adrian izradio savršeno prikazuje moj portfolio — elegantno, pregledno i vizualno snažno. Umjesto općih upita, počele su pristići konkretne ponude i ozbiljni klijenti. Izvrsna izvedba i odlična komunikacija tijekom cijelog procesa.",
      icon: <User />,
      name: "Simone Nevistić",
      city: "Simone Design",
    },
  ];

  const headingRef = useRef(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    // create SplitText for chars
    const headingSplit = new SplitText(headingRef.current, {
      type: "words, chars",
    });

    // animate chars (use .chars), set once/start to avoid early triggers
    const tl = gsap.from(headingSplit.chars, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // start lower in viewport (safer with pinned sections)
        toggleActions: "play none none none",
        once: true, // don't replay when scrolling back
        // markers: true,            // enable for debugging
      },
    });
    gsap.from(".testimonial", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // cleanup on unmount / rerun
    return () => {
      try {
        headingSplit.revert();
      } catch (e) {}
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="testimonials" className="relative mt-40">
      <h1 className="heading" ref={headingRef}>
        Zadovoljni Klijenti
      </h1>
      <p className="subheading">
        Upoznajte ljude koji su imali benefite od naših usluga
      </p>
      <div className="flex flex-col items-center md:flex-row gap-6 flex-wrap  my-10 remove-scrollbar justify-center sm:items-end">
        {data.map((item) => (
          <div key={item.name} className="testimonial">
            <p className="text-grayCustom">{item.text}</p>
            <div className="flex gap-4 w-full mt-3 items-center">
              {item.icon}
              <div>
                <h3>{item.name}</h3>
                <p>{item.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
