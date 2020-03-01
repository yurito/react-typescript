import React from "react";
import Tilt from "react-vanilla-tilt";
import Fade from "react-reveal/Fade";

const Card: React.FC = () => {
  return (
    <Tilt glare>
      <div style={{ height: "100%", margin: 0 }}>
        Lista de projetos vão ser imagens maneiras
      </div>
    </Tilt>
  );
};

export default Card;
