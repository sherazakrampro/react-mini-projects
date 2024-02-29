import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarsRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="bg-slate-900 h-screen w-screen flex justify-center items-center ">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={`text-white text-6xl ${
              index <= (hover || rating) ? "text-yellow-500" : "text-white"
            }`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default StarsRating;
