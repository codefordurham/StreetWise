module.exports = {
  siteMetadata: {
    title: 'StreetWise',
    author: 'Dane SUmmers',
    imageUrl: '',
    description: 'A street summary for your address',
    keywords: `Durham Trash`,
    twitter: 'https://twitter.com/codefordurham',
    github: `https://github.com/codefordurham/StreetWise`,
    siteUrl: `https://www.example.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
        orientation: 'portrait'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions`,
        functionsOutput: `${__dirname}/functions`
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
