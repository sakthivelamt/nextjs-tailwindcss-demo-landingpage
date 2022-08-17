import About from "../about"
import Chat from "../chat"
import Contact from "../contact"
import Goodnumber from "../goodinnumber"
import ScrollTop from "../mobileview"
import ServHead from "../service"
import Testimonial from "../testimonial"
import Contant from "./contant"

interface homepage{
  refe:any
    data:any;     
}


  const Main = ({data,refe}:homepage) => {
    
    

    const css = `@media (max-width: 320px) {
      .backimageff {
          background-image: url(${data.homePage.data.hero_image_mobile.url});
          background-position: right bottom;
          background-repeat: no-repeat;
      }
  }
   
  @media (min-width: 322px) {
      .backimageff {
          background-image: url(${data.homePage.data.hero_image.url});
          background-repeat: no-repeat;
      }
  }`;

  return (
    <div>
      <style >{css}</style>
      <div className=" backimageff h-screen bg-right-top mainBackground-mobile xsmw:h-[520px]" >
        <Contant {...data} refe={refe}/>
      </div>
      <ServHead {...data} refe={refe} />
      <Goodnumber {...data}  />
      <About {...data} refe={refe} />
      <Testimonial {...data} refe={refe}/>
      <Contact {...data} refe={refe}/>
      <Chat {...data}/>
      <ScrollTop {...data}/>
    </div>
  )
}

export default Main