export type LanguageFrontmatter = {
  name: string
  title: string
  topics: string[]
  whatis: string
  technologies: {
    name: string
    icon: any
  }[]
  languageImg: any
  features: {
    description: string
    image: any
    title: string
  }[]
  featuredImg: any
  companies: any[]
  commonUseCases: {
    image: any
    title: string
  }[]
  bottomImage: any
}

export type LangSectionProps = {
  id: string
  language: LanguageFrontmatter
}
