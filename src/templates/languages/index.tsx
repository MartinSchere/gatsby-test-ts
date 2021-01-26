import React, { useState, useEffect, useRef } from "react"
import "./styles.scss"

import DefaultLayout from "../../layouts/default"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import LanguageScrollspy from "../../components/languageScrollspy"

const LanguagePage = ({ data }) => {
  const language = data.markdownRemark.frontmatter
  const featuredImageFluid = language.featuredImg.childImageSharp.fluid
  const [fixScrollspyNav, setFixScrollspyNav] = useState(false)

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
          <section id="section-1">
            <h1>¿Qué es {language.name}?</h1>
            <p>{language.whatis}</p>

            <div className="technologies-container">
              <h4>Tecnologías cubiertas por {language.name}</h4>
              <ul className="technologies-list">
                {language.technologies.map((tech, index) => (
                  <div key={index} className="tech">
                    {tech.name}
                    <Img fixed={tech.icon.childImageSharp.fixed} />
                  </div>
                ))}
              </ul>
            </div>
          </section>
          <section id="section-2">Two</section>
          <section id="section-3">Three</section>
          <section id="section-4">Four</section>
          <section id="section-5">Five</section>
        </div>
        <LanguageScrollspy
          fixNav={fixScrollspyNav}
          languageName={language.name}
        />
      </div>
    </DefaultLayout>
  )
}

export default LanguagePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        whatis
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
        technologies {
          icon {
            childImageSharp {
              fixed(width: 30, height: 33) {
                ...GatsbyImageSharpFixed
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
