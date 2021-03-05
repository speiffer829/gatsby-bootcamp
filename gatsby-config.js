/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'Spenser "raw dawg" Peiffer',
    title: "Spenser's Juicy Bootcamp",
    foo: "bar",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "45g27oru0x25",
        accessToken: "5E7qPmiw56_njCZU3NMHkUOmKr5s6b-_8L0LA47Hi4g",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
