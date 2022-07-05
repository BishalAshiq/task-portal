import React from "react";
import setting from "../../Images/Nav/Settings.png";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#2B0F81",
        color: "#ffff",
        alignItems: "center",
        padding: "10px 0px",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 400 }}>Back</h2>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 400,
          alignItems: "center",
          textAlign: "center",
          marginRight: 500,
          marginLeft: 500,
        }}
      >
        My Stat
      </h2>
      <img style={{ width: 170, height: 110 }} src={setting} alt="" />
    </div>
  );
};

export default Navigation;
