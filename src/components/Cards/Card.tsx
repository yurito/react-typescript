import React from "react";
import Tilt from "react-vanilla-tilt";
import "../../styles/css/Card.css";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Tilt style={{}} className="card-tilt">
      {props.children} nome {props.name}
    </Tilt>
  );
};

export default Card;
