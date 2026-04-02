import React, { useEffect, useState } from "react";

const quotes = [
  ['The best preparation for tomorrow is doing your best today.', 'H. Jackson Brown, Jr.'],
  ['The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 'Helen Keller'],
  ['I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.', 'Jimmy Dean'],
  ['Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible.', 'Francis of Assisi'],
  ['Perfection is not attainable, but if we chase perfection we can catch excellence.', 'Vince Lombardi'],
  ['We must let go of the life we have planned, so as to accept the one that is waiting for us.', 'Joseph Campbell'],
  ['Try to be a rainbow in someone\'s cloud.', 'Maya Angelou'],
  ['Nothing is impossible, the word itself says \'I\'m possible\'.', 'Audrey Hepburn'],
  ['If opportunity doesn\'t knock, build a door.', 'Milton Berle'],
  ['Believe you can and you\'re halfway there.', 'Theodore Roosevelt'],
];

const Quote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [text, authorName] = quotes[randomIndex];

    setQuoteText(text);
    setAuthor(authorName);
  };

  useEffect(() => {
    getQuote(); // show one on load
  }, []);

  return (
    <div className="text-center p-6">
      <p className="text-xl font-medium">“{quoteText}”</p>
      <p className="text-gray-500 mt-2">— {author}</p>

    </div>
  );
};

export default Quote;