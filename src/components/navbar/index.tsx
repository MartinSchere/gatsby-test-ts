import React, { useState } from "react"
import "./styles.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"

import Button from "../button"

import ResponsiveLogo from "../../../static/images/responsive-logo.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
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
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
      </ul>
      <Button text="¿Quieres aclarar dudas? Agenda aquí" />
      <FontAwesomeIcon
        icon={faBars}
        color="white"
        className="burger-icon"
        onClick={toggleMenu}
        rotation={showMenu ? 90 : null}
        size={"lg"}
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
        <li>
          <Link to="/" className="nav-link">
            Mock Link
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
