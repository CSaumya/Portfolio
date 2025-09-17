import React from "react";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import todo from "../../assets/Todo.png";
import weather from "../../assets/weather.png";
import razorpay from "../../assets/razorpay.png";
import mail from "../../assets/mailify.png";
import ticTac from "../../assets/tic-tac-toe.png";

const projects = [
  {
    id: 1,
    title: "Smart-ToDo",
    desc: "ToDo web with interactive features and dark/light theme toggle!",
    img: todo,
    github: "https://github.com/CSaumya/SmartToDo",
    live: "https://csaumya.github.io/SmartToDo/",
  },
  {
    id: 2,
    title: "SkyCast",
    desc: "Weather forecasting app with live API integration.",
    img: weather,
    github: "https://github.com/CSaumya/SkyCast",
    live: "https://csaumya.github.io/SkyCast/",
  },
  {
    id: 3,
    title: "Mailify",
    desc: "Email validator website with beautiful Ui.",
    img: mail,
    github: "https://github.com/CSaumya/Mailify",
    live: "https://csaumya.github.io/Mailify/",
  },
  {
    id: 4,
    title: "Razorpay Ui Clone",
    desc: "Frontend clone of Razorpay payment gateway.",
    img: razorpay,
    github: "https://github.com/CSaumya/RazorPay-UI-Clone",
    live: "https://csaumya.github.io/RazorPay-UI-Clone/",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe game with interactive results.",
    img: ticTac,
    github: "https://github.com/CSaumya/Tic-Tac-Toe",
    live: "https://csaumya.github.io/Tic-Tac-Toe/",
  },
];

const MiniProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="text-white py-16 px-6 min-h-screen flex flex-col justify-center">
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.id} className="px-2">
            <div
              className="flex flex-col items-center text-center rounded-2xl shadow-xl p-5 
              bg-gradient-to-b from-gray-300 to-gray-600 
              w-full max-w-[400px] mx-auto h-auto"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full max-w-[280px] h-auto mb-4 rounded-xl 
                transition-transform duration-500 shadow-2xl border border-amber-50"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 drop-shadow-md">
                {p.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mt-2 flex-grow px-2">
                {p.desc}
              </p>
              <div className="flex justify-center items-center gap-4 bg-blue-600 backdrop-blur-md rounded-3xl px-5 w-[130px] h-[42px] shadow-md mt-4 transition duration-300 hover:bg-blue-800/80">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    size={26}
                    className="hover:scale-125 transition text-white border-r-2 pr-2"
                  />
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white hover:scale-110 transition"
                >
                  Live⚡
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MiniProjects;
