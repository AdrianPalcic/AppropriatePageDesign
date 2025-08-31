"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Davor",
    role: "Homegrass",
    content:
      "Rad je bio izuzetno efikasan i profesionalan. Iako je proces trajao nešto duže od očekivanog, rezultat je bio više nego vrijedan čekanja. Sa APDesignom smo u potpunosti redizajnirali našu web stranicu koja nas sada istinski predstavlja i odražava kvalitetu našeg brenda.",
    avatar: <User />,
  },
  {
    id: 2,
    name: "Tamara",
    role: "Tipsy Muse",
    content: "Želim samo reći Hvala Vam puno!",
    avatar: <User />,
  },
  {
    id: 3,
    name: "Iva",
    role: "Grof's Jewlery",
    content:
      "Webshop smo otvorili u tren oka, a kvaliteta se nije izgubila ni u najmanjem detalju. APDesign je uspio implementirati sve naše zahtjeve - od sigurnih plaćanja do intuitivnog admin panela. Brzina izrade nas je iznenadila, ali još više pažnja posvećena korisničkom iskustvu.",
    avatar: <User />,
  },
  {
    id: 4,
    name: "Simone Nevistić",
    role: "Simone Design",
    content:
      "Taman sam krenula s vlastitim poslom, a sa novom web stranicom mi sad dolazi toliko upita na koje nemam vremena odgovoriti!",
    avatar: <User />,
  },
];

export function FloatingTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card) => {
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="py-16 mt-10 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading">Što kažu drugi</h2>
          <p className="text-muted-foreground text-lg">
            Priče zadovoljnih klijenata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-card  rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex items-center justify-center">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <blockquote className="text-card-foreground leading-relaxed mb-4 text-balance">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
