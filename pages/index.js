import Main from "../src/components/home/index.tsx"
import { createClient } from '../prismicio'


export default function Home(props) {
  
  // console.log(props);
  // const name= "sakthi"
  return (
  
    <div>
      {/* <Main {...props} /> this three dot is an spread operator when you use this operator it will separate all the object and send you recive that separated object use that   */}
      <Main data={props} />
     </div>
  )
}
export async function getStaticProps({ previewData }) {
  
  const client = createClient({ previewData })
  const homePage = await client.getSingle('home_page')
  const header = await client.getSingle('headder')
  const service = await client.getSingle('service')
  const goodWithNumber = await client.getSingle('good_in_number')
  const about = await client.getSingle('about')
  const testimonial = await client.getSingle('testimonial')
  const contact = await client.getSingle('contact')
  const footer = await client.getSingle('footer')

  // const page1 = await client.getByUID('home_page','home-page')
// console.log("header data => ");
  return {
    props: {
      homePage,header,service,goodWithNumber,about,testimonial,contact,footer
    },
  }
}