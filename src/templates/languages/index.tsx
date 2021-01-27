import React, { useState, useEffect, useRef } from "react"
import "./styles.scss"

import DefaultLayout from "../../layouts/default"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import LanguageScrollspy from "../../components/languageScrollspy"
import { LanguageFrontmatter } from "../../typescript/types"
import IntroSection from "./sections/intro"

const LanguagePage = ({ data }) => {
  const language: LanguageFrontmatter = data.markdownRemark.frontmatter
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
    if (window.pageYOffset > bannerRef.current.offsetHeight) {
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
          <IntroSection id={"section-1"} language={language} />
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
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
        languageImg {
          childImageSharp {
            fluid(maxWidth: 121) {
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
