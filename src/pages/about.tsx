import Header from "../components/header"
import Footer from "../components/footer"
import React from "react"
import About from "../components/about"
import {getData} from '../helper/prismicdata'


export default function AboutPage({props}) {


  return (
    <>
      <Header {...props} />
      <About  {...props} />
      <Footer {...props} />
    </>
  )
}

export async function getStaticProps() {
  
  const props = await getData()
  return {
    props
  }
} 