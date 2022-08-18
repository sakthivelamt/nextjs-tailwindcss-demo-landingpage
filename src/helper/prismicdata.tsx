import { createClient } from '../../prismicio'

export async function getData() {
  
    const client = createClient()
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