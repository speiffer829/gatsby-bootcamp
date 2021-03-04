import React from 'react'
import Layout from "../Components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby"
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
	
	return (
    <Layout className="blogpage">
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id} className={blogStyles.post}>
            <Link to={`/Blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage