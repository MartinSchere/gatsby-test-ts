import React from "react"
import "./styles.scss"
import DefaultLayout from "../../layouts/default"
import { graphql } from "gatsby"

const LanguagePage = ({ data }) => {
  const language = data.markdownRemark.frontmatter
  return (
    <DefaultLayout>
      <h1>{language.name}</h1>
    </DefaultLayout>
  )
}

export default LanguagePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
      }
    }
  }
`
