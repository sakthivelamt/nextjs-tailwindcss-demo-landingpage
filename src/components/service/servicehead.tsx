import ServBlocks from "./serveblocks"
import { PrismicRichText } from "@prismicio/react"

interface serviceHeadProps{
    service:any;
    refe:any
    clasScrolSpy:any
}

const ServHead = ({service,refe}:serviceHeadProps) =>{




    return(
        <div>
            <div className= {`text-center xsmw:mt-[54px] xsmw:mb-[10px] mt-28 text-lg mb-[17px] `}  ref={refe == undefined ? null :refe[1]} >
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