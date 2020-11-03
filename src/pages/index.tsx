import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { Query } from "../gen/graphql-types"
import PostView from "../components/PostView"

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:mm:ss")
            thumb {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery<Query>(LatestPostListQuery)
  return (
    <Layout>
      <SEO title="Home" />
      
      <ul>
        {console.log(data.allMarkdownRemark.edges)}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          
          <li key={node.id}>
            <PostView src={node.frontmatter.thumb.childImageSharp.fluid.src} title={node.frontmatter.title} date={node.frontmatter.date}description={node.excerpt} />

          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
