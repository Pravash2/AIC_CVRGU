import React, { Component } from "react";

export default class BreadCumb extends Component {
  
  render(props) {
    return (
      <div>
        <div class="page-title-area">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <h2>{this.props.title}</h2>
              </div>
            </div>
          </div>

          <div class="shape1">
            <img src={require("../assets/img/shape1.png")} alt="shape" />
          </div>

          <div class="shape2 rotateme">
            <img src={require("../assets/img/shape2.svg")} alt="shape" />
          </div>
          <div class="shape3">
            <img src={require("../assets/img/shape3.svg")} alt="shape" />
          </div>
          <div class="shape4">
            <img src={require("../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div class="shape5">
            <img src={require("../assets/img/shape5.png")} alt="shape" />
          </div>
          <div class="shape6 rotateme">
            <img src={require("../assets/img/shape4.svg")} alt="shape" />
          </div>
          <div class="shape7">
            <img src={require("../assets/img/shape4.svg")} alt="shape " />
          </div>
          <div class="shape8 rotateme">
            <img src={require("../assets/img/shape2.svg")} alt="shape" />
          </div>
        </div>
      </div>
    );
  }
}
