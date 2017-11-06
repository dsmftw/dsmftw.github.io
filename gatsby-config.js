module.exports = {
  siteMetadata: {
    author: `Igor Kozlov`,
    title: `Igor Kozlov`,
    description: `Personal website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-109223282-1',
      },
    },
  ],
}
