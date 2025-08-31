"use client";

// Standalone Hover Zoom Grid Component
// Copy and paste this entire component into your project

import type React from "react";

// Simple Badge component (replace with your own if you have one)
const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

const projects = [
  {
    id: 1,
    title: "Magic Gloves",
    description: "Landing page",
    image: "/1.png",
    tags: ["Wordpress", "Figma", "GSAP"],
  },
  {
    id: 2,
    title: "Grof's Jewlery",
    description: "Webshop",
    image: "/2.png",
    tags: ["Next.js", "WooCommerce", "CMS"],
  },
  {
    id: 3,
    title: "Homegrass",
    description: "Website",
    image: "/homegrass-1.png",
    tags: ["React.js", "Wordpress", "CMS"],
  },
  {
    id: 4,
    title: "Simone Design",
    description: "Landing Page",
    image: "/4.png",
    tags: ["Next.js", "Figma", "GSAP"],
  },
  {
    id: 5,
    title: "ShineSpot",
    description: "Landing page",
    image: "/car.png",
    tags: ["Next.js", "Figma", "GSAP"],
  },
  {
    id: 6,
    title: "Treba mi jos jedan projekt",
    description: "Interactive online education system",
    image: "/3.png",
    tags: ["Svelte", "Video", "Progress"],
  },
];

export function HoverZoomShowcase() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative cursor-pointer">
            <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-2 text-balance">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-3 text-pretty opacity-90">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-xs bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
