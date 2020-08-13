import React, { Component } from "react"

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="services-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title">
                  <h2>Incubation Services</h2>
                  <div className="bar"></div>
                  <p>
                    We Proudly Provide the following services to our startups:
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="database"></i> Co-working
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="globe"></i> Mentorship
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="file"></i> Expert Sessions
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="trending-up"></i> Training Programs
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="folder"></i> 25 COE's
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="monitor"></i> IPR Support
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="mail"></i> Legal Support
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="box">
                      <i data-feather="cloud"></i> Funding Assistant
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 services-right-image">
                <img
                  src={require("../../../assets/img/services-right-image/book-self.png")}
                  className="wow fadeInDown"
                  data-wow-delay="0.6s"
                  alt="book-self"
                />
                <img
                  src={require("../../../assets/img/services-right-image/box.png")}
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                  alt="box"
                />
                <img
                  src={require("../../../assets/img/services-right-image/chair.png")}
                  className="wow fadeInLeft"
                  data-wow-delay="0.6s"
                  alt="chair"
                />
                <img
                  src={require("../../../assets/img/services-right-image/cloud.png")}
                  className="wow zoomIn"
                  data-wow-delay="0.6s"
                  alt="cloud"
                />
                <img
                  src={require("../../../assets/img/services-right-image/cup.png")}
                  className="wow bounceIn"
                  data-wow-delay="0.6s"
                  alt="cup"
                />
                <img
                  src={require("../../../assets/img/services-right-image/flower-top.png")}
                  className="wow fadeInDown"
                  data-wow-delay="0.6s"
                  alt="flower"
                />
                <img
                  src={require("../../../assets/img/services-right-image/head-phone.png")}
                  className="wow zoomIn"
                  data-wow-delay="0.6s"
                  alt="head-phone"
                />
                <img
                  src={require("../../../assets/img/services-right-image/monitor.png")}
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                  alt="monitor"
                />
                <img
                  src={require("../../../assets/img/services-right-image/mug.png")}
                  className="wow rotateIn"
                  data-wow-delay="0.6s"
                  alt="mug"
                />
                <img
                  src={require("../../../assets/img/services-right-image/table.png")}
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                  alt="table"
                />
                <img
                  src={require("../../../assets/img/services-right-image/tissue.png")}
                  className="wow zoomIn"
                  data-wow-delay="0.6s"
                  alt="tissue"
                />
                <img
                  src={require("../../../assets/img/services-right-image/water-bottle.png")}
                  className="wow zoomIn"
                  data-wow-delay="0.6s"
                  alt="water-bottle"
                />
                <img
                  src={require("../../../assets/img/services-right-image/wifi.png")}
                  className="wow fadeInLeft"
                  data-wow-delay="0.6s"
                  alt="wifi"
                />
                <img
                  src={require("../../../assets/img/services-right-image/cercle-shape.png")}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img
                  src={require("../../../assets/img/services-right-image/main-pic.png")}
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                  alt="main-pic"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
