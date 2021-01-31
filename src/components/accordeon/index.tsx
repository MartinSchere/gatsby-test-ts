import React, { useState } from "react"
import "./styles.scss"

import { Link } from "gatsby"

import { FaCaretLeft } from "react-icons/fa"

import { DropdownItem } from "../dropdown/index"

interface AccordeonProps {
  items: DropdownItem[]
  children: string
}

const Accordeon = ({ items, children }: AccordeonProps) => {
  // (Mobile dropdown)
  const [isDropped, setIsDropped] = useState(false)
  return (
    <li className="accordeon ">
      <div
        className="text-wrapper"
        onClick={() => {
          setIsDropped(!isDropped)
        }}
      >
        <span className="text-bold">{children}</span>
        <FaCaretLeft rotate={isDropped ? 270 : null} className="drop-icon" />
      </div>
      <div className={isDropped ? "drop show" : "drop"}>
        {items.map(({ node }, idx) => (
          <Link key={idx} to={node.fields.slug} className="text-light">
            {node.frontmatter.name}
          </Link>
        ))}
      </div>
    </li>
  )
}

export default Accordeon
