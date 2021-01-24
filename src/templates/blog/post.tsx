import React from "react"
import "./styles.scss"

import { graphql } from "gatsby"

import DefaultLayout from "../../layouts/default"

const BlogPost = ({ data }) => {
  return (
    <DefaultLayout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </DefaultLayout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
