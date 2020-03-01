import React from "react";
import "../styles/css/Projects.css";
import Card from "components/Cards/Card";

const itemsMenu = [
  {
    name: "Projeto Britiney"
  },
  {
    name: ""
  },
  {
    name: ""
  },
  {
    name: ""
  }
];

const ItemsCard = props => {
  return (
    <div className="row">
      {props.items.map(card => {
        return (
          <div className="col-lg col-limit">
            <Card name={card.name}>
              <div> algo grande</div>Muitas coisas desse projeto
              <img
                width={300}
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/Vela-Stephen.jpg"
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <main>
      <section id="services" className="welcome no-space-section">
        <div className="content">
          <div className="all">
            <div className="lefter">
              <div className="text">Consultoria</div>
            </div>

            <div className="left">
              <div className="text">Web Design</div>
            </div>
            <div className="center">
              <div className="explainer">
                <span>Serviços</span>
              </div>
              <div className="text">Desenvolvimento Frontend </div>
            </div>
            <div className="right">
              <div className="text">Desenvolvimento Backend</div>
            </div>
            <div className="righter">
              <div className="text">Soluções Tecnológicas</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
