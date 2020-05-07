import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <section id="service-box" className="boxes-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-box">
                  <div className="icon">
                    <i className="fa fa-server box_area_icon_color"></i>
                  </div>
                  <h3>Ideation</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-box bg-f78acb">
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <h3>Pre Incubation</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-box bg-c679e3">
                  <div className="icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h3>Incubation</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-box bg-eb6b3d">
                  <div className="icon">
                    <i className="fa fa-universal-access"></i>
                  </div>
                  <h3>Scale up</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
