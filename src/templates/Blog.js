import React from 'react'
import Layout from "../Components/Layout";
import { graphql } from "gatsby";
import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Head from "../Components/head"



export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      featuredimg {
        gatsbyImageData( formats: [WEBP, AUTO])
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData(formats: [WEBP, AUTO])
          }
        }
      }
    }
  }
`

const Blog = (props) => {
	const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
				
        const img = props.data.contentfulBlogPost.body.references.find(el => el.contentful_id === node.data.target.sys.id)
        
        return (
          <GatsbyImage
            image={img.gatsbyImageData}
            alt={"foobar"}
            className="blog-img"
            backgroundColor="#f4f4f4"
          />
        )
      },
    },
  }

	console.log( JSON.parse(props.data.contentfulBlogPost.body.raw ));
	return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <GatsbyImage
        image={props.data.contentfulBlogPost.featuredimg.gatsbyImageData}
        alt={"foobar"}
        placeholder="blurred"
        className="featured-img"
        backgroundColor="#f4f4f4"
      />

      <section className="blogpost">
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPost.body.raw),
          options
        )}
      </section>

      {/* <div dangerouslySetInnerHTML={{ __html: props.data.body.raw }}></div> */}
    </Layout>
  )
}

export default Blog
