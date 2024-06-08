import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex nav justify-between mt-4vw">
        <div className="text-red-600 -z-10">tes</div>
      <div>
        <button
          className="flex z-50 flex-col h-12 w-12 transition-all justify-center items-center group shadow-md bg-white rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "rotate-45 translate-y-1.6  group-hover:opacity-100 "
                : " group-hover:opacity-100"
            }`}
          />
          <div
            className={`h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-1.6  group-hover:opacity-100 "
                : " group-hover:opacity-100"
            }`}
          />
        </button>
        <div
          style={{
            transition: "transform 0.5s ease, opacity 0.5s ease, visibility 0.5s",
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
