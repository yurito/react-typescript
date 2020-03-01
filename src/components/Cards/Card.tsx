import React, { Component } from "react";

type CardProps = {
  name: string | object;
};

export default class Card extends Component<CardProps> {
  bg = {
    green: "https://i.ibb.co/fr70v4T/GoZmBiF.png",
    red: "https://i.ibb.co/fd7K1XR/mLy8EiJ.png",
    brown: "https://i.ibb.co/fvvqL4M/fV7n6Tv.jpg",
    blue: "https://i.ibb.co/kB476vP/zRjXBC0.png"
  };

  characters = [
    {
      url: "https://i.ibb.co/vZ229Bb/Corpus-Man.png",
      bgUrl: this.bg.red,
      name: "Corpus Man",
      description: "Corpus Man",
      id: "CORPUS_MAN"
    },
    {
      url: "https://i.ibb.co/6trh6BR/Corpus-Moa.png",
      bgUrl: this.bg.red,
      name: "Corpus Moa",
      description: "Corpus Man",
      id: "CORPUS_MOA"
    },
    {
      url: "https://i.ibb.co/wKpjqBB/infested.png",
      bgUrl: this.bg.red,
      name: "infested",
      description: "Corpus Man",
      id: "INFESTED"
    },
    {
      url: "https://i.ibb.co/DgZFT75/Archwing-Units.png",
      bgUrl: this.bg.red,
      name: "Archwing Units",
      description: "Corpus Man",
      rarity: "RARE",
      id: "ARCHWING_UNITS"
    },
    {
      url: "https://i.ibb.co/hCMmMRQ/Corpus-Walker.png",
      bgUrl: this.bg.red,
      name: "Corpus Walker",
      description: "Corpus Man",
      id: "CORPUS_WALKER"
    },
    {
      url: "https://i.ibb.co/92v820W/Corpus-Osprey.png",
      bgUrl: this.bg.red,
      name: "Corpus Osprey",
      description: "Corpus Man",
      id: "CORPUS_OSPREY"
    },
    {
      url: "https://i.ibb.co/ZVnnhcz/Masked-Grineer.png",
      bgUrl: this.bg.red,
      name: "Masked Grineer",
      description: "Corpus Man",
      id: "MASKED_GRINNER"
    },
    {
      url: "https://i.ibb.co/MfpHGHH/White-Grineer.png",
      bgUrl: this.bg.red,
      name: "White Grineer",
      description: "Corpus Man",
      id: "WHITE_GRINEER"
    },
    {
      url: "https://i.ibb.co/SdHzrkY/Armored-Grineer.png",
      bgUrl: this.bg.red,
      name: "Armored Grineer",
      description: "Corpus Man",
      id: "ARMORED_GRINEER"
    }
  ];
  public name;
  character: any;
  constructor(props) {
    super(props);
    this.character = this.characters.find(c => c.id === props.name);
  }

  state = {
    width: 0,
    height: 0,
    mouseY: 0,
    mouseX: 0
  };

  cardEl: any;

  componentDidMount() {
    const height = this.cardEl.clientHeight;
    const width = this.cardEl.clientWidth;
    this.setState({ height, width });
  }

  get mousePX() {
    const { mouseX, width } = this.state;
    return mouseX / width;
  }

  get mousePY() {
    const { mouseY, height } = this.state;
    return mouseY / height;
  }

  get cardStyle() {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get characterStyle() {
    const tX = this.mousePX * -60;
    const tY = this.mousePY * -60;
    return {
      backgroundImage: `url(${this.character.url})`,
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }

  get backgroundStyle() {
    const tX = this.mousePX * -30;
    const tY = this.mousePY * -30;
    return {
      backgroundImage: `url(${this.character.bgUrl})`,
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }

  mouseEnterHandler = () => {};

  mouseMoveHandler = e => {
    const { width, height } = this.state;
    const mouseX = e.pageX - this.cardEl.offsetLeft - width / 2;
    const mouseY = e.pageY - this.cardEl.offsetTop - height / 2;

    this.setState({
      mouseX,
      mouseY
    });
  };

  mouseLeaveHandler = () => {};

  render() {
    const character = this.character;
    const rarity = character.rarity || "bronze";
    const classComponent = `frame ${rarity.toLowerCase()}`;

    return (
      <div
        className="card-wrapper"
        ref={cardEl => (this.cardEl = cardEl)}
        onMouseEnter={this.mouseEnterHandler}
        onMouseMove={this.mouseMoveHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <div className="card" style={this.cardStyle}>
          <div className={classComponent}>
            <img
              className="base-color"
              src="https://svgshare.com/i/9vE.svg"
              title=""
            />
            <img
              className="base-metal"
              src="https://svgshare.com/i/9wP.svg"
              title=""
            />
          </div>

          <div className="card-content">
            <div className="pattern-bg" />
            <div className="parallax-bg" style={this.backgroundStyle} />
            <div
              className="character-bg parallax-bg"
              style={this.characterStyle}
            />

            <div className="card-detail">
              <h1>{character.name}</h1>
              <p>{character.description}</p>
              <p>{character.type}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
