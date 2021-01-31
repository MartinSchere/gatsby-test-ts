import React, { useState } from "react"
import "./styles.scss"

import { FaBars } from "react-icons/fa"

import { Link, graphql, useStaticQuery } from "gatsby"

import Button from "../button"

import ResponsiveLogo from "../../../static/images/responsive-logo.png"
import Dropdown from "../dropdown"
import Accordeon from "../accordeon"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { allMarkdownRemark } = useStaticQuery(query)
  const languages = allMarkdownRemark.edges
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className={showMenu ? "expand" : ""}>
      <Link to="/" className="logo-link">
        <img
          className="logo"
          src="https://cutecdn.codingdojo.com/images/global/coding_dojo_logo_white_new.png"
          alt="coding-dojo-logo"
        ></img>
        <img
          src={ResponsiveLogo}
          alt="CodingDojo"
          className="responsive-logo"
        />
      </Link>
      <ul className="nav-option">
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <Dropdown items={languages}>Currículum</Dropdown>
      </ul>
      <Button text="¿Quieres aclarar dudas? Agenda aquí" />
      <FaBars
        color="white"
        className={showMenu ? "burger-icon rotate" : "burger-icon"}
        onClick={toggleMenu}
        rotate={90}
      />
      <ul className={showMenu ? "nav-option-mobile show" : "nav-option-mobile"}>
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
        <Accordeon items={languages}>Currículum</Accordeon>
      </ul>
    </nav>
  )
}

export default Navbar

const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/languages/" } }) {
      edges {
        node {
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
