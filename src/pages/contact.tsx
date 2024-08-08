import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Lottie from "lottie-react"
import animationData from "../assets/contact.json"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-500 text-center text-4xl mb-4">
          Contact Us!
        </h1>
        <Lottie animationData={animationData} />
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Us!</title>
