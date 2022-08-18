import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"
import {getData} from '../helper/prismicdata'



export default function ContactPage ({props}) {
    return (
        <>
        <div className="block bg-black"> <Header {...props} /> </div>
        <div> <Contact {...props} /> </div>
        <div> <Footer {...props} /> </div>
        </>
    )
}

export async function getStaticProps() {
  
    const props = await getData()
    return {
      props
    }
  } 
