"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const AnimatedHeading = ({ text }: { text: string }) => {
  useGSAP(() => {
    const textSplit = new SplitText("#animated-heading", {
      type: "words, chars",
    });

    gsap.from(textSplit.chars, {
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#animated-heading",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <h1 id="animated-heading" className="heading">
      {text}
    </h1>
  );
};

export default AnimatedHeading;
