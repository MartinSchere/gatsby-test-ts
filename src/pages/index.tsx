import React from "react"
import DefaultLayout from "../layouts/default"

import "./styles.scss"

import SEO from "../components/seo"
import { graphql } from "gatsby"

const index = ({ data }) => {
  return (
    <>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <DefaultLayout>
        <div className="hero">
          <h1>Esta es una demo</h1>
          <h3>¡Visitá la página modular de Python! </h3>
        </div>
      </DefaultLayout>
    </>
  )
}

export default index

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
