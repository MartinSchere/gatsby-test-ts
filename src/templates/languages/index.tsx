import React, { useState, useEffect, useRef } from "react"
import "./styles.scss"

import DefaultLayout from "../../layouts/default"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { LanguageFrontmatter } from "../../typescript/types"

import IntroSection from "./sections/intro"
import UseCasesSection from "./sections/useCases"
import FeaturesSection from "./sections/features"
import ApproachSection from "./sections/approach"

import Button from "../../components/button"
import LanguageScrollspy from "../../components/languageScrollspy"
import SEO from "../../components/seo"

const LanguagePage = ({ data }) => {
  const language: LanguageFrontmatter = data.markdownRemark.frontmatter
  const [fixScrollspyNav, setFixScrollspyNav] = useState(false)

  const bannerRef = useRef<HTMLInputElement>()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > bannerRef.current.offsetHeight) {
      setFixScrollspyNav(true)
    } else {
      setFixScrollspyNav(false)
    }
  }

  return (
    <>
      <SEO
        title={`Tu guía de ${language.name}`}
        description={language.whatis}
      />
      <DefaultLayout>
        <div className="banner" ref={bannerRef}>
          <h1 className="text-white">
            Tu guía de <br />
            {language.name}
          </h1>
          <Img
            fluid={language.featuredImg.childImageSharp.fluid}
            className="featured-img"
          />
        </div>
        <div className="scrollspy">
          <div className="scrollspy-content">
            <IntroSection id={"section-1"} language={language} />
            <UseCasesSection id={"section-2"} language={language} />
            <FeaturesSection id={"section-3"} language={language} />
            <ApproachSection id={"section-4"} language={language} />
            <section id="section-5">
              <h1>¿Estás listo para aprender {language.name}?</h1>
              <Button text={"Postula ahora"} />
            </section>
          </div>
          <LanguageScrollspy
            fixNav={fixScrollspyNav}
            languageName={language.name}
          />
        </div>
      </DefaultLayout>
    </>
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
              fixed(width: 180, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        companies {
          childImageSharp {
            fluid(maxWidth: 125) {
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
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
        }
        languageImg {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        name
        technologies {
          icon {
            childImageSharp {
              fixed(width: 29, height: 33) {
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
