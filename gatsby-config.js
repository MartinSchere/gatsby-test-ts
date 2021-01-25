const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Coding Dojo",
    description:
      "¿Interesado en comenzar una nueva carrera en tecnología? Aprende a programar en una de los mejores academias del mundo. Crea tu primer sitio web y aplicación en cuestión de semanas. Enseñamos Python, Java, .NET, iOS, Javascript y más. Opciones de aprendizaje en línea y becas disponibles. ¡Inscríbete hoy!",
    image: "/images/ninjas.png",
    url: "https://codingdojo-test.netlify.app",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-graphql-codegen",
    "gatsby-image",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/scss/styles";`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/img`,
      },
    },
  ],
}
