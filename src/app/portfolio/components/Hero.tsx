"use client";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import React from "react";

const Hero = () => {
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
    <section id="hero" className="w-full flex flex-col items-center h-[60vh]">
      <h1 className="heading" id="hero-text">
        Portfolio
      </h1>
      <p className=" mt-4 subheading mb-4">
        Projekti koji govore umjesto mene.
      </p>

      <p className="subheading ">Scroll down </p>
    </section>
  );
};

export default Hero;
