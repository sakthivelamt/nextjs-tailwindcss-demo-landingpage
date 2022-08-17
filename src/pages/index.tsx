import Header from "../components/header"
import Main from "../components/home"
import Footer from "../components/footer"
import { createClient } from '../../prismicio'
import useScrollSpy from 'react-use-scrollspy'
import React, { useRef } from "react"





export default function Home(props) {


  // for scroll spy
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  console.log("activeSection ==>",activeSection);
  console.log("refe ==>",sectionRefs);
    

  return (
  
    <div>
      {/* <Main {...props} /> this three dot is an spread operator when you use this operator it will separate all the object and send you recive that separated object use that   */}
      <Header {...props} activeSection={activeSection} />
      <Main data={props} refe={sectionRefs} />
      <Footer {...props}/>
     </div>
  )
}
export async function getStaticProps({ previewData }) {
  
  const client = createClient({ previewData })
  const homePage = await client.getSingle('home_page')
  const service = await client.getSingle('service')
  const header = await client.getSingle('headder')
  const goodWithNumber = await client.getSingle('good_in_number')
  const about = await client.getSingle('about')
  const testimonial = await client.getSingle('testimonial')
  const contact = await client.getSingle('contact')
  const footer = await client.getSingle('footer')

  return {
    props: {
      homePage,header,service,goodWithNumber,about,testimonial,contact,footer
    },
  }
}