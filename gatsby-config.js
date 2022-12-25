require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Front End Feeds`,
    description: `Search some of the best Front End Blog Feeds by category or keyword`,
    author: `Nikki Peel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Front End Feeds`,
        short_name: `Front End Feeds`,
        start_url: `/`,
        background_color: `#e55812`,
        theme_color: `#0e4749`,
        display: `minimal-ui`,
        icon: `src/images/front-end-feeds.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        // color: "#4a94a8",
        color: "#95c623",
        // Height of the scroll indicator
        height: "14px",
        // Configure paths where the scroll indicator will appear
        paths: ["/"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
