import React from "react";
import "./styles/css/Home.css";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import FluidSimulation from './components/animation/fluid/index'




const App: React.FC = () => {
  return (
    <main>
              <FluidSimulation/>

      <section className="welcome">
        <div className="shaker">
         </div>
        <div className="infos">
          <span className="numbers">#001 - 08.2019</span>
          <a className="special-coop" href="www.google.com">God of JavaScript</a>
          <span className="t-shirt-print"> Em breve</span>
        </div>
        <div className="who-am-i">
          <Fade top>
            <h1 className="main-name">
              Yuri Farias
                </h1>
          </Fade>
          <Slide bottom>
            <label className="sub-title">
              Desenvolvedor FullStack
            </label>
          </Slide>
        </div>

      </section>

    </main>
  );
};

export default App;
