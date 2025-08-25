import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const usluge = [
    "Web Development",
    "Branding & Design",
    "Logo Design",
    "Mobilne Aplikacije",
    "Digitalna Strategija",
  ];

  const informacije = [
    "Blog",
    "Kontakt",
    "Politika Privatnosti",
    "Uvjeti Korištenja",
    "Kolačići",
  ];

  return (
    <footer className="flex w-full px-4 sm:px-16 gap-10 flex-wrap mt-20">
      <div className="flex-1 flex flex-col min-w-[280px]">
        <h2 className="mb-2 text-[30px] font-semibold">APDESIGN</h2>
        <p className="text-grayCustom ">A Digital solutions agency</p>
        <Link
          href="https://maps.app.goo.gl/S8c2Y48QM7ARc7L16"
          className="text-grayCustom  transition-all duration-300 hover:text-white"
        >
          Ulica Huga Badalica 30, Zagreb
        </Link>
        <Link
          className="text-grayCustom  transition-all duration-300 hover:text-white"
          href="telto:0957482199"
        >
          +385 95 748 2199
        </Link>
        <Link
          className="text-grayCustom  transition-all duration-300 hover:text-white"
          href="mailto:appropriatepage.design@gmail.com"
        >
          appropriatepage.design@gmail.com
        </Link>
      </div>
      <div className="flex-1 min-w-[280px] flex flex-col gap-2">
        <h2 className="mb-2 text-[20px] font-semibold">USLUGE</h2>
        {usluge.map((usluga) => (
          <Link
            className="text-grayCustom text-[18px] transition-all duration-300 hover:text-white"
            href={`/services/${usluga}`}
            key={usluga}
          >
            {usluga}
          </Link>
        ))}
      </div>
      <div className="flex-1 min-w-[280px] flex flex-col gap-2">
        <h2 className="mb-2 text-[20px] font-semibold">Informacije</h2>
        {informacije.map((info) => (
          <Link
            className="text-grayCustom text-[18px] transition-all duration-300 hover:text-white"
            href={`/services/${info}`}
            key={info}
          >
            {info}
          </Link>
        ))}
      </div>
      <div className="flex-1 min-w-[280px]">
        <h2 className="mb-2 text-[20px] font-semibold">Društvene mreže</h2>
        <div className="flex gap-4 mt-2">
          <Link href={"https://www.instagram.com/apd_esign/"}>
            <Instagram />
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=61576140164992"}>
            <Facebook />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
