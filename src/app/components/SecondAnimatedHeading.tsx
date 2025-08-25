"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SecondAnimatedHeading = () => {
  const headingRef = useRef(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    // create SplitText and animate the .chars array
    const split = new SplitText(headingRef.current, { type: "words, chars" });

    const tl = gsap.from(split.chars, {
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 70%", // safer when sections above are pinned
        toggleActions: "play none none none",
        once: true, // play only once
        // markers: true,             // enable while debugging
      },
    });

    // cleanup on unmount / rerun
    return () => {
      try {
        split.revert();
      } catch (e) {}
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <h1 ref={headingRef} className="heading">
      Praktični <span className="text-primary">savjeti i resursi</span> <br />
      za web development i dizajn
    </h1>
  );
};

export default SecondAnimatedHeading;
