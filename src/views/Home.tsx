import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import FluidSimulation from "../components/animation/fluid/index";
import "../styles/css/Home.css";

const Home: React.FC = () => {
  let history = useHistory();
  return (
    <main>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <Fade top>
            <label
              onClick={() => history.push("/servicos")}
              className="main-name cmyk"
            >
              Yuri Farias
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
