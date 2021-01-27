import React from "react"
import "./styles.scss"

import { LangSectionProps } from "../../../../typescript/types"

import Img from "gatsby-image"

const ApproachSection = ({ id, language }: LangSectionProps) => {
  return (
    <section id={id}>
      <h1>Nuestra aproximación a {language.name}</h1>
      <h4 className="text-light">
        Estos son los tópicos y tecnologías para que te conviertas en un
        desarrollador de {language.name}
      </h4>
      <div className="block-wrapper">
        <Img
          fluid={language.languageImg.childImageSharp.fluid}
          className="lang-image"
        />
        <div className="info">
          <h3>Tecnologías</h3>
          <ul>
            {language.technologies.map((tech, index) => (
              <li className="text-light" key={index}>
                {tech.name}
              </li>
            ))}
          </ul>
          <h3>Temas que abordamos</h3>
          <ul>
            {language.topics.map((topic, index) => (
              <li className="text-light" key={index}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection
