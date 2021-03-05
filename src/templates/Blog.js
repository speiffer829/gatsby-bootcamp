import React from 'react'
import Layout from "../Components/Layout";
import { graphql } from "gatsby";
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
				date,
				featuredimg{
					childImageSharp{
						fluid{
							...GatsbyImageSharpFluid
						}
					}
				}
      }
			html
    }
  }
`

const Blog = (props) => {
	return (
		<Layout>
			<h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<Img fluid={props.data.markdownRemark.frontmatter.featuredimg.childImageSharp.fluid} />

			<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
		</Layout>
	)
}

export default Blog
