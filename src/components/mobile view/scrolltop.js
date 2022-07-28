import React , {useEffect,useState} from 'react'

function ScrollTop() {

  // const [hidden,sethidden]=useState(true)


  const scrollTop = () =>{
    window.scroll({
      top:0,
      left:0,
      behavior : 'smooth'
    })
  }
  return (
    <div >
      <div className='sm:hidden block fixed bottom-6 left-4 h-[50px] w-[50px] rounded-full shadow-[0px_0px_10px_-5px_rgba(0,0,0,0.5)]	' onClick={scrollTop}>
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" xmlns="http://www.w3.org/2000/svg" viewBox="20 20 160 160" height="100%" width="100%" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="BACK_TO_TOP_BUTTON-svgtitle"><title id="BACK_TO_TOP_BUTTON-svgtitle"></title>
          <g fillRule="evenodd">
            <path fillRule="nonzero" fill="#FFFFFF" d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" data-color="1"></path>
            <path fill="#566FB8" d="M63.412 114L60 109.649 100.034 78 140 109.652 136.584 114l-36.55-28.3L63.412 114z" data-color="2"></path>
            <path fillRule="nonzero" fill="#ffffff" d="M100 24c-41.974 0-76 34.026-76 76s34.026 76 76 76 76-34.026 76-76-34.026-76-76-76zm0-4c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80z" data-color="3"></path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default ScrollTop