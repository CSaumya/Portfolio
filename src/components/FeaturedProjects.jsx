import React from "react";
import { FaReact, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiGreensock, SiRedux } from "react-icons/si";

import projectImg1 from "../assets/Project2.png";
import projectImg2 from "../assets/Project1.png";
import projectImg3 from "../assets/Project3.png";
import projectImg4 from "../assets/Project4.png";

const projects = [
  {
    title: "Ochi UI",
    image: projectImg1,
    github: "https://github.com/CSaumya/Ochi",
    live: "https://ochi-eight-red.vercel.app/",
    description:
      "A modern animated UI inspired by Ochi design with smooth scroll animations, section reveal effects, a fully responsive layout, interactive UI elements, and a playful eyes-follow feature.",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: SiFramer, color: "text-pink-400" },
      { icon: SiGreensock, color: "text-green-400" },
    ],
  },
  {
    title: "K27",
    image: projectImg2,
    github: "https://github.com/CSaumya/K72",
    live: "https://k72-liard.vercel.app/",
    description:
      "A modern UI clone focusing on smooth animations, responsive layout, and component-based architecture.",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: SiGreensock, color: "text-green-400" },
    ],
  },
  {
    title: "Bite-Box",
    image: projectImg3,
    github: "https://github.com/CSaumya/Bite-Box",
    live: "https://bite-box-nine.vercel.app/",
    description:
      "Bite Box is a modern food ordering web app that lets users browse meals, explore categories, and add items to their cart with ease. Responsive, fast, and user-friendly.",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: SiRedux, color: "text-sky-400" },
    ],
  },
   {
    title: "StyleSphere",
    image: projectImg4,
    github: "https://github.com/CSaumya/StyleSphere",
    live: "https://style-sphere-nine.vercel.app/",
    description:
      "Stylesphere is a fashion e-commerce app offering an effortless way to browse modern outfits. Sleek UI, multi-page design, and smooth user experience.",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaCss3Alt, color: "text-cyan-400" }
    ],
  },
];

const FeaturedProjects = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 py-20 text-white">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xl text-gray-300">My Learnings So Far</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-400">
          Featured Projects
        </h1>
      </div>

      <div className=" flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden 
            flex flex-col md:flex-row hover:scale-[1.03] hover:-translate-y-2 transition duration-300 
            hover:shadow-[0_0_10px_white]"
          >
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 md:h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
              
              <div className="flex gap-3 mb-4 flex-wrap">
                {project.tech.map((techItem, i) => {
                  const Icon = techItem.icon;
                  return (
                    <div
                      key={i}
                      className="p-2 bg-white/10 rounded-full border border-white/20"
                    >
                      <Icon className={`${techItem.color} text-xl`} />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center mb-3">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h2>

                <div className="ml-auto flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xl cursor-pointer hover:scale-110 hover:text-gray-300 transition duration-300" />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm rounded-full bg-white text-black hover:bg-gray-300 transition"
                  >
                    Live
                  </a>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;