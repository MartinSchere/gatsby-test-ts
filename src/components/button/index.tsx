import React from "react"

import "./styles.scss"

interface ButtonProps {
  onClick?: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
