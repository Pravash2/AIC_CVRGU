import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Notices from "../components/notices"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Notices" />
    <Notices />
  </Layout>
)

export default IndexPage
