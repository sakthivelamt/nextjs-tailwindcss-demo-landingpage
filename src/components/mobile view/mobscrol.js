

const MobBarNav = () => {

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
                top: 878,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for about scroll
    const aboutScroll = () => {
        window.scroll(
            {
                top: 1978,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for testimonial scroll
    const testimonialScroll = () => {
        window.scroll(
            {
                top: 2778,
                left: 0,
                behavior: 'smooth'
            })
    }

    // for client scroll
    const clientScroll = () => {
        window.scroll(
            {
                top: 3278,
                left: 0,
                behavior: 'smooth'
            })
    }


    // for contact scroll
    const contactScroll = () => {
        window.scroll(
            {
                top: 3478,
                left: 0,
                behavior: 'smooth'
            })
    }
    return (
        <nav className="xs:hidden fixed top-0 left-0 z-[21] w-[100%] h-[100%]">

            <div className="grid grid-cols-1 justify-items-center leading-[3rem] mt-[100px]">
                <a className="mr-5 hover:text-purple-900 after:text-purple-90 cursor-pointer	" onClick={homeScroll}>Home</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={serviceScroll}>Service</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={aboutScroll}>About</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={testimonialScroll}>Testimonial</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={clientScroll}>Client</a>
                <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={contactScroll}>contact</a>
            </div>
        </nav>
    )
}

export default MobBarNav