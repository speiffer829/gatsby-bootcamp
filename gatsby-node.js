const path = require('path');

// module.exports.onCreateNode = ( { node, actions } ) => {
// 	const { createNodeField } = actions

// 	if(node.internal.type === 'MarkdownRemark'){
// 		const slug = path.basename(node.fileAbsolutePath, '.md')

// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		})
// 	}

// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
	const blogTemplate = path.resolve( './src/templates/Blog.js' )

	const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

	res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/Blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

}