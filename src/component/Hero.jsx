/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import foto1 from "../assets/foto/1.jpg";
import foto2 from "../assets/foto/2.jpg";
import foto3 from "../assets/foto/3.jpg";
import foto4 from "../assets/foto/4.jpg";
import foto5 from "../assets/foto/5.jpg";
import Max from "../assets/video/max.mp4";

const images = [foto1, foto2, foto3, foto4, foto5];

const playSVG = (
  <svg
    viewBox="-0.5 0 8 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <title>play [#1001]</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-427.000000, -3765.000000)"
        fill="#ffffff"
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <polygon
            id="play-[#1001]"
            points="371 3605 371 3613 378 3609"
          ></polygon>
        </g>
      </g>
    </g>
  </svg>
);

const pauseSVG = (
  <svg
    viewBox="-1 0 8 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <title>pause [#1010]</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-67.000000, -3765.000000)"
        fill="#ffffff"
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M11,3613 L13,3613 L13,3605 L11,3605 L11,3613 Z M15,3613 L17,3613 L17,3605 L15,3605 L15,3613 Z"
            id="pause-[#1010]"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!videoRef.current.paused);
  };

  return (
    <div className="py-20">
      <div className="mb-16">
        <p className="text-7xl tracking-wide pop-reg mb-8">Archillia</p>
        <div className="words h-7 gap-1">
          <p className="pop-reg cuk text-xl">Architectural Designer</p>
          <p className="pop-reg cuk text-xl">Create Functional Spaces</p>
          <p className="pop-reg cuk text-xl">Plan Urban Landscapes</p>
          <p className="pop-reg cuk text-xl">Architectural Designer</p>
        </div>
      </div>

      <div className="relative -z-10 transition-all duration-1000 -mx-6 mb-28 ">
        <div className="flex overflow-hidden space-x-16 group ">
          <div className="flex flex-nowrap space-x-8 my-4 animate-loop-scroll">
            {images.map((img, index) => (
              <img
                key={index}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
            {images.map((img, index) => (
              <img
                key={index + images.length}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
            {images.map((img, index) => (
              <img
                key={index}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
            {images.map((img, index) => (
              <img
                key={index + images.length}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 justify-center items-center ">
        <p className="pop-reg text-center text-7xl leading-tight">
          WITH MODERN DESIGNS
        </p>

        <div className="relative m-auto my-7 w-60 h-36">
          <video
            ref={videoRef}
            src={Max}
            muted
            autoPlay
            loop
            width="your-desired-width" // Set the width as needed
            height="your-desired-height" // Set the height as needed
            className="rounded-2xl video"
            onClick={togglePlay}
          >
            Your browser does not support the video tag.
          </video>

          <div
            className="controls absolute bottom-5 right-6 toggleButton"
            onClick={togglePlay}
          >
            <button
              className="controls__button toggleButton"
              title="Toggle Play"
            >
              {isPlaying ? pauseSVG : playSVG}
            </button>
          </div>
        </div>

        <p className="pop-reg text-center text-7xl leading-tight">
          PEOPLE LOVE
        </p>
      </div>
    </div>
  );
}
