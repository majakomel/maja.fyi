import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PlayerContext } from "../store/provider"
import play from "../images/play.svg"

import Layout from "../components/layout"
import Head from "../components/head"

const MixesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMusicMix(sort: { fields: published, order: DESC }) {
        nodes {
          mixName
          mixUrl
          published(formatString: "MMMM Do, YYYY")
          mixDescription {
            mixDescription
          }
        }
      }
    }
  `)

  const mixNodes = data.allContentfulMusicMix.nodes

  return (
    <Layout>
      <Head title="Mixes" />

      {mixNodes.map(mix => {
        return (
          <PlayerContext.Consumer>
            {context => (
              <p>
                <button
                  className="playBtn"
                  onClick={() => {
                    context.showPlayer(true)
                    context.changePlayer(mix)
                  }}
                >
                  <img className="play" alt="play" src={play} />
                </button>
                {mix.mixName}
                <span> ({mix.published})</span>
                {/* mix.mixDescription && (
                  <p>{mix.mixDescription.mixDescription}</p>
                )*/}
              </p>
            )}
          </PlayerContext.Consumer>
        )
      })}
    </Layout>
  )
}

export default MixesPage
