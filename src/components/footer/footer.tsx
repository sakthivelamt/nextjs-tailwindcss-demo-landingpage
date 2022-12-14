import { PrismicRichText } from '@prismicio/react'
import React from 'react'

interface FooterProps {
  footer: any
  data: any
}

const Footer = ({ footer }: FooterProps) => {

  return (
    <div>
      <div className="h-[350px]">
        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5547055520615!2d77.65997271397153!3d13.00030831776721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11311ceff7e1%3A0xcf99c891995d51ec!2sAdvanced%20Millennium%20Technologies%20(AMT)!5e0!3m2!1sen!2sin!4v1658480445245!5m2!1sen!2sin" width="100%" height="350" />
      </div>
      <footer className="text-center h-20 py-8 md:flex md:justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="20" width="20" className="inline-block pb-1	">
          <rect width="256" height="256" fill="none">
          </rect>
          <circle cx="128" cy="128" r="96" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
          </circle>
          <path d="M160,152a40,40,0,1,1,0-48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" id="mainIconPathAttribute">
          </path>
        </svg>
        <PrismicRichText field={footer.data.footer_text} />
        <span><a href="https://amt.in/" target="blank">&nbsp;Amt.in</a></span>
      </footer>
    </div>
  )
}

export default Footer