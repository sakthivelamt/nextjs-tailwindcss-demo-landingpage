import Button from "../button";
import React, {useEffect, useState} from "react";

const Header = () => {
 
 const[color,setcolor]=useState(false)
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

 
  return (
    <header className={color ? 'header headerscrool' : 'header' } >
      <div className=" mx-auto flex flex-wrap xs:p-5 pl-[10px] py-[20px] xmm:flex-col flex-row items-center justify-between ">
        <a className="flex title-font font-medium items-center text-gray-900 xs:mb-4 md:mb-0">
          <span className="xs:ml-3 text-xl">BizzBud</span>
        </a>
        <nav className="md:ml-auto md:mr-auto xs:flex xs:flex-wrap xs:items-center xs:text-base xs:justify-center hidden">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Service</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Testimonial</a>
          <a className="mr-5 hover:text-gray-900">Client</a>
          <a className="mr-5 hover:text-gray-900">contact</a>
        </nav>
        <div className=" xs:ml-0 ml-20"><Button children='Call Now' /></div>
        <button className="xs:hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="33" width="33"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></button>
      </div>
    </header>
  )
}

export default Header