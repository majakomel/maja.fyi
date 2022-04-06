import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIndexData {
        name
        description {
          raw
        }
        githubUrl
        gitlabUrl
        linkedinUrl
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.contentfulIndexData.name}, © 2019</p>
    </footer>
  )
}

export default Footer
