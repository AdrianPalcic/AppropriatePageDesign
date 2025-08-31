"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import SlideShow from "./SlideShow";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeroSection = () => {
  // useGSAP(() => {
  //   // Split the text into characters
  //   const heroSplit = new SplitText("#hero-text", {
  //     type: "chars",
  //     charsClass: "char",
  //   });

  //   // Hide all characters initially
  //   gsap.set(heroSplit.chars, {
  //     opacity: 0,
  //   });

  //   // Typewriter animation
  //   gsap.to(heroSplit.chars, {
  //     opacity: 1,
  //     duration: 0.1, // Speed of each character appearing
  //     stagger: 0.06,
  //   });
  // }, []);

  return (
    // <section
    //   id="hero"
    //   className="w-full flex flex-col items-center justify-center h-[70vh] "
    // >
    //   <h1 className=" text-6xl text-center  mb-3 font-semibold" id="hero-text">
    //     Vaše središte za <span className="text-primary">dizajn</span>, <br />{" "}
    //     <span className="text-primary">razvoj</span> i brendiranje
    //   </h1>

    //   <SlideShow />
    // </section>

    <section className=" mb-20 flex flex-col  justify-center px-4">
      <p className="mb-6 font-regular text-sm font-sans">APDesign</p>
      <h1 className=" text-4xl sm:text-6xl lg:text-8xl font-medium text-blue-50 ">
        Vaše središte za dizajn, <br /> razvoj i brendiranje
      </h1>
      <p className="paragraph text-lg mt-8  font-sans">
        Web dizajn <span className="text-primary !opacity-100">•</span>{" "}
        Development <span className="text-primary !opacity-100">•</span>{" "}
        Digitalni marketing <span className="text-primary !opacity-100">•</span>{" "}
        Branding
      </p>

      <SlideShow />
    </section>
  );
};

export default HeroSection;
