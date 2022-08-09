import { PrismicRichText } from "@prismicio/react"
import Button from "../button";
import React, {useEffect, useState} from "react";
// import Link from 'next/link'
import MobBarNav from "./mobscrol";


interface headerProps{
    headerpris?:{
        data:{
            navbar_headding:any;
            nav_button:any;
            nav_:any;
            nav_service:any;
            nav_about:any;
            nav_testimonial:any;
            nav_client:any;
            nav_contact:any;
        };
    };
}


const Header = ({headerpris}:headerProps) => {

  
  
 

 const[color,setcolor]=useState(false)
 const[navhide,setnavhide]=useState(false)

// for changing color of navbar white when scroll 
 const changeColor = () => {
      if ( window.scrollY >= 10 ) {
    setcolor(true)
  }else{
    setcolor(false)
  }
}
useEffect(()=>{
  window.addEventListener('scroll',changeColor )
});


// for show and show mobile nav bar 
const changeHide = () => {
  setnavhide(true)
}

// for show and show mobile nav bar 
const changeShow = () => {
  setnavhide(false)
}




// for home scroll
const homeScroll = () =>{
  window.scroll(
  {top:0,
  left:0,
  behavior : 'smooth'})
} 

// for service scroll
const serviceScroll = () =>{
  window.scroll(
  {top:878,
  left:0,
  behavior : 'smooth'})
} 

// for about scroll
const aboutScroll = () =>{
  window.scroll(
  {top:1978,
  left:0,
  behavior : 'smooth'})
} 

// for testimonial scroll
const testimonialScroll = () =>{
  window.scroll(
  {top:2778,
  left:0,
  behavior : 'smooth'})
} 

// for client scroll
const clientScroll = () =>{
  window.scroll(
  {top:3278,
  left:0,
  behavior : 'smooth'})
} 


// for contact scroll
const contactScroll = () =>{
  window.scroll(
  {top:3478,
  left:0,
  behavior : 'smooth'})
} 

  return (
    <>
    <div className="w-[100%]">
    <header className={color ? 'header headerscrool' : 'header' } >
      <div className=" mx-auto flex flex-wrap xs:p-5 pl-[10px] py-[20px] xmm:flex-col flex-row items-center justify-between xsmw:justify-start	">
        <a className="flex title-font font-medium items-center text-purple-900 after:text-purple-900 xs:mb-4 md:mb-0">
          <span className="xs:ml-3 text-xl"> <PrismicRichText field={headerpris?.data.navbar_headding} /> </span>
        </a>
        <nav className="md:ml-auto md:mr-auto xs:flex xs:flex-wrap xs:items-center xs:text-base xs:justify-center hidden">
        <a className="mr-5 hover:text-purple-900 after:text-purple-90 cursor-pointer	" onClick={homeScroll}> <PrismicRichText field={headerpris?.data.nav_} /> </a>
        <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={serviceScroll}> <PrismicRichText field={headerpris?.data.nav_service} /> </a>
        <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={aboutScroll}> <PrismicRichText field={headerpris?.data.nav_about} /> </a>
        <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={testimonialScroll}> <PrismicRichText field={headerpris?.data.nav_testimonial} /> </a>
        <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={clientScroll}>  <PrismicRichText field={headerpris?.data.nav_client} /> </a>
        <a className="mr-5 hover:text-purple-900 after:text-purple-900 cursor-pointer	" onClick={contactScroll}> <PrismicRichText field={headerpris?.data.nav_contact} /> </a>
        </nav>
        <div className=" xs:ml-0 ml-20"><Button label={headerpris?.data.nav_button} /></div>
        </div>
    </header>
    </div>
    <button className="xs:hidden fixed top-[20px] right-[15px] z-[20]" onClick={changeHide} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="33" width="33"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></button>
      <div className={ navhide ? 'block' : 'hidden'}> < MobBarNav /> </div>

      <div className={ navhide ? 'block' : 'hidden'}>
        <div className="fixed right-[17px] top-[20px] z-[22]" onClick={changeShow} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="30" width="30" > <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
            </div>
            </div>
      
    </>
  )
}

export default Header