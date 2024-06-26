import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        height: "10vh",
        backgroundColor: "black",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        className="logo"
        style={{
          flex: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          marginTop: "10px",
          fontWeight: "600",
        }}
      >
        <p>Guvi_Intern</p>
      </div>
      <div
        className="right"
        style={{
          flex: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="./login"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#11b94c",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "25px",
            paddingRight: "25px",
            fontSize: "18px",
            borderRadius: "10px",
            fontWeight: "400",
          }}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
