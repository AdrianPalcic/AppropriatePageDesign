"use client";

import React, { useCallback, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  service: string;
  budget: string;
  deadline: string;
  source: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    service: "",
    budget: "",
    deadline: "",
    source: "",
    message: "",
  });

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Basic client-side validation example (you can expand)
      if (!formValues.name || !formValues.email || !formValues.service) {
        alert("Molim popunite obavezna polja: ime, email i usluga.");
        return;
      }

      // Replace with your API call
      console.log(formValues);

      setFormValues({
        name: "",
        email: "",
        service: "",
        budget: "",
        deadline: "",
        source: "",
        message: "",
      });
    },
    [formValues]
  );

  return (
    <section id="contact-form" className="mt-40 w-full flex justify-center">
      <div className="sm:w-[80%] w-full mx-0 sm:mx-16 bg-gradient-to-br from-primary/5 to-transparent flex flex-col py-10 px-6">
        <h2 className="uppercase text-[30px] font-semibold text-center">
          Stvorimo nešto zajedno
        </h2>
        <p className="subheading text-center max-w-2xl mx-auto mb-6">
          Svaka ideja zaslužuje realizaciju. Krenimo zajedno
          <br /> i napravimo vaš projekt stvarnim.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mx-auto"
          aria-label="Kontakt forma"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="mb-2">
                Vaše Ime <span className="text-red-500">*</span>
              </span>
              <input
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Ime i prezime"
                required
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="mb-2">
                Vaš Email <span className="text-red-500">*</span>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            {/* Service */}
            <label htmlFor="service" className="flex flex-col">
              <span className="mb-2">
                Kako Vam možemo pomoći? <span className="text-red-500">*</span>
              </span>
              <select
                id="service"
                name="service"
                value={formValues.service}
                onChange={handleChange}
                required
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled hidden>
                  Odaberite uslugu…
                </option>
                <option value="web">Izrada Web Stranice</option>
                <option value="webshop">Izrada Web Shopa</option>
                <option value="branding">Branding</option>
                <option value="logo">Logo Dizajn</option>
                <option value="maintenance">Održavanje Weba</option>
                <option value="app">Izrada Aplikacije</option>
                <option value="marketing">Digitalni Marketing</option>
              </select>
            </label>

            {/* Budget */}
            <label htmlFor="budget" className="flex flex-col">
              <span className="mb-2">
                Koji Vam je budžet? <span className="text-red-500">*</span>
              </span>
              <select
                id="budget"
                name="budget"
                value={formValues.budget}
                onChange={handleChange}
                required
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled hidden>
                  Odaberite raspon…
                </option>
                <option value="250-500">250€ - 500€</option>
                <option value="500-1000">500€ - 1000€</option>
                <option value="1000-2000">1000€ - 2000€</option>
                <option value="2000-5000">2000€ - 5000€</option>
                <option value="5000-plus">5000€+</option>
              </select>
            </label>

            {/* Deadline */}
            <label htmlFor="deadline" className="flex flex-col">
              <span className="mb-2">Rok završetka projekta</span>
              <select
                id="deadline"
                name="deadline"
                value={formValues.deadline}
                onChange={handleChange}
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled hidden>
                  Odaberite rok…
                </option>
                <option value="1w">Tjedan</option>
                <option value="2w">2 tjedna</option>
                <option value="3-6w">3 - 6 tjedana</option>
                <option value="6w-plus">6+ tjedana</option>
              </select>
            </label>

            {/* Source */}
            <label htmlFor="source" className="flex flex-col">
              <span className="mb-2">Gdje ste čuli za Nas</span>
              <select
                id="source"
                name="source"
                value={formValues.source}
                onChange={handleChange}
                className="bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled hidden>
                  Odaberite…
                </option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="referral">Preporuka</option>
                <option value="google">Google pretraga</option>
              </select>
            </label>
          </div>

          {/* Message */}
          <label htmlFor="message" className="flex flex-col mt-6">
            <span className="mb-2">
              Vaša Poruka <span className="text-red-500">*</span>
            </span>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              required
              placeholder="Poruka..."
              className="h-48 bg-dark p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
            />
          </label>

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn">
              Pošalji
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
