import React, { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
const App = () => {
  let heroData = [
    { text1: "aqqqqq", text2: "aqqqqqww" },
    { text1: "bfggfg", text2: "bvfgvdg" },
    { text1: "cffsggs", text2: "cfdfstsy" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {setInterval(() => {
    setHeroCount((count) => {
      return count === 2 ? 0 : count + 1;
    });
  }, 3000);
},[]);
  
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />


      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
