import React, { useState } from "react";
import logo from "../assets/name-logo.png";

const NavItem = ({ text, link }) => (
  <li
    onClick={() => {
      document.getElementById(link)?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="relative overflow-hidden cursor-pointer group h-6 text-[#D8CFBC]"
  >
    <span className="block transition duration-300 group-hover:translate-y-full">
      {text}
    </span>
    <span className="absolute left-0 top-0 block -translate-y-full transition duration-300 group-hover:translate-y-0">
      {text}
    </span>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="px-6 md:px-8 flex justify-between items-center fixed w-full top-0 z-50 backdrop-blur-md bg-black/30">
      
      {/* Logo */}
      <img src={logo} alt="logo" className="h-16 md:h-20" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <NavItem text="Projects" link="projects" />
        <NavItem text="Skills" link="skills" />
        <NavItem text="Connect" link="connect" />
      </ul>

      {/* Hamburger Button */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "rotate-45" : "-translate-y-2"}`}
          ></span>

          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "opacity-0" : ""}`}
          ></span>

          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "-rotate-45" : "translate-y-2"}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium text-[#D8CFBC] bg-[#11120D] py-10">
          <li onClick={() => handleScroll("projects")}>Projects</li>
          <li onClick={() => handleScroll("skills")}>Skills</li>
          <li onClick={() => handleScroll("connect")}>Connect</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;