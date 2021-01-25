import React from "react"
import "./styles.scss"
import DefaultLayout from "../../layouts/default"
import { graphql } from "gatsby"

const LanguagePage = ({ data }) => {
  const language = data.markdownRemark.frontmatter

  return (
    <DefaultLayout>
      <div className="background">
        <h1 className="text-white">Tu guía de {language.name}</h1>
      </div>
      <img src="" alt="" />
    </DefaultLayout>
  )
}

export default LanguagePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bottomImage
        commonUseCases {
          title
          image
        }
        companies
        featuredImg
        features {
          description
          image
          title
        }
        languageImg
        name
        technologies_ {
          icon
          name
        }
        title
        topics
      }
    }
  }
`
