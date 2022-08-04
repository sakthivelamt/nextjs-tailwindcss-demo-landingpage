import ServBlocks from "./serveblocks"
import { PrismicRichText } from "@prismicio/react"

const ServHead = ({service}) =>{
    // console.log(service.data);
    return(
        <div>
            <div className="text-center xsmw:mt-[54px] xsmw:mb-[10px] mt-28 text-lg mb-[17px] ">
                <b><PrismicRichText field={service?.data.service_title} /></b>
            </div>
            <div className="text-center text-4xl xsmw:text-xl">
            <b><PrismicRichText field={service?.data.service_para} /></b>
            </div>
            <ServBlocks {...service.data} />
        </div>

    )
}

export default ServHead