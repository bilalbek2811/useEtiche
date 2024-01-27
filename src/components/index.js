import React, { useState } from "react";
import "../../src/App.css";
const MausOvar = () => {
  const [block, setBlock] = useState(false);
  const [block1, setBlock1] = useState(false);
  console.log(block);
  return (
    <div className="text" style={{ gap: block || block1 ? "400px" : "" }}>
      <div
        className="block"
        onMouseLeave={() => setBlock1(false)}
        onMouseOver={() => setBlock1(true)}
        style={{
          width: block ? "450px" : "",
          height: block ? "600px" : "",
          borderRadius: block ? "30px" : "",
        }}
      >
        <h1
          className="h1"
          style={{
            display: block ? "block" : "none",
            // width: block ? "200px" : "400px",
          }}
        >
          barajdsfdasjfafsdfsdl <br /> kfsadjfalfjsajfjasfjslfsfsf <br />{" "}
          ksdfkjladsfsadf
        </h1>
      </div>
      <div
        onMouseOver={() => setBlock(true)}
        onMouseLeave={() => setBlock(false)}
        className="block1"
        style={{
          width: block1 ? "450px" : "",
          height: block1 ? "600px" : "",
          borderRadius: block1 ? "30px" : "",
        }}
      ></div>
    </div>
  );
};

export default MausOvar;
