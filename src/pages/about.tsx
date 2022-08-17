import Header from "../components/header"
import Footer from "../components/footer"
import { createClient } from '../../prismicio'
import React from "react"
import About from "../components/about"


export default function AboutPage(props) {


  return (
    <>
      <Header {...props} />
      <About  {...props} />
      <Footer {...props} />
    </>
  )
}

export async function getStaticProps({ previewData }) {

  const client = createClient({ previewData })
  const header = await client.getSingle('headder')
  const about = await client.getSingle('about')
  const footer = await client.getSingle('footer')

  return {
    props: {
      header, about, footer
    },
  }
}