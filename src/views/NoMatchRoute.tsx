import React from "react";
import "../styles/css/Home.css";
import Fade from "react-reveal/Fade";

type TParams = { id: number };

const NoMatchRoute: React.FC = () => {
  return (
    <main>
      <section className="title-screen-containter no-space-section">
        <div className="abs-pos-dsp">
          <Fade top>
            <label className="main-name">Nada encontrado aqui </label>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default NoMatchRoute;
