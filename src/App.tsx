import React from "react";
import "./styles/css/bootstrap.css";
import "./styles/css/styles.css";

const App: React.FC = () => {
  return (
    <div className="page">
      <svg className="defs">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="50%" stop-color="#AA54ED" />
            <stop offset="100%" stop-color="#5348E2" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="swiper-container swiper-slider"
        data-effect="frame-trapeze"
        data-loop="true"
        data-autoplay="5500"
        data-speed="1200"
        data-mousewheel="false"
        data-keyboard="true"
        data-frame-fill="url(#gradient1)"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage: "url(images/slider-slide-5-1920x1280.jpg"
              }}
              data-swiper-anime='{ "animation": "swiperSlideRotate", "duration": 2000, "delay": 600 }'
            />
            <div className="swiper-slide-caption text-center context-dark">
              <h1 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 500 }'>
                Element
              </h1>
              <h3 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 600 }'>
                New HTML Templates Generation
              </h3>
              <div
                className="group-lg group-middle"
                data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 700 }'
              >
                <a
                  className="button button-primary button-shadow"
                  href="#features"
                  data-custom-scroll-to="features"
                >
                  See Features
                </a>
                <a className="button button-black button-shadow" href="#">
                  Buy template
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage: "url(images/slider-slide-5-1920x986.jpg"
              }}
              data-swiper-anime='{ "animation": "swiperSlideRotate", "duration": 2000, "delay": 600 }'
            />
            <div className="swiper-slide-caption context-dark">
              <h2 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 500 }'>
                The Power of Bootstrap
                <br className="d-none d-lg-block" /> Discover it with Element
              </h2>
              <a
                className="button button-primary button-shadow"
                href="#"
                data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 700 }'
              >
                Buy template
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage: "url(images/slider-slide-7-1920x986.jpg"
              }}
              data-swiper-anime='{ "animation": "swiperSlideRotate", "duration": 2000, "delay": 600 }'
            />
            <div className="swiper-slide-caption context-dark">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h2 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 500 }'>
                      Built by geeks & used by humans
                    </h2>
                    <h5
                      className="text-width-2 block-centered"
                      data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 600 }'
                    >
                      Element aims to satisfy real needs of real projects. We've
                      got a pack of tools for that.
                    </h5>
                    <div
                      className="group-lg group-middle"
                      data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 700 }'
                    >
                      <a
                        className="button button-black button-shadow"
                        href="#features"
                        data-custom-scroll-to="features"
                      >
                        See Features
                      </a>
                      <a
                        className="button button-primary button-shadow"
                        href="#"
                      >
                        Buy template
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev linear-icon-chevron-left" />
        <div className="swiper-button-next linear-icon-chevron-right" />
      </div>{" "}
    </div>
  );
};

export default App;
