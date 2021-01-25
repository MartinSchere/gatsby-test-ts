import React from "react"
import "./styles.scss"

import DefaultLayout from "../../layouts/default"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const LanguagePage = ({ data }) => {
  const language = data.markdownRemark.frontmatter
  const featuredImageFluid = language.featuredImg.childImageSharp.fluid

  return (
    <DefaultLayout>
      <div className="banner">
        <h1 className="text-white">
          Tu guía de <br />
          {language.name}
        </h1>
        <Img fluid={featuredImageFluid} className="featured-img" />
      </div>
    </DefaultLayout>
  )
}

export default LanguagePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bottomImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        commonUseCases {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        companies {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1206) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
        languageImg {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        technologies_ {
          icon {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
        }
        title
        topics
      }
    }
  }
`
