import React from "react"
import DefaultLayout from "../layouts/default"

import "./styles.scss"

const index = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <h1>Esta es una demo</h1>
        <h3>¡Visitá la página modular de Python! </h3>
      </div>
    </DefaultLayout>
  )
}

export default index
