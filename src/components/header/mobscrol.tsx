import React from "react"

interface MobBarNavProps{
    clickFunction:any

}

const MobBarNav = ({clickFunction}:MobBarNavProps) => {


    

    // for home scroll
    const homeScroll = () => {
        window.scroll(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for service scroll
    const serviceScroll = () => {
        window.scroll(
            {
                top: 500,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for about scroll
    const aboutScroll = () => {
        window.scroll(
            {
                top: 2050,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for testimonial scroll
    const testimonialScroll = () => {
        window.scroll(
            {
                top: 3050,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for client scroll
    const clientScroll = () => {
        window.scroll(
            {
                top: 3550,
                left: 0,
                behavior: 'smooth'
            })
    }


    // for contact scroll
    const contactScroll = () => {
        window.scroll(
            {
                top: 4000,
                left: 0,
                behavior: 'smooth'
            })
    }
    return (
        <nav className="xs:hidden fixed top-0 left-0 z-[21] w-[100%] h-[100%]  bg-white">

            <div className="grid grid-cols-1 justify-items-center leading-[3rem] mt-[100px]">
                <a className="mr-5 hover:text-purple-900 after:text-purple-90 cursor-pointer	" onClick={() => {homeScroll();clickFunction()}}>Home</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={() => {serviceScroll();clickFunction()}}>Service</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={() => {aboutScroll();clickFunction()}}>About</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={() => {testimonialScroll();clickFunction()}}>Testimonial</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={() => {clientScroll();clickFunction()}}>Client</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={() => {contactScroll();clickFunction()}}>contact</a>
            </div>
        </nav>
    )
}

export default MobBarNav