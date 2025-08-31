import {
  Brush,
  Monitor,
  Palette,
  Rocket,
  TabletSmartphone,
  ToolCase,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Service = {
  icon: React.ReactElement;
  title: string;
  text: string;
};

const Services = () => {
  const data: Service[] = [
    {
      icon: <Monitor size={50} color="#2A9DF4" />,
      title: "Website Development",
      text: "Izrada modernih i responzivnih web stranica prilagođenih vašim potrebama.",
    },
    {
      icon: <Palette size={50} color="#2A9DF4" />,
      title: "Branding & Dizajn",
      text: "Kreiranje vizualnog identiteta – brošure, letci i marketinški materijali.",
    },
    {
      icon: <Brush size={50} color="#2A9DF4" />,
      title: "Logo Dizajn",
      text: "Profesionalni logotipi koji predstavljaju vaš brend i ostavljaju dojam.",
    },
    {
      icon: <TabletSmartphone size={50} color="#2A9DF4" />,
      title: "Mobilne Aplikacije",
      text: "Razvoj mobilnih aplikacija i booking sustava za sve platforme.",
    },
    {
      icon: <ToolCase size={50} color="#2A9DF4" />,
      title: "Website Maintenance",
      text: "Održavanje zdravlja stranica i ažuriranje sadržaja",
    },
    {
      icon: <Rocket size={50} color="#2A9DF4" />,
      title: "Digitalna strategija",
      text: "SEO, marketing materijali i savjetovanje za online rast vašeg brenda.",
    },
  ];

  return (
    <div className="mx-auto mb-10  bg-darkSecondary w-full md:w-[80%] rounded-md  px-6 py-2 md:py-14 ">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10
          gap-y-16

        "
      >
        {data.map((item) => (
          <Link
            href={`/services/${item.title}`}
            key={item.title}
            className="flex flex-col items-start gap-2 transition-all duration-300 hover:scale-[1.03] group"
          >
            <div>{item.icon}</div>
            <h3 className="text-lg font-bold text-[18px] sm:text-[22px] transition-colors duration-300  group-hover:text-primary">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
