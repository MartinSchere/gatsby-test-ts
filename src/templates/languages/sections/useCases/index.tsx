import React from "react"
import "./styles.scss"

import { LangSectionProps } from "../../../../typescript/types"

import Img from "gatsby-image"

const UseCasesSection = ({ id, language }: LangSectionProps) => {
  return (
    <section id={id}>
      <h1>Usos más comunes de {language.name}</h1>
      <div className="use-cases">
        {language.commonUseCases.map((useCase, index) => (
          <div className="use-case" key={index}>
            <Img
              fixed={useCase.image.childImageSharp.fixed}
              className="use-case-img"
            />
            <h3 className="text-light">{useCase.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UseCasesSection
