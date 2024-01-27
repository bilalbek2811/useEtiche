import React from "react";
import "./App.css";
import MausOvar from "./components";
const App = () => {
  return (
    <div>
      <MausOvar />
    </div>
  );
};

export default App;

//   <div style={{ width: "1440px" }}>
//     <h1>
//       {str
//         .slice(0, test ? str.length : 259)
//         .split(" ")
//         .map((el, ind) => {
//           if (ind % 2 !== 0) {
//             return el.toUpperCase();
//           } else {
//             return el.toLocaleLowerCase();
//           }
//         })
//         .join(" ")
//         .replace(/[",""."]/g, " ")}
//     </h1>
//     <button onClick={() => setTest(!test)}>
//       {test ? "Свернуть" : "Подробнее"}
//     </button>
//   </div>
// };

// export default App;
// import React, { useState } from "react";

// function Accordion() {
//   const [accordions, setAccordions] = useState([
//     { id: 1, isOpen: false, content: "Содержимое аккордеона 1" },
//     { id: 2, isOpen: false, content: "Содержимое аккордеона 2" },
//   ]);

//   const toggleAccordion = (id) => {
//     setAccordions((prevAccordions) =>
//       prevAccordions.map((accordion) =>
//         accordion.id === id
//           ? { ...accordion, isOpen: !accordion.isOpen }
//           : accordion
//       )
//     );
//   };

//   return (
//     <div>
//       {accordions.map((accordion) => (
//         <div key={accordion.id}>
//           <div
//             style={{ background: "yellow" }}
//             onClick={() => toggleAccordion(accordion.id)}
//           >
//             {accordion.isOpen ? "Скрыть" : "Показать"} содержимое
//           </div>
//           {accordion.isOpen && <div>{accordion.content}</div>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Accordion;
//!
// import React, { useState } from "react";

// const App = () => {
//   const [openSections, setOpenSections] = useState({});
//   const sections = [
//     {
//       title: "epic rivaldoo",
//       content: "lorem40jfdasfl;jfljdsflksjafklasjfalsdjfasdkl",
//     },
//     {
//       title: "Секция 2",
//       content:
//         "Содержимое секции 2fjadjfalfkjsdflkjadsfkjasfkjakfjasklfjdklfjdsaklfj",
//     },
//     // Добавьте нужное количество секций
//   ];

//   // Функция для обновления состояния аккордеона при нажатии на секцию
//   const toggleSection = (index) => {
//     setOpenSections((prevOpenSections) => ({
//       ...prevOpenSections,
//       [index]: !prevOpenSections[index],
//     }));
//   };

//   return (
//     <div>
//       {sections.map((section, index) => (
//         <div key={index}>
//           <button onClick={() => toggleSection(index)}>{section.title}</button>
//           {openSections[index] && <div>{section.content}</div>}
//         </div>
//       ))}
//     </div>

//     // Здесь можно определить список элементов аккордеона, например:
//   );
// };
// export default App;
// import React from "react";

// const App = () => {
//   return <div>
//     <data/>
//   </div>;
// };

// export default App;
// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [num1, setnum1] = useState(false);
//   const [num2, setnum2] = useState(0);
//   const [num3, setnum3] = useState(0);

//   return (
//     <div className="lol1">
//       <div onClick={() => setnum1(!num1)} className="lol">
//         {num1 ? (
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio iste
//             dolores, incidunt rem doloremque quod neque saepe praesentium et
//             beatae!
//           </p>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className="lol">
//         <h1>1234567</h1>
//       </div>
//       <div className="lol">
//         <h1>barjlsd </h1>
//       </div>
//       <div className="lol">
//         <h1>sfafadfas </h1>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [block, setBlock] = useState(10);
//   const [block1, setBlock1] = useState(50);

//   console.log(block);
//   return (
//     <div className="app">
//       <div
//         style={{
//           width: `${block1}px`,
//           background:
//             block === 1
//               ? "black"
//               : block === 2
//               ? "green"
//               : block === 3
//               ? "greenyellow"
//               : block === 4
//               ? "orange"
//               : "",

