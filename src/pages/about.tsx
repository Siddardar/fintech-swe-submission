import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-blue-500 text-center text-4xl">
        About Page
      </h1>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
