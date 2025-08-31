"use client";

import Button from "./components/Button";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import PortfolioHome from "./components/PortfolioHome";
import { FloatingTestimonials } from "./components/FloatingTestimonials";
import BlogHome from "./components/BlogHome";
import Services from "./components/Services";
import { ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import HomeCTA from "./components/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col px-1 lg:px-4 sm:px-16 w-full mt-12">
      <HeroSection />

      <Services />

      <PortfolioHome />
      <HomeCTA />

      <FloatingTestimonials />

      {/* <BlogHome /> */}

      <ContactForm />
    </main>
  );
}
