import { PrismicRichText } from "@prismicio/react";

const About = ({about}) => {
  console.log(about.data.about_right_image.url);
  return (
    <div className="xs:flex ">
        <div className=" xs:w-1/2 xsmw:text-center">
            <div className="md:mx-28 mx-4">
            <h2 className="xs:pt-24 pt-12 xsmw:pb-5 font-semibold xsmw:text-base"> <PrismicRichText field={about.data.about_title}/></h2>
            <div className="xs:pt-6 pb-10 text-4xl font-semibold xsmw:text-lg">
            <PrismicRichText field={about.data.about_second_title}/>
            </div>
            <div className="leading-normal  xsmw:leading-5 xm:font-light">
            <PrismicRichText field={about.data.about_first_para}/>
            </div>
            <div className="pt-6 pb-20  xsmw:leading-5 ">
            <PrismicRichText field={about.data.about_second_para}/>
            </div>
            
            </div>
        </div>
        <div className="bg-cover xs:w-1/2 xs:h-auto h-[360px]" style={{backgroundImage: `url(${about.data.about_right_image.url})`}}>
         
           

        </div>
    </div>
  )
}

export default About

