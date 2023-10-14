import { useState } from "react";
import "./App.css";
// import { MdDarkMode } from "react-icons/md";
// import { BsFillSunFill } from "react-icons/bs";
// import { FaCloudSunRain } from "react-icons/fa";
// import { TiWeatherPartlySunny } from "react-icons/ti";
// import img from "./6c00e9e99cb80fc33975796f6637e3b6_XL.jpg";
// import png from "./png.webp";
import { BsFillBalloonHeartFill } from "react-icons/bs";
function App() {
  const [real, messi] = useState(0);
  // const [atle, ron] = useState(false);
  let title = `BILAL + AIKOL = LOVE  `;
  let str = Math.round(Math.random(30) * 550);
  let color = `${str}`;
  console.log(str);
  return (
    <div>
      <h3 style={{ color: `#f${color}00` }}>{title.slice(0, real)}</h3>
      <button onClick={() => messi(real + 1)}>LOVE</button>
    </div>
    // <div
    //   onClick={() => ron(!atle)}
    //   style={{
    //     width: "100%",
    //     height: "780px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     background: real ? "black" : "white",
    //     transition: "1s",
    //   }}
    // >
    //   {/* <img src={atle ? img : png} alt="" /> */}
    //   <h1
    //     style={{ color: real ? "white" : "black" }}
    //     onClick={() => messi(!real)}
    //   >
    //     {real ? <TiWeatherPartlySunny /> : <FaCloudSunRain />}
    //   </h1>
    // </div>
  );
}

export default App;
