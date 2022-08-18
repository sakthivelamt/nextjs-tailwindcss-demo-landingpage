import Header from '../components/header'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import {getData} from '../helper/prismicdata'


export default function TestimonialPage ({props}) {
    return (
        <div>
        <Header {...props} />
        <Testimonial {...props} />
        <Footer {...props} />
        </div>
    )
}

export async function getStaticProps() {
  
    const props = await getData()
    return {
      props
    }
  } 