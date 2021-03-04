import React from 'react'
import Layout from "../Components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby"


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

console.log( data );
	
	return (
    <Layout className="blogpage">
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
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