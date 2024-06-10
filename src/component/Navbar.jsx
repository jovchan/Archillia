import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex nav h-12 justify-between items-center mt-4vw">
        <div className={`z-50 pop-bold tracking-wide transition-all duration-1000 ${isOpen ? 'text-white' : 'text-black'}`}>Archillia</div>
      <div>
        <button
          className="flex z-50 flex-col h-10 w-10 transition-all justify-center items-center group shadow-md bg-white rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-0.5 w-5 my-1 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "rotate-45 translate-y-1.6  group-hover:opacity-100 "
                : " group-hover:opacity-100"
            }`}
          />
          <div
            className={`h-0.5 w-5 my-1 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-1.6  group-hover:opacity-100 "
                : " group-hover:opacity-100"
            }`}
          />
        </button>
        <div
          style={{
            transition: "transform 0.5s ease-in",
            backgroundColor: "black",
            position: "fixed",
            top: "-2500px",
            right: "-2500px",
            width: "5000px",
            height: "5000px",
            transform: isOpen ? "scale(1)" : "scale(0)",
            borderRadius: "50%",
            zIndex: -1,
          }}
          className="transition-all"
        ></div>
      </div>
    </div>
  );
}
