import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-screen">
        {/* Overlay layers */}
        <div className="layer1"></div>
        <div className="layer2"></div>

        {/* Text content */}
        <div className="text">
          <p>I turn code into</p>
          <h2> experiences🚀</h2>
        </div>
      </div>
  );
};

export default Welcome;
