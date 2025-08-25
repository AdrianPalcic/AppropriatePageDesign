import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const navbarData = ["Usluge", "Portfolio", "Blog"];

  return (
    <header className="w-full py-4 px-4 sm:px-16">
      <nav className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Web development and design Hrvatska"
              width={120}
              height={50}
              className="mix-blend-lighten"
            />
          </Link>
        </div>
        <ul className="hidden md:flex  gap-12 text-[18px]">
          {navbarData.map((data) => (
            <Link
              href={`/${data}`}
              key={data}
              className=" group transition duration-300"
            >
              <>
                <li className="font-medium">{data}</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </>
            </Link>
          ))}
        </ul>

        <div>
          <Link href="/kontakt">
            <Button text={"Radimo Zajedno"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
