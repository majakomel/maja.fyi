import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Helmet title={`${title}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Head
