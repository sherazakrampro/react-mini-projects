import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffff");

  const handleGenerateRandomHexColor = () => {
    let hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hexColor);
  };

  const handleGenerateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };

  return (
    <>
      <div
        className="container flex w-screen h-screen items-center justify-center"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="flex gap-3">
          <button
            onClick={() => setTypeOfColor("hex")}
            className={`bg-green-600 px-3 py-2 text-white rounded-lg hover:bg-green-800 ${
              typeOfColor === "hex" && "font-bold"
            }`}
          >
            HEX Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className={`bg-green-600 px-3 py-2 text-white rounded-lg hover:bg-green-800 ${
              typeOfColor === "rgb" && "font-bold"
            }`}
          >
            RGB Color
          </button>
        </div>

        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
          className="bg-gray-600 px-3 py-2 text-white rounded-lg hover:bg-gray-800 ml-10"
        >
          Generate Random Color
        </button>
        <h1 className="text-3xl text-white ml-10">{color}</h1>
      </div>
    </>
  );
};

export default RandomColor;