//           // block === 10
//           //   ? "10px"
//           //   : block === 100
//           //   ? "100px"
//           //   : block === 200
//           //   ? "200px"
//           //   : block === 300
//           //   ? "300px"
//           //   : block === 400
//           //   ? "400px"
//           //   : "10px",
//         }}
//         className="block"
//       >
//         {block === 1
//           ? "black"
//           : block === 2
//           ? "green"
//           : block === 3
//           ? "yellowGreen"
//           : block === 4
//           ? "orange"
//           : ""}
//       </div>
//       <div className="block1">
//         <button
//           onClick={() => {
//             setBlock(1);
//             setBlock1(100);
//           }}
//           className="click"
//         >
//           100
//         </button>
//         <button
//           onClick={() => {
//             setBlock(2);
//             setBlock1(200);
//           }}
//           className="click"
//         >
//           200
//         </button>
//         <button
//           onClick={() => {
//             setBlock(3);
//             setBlock1(300);
//           }}
//           className="click"
//         >
//           300
//         </button>
//         <button
//           onClick={() => {
//             setBlock(4);
//             setBlock1(400);
//           }}
//           className="click"
//         >
//           400
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
// const [block1, setblock1] = useState(0);
// const [block1, setblock1] = useState(0);
// const [block2, setblock2] = useState(false);
// const [block3, setblock3] = useState(false);
// const [block4, setblock4] = useState(false);

// return (
// <div className="app">

/* <button onClick={() => setblock1(100)}>100</button>
        <button onClick={() => setblock1(200)}>200</button>
        <button onClick={() => setblock1(300)}>300</button>

        className="click"
      >
        1
      </button>
      <button
        onClick={() => {
          block1(false);
          block2(true);
          block3(false);
          block4(false);
        }}
        className="click"
      >
        2
      </button>
      <button
        onClick={() => {
          block1(false);
          block2(false);
          block3(true);
          block4(false);
        }}
        className="click"
      >
        3
      </button>
      <button
        onClick={() => {
          block1(false);
          block2(false);
          block3(false);
          block4(true);
        }}
        className="click"
      >
        4
      </button>
    </div> */

/* <div
        style={{ background: block1 === 1 ? "red" : "" }}
        onClick={() => {
          setblock1(1);
        }}
        className="block"
      ></div>
      <div
        style={{ background: block1 === 2 ? "red" : "" }}
        onClick={() => setblock1(2)}
        className="block"
      ></div>
      <div
        style={{ background: block1 === 3 ? "red" : "" }}
        onClick={() => setblock1(3)}
        className="block"
      ></div>
      <div
        style={{ background: block1 === 4 ? "red" : "" }}
        onClick={() => setblock1(4)}
        className="block"
      ></div>  */
// </div>
// );
// };

// export default App;

// block1 ? red : ''
// block1 === 1 ? red : ''

// import { useState } from "react";
// import "./App.css";
// import React from "react";

// const App = () => {
//   return <div></div>;
// };

// export default App;

// import { MdDarkMode } from "react-icons/md";
// import { BsFillSunFill } from "react-icons/bs";
// import { FaCloudSunRain } from "react-icons/fa";
// import { TiWeatherPartlySunny } from "react-icons/ti";
// import img from "./6c00e9e99cb80fc33975796f6637e3b6_XL.jpg";
// import png from "./png.webp";
// import { BsFillBalloonHeartFill } from "react-icons/bs";
// import { data } from './data';
// function App() {
//   const [real, messi] = useState(0);
//   const [atle, ron] = useState(false);
//   let title = `BILAL + AIKOL = LOVE  `;
//   let str = Math.round(Math.random(30) * 550);
//   let color = `${str}`;
//   console.log(str);
//   return (
//     <div>
//       <h3 style={{ color: `#f${color}00` }}>{title.slice(0, real)}</h3>
//       <button onClick={() => messi(real + 1)}>LOVE</button>
//     </div>
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
//   );
// }

// export default App;
