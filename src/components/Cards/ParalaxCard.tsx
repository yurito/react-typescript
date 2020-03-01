import React from "react";
import "./ParalaxCard.scss";
import Card from "./Card";

const ParalaxCard: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        justifyContent: "space-around",
        overflow: "hidden"
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ParalaxCard;
