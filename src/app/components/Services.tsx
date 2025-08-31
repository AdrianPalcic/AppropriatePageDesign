import {
  Brush,
  ChevronDown,
  Monitor,
  Palette,
  Rocket,
  TabletSmartphone,
  ToolCase,
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Button from "./Button";

type Service = {
  icon: React.ReactElement;
  title: string;
  text: string;
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Web Dizajn",
      desc: "Kreiramo moderno i intuitivno korisničko iskustvo koje ostavlja snažan dojam na vaše posjetitelje. Naš dizajn fokusira se na jasnu navigaciju, vizualnu privlačnost i konverziju, osiguravajući da vaša web stranica bude ne samo lijepa već i funkcionalna.",
    },
    {
      title: "Web Development",
      desc: "Razvijamo brze, sigurne i skalabilne web aplikacije koristeći najnovije tehnologije. Naš kod je optimiziran za performanse, SEO i cross-browser kompatibilnost, osiguravajući besprijekorno iskustvo na svim uređajima.",
    },
    {
      title: "Održavanje Webstranice",
      desc: "Redovito ažuriramo i nadograđujemo vašu web stranicu kako bi osigurali njen optimalan rad. Pružamo tehničku podršku, backup usluge, sigurnosne nadogradnje i kontinuirano poboljšanje performansi.",
    },
    {
      title: "Izrada mobilnih aplikacija",
      desc: "Razvijamo nativne i cross-platform mobilne aplikacije za iOS i Android. Naše aplikacije kombiniraju vrhunski dizajn, intuitivno korisničko iskustvo i robustne funkcionalnosti specifične za mobilne uređaje.",
    },
    {
      title: "Izrada Loga",
      desc: "Kreiramo jedinstvene i prepoznatljive logotipe koji efikasno komuniciraju identitet vašeg branda. Svaki logo dizajniramo s pažnjom prema vašoj target publici, vrijednostima i dugoročnoj prepoznatljivosti.",
    },
    {
      title: "SEO",
      desc: "Optimiziramo vašu web stranicu za tražilice kako biste poboljšali vidljivost i organic traffic. Naš SEO pristup uključuje tehničku optimizaciju, kvalitetan content strategy i izgradnju authorityja kroz link-building.",
    },
  ];

  const handleSubmit = (s: number) => {
    setActiveService(s);
  };

  // Calculate max height for service descriptions to prevent layout shift
  const maxDescHeight = useMemo(() => {
    return (
      Math.max(
        ...services.map((service) => {
          // Approximate height based on character count (adjust as needed)
          return Math.ceil(service.desc.length / 60) * 24;
        })
      ) + 32
    ); // Add padding
  }, [services]);

  return (
    <section className="overflow-hidden">
      {" "}
      <div className="flex flex-col items-center justify-center gap-16 w-full mb-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-playfair">Koja Vam usluga treba?</p>
          <ChevronDown />
        </div>
        <div className="flex flex-col lg:flex-row justify-center px-4 md:px-20 w-full max-w-7xl mx-auto">
          {" "}
          <div className="w-full lg:w-1/2 flex flex-col px-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`w-full mt-4 first:mt-0 mx-auto flex flex-col transition-all duration-200 hover:bg-tagColor py-3 px-4 cursor-pointer group rounded-md min-h-[60px] ${
                  activeService === idx ? "active" : ""
                }`}
                onClick={() => handleSubmit(idx)}
              >
                <h1
                  className={`text-left text-xl md:text-2xl lg:text-3xl group-hover:text-primary leading-tight font-sans font-thin ${
                    activeService === idx ? "text-primary" : ""
                  }`}
                >
                  {service.title}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:p-6 mt-8 lg:mt-0">
            <div
              className="text-left text-[16px] md:text-[18px] opacity-50 flex-1 transition-opacity duration-200 font-playfair flex flex-col gap-3"
              style={{ minHeight: `${maxDescHeight}px` }} // Fixed height to prevent layout shift
            >
              {services[activeService].desc}
              <Link href={`/usluge/${services[activeService].title}`}>
                <Button text="Pročitaj više"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
