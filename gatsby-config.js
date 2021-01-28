module.exports = {
  siteMetadata: {
    title: "Coding Dojo",
    description:
      "¿Interesado en comenzar una nueva carrera en tecnología? Aprende a programar en una de los mejores academias del mundo. Crea tu primer sitio web y aplicación en cuestión de semanas. Enseñamos Python, Java, .NET, iOS, Javascript y más. Opciones de aprendizaje en línea y becas disponibles. ¡Inscríbete hoy!",
    image: "/images/ninjas.png",
    url: "https://codingdojo-test.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "assets",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 930,
              backgroundColor: "transparent", // required to display blurred image first
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/scss/styles";`,
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-image",
    "gatsby-plugin-netlify-cms",
  ],
}
