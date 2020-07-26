import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import FluidSimulation from "../components/animation/fluid/index";
import "../styles/css/Home.css";
import { AppConfig } from "../types/AppConfig";

//              onClick={() => /*history.push("/servicos")*/ {}}

const Home: React.FC<AppConfig> = ({ theme }) => {
  let history = useHistory();
  return (
    <main>
      <section className="title-screen-containter no-space-section">
        <div className="abs-pos-dsp">
          <Fade top>
            <label className="main-name cmyk">Yuri Farias</label>
          </Fade>
          <Slide bottom>
            <label className="sub-title">Olá, eu crio coisas!</label>
          </Slide>
        </div>
        <FluidSimulation theme={theme} />
      </section>
    </main>
  );
};

export default Home;
