import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from "../images/gatsby-icon.png"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{
            width: "100px",
          }}
               src={gatsbyLogo} alt="Gatsby Logo"/>
        </Link>
      </h1>
    </div>
    <div>
      <ol>
        <li>
          <Link to="/">Go back to the homepage</Link>
        </li>
        <li>
          <Link to="/about/">Learn More About Me!</Link>
        </li>
      </ol>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
