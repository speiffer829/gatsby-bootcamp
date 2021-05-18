import React from 'react'
import Layout from "../Components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import * as blogStyles from './blog.module.scss'
import Head from "../Components/head"


const BlogPage = () => {

const data = useStaticQuery(
  graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            id
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            featuredimg {
              gatsbyImageData(width: 200, aspectRatio: 1.5)
            }
          }
        }
      }
    }
  `
)

	
	return (
    <Layout className="blogpage">
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li key={post.node.id} className={blogStyles.post}>
            <Link to={`/Blog/${post.node.slug}`}>
              <GatsbyImage
                image={post.node.featuredimg.gatsbyImageData}
                alt={""}
                backgroundColor="#fff"
              />
              <span>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage