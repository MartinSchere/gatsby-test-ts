import React from "react"
import { render } from "@testing-library/react"
import { getPageQueryData, withQuerySnapshot } from "gatsby-plugin-testing"

import renderer from "react-test-renderer"
import LanguagePage from "."

const fs = require("fs")
const languageFolder = "./content/languages"

describe("Language page", () => {
  fs.readdirSync(languageFolder).forEach(langFile => {
    const pagePath = `languages/${langFile.replace(/\.[^/.]+$/, "")}`
    it(
      "renders correctly",
      withQuerySnapshot(async () => {
        const tree = renderer
          .create(<LanguagePage data={await getPageQueryData(pagePath)} />)
          .toJSON()
        expect(tree).toMatchSnapshot()
      })
    )
    it("pulls all the images from graphql", async () => {
      const pageData = await getPageQueryData(pagePath)
      const frontmatter = pageData.markdownRemark.frontmatter
      const checkList = [
        frontmatter.bottomImage,
        frontmatter.featuredImg,
        frontmatter.languageImg,
        ...frontmatter.companies,
        ...frontmatter.commonUseCases.map(e => e.image),
        ...frontmatter.features.map(e => e.image),
        ...frontmatter.technologies.map(e => e.icon),
      ]
      for (let i = 0; i < checkList.length; i++) {
        const img = checkList[i]
        console.log(img)
        expect(img).toHaveProperty("childImageSharp")
      }
    })
  })
})
