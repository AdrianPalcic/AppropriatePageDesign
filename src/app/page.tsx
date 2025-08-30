import Services from "./components/Services";
import Button from "./components/Button";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import HomeCTA from "./components/HomeCTA";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import PortfolioHome from "./components/PortfolioHome";

export default function Home() {
  return (
    <main className="flex flex-col px-1 lg:px-4 sm:px-16 w-full mt-12">
      <HeroSection />

      <section id="services" className="flex flex-col items-center">
        <p className="subheading my-20">
          Sa više od 20 zadovoljnih klijenata i nizom uspješno završenih <br />
          projekata, pružamo digitalna rješenja koja ostavljaju dojam.
        </p>
        <Services />
        <Link href="/kontakt">
          <Button text="Započni svoj projekt" />
        </Link>
      </section>

      <PortfolioHome />

      <HomeCTA />

      <Testimonials />

      {/* <BlogHome /> */}

      <ContactForm />
    </main>
  );
}
