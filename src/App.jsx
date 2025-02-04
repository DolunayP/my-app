import { useState, useRef } from "react";
import "./App.css";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";
import img5 from "./assets/5.jpeg";
import img6 from "./assets/6.jpeg";
import img7 from "./assets/7.jpeg";
import img8 from "./assets/8.jpeg";
import img9 from "./assets/9.jpeg";
import img10 from "./assets/10.jpeg";
import img11 from "./assets/11.jpeg";
import img12 from "./assets/12.jpeg";
import img13 from "./assets/13.jpeg";

import xLogo from "./assets/x-logo.png";
import dexLogo from "./assets/dexlogo.png";
import pumpLogo from "./assets/pumplogo.jpg";
import pumpMusic from "./assets/pump.mp3";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

function App() {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center overflow-hidden relative">
      {/* Arkaplan Gradient Animasyonu */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#833ab4] via-[#1dfd95] to-[#833ab4] animate-gradient"></div>

      {/* Müzik Kontrol */}
      <div className="absolute top-4 left-4 flex flex-col items-center bg-white p-2 rounded-lg shadow-lg">
        <button
          onClick={togglePlay}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-32"
        />
      </div>

      <audio ref={audioRef} src={pumpMusic} autoPlay loop />

      <div className="z-20 flex gap-8 absolute bottom-0 md:!top-0 md:!right-8">
        <div
          className="z-20 h-[60px] w-[60px]  md:h-[100px] md:w-[100px] cursor-pointer overflow-hidden"
          onClick={() => window.open("https://x.com/pumpguycz")}
        >
          <img src={xLogo} alt="" />
        </div>
        <div className="z-20 h-[60px] w-[60px]  md:h-[100px] md:w-[100px] rounded-full cursor-pointer overflow-hidden">
          <img src={dexLogo} alt="" />
        </div>
        <div
          className="z-20 h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-full cursor-pointer overflow-hidden"
          onClick={() =>
            window.open(
              "https://pump.fun/coin/32QyayKT5GoJF9p8eGzT8KUGHHr52gqYXmNEVC5Rpump?coin_sort=market_cap"
            )
          }
        >
          <img className="h-full w-full object-cover" src={pumpLogo} alt="" />
        </div>
      </div>
      <div className="top-0 absolute text-center flex flex-col mb-8">
        <h2 className="text-[72px] text-white font-bold mb-0 p-0">
          {"PUMP GUY".split("").map((char, index) => (
            <span
              key={index}
              className="animate-wave"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {char}
            </span>
          ))}
        </h2>
        <h2 className="text-[48px] text-white font-bold">$pump</h2>
      </div>
      {/* Sürekli kayan fotoğraflar */}
      <div className="w-full overflow-x-hidden whitespace-nowrap relative z-10 mt-[120px]">
        <div
          className="flex gap-10 animate-marquee py-8 items-center justify-center"
          style={{ animation: "marqueeAlt 15s linear infinite alternate" }}
        >
          {images.concat(images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="rounded-2xl shadow-lg shadow-black/95 h-[120px] w-[120px] md:!h-[210px] md:!w-[300px] hover:scale-105 transition-all duration-500"
              style={{
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
      {/* CA Kısmı */}
      <div
        className={`relative flex items-center ps-2 text-[14px] md:!text-[30px] font-bold mt-2 pt-4 z-10 transition-transform duration-500 ${
          hovered ? "animate-shake" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="text-white">
          CA:32QyayKT5GoJF9p8eGzT8KUGHHr52gqYXmNEVC5Rpump
        </span>
      </div>

      {/* CSS Animasyonu */}
      <style>
        {`
          @keyframes marqueeAlt {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-60%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }
          .animate-shake {
            animation: shake 0.8s ease-in-out infinite;
          }
          
          @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          }
          .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
}

export default App;
