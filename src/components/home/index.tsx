import About from "../about"
import Chat from "../chat"
import Contact from "../contact"
import Footer from "../footer"
import Goodnumber from "../goodinnumber"
import ScrollTop from "../mobile view/scrolltop"
import ServHead from "../service/servicehead"
import Testimonial from "../testimonial"
import Contant from "./contant"

interface homepage{
    data:any;     
}

// const Main = ({page,...data}) => {
  const Main = ({data}:homepage) => {
    

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
        <Contant {...data}/>
      </div>
      <ServHead {...data}/>
      <Goodnumber {...data}/>
      <About {...data} />
      <Testimonial {...data}/>
      <Contact {...data}/>
      <Footer {...data}/>
      <Chat {...data}/>
      <ScrollTop {...data}/>
    </div>
  )
}

export default Main

