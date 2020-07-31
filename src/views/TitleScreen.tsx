import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import FluidSimulation from "../components/animation/fluid/index";
import "../styles/css/TitleScreen.css";
import { AppConfig } from "../types/AppConfig";
const Typewriter = require("typewriter-effect");

const TitleScreen: React.FC<AppConfig> = ({ theme }) => {
  let history = useHistory();
  const subTileText = [
    "Desenvolvimento Miraculoso.",
    "Desenvolvedor Full Stack.",
    "UX/UI Designer, Desenvolvedor Front-end e Back-end.",
    "Localizado em Maceió - Alagoas.",
  ];
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
            <Typewriter
              skipAddStyles
              wrapperClassName="sub-title"
              options={{
                strings: subTileText,
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 25,
              }}
            />
          </Slide>
        </div>
        <FluidSimulation theme={theme} />
      </section>
    </main>
  );
};

export default TitleScreen;
