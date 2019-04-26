import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <div>
      <h1>About Me</h1>
      <p>A young entreprenuer with a desire to learn, I am consistenly looking for my next big idea. After my collegiate
        career, I went to work as an accountant. After a few years, I realized traditional corporate accounting was not
        for me.
        I went on to find my passion in the development community, starting with Excel, where I learned about Macros.
        After dipping my toe into that for a bit, I graduated to JavaScript where I found the meaning of true power
        and develop my craft daily.
      </p>
      <p>As I continue to fine-tune my coding abilities, I am also working as a
        Lease Accounting Consultant, and towards my dream of running my own web development and Marketing
        company with my fiance. Together we are developing a methods to help small companies grow and increase their
        profits and their reach to new and existing client basis.
      </p>
    </div>
    <Link to="///">Home</Link>
    <Link to="/projects/">Check Out My Work!</Link>
  </Layout>
)
export default About