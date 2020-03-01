import React from "react";
import "../styles/css/Home.css";
import Fade from "react-reveal/Fade";

type TParams = { id: number };

const NoMatchRoute: React.FC = () => {
  return (
    <main>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <Fade top>
            <label className="main-name">Nada encontrado aqui </label>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default NoMatchRoute;
