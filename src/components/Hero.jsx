import {useEffect, useState} from 'react'
import p1 from '../assets/p1.jpeg'

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
    <section 
      className="relative w-full min-h-screen mt-15 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 text-white gap-10 bg-cover bg-center">

      {/* Left Content */}
      <div className="relative z-10 w-full space-y-6 text-center md:text-left">
        <p className="text-lg text-gray-300">Hi, I'm Saumya</p>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          <span className="text-gray-400">{rotatingTexts[currentText]}</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
          I’m a Frontend Developer building modern and responsive web applications. 
          Take a look around and discover some of my projects.
        </p>

        <a href='/cv.pdf' download className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition cursor-pointer">
          Download CV
        </a>
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img 
          src={p1} 
          alt="profile" 
          className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-full shadow-lg"
        />
      </div>

    </section>
  )
}

export default Hero