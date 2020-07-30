import React from "react";
import "../styles/css/Home.css";
import Fade from "react-reveal/Fade";

type TParams = { id: number };

const NoMatchRoute: React.FC = () => {
  return (
    <main>
      <section className=" screen-containter no-space-section">
        <div className="absolute-position-display">
          <Fade top>
            <label className="main-name">Nada foi encontrado aqui </label>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default NoMatchRoute;
