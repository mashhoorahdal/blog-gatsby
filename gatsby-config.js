/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://mashhoorblog.vercel.app`,
    title: 'Mashhoor Ahdal',
  },



  plugins: [
  "gatsby-plugin-postcss",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",

  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  
   
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Mashhoor Ahdal",
          short_name: "Mashhoor",
          start_url: "/",
          display: "standalone",
          icon: "src/images/logo.png", // This path is relative to the root of the site.
          
          crossOrigin: `use-credentials`,
        },
      },
    
 
 
],
}
