import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>page not found :(</h1>
      <p>
        <Link to="/">go back</Link>
      </p>
    </Layout>
  )
}

export default NotFound
