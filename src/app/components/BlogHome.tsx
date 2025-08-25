import React from "react";
import BlogCard from "./BlogCard";
import SecondAnimatedHeading from "./SecondAnimatedHeading";

type BlogType = {
  img: string;
  title: string;
  category: string;
  readTime: number;
};

const BlogHome = () => {
  const data: BlogType[] = [
    { img: "/3.png", title: "Blog 1", category: "Category", readTime: 5 },
    { img: "/2.png", title: "Blog 2", category: "Category", readTime: 5 },
    { img: "/4.png", title: "Blog 3", category: "Category", readTime: 5 },
  ];

  return (
    <section
      id="blog-section"
      className="mt-20 w-full flex flex-col items-center justify-center"
    >
      <SecondAnimatedHeading />
      <p className="subheading mb-10 max-w-2xl text-center">
        Svaka ideja zaslužuje realizaciju. Krenimo zajedno i napravimo vaš
        projekt stvarnim.
      </p>

      <div className="w-full p-4 bg-darkSecondary">
        {/* center the grid and cap its width so it never grows off-screen */}
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start">
          {data.map((blog) => (
            <BlogCard blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
