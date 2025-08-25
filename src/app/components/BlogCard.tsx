import React from "react";

type BlogType = {
  img: string;
  title: string;
  category: string;
  readTime: number;
};

const BlogCard: React.FC<{ blog: BlogType }> = ({ blog }) => {
  const { title, readTime, category, img } = blog;

  return (
    <article className="flex flex-col w-full bg-transparent">
      {/* responsive image heights so it adapts to screen size */}
      <img
        src={img}
        alt={title}
        className="blog-img h-44 sm:h-56 md:h-72 w-full"
        loading="lazy"
      />

      <div className="mt-4">
        <h3 className="mb-4 text-[22px] font-semibold">{title}</h3>
        <div className="underline mb-3" />
        <div className="flex w-full justify-between items-center text-grayCustom">
          <p>{category}</p>
          <p>{`${readTime} min`}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
