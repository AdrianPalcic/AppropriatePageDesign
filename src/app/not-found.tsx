"use client";

import React from "react";
import { Construction } from "lucide-react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
      {/* Icon */}
      <Construction className="w-20 h-20 text-primary mb-6 animate-bounce" />

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">U Izradi</h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-md">
        Ova stranica je trenutno u izradi. Radimo na tome da je uskoro učinimo
        dostupnom.
      </p>

      {/* Optional link back home */}
      <Link
        href="/"
        className="bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold  transition-colors"
      >
        Povratak na Početnu
      </Link>
    </div>
  );
};

export default NotFound;
