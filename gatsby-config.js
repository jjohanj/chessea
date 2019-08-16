module.exports = {
  siteMetadata: {
    title: `Chessea`,
    description: `Chess blog`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chessea`,
        short_name: `chessea`,
        start_url: `/`,
        background_color: `#087F8C`,
        theme_color: `#087F8C`,
        display: `minimal-ui`,
        icon: `src/images/butterfly.jpg`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
