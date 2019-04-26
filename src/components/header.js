import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from "../images/gatsby-icon.png"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#463e4b`,
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
            color: `grey`,
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

      <div>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about/">About</Link>
        </button>
        <button>
          <Link to="/projects/">Projects</Link>
        </button>
        <button>
          <Link to="/contacts/">Contact Me</Link>
        </button>
      </div>


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
