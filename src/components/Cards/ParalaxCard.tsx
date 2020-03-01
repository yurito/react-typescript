import React from "react";
import "./ParalaxCard.scss";
import Card from "./Card";

const ParalaxCard: React.FC = () => {
  return (
    <div>
      <Card name="CORPUS_MAN" />
      <Card name="CORPUS_WALKER" />
    </div>
  );
};

export default ParalaxCard;
