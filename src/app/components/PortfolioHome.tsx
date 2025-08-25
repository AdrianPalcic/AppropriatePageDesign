import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import PortfolioCard from "./PortfolioCard";
import Button from "./Button";
import Link from "next/link";

type dataType = {
  firstImg: string;
  secondImg: string;
  title: string;
  text: string;
  tags: string[];
  tools: string[];
};

const PortfolioHome = () => {
  const data: dataType[] = [
    {
      firstImg: "/2.png",
      secondImg: "/3.png",
      title: "Grof's Jewlery",
      text: "Unikatna kolekcija stranice za ručno rađeni nakit od papira, fokus na priču i detalje...",
      tags: ["Webshop", "Branding", "Ecommerce"],
      tools: ["Design", "SEO", "Nextjs", "WooCommerce"],
    },
    {
      firstImg: "/rename.png",
      secondImg: "/4.png",
      title: "Simone Design",
      text: "Moderan one-page dizajn za dizajnericu interijera, s naglaskom na estetiku i eleganciju...",
      tags: ["Lading Page", "Branding", "Logo Design"],
      tools: ["Design", "SEO", "Nextjs"],
    },
    {
      firstImg: "/homegrass-1.png",
      secondImg: "/homegrass-2.png",
      title: "Homegrass",
      text: "Cjelokupni brand paket – od početne stranice do više podstranica i online identiteta...",
      tags: ["Website", "Branding", "CMS"],
      tools: ["Design", "SEO", "Reactjs", "WP Headless"],
    },
  ];

  return (
    <section id="portfolio" className="mt-40 w-full flex flex-col items-center">
      <AnimatedHeading text="Od Ideje do Rješenja" />
      <p className="subheading mb-10">
        Pregledajte naš portfolio i pronađite inspiraciju za vlastiti projekt.
      </p>

      {data.map((item) => (
        <PortfolioCard item={item} key={item.title} />
      ))}

      <Link href="/portfolio">
        <Button text="Pregledajte Cijeli Portfolio" />
      </Link>
    </section>
  );
};

export default PortfolioHome;
