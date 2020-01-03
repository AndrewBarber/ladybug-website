import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import Episode from "../components/Episode"
import Footer from "../components/Footer"
import "./pages.css"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Ladybug Podcast" />
      <HomeHeader latestEpisode={data.allMarkdownRemark.edges[0]} />
      <main>
        <h2>Recent Episodes</h2>
        <Episode episodeInfo={data.allMarkdownRemark.edges[1]} />
        <Episode episodeInfo={data.allMarkdownRemark.edges[2]} />
        <Episode episodeInfo={data.allMarkdownRemark.edges[3]} />
      </main>
      <Footer />
    </div>
  )
}

export const blogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            formattedDate
            description
            episode
            length
            audio
          }
        }
      }
    }
  }
`

export default IndexPage
