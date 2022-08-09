import { useEffect } from "react"
import Customer from "./customer"


const Testimonial = () => {
  useEffect(() => {
    require('tw-elements')
  }, [])
  return (
    <div>
      <div className="h-[107px] bg-[#9e3ffd] relative">
      <p className="text-white text-center absolute bottom-0 left-[30%] right-[30%]">TESTIMONIALS</p>
      </div>
      <div className='bg-violet text-center leading-none font-bold h-[400] bg-[#9e3ffd] '>


        <div id="carouselDarkVariant" className="carousel slide carousel-fade relative" data-bs-ride="carousel" >

          {/* <!-- Indicators --> */}
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="active !border-none rounded-full !w-2 !h-2"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
              className="!border-none rounded-full !w-2 !h-2"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
              className="!border-none rounded-full !w-2 !h-2"
            ></button>
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner relative w-full overflow-hidden h-[400px]">
            <h3 className="absolute top-10	 text-center left-[10%]	right-[10%] text-5xl	text-white">“I&apos;m a testimonial. Click to <br />edit me and add text”</h3>
            {/* <!-- Single item --> */}
            <div className="carousel-item active absolute bottom-20 float-left w-full h-[200px]">
              <div className="carousel-caption hidden md:block absolute text-center ">
                <h5 className="text-xl text-white leading-8">First slide label</h5>
                <p className="text-white">Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item absolute bottom-20 float-left w-full h-[200px]">
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl text-white leading-8">Second slide label</h5>
                <p className="text-white">Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item absolute bottom-20 float-left w-full h-[200px]">
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl text-white leading-8">Third slide label</h5>
                <p className="text-white">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      <Customer />
    </div>
  )
}

export default Testimonial