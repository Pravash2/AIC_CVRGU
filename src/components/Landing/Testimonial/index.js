import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="feedback-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>What Leadership Says</h2>
              <div className="bar"></div>
              <p>You can't buy vision and you can't aesthetic</p>
            </div>

            <div className="testimonials-slides">
              <OwlCarousel
                className="owl-theme"
                items={1}
                nav={false}
                loop
                margin={10}
              >
                <div className="single-feedback-item">
                  <div className="client-info align-items-center">
                    <div className="image">
                      <img
                        src={require("../../../assets/img/client-image/1.jpg")}
                        alt="image"
                      />
                    </div>

                    <div className="title">
                      <h3>Steve Lucy</h3>
                      <span>Lead Developer at Envato</span>
                    </div>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="single-feedback-item">
                  <div className="client-info align-items-center">
                    <div className="image">
                      <img
                        src={require("../../../assets/img/client-image/2.jpg")}
                        alt="image"
                      />
                    </div>

                    <div className="title">
                      <h3>David Luiz</h3>
                      <span>Lead Developer at Envato</span>
                    </div>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="single-feedback-item">
                  <div className="client-info align-items-center">
                    <div className="image">
                      <img
                        src={require("../../../assets/img/client-image/3.jpg")}
                        alt="image"
                      />
                    </div>

                    <div className="title">
                      <h3>Marta Smith</h3>
                      <span>Lead Developer at Envato</span>
                    </div>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>

          <div className="shape1">
            <img src={require("../../../assets/img/shape1.png")} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={require("../../../assets/img/shape2.svg")} alt="shape" />
          </div>
          <div className="shape4">
            <img src={require("../../../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div className="shape5">
            <img src={require("../../../assets/img/shape5.png")} alt="shape" />
          </div>
          <div className="shape6 rotateme">
            <img src={require("../../../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div className="shape7">
            <img src={require("../../../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={require("../../../assets/img/shape2.svg")} alt="shape" />
          </div>
        </section>
      </div>
    );
  }
}
