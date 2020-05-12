import React, { Component } from "react"

import ServiceBox from "./Landing/ServiceBox"
import ExtraService from "./Landing/ExtraService"
import WhyChooseUs from "./Landing/WhyChooseUs"
import Blog from "./Landing/Blog"
import Partner from "./Landing/Partner"
// import Testimonial from "./Landing/Testimonial";
import FunFact from "./Landing/funFact"
// import Team from "./Landing/Team";
import Gallery from "./Landing/Gallery"

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="main-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <div className="hero-content">
                      <h1>
                        Changing India through transforming ideas into a great
                        Startups
                      </h1>

                      <a href="#service-box" className="btn btn-primary">
                        Get Started
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 offset-lg-1">
                    <div className="banner-image">
                      <img
                        src="assets/img/banner-image/man.png"
                        src={require("../assets/img/banner-image/man.png")}
                        className="wow fadeInDown"
                        data-wow-delay="0.6s"
                        alt="man"
                      />
                      <img
                        src={require("../assets/img/banner-image/code.png")}
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="code"
                      />
                      <img
                        src={require("../assets/img/banner-image/carpet.png")}
                        className="wow fadeInLeft"
                        data-wow-delay="0.6s"
                        alt="carpet"
                      />
                      <img
                        src={require("../assets/img/banner-image/bin.png")}
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="bin"
                      />
                      <img
                        src={require("../assets/img/banner-image/book.png")}
                        className="wow bounceIn"
                        data-wow-delay="0.6s"
                        alt="book"
                      />
                      <img
                        src={require("../assets/img/banner-image/dekstop.png")}
                        className="wow fadeInDown"
                        data-wow-delay="0.6s"
                        alt="dekstop"
                      />
                      <img
                        src={require("../assets/img/banner-image/dot.png")}
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="dot"
                      />
                      <img
                        src={require("../assets/img/banner-image/flower-top-big.png")}
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="flower-top-big"
                      />
                      <img
                        src={require("../assets/img/banner-image/flower-top.png")}
                        className="wow rotateIn"
                        data-wow-delay="0.6s"
                        alt="flower-top"
                      />
                      <img
                        src={require("../assets/img/banner-image/keyboard.png")}
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="keyboard"
                      />
                      <img
                        src={require("../assets/img/banner-image/pen.png")}
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="pen"
                      />
                      <img
                        src={require("../assets/img/banner-image/table.png")}
                        className="wow zoomIn"
                        data-wow-delay="0.6s"
                        alt="table"
                      />
                      <img
                        src={require("../assets/img/banner-image/tea-cup.png")}
                        className="wow fadeInLeft"
                        data-wow-delay="0.6s"
                        alt="tea-cup"
                      />
                      <img
                        src={require("../assets/img/banner-image/headphone.png")}
                        className="wow rollIn"
                        data-wow-delay="0.6s"
                        alt="headphone"
                      />

                      <img
                        src={require("../assets/img/banner-image/main-pic.png")}
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        alt="main-pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape1">
            <img src={require("../assets/img/shape1.png")} alt="shape" />{" "}
          </div>
          <div className="shape2 rotateme">
            <img src={require("../assets/img/shape2.svg")} alt="shape" />
          </div>
          <div className="shape3">
            <img src={require("../assets/img/shape3.svg")} alt="shape" />
          </div>
          <div className="shape4">
            <img src={require("../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div className="shape5">
            <img src={require("../assets/img/shape5.png")} alt="shape" />
          </div>
          <div className="shape6 rotateme">
            <img src={require("../assets/img/shape4.svg")} alt="shape" />>
          </div>
          <div className="shape7">
            <img src={require("../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img
              src={require("../assets/img/shape2.svg")}
              alt="logo"
              alt="shape"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default class Landing extends Component {
  render() {
    return (
      <div style={{}}>
        <Banner />
        <ServiceBox />
        <ExtraService />
        <WhyChooseUs />
        {/* <Team /> */}
        <FunFact />
        {/* 
        <Testimonial />*/}
        {/* <Gallery /> */}
        <Partner />
        {/* <Blog /> */}
      </div>
    )
  }
}
