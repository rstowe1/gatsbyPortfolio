import React from "react"
import { Link } from "gatsby"
import header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (

  <Layout>
    <SEO title="My Projects"/>

    <h1>Take a look at my Personal and Development projects!</h1>
    <p>My projects are very assorted, whether it be motorcycles, jeeps, web development or flying and building quad
      copters, you will find them here!</p>
    {/*<Link to="/">Go back to the homepage</Link>*/}
    {/*<Link to="/about/">Learn More About Me!</Link>*/}
  </Layout>
)

export default Projects
