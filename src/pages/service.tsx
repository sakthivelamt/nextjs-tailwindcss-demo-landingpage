import Header from '../components/header'
import Footer from '../components/footer'
import ServHead from '../components/service'
import { createClient } from "../../prismicio";

export default function ServicePage  (props)  {

    return(
        <>
        <Header {...props} />
        < ServHead {...props} />
        <Footer {...props} />
        </>
    )
}

export async function getStaticProps({ previewData }) {
  
    const client = createClient({ previewData })
    const header = await client.getSingle('headder')
    const service = await client.getSingle('service')
    const footer = await client.getSingle('footer')
  
    return {
      props: {
        header,service,footer
      },
    }
  }