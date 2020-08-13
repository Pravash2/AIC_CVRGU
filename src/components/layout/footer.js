import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer style={{ clear: "both" }} className="footer-area bg-f7fafd">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <a href="#">
                      <img
                        src={require("../../assets/img/logo.png")}
                        alt="logo"
                        style={{ width: 200 }}
                      />
                    </a>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    We are AIC-CVRCE Foundation founded in 2020, a non-profit
                    organization catalyzing the entrepreneurial movement in
                    India.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget pl-5">
                  <h3>Company</h3>
                  <ul className="list">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/news">Latest News</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Quick Links</h3>
                  <ul className="list">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.startupindia.gov.in/"
                      >
                        Startup India
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://startupodisha.gov.in/">
                        Startup Odisha
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.startupschool.org/">
                        Startup school
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://startup.google.com/">
                        Google startup
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://startups.fb.com/">
                        Facebook startup
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Address</h3>

                  <ul className="footer-contact-info">
                    <li>
                      <i data-feather="map-pin" /> Beside new Electrical
                      building Near Union bank inside ,
                      <br />
                      C. V. Raman Global University Campus,Bhubaneswar
                      <br />
                      Odisha-751007
                    </li>
                    <li>
                      <i data-feather="mail" /> Email:{" "}
                      <a href="mailto:incubation_aic@cvrgi.edu.in">
                        incubation_aic@cvrgi.edu.in
                      </a>
                    </li>
                    <li>
                      <i data-feather="phone-call" /> Phone:{" "}
                      <a href="tel:9778751177">+91 (977) 8751 177</a>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/cvrcetif"
                        className="facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/cvrce_tbi"
                        className="twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/cvrcetif/"
                        className="instagram"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cvrce-technology-incubator-foundation"
                        className="linkedin"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="copyright-area">
                  <p>Copyright @2020 AIC-CGU. All rights reserved</p>
                  <p>
                    Curated with <i className="fa fa-heart"></i> by{" "}
                    <a href="http://www.pravash.tech" target="_blank">
                      {" "}
                      <span>Pravash</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={require("../../assets/img/map.png")}
            className="map"
            alt="map"
          />
          <div className="shape1">
            <img src={require("../../assets/img/shape1.png")} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={require("../../assets/img/shape2.svg")} alt="shape" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
