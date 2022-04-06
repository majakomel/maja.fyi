import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from "../components/layout"
import Head from "../components/head"

import smajli from "../images/smajli.svg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIndexData {
        name
        description {
          raw
        }
      }
    }
  `)

  const displayName = data.contentfulIndexData.name.toLowerCase()

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  
  return (
    <Layout>
      <Head title={displayName} />
      <img className="smajli" alt="haha" src={smajli} />
      {documentToReactComponents(
        JSON.parse(data.contentfulIndexData.description.raw),
        options
      )}
    </Layout>
  )
}

export default IndexPage
