import React, { useState } from "react";

const choices = ["rock", "paper", "scissors"];

const Funzone = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const comp = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("It's a Tie 😐");
    } else if (
      (choice === "rock" && comp === "scissors") ||
      (choice === "paper" && comp === "rock") ||
      (choice === "scissors" && comp === "paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("You Lose 😢");
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 text-white">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-400 mb-2">
          Beat me to unlock contact
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400">
          Play & Connect 
        </h1>
      </div>

      {/* Game Box */}
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => playGame(choice)}
              className="px-4 py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition capitalize"
            >
              {choice}
            </button>
          ))}
        </div>

        {userChoice && (
          <div className="mb-4 text-sm sm:text-base">
            <p>You chose: <span className="font-bold">{userChoice}</span></p>
            <p>Computer: <span className="font-bold">{computerChoice}</span></p>
          </div>
        )}

        {result && (
          <h2 className="text-xl font-bold mb-4">{result}</h2>
        )}

        {result === "You Win 🎉" && (
          <div className="mt-4">
            <p className="mb-3 text-gray-400">
              Nice! You beat me
            </p>
            <a
              href="mailto:saumyachaudary051002@email.com"
              className="inline-block px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition"
            >
              Message Me 
            </a>
          </div>
        )}

        {result === "You Lose 😢" && (
          <p className="text-red-400">Oops! Try again </p>
        )}
      </div>
    </section>
  );
};

export default Funzone;