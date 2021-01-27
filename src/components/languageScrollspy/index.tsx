import React from "react"
import "./styles.scss"

import Scrollspy from "react-scrollspy"

interface LanguageScrollspyProps {
  languageName: string
  fixNav: boolean
}

const LanguageScrollspy = (props: LanguageScrollspyProps) => {
  return (
    <div
      className="nav-wrapper"
      style={{
        position: props.fixNav ? "fixed" : "absolute",
        top: props.fixNav ? 56 : undefined,
      }}
    >
      <Scrollspy
        offset={-300}
        items={[
          "section-1",
          "section-2",
          "section-3",
          "section-4",
          "section-5",
        ]}
        currentClassName="is-current"
      >
        <li>
          <a href="#section-1" className="text-light">
            ¿Qué es {props.languageName}?
          </a>
        </li>
        <li>
          <a href="#section-2" className="text-light">
            Usos más comunes de {props.languageName}
          </a>
        </li>
        <li>
          <a href="#section-3" className="text-light">
            Características de {props.languageName}
          </a>
        </li>
        <li>
          <a href="#section-4" className="text-light">
            Nuestra aproximación a {props.languageName}
          </a>
        </li>
        <li>
          <a href="#section-5" className="text-light">
            ¿Estás listo para aprender {props.languageName}?
          </a>
        </li>
      </Scrollspy>
    </div>
  )
}

export default LanguageScrollspy
