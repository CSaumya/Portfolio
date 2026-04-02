import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='mt-10 px-4 py-5 sm:px-6 md:px-12'>
      
      <div className='border-t border-gray-400 mb-6'></div>

      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-2xl sm:text-3xl md:text-4xl">
        <a href='https://github.com/CSaumya' className='text-gray-400 hover:text-white transition'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/saumya--chaudhary/' className='text-gray-400 hover:text-blue-500 transition'>
          <FaLinkedin />
        </a>
        <a href='https://x.com/SaneSaumya' className='text-gray-400 hover:text-white transition'>
          <FaXTwitter />
        </a>
        <a href='https://medium.com/@saumyachaudhary051002' className='text-gray-400 hover:text-green-500 transition'>
          <FaMedium />
        </a>
      </div>

      <div className='flex justify-center mt-6 text-gray-400 text-sm sm:text-base'>
        <p className='text-center'>
          © 2026 Saumya. All rights reserved.
        </p>
        <p></p>
      </div>

    </div>
  )
}

export default Footer