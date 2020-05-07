import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import News from "../components/News"

const IndexPage = () => (
  <Layout>
    <SEO title="News" />
    <News />
  </Layout>
)

export default IndexPage
