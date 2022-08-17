import Header from '../components/header'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import { createClient } from '../../prismicio';

export default function TestimonialPage (props) {
    return (
        <div>
        <Header {...props} />
        <Testimonial {...props} />
        <Footer {...props} />
        </div>
    )
}

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData })
    const header = await client.getSingle('headder')
    const testimonial = await client.getSingle('testimonial')
    const footer = await client.getSingle('footer')

    return{
        props: {
            header,testimonial,footer
        },
    }
}