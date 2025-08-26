"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Post = {
  img: string;
  text: string;
  title: string;
};

const ProjectContainer = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-20">
      {posts.map((p) => (
        <ProjectItem key={p.title} post={p} />
      ))}
    </div>
  );
};

const ProjectItem = ({ post }: { post: Post }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current && containerRef.current) {
      gsap.fromTo(
        imageRef.current,
        { height: "20%" },
        {
          height: "100%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // when top of trigger hits bottom of viewport
            end: "top top", // when top of trigger hits top of viewport
            scrub: true,
            // markers: true, // uncomment for debugging
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] flex  flex-col justify-center items-center mx-auto mb-20"
    >
      <div className="w-full h-[100%] mt-20">
        <img
          ref={imageRef}
          src={post.img}
          alt="Website design and development Portfolio"
          className="object-contain w-full"
          style={{ height: "20%" }} // initial state
        />
      </div>
      <div className=" pt-4 pb-2 ">
        <h3 className="text-3xl font-bold">{post.title}</h3>
      </div>
      <p>{post.text}</p>
    </div>
  );
};

export default ProjectContainer;
