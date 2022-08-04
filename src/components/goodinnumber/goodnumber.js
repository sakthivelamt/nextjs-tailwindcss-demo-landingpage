import { PrismicRichText } from "@prismicio/react";
const Goodnumber = ({goodWithNumber}) => {
    console.log(goodWithNumber.data);


  return (
    <section className="bg-[rgb(22,22,63)]">
        
        <div className="xm:flex xm:justify-center inline">
            <h1 className="text-center text-4xl font-bold text-white xs:pt-28 xs:pb-16 pt-16 pb-12 xm:text-2xl xm:w-[250px] w-[100%]">
            < PrismicRichText field={goodWithNumber.data.good_in_number} />
            </h1>
        </div>
       
            <div className="md:flex text-white block md:pb-[120px]">
              <div className="text-center w-full md:px-[150px]">
                  {/* <div className="text-6xl font-bold xm:text-5xl"> {goodWithNumber.data.experience.map((post,id) =>  {return <h1 id={id}>{post.years_of_experience_number}</h1>})}  </div> */}
                  <div  className="md:flex md:justify-evenly"> {goodWithNumber.data.experience.map((post, id) => <div key={id} className="md:flex md:justify-between text-white block md:w-[200px]" >
                      <div> 
                            <div className="text-6xl font-bold xm:text-5xl" >{post.years_of_experience_number}</div>
                            <div className="xm:text-sm w-full" >< PrismicRichText field={post.years_of_experience_para} /></div>
                      </div>
                      {id!==3 && <div className="md:pt-9 md:ml-[5%]" id={id}>
                        {console.log({id})}
                          <div datatestid="svgRoot-comp-kq5dfsfl1" className="_3bLYT _2OIRR gNsvg">
                              <svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 200 200" role="presentation" aria-hidden="true" >
                                  <g>
                                      <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" fill="white"></path>
                                  </g>
                              </svg>
                          </div>
                      </div>}
                  </div>)}
                  </div>
              </div>
               
             </div>
    </section>
  )
}

export default Goodnumber