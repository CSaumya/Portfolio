import { useEffect, useState } from "react";
import profileImg from "../../assets/heroImg.jpg";
import { FaEnvelope } from "react-icons/fa";

const rotatingTexts = ["Frontend Developer", "Web Developer", "React Enthusiast"];

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto px-4 flex flex-col-reverse md:flex-row justify-center items-center mt-20 min-h-screen text-white gap-10">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
        <h1 className="text-[#081346] text-5xl md:text-7xl font-bold">
          Hi, I'm Saumya
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          I'm a{" "}
          <span className="text-[#060e66]">{rotatingTexts[currentText]}</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          A passionate frontend developer who loves bringing ideas to life
          through design and code. Take a look around and discover some of my
          favorite projects.
        </p>

        {/* Hire Me Button */}
        <div className="flex justify-center md:justify-start">
          <a href="mailto:saumyachaudhary051002@gmail.com">
            <button className="flex justify-center items-center gap-2 h-[50px] w-[140px] px-5 bg-[#003f88] hover:bg-[#001233] text-white font-semibold rounded-full shadow-lg transition duration-300">
              <FaEnvelope />
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-blue-800 shadow-xl z-10 glow-photo"
        />
      </div>
    </div>
  );
};

export default Hero;
