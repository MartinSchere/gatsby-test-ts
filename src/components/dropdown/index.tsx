import React, { useState } from "react"
import "./styles.scss"

import { Link } from "gatsby"

import { FaCaretDown } from "react-icons/fa"

export type DropdownItem = {
  node: {
    frontmatter: {
      name: string
    }
    fields: {
      slug: string
    }
  }
}

interface DropdownProps {
  children: string
  items: DropdownItem[]
}

const Dropdown = (props: DropdownProps) => {
  return (
    <li className="dropdown">
      <span className="nav-link">
        {props.children} <FaCaretDown className="dropdown-icon" />
      </span>
      <ul>
        {props.items.map(({ node }, idx) => (
          <Link to={node.fields.slug} key={idx} className="text-light">
            {node.frontmatter.name}
          </Link>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown
