import React from "react"
import { Link } from "gatsby"
import header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (

  <Layout>
    <SEO title="My Projects"/>

    <h1>Feel free to reach out</h1>
    <p>I am always looking for new projects, let me know if you'd like to work on a project together!</p>
    {/*<Link to="/">Go back to the homepage</Link>*/}
    {/*<Link to="/about/">Learn More About Me!</Link>*/}
  </Layout>
)

export default Contact
