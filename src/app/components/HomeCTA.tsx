"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const HomeCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const firstHeadingRef = useRef<HTMLHeadingElement>(null);
  const secondHeadingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const isMobile = window.innerWidth < 768;

    // Set initial states
    gsap.set(secondHeadingRef.current, { autoAlpha: 0, y: 20 });

    const split = new SplitText(firstHeadingRef.current, {
      type: "words, chars",
    });

    // Entrance animation for first heading + button
    const enterTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    enterTL.from(split.chars, {
      yPercent: 50,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.03,
    });

    if (buttonRef.current) {
      enterTL.from(
        buttonRef.current,
        { yPercent: 40, autoAlpha: 0, duration: 0.8, ease: "expo.out" },
        "-=0.5"
      );
    }

    // Only use pin on desktop
    if (!isMobile) {
      const pinTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: () => "+=" + window.innerHeight * 1.2,
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      pinTL.to(firstHeadingRef.current, {
        autoAlpha: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.3,
        stagger: 0.06,
      });

      pinTL.to(
        secondHeadingRef.current,
        {
          autoAlpha: 1,
          y: -20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    } else {
      // On mobile, just fade out/in on scroll without pin
      const mobileTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      });

      mobileTL.to(firstHeadingRef.current, {
        autoAlpha: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.inOut",
      });

      mobileTL.to(
        secondHeadingRef.current,
        {
          autoAlpha: 1,
          y: -20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="CTA-home"
      className="w-full relative flex items-center justify-center min-h-[100vh]"
    >
      <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="heading" ref={firstHeadingRef}>
          Radimo stranice koje <br /> drugi{" "}
          <span className="text-primary">ne mogu</span>
        </h1>

        <div className="mt-8 z-50">
          <Link href="/kontakt">
            <Button text="Radimo Zajedno" ref={buttonRef} />
          </Link>
        </div>
      </div>

      <div
        ref={secondHeadingRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full max-w-[1200px] px-6 text-center">
          <h1 className="heading leading-tight">
            Strategijom koja{" "}
            <span className="text-primary">donosi rezultate</span>.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
