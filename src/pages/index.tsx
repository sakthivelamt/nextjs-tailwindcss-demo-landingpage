import Header from "../components/header"
import Main from "../components/home"
import Footer from "../components/footer"
import useScrollSpy from 'react-use-scrollspy'
import React, { useRef } from "react"
import {getData} from '../helper/prismicdata'



export default function Home({props}) {



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

    

  return (
  
    <div>
      {/* <Main {...props} /> this three dot is an spread operator when you use this operator it will separate all the object and send you recive that separated object use that   */}
      <Header {...props} activeSection={activeSection} />
      <Main data={props} refe={sectionRefs} />
      <Footer {...props}/>
     </div>
  )
}
export async function getStaticProps() {
  
  const props = await getData()
  return {
    props
  }
}