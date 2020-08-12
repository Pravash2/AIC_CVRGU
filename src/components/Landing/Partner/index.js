import React, { Component } from "react"
import { Link } from "gatsby"

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="ready-to-talk">
          <div className="container">
            <h3>Ready to talk?</h3>
            <p>Our team is here to answer your question</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </section>

        <div className="partner-area partner-section">
          <div className="container">
            <h5>AIC-CGU being supported by,</h5>

            <div className="partner-inner">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/100.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/100.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/101.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/101.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/102.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/102.png")}
                      alt="partner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
