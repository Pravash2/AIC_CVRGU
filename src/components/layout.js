/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./layout/header"
import Footer from "./layout/footer"

import "../assets/css/bootstrap.min.css"
import "../assets/css/animate.css"
import "../assets/css/meanmenu.css"
import "../assets/css/magnific-popup.min.css"
import "../assets/css/flaticon.css"
import "../assets/css/odometer.css"
import "../assets/css/slick.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/fontawesome.min.css"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
