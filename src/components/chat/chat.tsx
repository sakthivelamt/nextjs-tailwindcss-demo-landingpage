import React , {useState} from "react"


 
function Chat() {

const [chatBoxVisible, setChatBoxVisible] = useState(false)



    return (
        <div className=" fixed xs:bottom-4 bottom-0 xs:right-4 right-0 z-30">


            { chatBoxVisible &&  
            <div className="xs:w-[340px] xs:h-[500px] h-[100vh] w-[100vw] bg-[white] xs:rounded-2xl rounded-none relative">
                <div onClick={() => setChatBoxVisible(false)} className="cursor-pointer text-[black] absolute right-4 top-2"> x </div>
                <div className="w-[284px] h-[80px] relative top-6 left-4 bg-[white]"> <span className="font-semibold	">BizzBud</span> <br/><span>We’ll reply as soon as we can</span></div>
                <div className="w-[340px] h-[359px] bg-gradient-to-b from-gray-300	 via-gray-100 to-white	relative top-3 border-b-[1px] border-slate-400 "></div>
                <div className="w-[340px] h-[43px] border-t-2 border-gray-500"> 
                  <div className="w-[300px] h-[24px] pt-[20px] pl-[12px]">
                   <input type={"text"} id={"chattext"} name={"chattext"}  placeholder={"Type Your Message..."} className="w-[230px] border-none bg-transparent outline-none  "></input>
                           <button className=" ml-[20px]">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="16px" height="16px"><path d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"></path></svg>
                           </button>
                           
                            
                             <button className="ml-[5px]"> 
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px" height="16px" ><path d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"/></svg>
                             </button>
                          
                  </div> 
                </div>

            </div>
                            }

            { !chatBoxVisible &&
            <div onClick={() => setChatBoxVisible(true)} className="bg-[#1a0354] inline-block h-[64px] w-[64px] rounded-full relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32" className="absolute top-3 left-3" >
                    <g fill="none" fillRule="evenodd"><path d="M24.858 4.198A14.444 14.444 0 0019.6 1.376 15.617 15.617 0 0015.948.73c-.334-.042-.662-.042-.967-.042-.305 0-.569 0-.836.026-.82.042-1.637.13-2.448.265a14.875 14.875 0 00-4.71 1.708A12.601 12.601 0 002.26 7.146 9.948 9.948 0 00.994 14.96a10.903 10.903 0 003.554 5.747 14.751 14.751 0 008.113 3.597 3.405 3.405 0 013.05 3.625v.294c.67-.413 1.342-.875 2.01-1.356a62.562 62.562 0 007.362-6.115 15.122 15.122 0 001.957-2.218c1.227-1.732 1.9-3.8 1.927-5.925a10.211 10.211 0 00-.379-2.764 11.367 11.367 0 00-3.73-5.647zM8.314 15.134a1.85 1.85 0 01-1.719-1.143 1.865 1.865 0 01.404-2.031 1.842 1.842 0 012.024-.392c.691.295 1.136.98 1.125 1.735a1.843 1.843 0 01-1.834 1.83zm6.497 0a1.852 1.852 0 01-1.832-1.868 1.852 1.852 0 011.855-1.845 1.852 1.852 0 011.84 1.86 1.87 1.87 0 01-1.863 1.856v-.003zm6.535 0a1.847 1.847 0 01-1.714-1.14 1.862 1.862 0 01.396-2.027 1.84 1.84 0 012.015-.405 1.854 1.854 0 011.14 1.719 1.847 1.847 0 01-1.837 1.856v-.003z">
                    </path>
                        <path fill="white" fillRule="nonzero" d="M27.226 3.936A16.413 16.413 0 0021.312.765a17.566 17.566 0 00-4.086-.733C16.87 0 16.509 0 16.15 0c-.358 0-.64 0-.96.029a23.64 23.64 0 00-2.653.288A16.729 16.729 0 007.241 2.24 14.496 14.496 0 001.84 7.328a11.77 11.77 0 00-1.485 9.187 12.756 12.756 0 004.125 6.682 16.714 16.714 0 009.11 4.032 1.46 1.46 0 011.369 1.632c0 .525-.118 1.046-.182 1.568-.098.388-.12.79-.064 1.187a.42.42 0 00.39.384h.071a3.88 3.88 0 00.96-.25 21.448 21.448 0 003.863-2.31 64.08 64.08 0 007.549-6.256 16.735 16.735 0 002.214-2.483 12.225 12.225 0 002.24-6.96 11.998 11.998 0 00-.451-3.274 13.224 13.224 0 00-4.323-6.531zm.937 15.68a14.933 14.933 0 01-1.955 2.195 62.359 62.359 0 01-7.328 6.055c-.675.476-1.344.94-2.026 1.347v-.291a3.38 3.38 0 00-3.037-3.594A14.722 14.722 0 015.76 21.76a10.8 10.8 0 01-3.54-5.696A9.82 9.82 0 013.481 8.32 12.565 12.565 0 018.185 3.9a14.9 14.9 0 014.695-1.692 21.91 21.91 0 012.438-.262c.266-.026.544-.026.832-.026.288 0 .64 0 .96.029 1.234.069 2.455.284 3.639.64a14.39 14.39 0 015.232 2.8 11.267 11.267 0 013.721 5.61c.251.89.379 1.813.378 2.739a10.357 10.357 0 01-1.92 5.868l.003.01z">
                        </path>
                        <path fill="white" fillRule="nonzero" d="M15.203 11.851a1.86 1.86 0 101.858 1.86 1.877 1.877 0 00-1.858-1.86zm-6.675 0a1.861 1.861 0 10-.05 3.723 1.861 1.861 0 00.05-3.723zm13.396 0a1.862 1.862 0 101.834 1.861 1.852 1.852 0 00-1.834-1.86z">
                        </path>
                    </g>
                </svg>
            </div>
            }
           
        </div>
    )
}

export default Chat