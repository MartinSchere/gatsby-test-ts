import React from "react"

import Navbar from "../../components/navbar"

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default DefaultLayout
