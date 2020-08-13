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
                      We are AIC-CVRCE Foundation founded in 2020, a non-profit
                      organization with an integral role in catalysing the
                      entrepreneurial movement in India. By supporting
                      entrepreneurs and start-up ideas, we will highlight
                      India's reputation as a destination for Entrepreneurship
                      and Innovation.
                    </p>
                  </div>

                  <p>
                    AIC - CVRCE is one of the foundation to establish the Atal
                    Incubation Centre under the Atal Innovation Mission (AIM) of
                    National Institution for Transforming India (NITI Aayog). WE
                    here envisions to build an ecosystem to enable technological
                    innovation and solve the societal problem statements with
                    effective solutions. Under this program, we support our
                    incubated start-ups with facilities like initial
                    brainstorming, furnishing ideas, consultancy, mentorship,
                    networking, connecting to other subject matter experts,
                    leading them to market access, in case if they get eligible,
                    also connect/support with funds.
                  </p>
                </div>
              </div>
            </div>

            <div class="about-inner-area">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="about-text">
                    <h3>Our Vision</h3>
                    <p>
                      To Promote Ideas, Creativity, And Innovation In
                      Agriculture And Food Technology.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="about-text">
                    <h3>Our Mission</h3>
                    <p>
                      To Develop And Encourage A Culture Of New Innovations In A
                      Country As A Whole
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
