import React from "react";

const HomeCTA = () => {
  return (
    <section
      id="services"
      className="flex flex-col mt-40 my-20 px-4 md:px-20 md:flex-row gap-12 justify-center"
    >
      <h3 className="flex-1 text-2xl font-thin ">
        {" "}
        Stranice koje gradimo pričaju priču vašeg brenda, privlače nove klijente
        i grade povjerenje.
        <br /> Naš proces kreće od razumijevanja vaših ciljeva i potrebe vaših
        kupaca, a završava modernom, responzivnom i brzim performansama
        optimiziranom stranicom.
      </h3>
      <p className="flex-1 font-extralight opacity-40">
        {" "}
        Spoj dizajna i funkcionalnosti nam je prioritet – koristimo provjerene
        tehnologije, SEO optimizaciju i prilagođene rješenja kako bismo
        izgradili web koji ne samo da izgleda odlično, nego i donosi rezultate.
      </p>
    </section>
  );
};

export default HomeCTA;
