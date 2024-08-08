import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Lottie from "lottie-react"
import animationData from "../assets/skateboard.json"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 text-center text-4xl mb-4">
          Home Page
        </h1>
        <Lottie animationData={animationData} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;