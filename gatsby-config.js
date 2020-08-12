module.exports = {
  siteMetadata: {
    title: `AIC-C.V Raman College of Engineering Foundation`,
    description: `We are a technology business incubator based in ODISHA supporting and nurturing startup companies by providing services such as incubation, modern office spaces, mentoring , networking opportunities, and rapid prototyping. We are AIC-CGU founded in 2019, a non-profit organization with an integral role in catalyzing the entrepreneurial movement in India. By supporting entrepreneurs and start-up ideas, we will highlight India's reputation as a destination for Entrepreneurship and Innovation. We will be India's most sought after Technology Business Incubator committed to growing a collaborative entrepreneurial network byd providing a one-stop support system for start-ups and transforming Orissa as a hub for innovation.`,
    author: `@pravash`,
    keyword: `cvrce,AIC-CGU, technology business incubator in odisha, best incubator in bhubaneswar, best incubator in odisha, c v raman incubator, incubator in odisha, c v raman tbi, startups in odisha, student startups in odisha, startups in c v raman college,  `,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kkzkgipvyh2b`,
        accessToken: `s12ropJjALfPkHwR0ID-XARjvmtwXLYXJitW45T8T8c`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
