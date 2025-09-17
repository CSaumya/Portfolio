import React from 'react'
import { FaReact, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

import biteBox from '../../assets/bite-box.png'
import nomadGo from '../../assets/nomad-go.png'
import eCommerce from '../../assets/e-commerce.png'

const Project = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10 h-[150px]">
        <p className="text-[#9EB3C2] text-lg md:text-2xl">My Learnings So Far</p>
        <h1 className="text-[#21295C] text-4xl md:text-6xl font-bold">
          Featured Projects
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Cards */}
        <div className="flex flex-col gap-4 items-center justify-center text-white bg-[#001d3d] rounded-xl p-6 shadow-lg h-[500px]">
          <p className="text-lg md:text-xl">Order Placing Website</p>
          <h3 className="font-bold text-2xl md:text-3xl">Bite Box</h3>

          {/* Image */}
          <img
            src={biteBox}
            alt="Bite Box Preview"
            className="w-full max-w-[350px] rounded-lg"
          />

          {/* Description */}
          <p className="text-sm md:text-base text-center max-w-[500px]">
            Bite Box is a modern food ordering web app that lets users browse delicious meals, explore categories, and add items to their cart with ease. Designed with a responsive UI and smooth interactions, it delivers a fast and intuitive food-ordering experience.
          </p>

          {/* Tech + Links */}
          <div className="flex flex-row sm:flex-row gap-4 w-full justify-center mt-4">
            {/* Tech Stack */}
            <div className="flex justify-center items-center gap-3 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md">
              <FaReact size={22} />
              <SiRedux size={22} />
              <SiTailwindcss size={22} />
            </div>

            {/* Links */}
            <div className="flex justify-center items-center gap-4 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md cursor-pointer">
              <a
                href="https://github.com/CSaumya/Bite-Box"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} className="hover:scale-125 transition text-white border-r-2 pr-2"
                                  />
              </a>
              <a
                href="https://bite-box-nine.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Live⚡
              </a>
            </div>
          </div>
        </div>

          <div className="flex flex-col gap-4 items-center justify-center text-white bg-[#001d3d] rounded-xl p-6 shadow-lg  h-[500px]">
          <p className="text-lg md:text-xl">Tour And Travel Website</p>
          <h3 className="font-bold text-2xl md:text-3xl">Nomad-Go</h3>

          {/* Image */}
          <img
            src={nomadGo}
            alt="Bite Box Preview"
            className="w-full max-w-[350px] rounded-lg"
          />

          {/* Description */}
          <p className="text-sm md:text-base text-center max-w-[500px]">
           Nomad Go is a travel companion web app that helps users discover destinations, plan trips, and explore experiences with ease. With a clean UI and responsive design, it ensures a seamless journey for modern travelers.
          </p>

          {/* Tech + Links */}
          <div className="flex flex-row sm:flex-row gap-4 w-full justify-center mt-4">
            {/* Tech Stack */}
            <div className="flex justify-center items-center gap-3 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md">
              <FaReact size={22} />
              <SiTailwindcss size={22} />
            </div>

            {/* Links */}
            <div className="flex justify-center items-center gap-4 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md cursor-pointer">
              <a
                href="https://github.com/CSaumya/Nomad-Go"
                target="_blank"
                rel="noreferrer"
              >
<FaGithub
                    size={30}
                    className="hover:scale-125 transition text-white border-r-2 pr-2"
                  />              </a>
              <a
                href="https://nomad-go.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Live⚡
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center text-white bg-[#001d3d] rounded-xl p-6 shadow-lg  h-[500px]">
          <p className="text-lg md:text-xl">Mutli-page Shopping Website</p>
          <h3 className="font-bold text-2xl md:text-3xl">StyleSphere</h3>

          {/* Image */}
          <img
            src={eCommerce}
            alt="Bite Box Preview"
            className="w-full max-w-[350px] rounded-lg"
          />

          {/* Description */}
          <p className="text-sm md:text-base text-center max-w-[500px]">
          Stylesphere is a fashion e-commerce web app that offers users an effortless way to explore. Its sleek, responsive interface ensures a smooth shopping experience, making fashion browsing simple and enjoyable.
          </p>

          {/* Tech + Links */}
          <div className="flex flex-row sm:flex-row gap-4 w-full justify-center mt-4">
            {/* Tech Stack */}
            <div className="flex justify-center items-center gap-3 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md">
              <FaReact size={22} />
              <FaCss3Alt size={22} />
            </div>

            {/* Links */}
            <div className="flex justify-center items-center gap-4 bg-blue-800 rounded-3xl px-5 w-[110px] h-[40px] shadow-md cursor-pointer">
              <a
                href="https://github.com/CSaumya/StyleSphere"
                target="_blank"
                rel="noreferrer"
              >
<FaGithub
                    size={30}
                    className="hover:scale-125 transition text-white border-r-2 pr-2"
                  />              </a>
              <a
                href="https://style-sphere-nine.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Live⚡
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
