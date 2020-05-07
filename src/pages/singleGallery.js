import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import SingleGallery from "../components/Gallery/SingleGallery"

const IndexPage = () => (
  <Layout>
    <SEO title="News" />
    <SingleGallery />
  </Layout>
)

export default IndexPage
