import React from 'react'
import Layout from "../Components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {

const data = useStaticQuery(
  graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              featuredimg {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `
)

console.log(data.allMarkdownRemark.edges);
	
	return (
    <Layout className="blogpage">
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id} className={blogStyles.post}>
            <Link to={`/Blog/${post.node.fields.slug}`}>
              <Img
                fixed={post.node.frontmatter.featuredimg.childImageSharp.fixed}
              />
              <span>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage