import Link from "next/link";
import React from "react";

const PortfolioCard = ({ item }: { item: any }) => {
  const { firstImg, secondImg, title, text, tools, tags } = item;

  return (
    <div
      id="portfolio-card"
      className={`flex flex-col  bg-darkSecondary justify-between h-fit lg:h-[450px] p-2 lg:p-4 rounded-md w-full lg:w-[80%] lg:gap-10 mb-10  lg:flex-row relative`}
    >
      <Link
        href={`/portfolio/${title}`}
        className="image-container flex-[1.4] h-full relative group"
      >
        <img
          src={firstImg}
          alt="Website development and design hrvatska, Zagreb"
          className="w-full object-cover h-full rounded-md opacity-100 transition-opacity duration-200 group-hover:opacity-0"
          loading="lazy"
        />
        <img
          src={secondImg}
          alt="Website development and design hrvatska, Zagreb"
          className="w-full object-cover h-full rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          loading="lazy"
        />
      </Link>

      <div className="text-container flex-1 mt-5 flex flex-col justify-between">
        <div>
          <h3 className="uppercase font-bold text-[24px] mb-2">{title}</h3>
          <p className="subheading !text-left">{text}</p>
          <div className="flex flex-wrap gap-2 items-center mt-2 mb-6 lg:mb-0 ">
            {tags.map((tag: string) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="underline"></div>
          <div className="flex gap-4 text-grayCustom text-[18px] items-center">
            <h4>{tools[0]}</h4>
            <div className="dot"></div>
            <h4>{tools[1]}</h4>
            <div className="dot"></div>
            <h4>{tools[2]}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
