import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div
        className="home_text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontWeight: "600",
        }}
      >
        Let's do intern with GUVI
      </div>
    </div>
  );
};

export default Home;
