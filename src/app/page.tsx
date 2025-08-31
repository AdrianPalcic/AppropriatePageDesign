import Button from "./components/Button";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import PortfolioHome from "./components/PortfolioHome";
import { FloatingTestimonials } from "./components/FloatingTestimonials";
import BlogHome from "./components/BlogHome";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex flex-col px-1 lg:px-4 sm:px-16 w-full mt-12">
      <HeroSection />

      <section
        id="services"
        className="flex flex-col my-40  px-4 md:px-20 md:flex-row gap-12 justify-center"
      >
        <h3 className="flex-1 text-2xl font-thin">
          Stranice koje gradimo pričaju priču vašeg brenda, privlače nove
          klijente i grade povjerenje.
          <br /> Naš proces kreće od razumijevanja vaših ciljeva i potrebe vaših
          kupaca, a završava modernom, responzivnom i brzim performansama
          optimiziranom stranicom.
        </h3>
        <p className="flex-1 font-extralight">
          Spoj dizajna i funkcionalnosti nam je prioritet – koristimo provjerene
          tehnologije, SEO optimizaciju i prilagođene rješenja kako bismo
          izgradili web koji ne samo da izgleda odlično, nego i donosi
          rezultate.
        </p>
      </section>

      <section className="mx-auto w-full">
        <Services />
      </section>

      <PortfolioHome />

      <FloatingTestimonials />

      {/* <BlogHome /> */}

      <ContactForm />
    </main>
  );
}
