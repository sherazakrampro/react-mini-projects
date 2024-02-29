import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { useState } from "react";
import { useEffect } from "react";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  if (errorMessage) {
    return <div>Error occured... {errorMessage}</div>;
  }

  return (
    <div className="container flex relative justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow-left absolute text-white h-12 w-12 left-[1rem]"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              src={image.download_url}
              alt={image.url}
              key={image.id}
              className={`current-image border-2 rounded-2xl shadow-xl w-full h-full ${
                currentSlide === index ? currentSlide : "hidden"
              } `}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow-right absolute text-white h-12 w-12 right-[1rem]"
      />
      <span className="circle-indicator flex absolute bottom-[1rem]">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`current-indicator bg-white h-[15px] w-[15px] rounded-full outline-none cursor-pointer mr-1 ${
                  currentSlide === index ? currentSlide : "bg-zinc-500"
                }`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
