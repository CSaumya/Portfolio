import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJavascript } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Redux", icon: <SiRedux />, category: "tools" },
  { name: "GitHub", icon: <FaGithub />, category: "tools" },
];

const Skills = () => {
  const [active, setActive] = useState("all");

  const filteredSkills =
    active === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === active);

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 text-white">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-300 mb-2">
          Technologies I work with
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400">
          My Skills
        </h1>
        
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["all", "frontend", "tools"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
              active === cat
                ? "bg-gray-800 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="
              group flex flex-col items-center justify-center 
              bg-white/10 backdrop-blur-md border border-white/20 
              rounded-xl p-6 
              transition duration-300 
              hover:scale-110 hover:shadow-2xl hover:bg-gray-500/30
              cursor-pointer
            "
          >
            <div className="text-3xl sm:text-4xl mb-3 group-hover:rotate-12 transition">
              {skill.icon}
            </div>
            <p className="text-sm sm:text-base font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;