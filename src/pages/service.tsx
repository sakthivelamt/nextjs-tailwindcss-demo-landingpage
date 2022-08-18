import Header from '../components/header'
import Footer from '../components/footer'
import ServHead from '../components/service'
import {getData} from '../helper/prismicdata'


export default function ServicePage  ({props})  {

    return(
        <>
        <Header {...props} />
        < ServHead {...props} />
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