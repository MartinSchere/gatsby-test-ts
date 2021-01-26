import React, { useState, useEffect, useRef } from "react"
import "./styles.scss"

import DefaultLayout from "../../layouts/default"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Scrollspy from "react-scrollspy"

const LanguagePage = ({ data }) => {
  const language = data.markdownRemark.frontmatter
  const featuredImageFluid = language.featuredImg.childImageSharp.fluid
  const [fixScrollspyNav, setFixScrollspyNav] = useState(false)

  const scrollspyWrapperRef = useRef<HTMLInputElement>()
  const bannerRef = useRef<HTMLInputElement>()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const navbarHeight = 56

    if (
      window.pageYOffset + navbarHeight >
      bannerRef.current.offsetHeight + navbarHeight
    ) {
      setFixScrollspyNav(true)
    } else {
      setFixScrollspyNav(false)
    }
  }

  return (
    <DefaultLayout>
      <div className="banner" ref={bannerRef}>
        <h1 className="text-white">
          Tu guía de <br />
          {language.name}
        </h1>
        <Img fluid={featuredImageFluid} className="featured-img" />
      </div>
      <div className="scrollspy">
        <div className="scrollspy-content">
          <section id="section-1">One</section>
          <section id="section-2">Two</section>
          <section id="section-3">Three</section>
          <section id="section-4">Four</section>
          <section id="section-5">Five</section>
        </div>
        <div
          className="nav-wrapper"
          ref={scrollspyWrapperRef}
          style={{
            position: fixScrollspyNav ? "fixed" : "absolute",
            top: fixScrollspyNav ? 56 : undefined,
          }}
        >
          <Scrollspy
            offset={-250}
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
                ¿Qué es {language.name}?
              </a>
            </li>
            <li>
              <a href="#section-2" className="text-light">
                Usos más comunes de {language.name}
              </a>
            </li>
            <li>
              <a href="#section-3" className="text-light">
                Características de {language.name}
              </a>
            </li>
            <li>
              <a href="#section-4" className="text-light">
                Nuestra aproximación a {language.name}
              </a>
            </li>
            <li>
              <a href="#section-5" className="text-light">
                ¿Estás listo para aprender {language.name}?
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default LanguagePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bottomImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        commonUseCases {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        companies {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
        languageImg {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        technologies_ {
          icon {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
        }
        title
        topics
      }
    }
  }
`
