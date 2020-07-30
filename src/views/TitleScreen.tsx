import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import FluidSimulation from "../components/animation/fluid/index";
import "../styles/css/TitleScreen.css";
import { AppConfig } from "../types/AppConfig";

const TitleScreen: React.FC<AppConfig> = ({ theme }) => {
  let history = useHistory();
  return (
    <main>
      <section className=" screen-containter no-space-section">
        <div className="absolute-position-display">
          <Fade top>
            <label
              className="main-name cmyk"
              onClick={() => history.push("/home")}
            >
              Yuri Farias
            </label>
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

export default TitleScreen;
