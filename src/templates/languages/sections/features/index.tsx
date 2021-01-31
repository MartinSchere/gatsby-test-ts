import React from "react"
import "./styles.scss"

import { LangSectionProps } from "../../../../typescript/types"

import Img from "gatsby-image"

const FeaturesSection = ({ id, language }: LangSectionProps) => {
  return (
    <section id={id}>
      <h1>Características de {language.name}</h1>
      <div className="features">
        {language.features.map((feature, index) => (
          <div className="feature" key={index}>
            <Img
              fixed={feature.image.childImageSharp.fixed}
              className="feature-img"
              imgStyle={{ objectFit: "contain" }}
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <Img
        fluid={language.bottomImage.childImageSharp.fluid}
        className="bottom-image"
        imgStyle={{ objectFit: "contain" }}
      />
    </section>
  )
}

export default FeaturesSection
