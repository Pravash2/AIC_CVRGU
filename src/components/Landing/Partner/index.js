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
            <h5>Our Ecosystem Partners</h5>

            <div className="partner-inner">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/wadhwni.png")}
                      alt="partner"
                      width="250px"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/wadhwni.png")}
                      alt="partner"
                      width="250px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/iic_logo.png")}
                      width="200px"
                      alt="partner"
                    />
                    <img
                      width="200px"
                      src={require("../../../assets/img/partner-img/iic_logo.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/GrowVation.png")}
                      alt="partner"
                      width="120px"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/GrowVation.png")}
                      alt="partner"
                      width="120px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/tech_logo.png")}
                      alt="partner"
                      width="300px"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/tech_logo.png")}
                      alt="partner"
                      width="300px"
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
