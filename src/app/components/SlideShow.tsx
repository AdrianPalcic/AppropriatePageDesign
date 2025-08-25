import React from "react";

const SlideShow = () => {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/homegrass-2.png",
    "/rename.png",
    "/homegrass-1.png",
  ];

  return (
    <div className="relative mt-10 mx-auto h-[350px] overflow-hidden w-[80%]">
      {/* Track */}
      <div className="flex h-full w-max items-stretch animate-scroll space-x-10 pl-10 pr-10 will-change-transform">
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="h-full w-[300px] object-cover flex-none rounded-md"
            width={"300px"}
            aria-hidden={idx >= images.length ? true : undefined}
          />
        ))}
      </div>

      {/* Fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] sm:w-[200px] bg-gradient-to-r from-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[1px] sm:w-[200px] bg-gradient-to-l from-dark to-transparent" />
    </div>
  );
};

export default SlideShow;
