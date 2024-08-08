import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-green-500 text-center text-4xl">
        Contact Page
      </h1>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Us!</title>
