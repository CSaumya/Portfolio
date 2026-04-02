import React from "react";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";

import Mp1 from "../assets/Mp1.png";
import Mp2 from "../assets/Mp2.png";
import Mp3 from "../assets/Mp3.png";
import Mp4 from "../assets/Mp4.png";
import Mp5 from "../assets/Mp5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "CanvasEdit",
    desc: "Image editing Web App",
    img: Mp1,
    github: "https://github.com/CSaumya/CanvasEdit",
    live: "https://canvas-edit-five.vercel.app/",
  },
  {
    id: 2,
    title: "Kanban",
    desc: "Kanban with modern UI",
    img: Mp2,
    github: "https://github.com/CSaumya/Kanban_board",
    live: "https://kanban-board-delta-silk.vercel.app/",
  },
  {
    id: 3,
    title: "MemeStack",
    desc: "Random meme generator",
    img: Mp3,
    github: "https://github.com/CSaumya/Meme_Stack",
    live: "https://meme-stack.vercel.app/",
  },
  {
    id: 4,
    title: "SkyCast",
    desc: "Weather Forecasting App",
    img: Mp4,
    github: "https://github.com/CSaumya/SkyCast",
    live: "https://csaumya.github.io/SkyCast/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    desc: "Classic game",
    img: Mp5,
    github: "https://github.com/CSaumya/Tic-Tac-Toe",
    live: "https://csaumya.github.io/Tic-Tac-Toe/",
  },
];

// Custom Arrow
const Arrow = ({ direction, onClick }) => (
  <div
    className={`
      hidden md:flex absolute
      ${direction === "next" ? "right-2" : "left-2"}
      top-1/2 -translate-y-1/2 z-10 cursor-pointer
      bg-black/40 hover:bg-black/60
      p-2 sm:p-3 rounded-full
      text-white text-lg sm:text-2xl
      backdrop-blur-md transition
    `}
    onClick={onClick}
  >
    {direction === "next" ? "→" : "←"}
  </div>
);

const MiniProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 max-w-7xl mx-auto overflow-x-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-lg sm:text-xl text-gray-300">
          My Learnings So Far
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-400">
          Mini Projects
        </h1>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.id} className="px-2 sm:px-3">
            <div className="
              flex flex-col items-center text-center
              rounded-xl shadow-lg
              p-4 sm:p-5 md:p-6
              bg-white/10 backdrop-blur-md border border-white/20
              w-full
              mx-auto
              transition duration-300 hover:shadow-2xl
            ">
              
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-36 sm:h-44 md:h-52 object-contain mb-3 rounded-lg"
              />

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-100 mt-2">
                {p.desc}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 bg-gray-600 rounded-full px-4 py-2 mt-4 shadow-md hover:bg-gray-700 transition">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    size={20}
                    className="text-white hover:scale-125 transition border-r-2 pr-2"
                  />
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xs sm:text-sm font-semibold"
                >
                  Live ⚡
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MiniProjects;
