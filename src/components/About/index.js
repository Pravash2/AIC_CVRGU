import React, { Component } from "react"

import Partner from "../Landing/Partner"
import FunFact from "../Landing/funFact"
import Team from "../Landing/Team"

import BreadCumb from "../BreadCumb"

import Mentors from "./Mentors"
import StartUps from "./Startup"
import FlagshipProgram from "./FlatshipProgram"

class About extends Component {
  render() {
    return (
      <div>
        <BreadCumb title="About" />
        <section class="about-area ptb-80">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="about-image">
                  <img
                    src={require("../../assets/img/1.png")}
                    alt="Aboutimage"
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="about-content">
                  <div class="section-title">
                    <h2>About Us</h2>
                    <div class="bar"></div>
                    <p>
                      We are a technology business incubator based in ODISHA
                      supporting and nurturing startup companies by providing
                      services such as incubation, modern office spaces,
                      mentoring , networking opportunities, and rapid
                      prototyping.
                    </p>
                  </div>

                  <p>
                    We are CVRCE- Technology Business Incubator founded in 2019,
                    a non-profit organization with an integral role in
                    catalyzing the entrepreneurial movement in India. By
                    supporting entrepreneurs and start-up ideas, we will
                    highlight India's reputation as a destination for
                    Entrepreneurship and Innovation.
                  </p>

                  <p>
                    We will be India`s most sought after Technology Business
                    Incubator committed to growing a collaborative
                    entrepreneurial network by providing a one-stop support
                    system for start-ups and transforming Orissa as a hub for
                    innovation.
                  </p>
                </div>
              </div>
            </div>

            <div class="about-inner-area">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="about-text">
                    <h3>Our Vision</h3>
                    <p>
                      To Promote Ideas, Creativity, And Innovation In
                      Agriculture And Food Technology.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="about-text">
                    <h3>Our Mission</h3>
                    <p>
                      To Develop And Encourage A Culture Of New Innovations In A
                      Country As A Whole
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                  <div class="about-text">
                    <h3>Who we are</h3>
                    <p>
                      We are a technology business incubator based in ODISHA
                      supporting and nurturing startup companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default class Landing extends Component {
  render() {
    return (
      <div style={{}}>
        <About />
        <FlagshipProgram />
        <Team />
        <Mentors />
        {/* <AdvisoryBoard /> */}
        <StartUps />
        <Partner />
        <FunFact />
      </div>
    )
  }
}
