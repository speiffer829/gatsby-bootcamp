import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

	const data = useStaticQuery(
    graphql`
      query{
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
	
	return (
		<footer>
			<p className="copy">Created By { data.site.siteMetadata.author } © 2021</p>
		</footer>
	)
}

export default Footer
