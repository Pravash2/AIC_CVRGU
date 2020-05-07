import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

var global = require("global")
var document = require("global/document")
var window = require("global/window")
// Navbar and dropdowns

const Header = ({ siteTitle }) => (
  <header id="header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img
          style={{ width: "250px" }}
          src={require("../../assets/img/logo.png")}
          alt="logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          document
            .getElementsByClassName("navbar-collapse")[0]
            .classList.toggle("collapse")
          document
            .getElementsByClassName("navbar-toggler")[0]
            .classList.toggle("collapsed")
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notices">
              Notice
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link more"
              href="https://bit.ly/tbi_apply_website"
              target="_blank"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
