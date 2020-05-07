import React, { Component } from "react"
import { Link } from "gatsby"

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="funfacts-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Our Statistics</h2>
              <div className="bar"></div>
              <p>Life, Liberty, & The Pursuit of Unbiased Statistics</p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="180">
                      05
                    </span>
                    +
                  </h3>
                  <p>Startups</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="20">
                      11
                    </span>
                    +
                  </h3>
                  <p>Student Innovations</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="500">
                      38
                    </span>
                    +
                  </h3>
                  <p>Mentors</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="70">
                      30
                    </span>
                    +
                  </h3>
                  <p>Associates</p>
                </div>
              </div>
            </div>

            <div className="contact-cta-box">
              <h3>Have any startup Idea ?</h3>
              <p>Don't hesitate to contact us</p>
              <a
                href="https://bit.ly/tbi_apply_website"
                className="btn btn-primary"
                target="_blank"
              >
                Apply Now
              </a>
            </div>

            <div className="map-bg">
              <img src={require("../../../assets/img/map.png")} alt="map" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
