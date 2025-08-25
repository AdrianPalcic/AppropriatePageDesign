"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import SlideShow from "./SlideShow";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#hero-text", {
      type: "words, chars",
    });

    gsap.from(heroSplit.chars, {
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.03,
    });
  }, []);

  return (
    <section id="hero" className="w-full flex flex-col items-center">
      <h1 className="heading " id="hero-text">
        Vaše središte za dizajn, <br /> razvoj i brendiranje
      </h1>
      <p className=" mt-4 subheading mb-4">
        Od koncepta do finalnog proizvoda – pretvaramo ideje u profesionalne web
        stranice, <br /> aplikacije i brendove koji ostavljaju dojam i donose
        rezultate.
      </p>
      <Link href="/kontakt">
        <Button text="Book A Call" />
      </Link>

      <SlideShow />
    </section>
  );
};

export default HeroSection;
