import React from "react"
import "./styles.scss"

import Navbar from "../../components/navbar"

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="content">{children}</div>
    </main>
  )
}

export default DefaultLayout
