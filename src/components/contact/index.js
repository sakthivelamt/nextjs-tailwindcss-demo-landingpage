import Button from "../button"

const Contact = () => {
  return (

    <div className=" md:flex bg-[url('/wix-contact.webp')] md:h-[660px] bg-no-repeat bg-cover max-w-full">
      <div className="md:w-1/2 mxmd:px-[10%]">
        <div className="md:relative md:left-[16%] md:right-[16%] mxmd:pt-[50px]">
          <p className="md:relative md:top-[95px] md:w-[200px] text-base md:text-start text-center">
            Contact
          </p>
          <p className="md:relative md:top-[122px] md:text-4xl	md:text-start text-center w-[100%] mxmd:pt-[15px] mxmd:text-xl mxmd:font-bold">
            <span>Let’s Work Together</span>
          </p>
          <address className="md:relative  md:top-[160px] md:text-start text-center mxmd:leading-7 mxmd:pt-[15px]  ">
            <span>500 Terry Francois St. San Francisco, CA 94158 <br />info@mysite.com <br />Tel: 123-456-7890</span>
          </address>
          <div>
            <div className="flex md:absolute  md:top-[340px] md:w-[95px] md:justify-between w-[100%] justify-center mxmd:pt-[25px] mxmd:gap-[10px]">
              <a>
                <img alt="LinkedIn" className="width: 25px; height: 25px; object-fit: cover" src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
              </a>
              <a><img alt="Facebook" className="width: 25px; height: 25px; object-fit: cover" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" />
              </a>
              <a>
                <img alt="Twitter" className="width: 25px; height: 25px; object-fit: cover;" src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 ">
        <div className="md:relative w-[100%]  mxmd:mt-[50px] mxmd:pl-[9%] ">
          <div className="md:absolute md:top-[160px] md:w-[90%] md:right-[20px] ">
            <div className="flex md:flex-row md:flex-wrap mb-6 md:w-[73%] flex-col">
              <div className=" h-[68.5px] md:w-1/2 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 " htmlFor="grid-first-name">
                  First Name
                </label>
                <input id="grid-first-name" className=" w-full appearance-none bg-transparent border-b-[1px] border-black text-gray-700  py-[3px] pr-[3px] leading-loose focus:outline-none focus:border-purple-600 focus:border-b-2 " type="text" aria-label="Full name" />
                {/* <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>  */}
              </div>
              <div className="w-full md:w-1/2">
                <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input id="grid-last-name" className="w-full h-[39px] appearance-none bg-transparent border-b border-black text-gray-700 py-[3px] pr-[3px] leading-tight focus:outline-none focus:border-purple-600 focus:border-b-2 " type="text" aria-label="Full name" />
              </div>
            </div>
            <div className="flex flex-wrap  mb-6">
              <div className="w-full ">
                <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Email Address
                </label>
                <input className="md:w-[73%] w-[100%] h-[68.5px]appearance-none bg-transparent border-b border-black  text-gray-700 mrpy-[3px] pr-[3px] leading-tight focus:outline-none focus:border-purple-600 focus:border-b-2" type="email" aria-label="Full name" />
              </div>
            </div>

            <div className="flex flex-wrap w-full mb-6">
              <div className="w-full">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Leave us a message...
                </label>
                <input className=" md:w-[73%] w-[100%] h-[68.5px] pt-[13.5px] pb-[3px] pr-[10px] appearance-none bg-transparent border-b border-black  text-gray-700  p-4  leading-tight focus:outline-none focus:border-purple-600 focus:border-b-2" type="email" aria-label="Full name">

                </input>
              </div>
            </div>
            <div className="w-[140px] h-[50px]">
              <Button label='Submit' />
            </div>

          </div>
        </div>
      </div>
    </div>



  )
}

export default Contact