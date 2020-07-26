import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import FluidSimulation from "../components/animation/fluid/index";
import "../styles/css/Home.css";
import { AppConfig } from "../types/AppConfig";

const Home: React.FC<AppConfig> = ({ theme }) => {
  let history = useHistory();
  return (
    <main>
      <section className="full-viewport no-space-section">
        <div className="abs-pos-dsp">
          <Fade top>
            <label
              onClick={() => history.push("/servicos")}
              className="main-name cmyk"
            >
              Yuri Farias - {theme}
            </label>
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

export default Home;
