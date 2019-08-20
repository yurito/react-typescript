import React from "react";
import "./styles/css/Home.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import FluidSimulation from "./components/animation/fluid/index";

const App: React.FC = () => {
  return (
    <main>
      <section className="welcome no-space-section">
      <div className="who-am-i">
          <Fade top>
            <label className="main-name">Yuri Farias</label>
          </Fade>
          <Slide bottom>
            <label className="sub-title">Olá, eu crio coisas!</label>
          </Slide>
        </div>
        <FluidSimulation />
      </section>
    </main>
  );
};

export default App;
