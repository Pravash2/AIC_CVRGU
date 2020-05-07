import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Resources from "../components/Resources"





const IndexPage = () => (
  <Layout>
    <SEO title="Resources" />
    <Resources />
   
  </Layout>
)

export default IndexPage
