import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { createClient } from "../../prismicio"


export default function ContactPage (props) {
    return (
        <>
        <div className="block bg-black"> <Header {...props} /> </div>
        <div> <Contact {...props} /> </div>
        <div> <Footer {...props} /> </div>
        </>
    )
}

export  async function getStaticProps ({ previewData}){

    const client = createClient({previewData})
    const header = await client.getSingle('headder')
    const contact = await client.getSingle('contact')
    const footer = await client.getSingle('footer')
    return{
        props:{
            header,contact,footer
        },
    }
} 
