import About from "../about/about"
import Chat from "../chat/chat"
import Contact from "../contact"
import Footer from "../footer"
import Goodnumber from "../goodinnumber/goodnumber"
import ScrollTop from "../mobile view/scrolltop"
import ServHead from "../service/servicehead"
import Testimonial from "../testimonial"
import Contant from "./contant"


const Main = () => {


  return (
    <div>
      <div className="main-Background h-screen bg-right-top mainBackground-mobile xsmw:h-[520px]">
        <Contant />
      </div>
      <ServHead />
      <Goodnumber />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
      <Chat />
      <ScrollTop />
      
    </div>
  )
}

export default Main