/* eslint-disable react/prop-types */
import foto1 from "../assets/foto/1.jpg";
import foto2 from "../assets/foto/2.jpg";
import foto3 from "../assets/foto/3.jpg";
import foto4 from "../assets/foto/4.jpg";
import foto5 from "../assets/foto/5.jpg";

const images = [foto1, foto2, foto3, foto4, foto5];

export default function Hero() {
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

      <div className="relative -z-10 transition-all duration-1000 -mx-6">
        <div className="flex overflow-hidden space-x-16 group ">
          <div className="flex space-x-8 my-4 animate-loop-scroll">
            {images.map((img, index) => (
              <img
                key={index}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
            {/* Repeat the mapping for the infinite loop effect */}
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
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
            {/* Repeat the mapping for the infinite loop effect */}
            {images.map((img, index) => (
              <img
                key={index + images.length}
                className="object-fit object-center w-50vw h-64 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                src={img}
                alt={`Certificate ${index + 1}`}
              />
            ))}
          </div>
          {/* ... (repeat the mapping for additional loops if necessary) */}
        </div>
      </div>
    </div>
  );
}
