import React from "react"
import "./styles.scss"

import { LangSectionProps } from "../../../../typescript/types"

import Img from "gatsby-image"

const IntroSection = ({ id, language }: LangSectionProps) => {
  return (
    <section id={id}>
      <div className="intro">
        <Img
          fixed={language.languageImg.childImageSharp.fixed}
          className="lang-image"
        />
        <div className="content-wrapper">
          <h1>¿Qué es {language.name}?</h1>
          <p>{language.whatis}</p>
          <div className="technologies-container">
            <h6>Tecnologías cubiertas por {language.name}:</h6>
            <ul className="technologies-list">
              {language.technologies.map((tech, index) => (
                <div key={index} className="tech text-light">
                  {tech.icon.childImageSharp && (
                    <Img
                      fixed={tech.icon.childImageSharp.fixed}
                      className="tech-icon"
                    />
                  )}
                  {tech.name}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="companies">
        <div className="title">
          <h3>Compañías que usan</h3>
          <h1>{language.name}</h1>
        </div>
        <div className="company-images">
          {language.companies.map((comp, index) => (
            <Img
              key={index}
              fluid={comp.childImageSharp.fluid}
              className="companyImage"
              imgStyle={{
                objectFit: "scale-down",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroSection
