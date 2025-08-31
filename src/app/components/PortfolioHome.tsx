import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { HoverZoomShowcase } from "./HoverZoomShowcase";

const PortfolioHome = () => {
  return (
    <section id="portfolio" className="mt-20 w-full flex flex-col items-center">
      <AnimatedHeading text="Od Ideje do Rješenja" />
      <p className="subheading mb-10">
        Pregledajte naš portfolio i pronađite inspiraciju za vlastiti projekt.
      </p>
      <HoverZoomShowcase />

      <Link href="/portfolio">
        <Button text="Pregledajte Cijeli Portfolio" />
      </Link>
    </section>
  );
};

export default PortfolioHome;
