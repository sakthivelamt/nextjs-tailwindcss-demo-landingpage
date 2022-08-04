import { PrismicRichText } from "@prismicio/react"

const ServBlocks = ({service_section_one,service_section_two,service_section_three,service_section_para}) => {

    // console.log(service_section_one);
    return (
    <div className="md:h-[500px] md:flex md:justify-around block">
        <div>
            <div className="h-[500px] flex items-center w-[1/3] justify-center srvblk">
                <div>
                    <div className="flex justify-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="26.5 23.75 147 152.5" viewBox="26.5 23.75 147 152.5" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--48p1oi-wqp3xl" className="h-28 w-28 srvlbksvg">
                            <defs>
                                {/* style={{#comp-kq5dfsen svg [data-color="1"] {fill: #16163F;} #comp-kq5dfsen svg [data-color="2"] {fill: #DDBBFF;} #comp-kq5dfsen svg [data-color="3"] {fill: #9E3FFD;}}} */}
                            </defs>
                            <title id="svgcid--48p1oi-wqp3xl"></title>
                            <g>
                                <path fill="#16163F" clipRule="evenodd" fillRule="evenodd" d="M42 170.25a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" data-color="1"></path>
                                <path fill="#E7E7EB" clipRule="evenodd" fillRule="evenodd" d="M173.5 103.75c0 31.48-25.52 57-57 57s-57-25.52-57-57 25.52-57 57-57 57 25.52 57 57z" data-color="2"></path>
                                <path fill="#9E3FFD" clipRule="evenodd" fillRule="evenodd" d="M116.5 68.75c0 24.853-20.147 45-45 45s-45-20.147-45-45 20.147-45 45-45 45 20.147 45 45z" data-color="3"></path>
                            </g>
                        </svg>
                    </div>
                    <br/>
                    <div className="text-center servpara"><b>< PrismicRichText field={service_section_one} /></b></div>
                    <div className="text-center text-lg servpara">< PrismicRichText field={service_section_para} /></div>
                </div>
            </div>
        </div>


        <div>
            <div className="h-[500px] flex items-center w-[1/3] justify-center srvblk">
                <div>
                    <div className="flex justify-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 34.606 159.999 126.634" viewBox="20 34.606 159.999 126.634" height="93" width="118" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--pcqmu3-hr753i " className="h-[93] w-[118] srvlbksvg">
                            <defs>
                                {/* <style>
                                    #comp-kq9ag33l svg [data-color="1"] {fill: #16163F;}#comp-kq9ag33l svg [data-color="2"] {fill: #DDBBFF;}#comp-kq9ag33l svg [data-color="3"] {fill: #9E3FFD;}
                                </style> */}
                            </defs>
                            <title id="svgcid--pcqmu3-hr753i"></title>
                            <g>
                                <path clipRule="evenodd" fillRule="evenodd" d="M60.163 40.369a5.763 5.763 0 1 1-11.526 0 5.763 5.763 0 0 1 11.526 0z" fill="#000000" data-color="1"></path>
                                <path d="M37.029 103.69l40.464 40.531a9.606 9.606 0 0 1 0 13.572l-.627.628a9.604 9.604 0 0 1-13.583.011l-.011-.011-40.465-40.531a9.606 9.606 0 0 1 0-13.572l.627-.628a9.604 9.604 0 0 1 13.583-.011c.005.003.008.007.012.011z" fill="#E7E7EB" clipRule="evenodd" fillRule="evenodd" data-color="2"></path>
                                <path d="M62.556 144.076L162.971 43.492a9.604 9.604 0 0 1 13.583-.011l.011.011.627.628a9.606 9.606 0 0 1 0 13.572L76.777 158.276a9.604 9.604 0 0 1-13.583.011l-.011-.011-.627-.628a9.604 9.604 0 0 1 0-13.572z" fill="#9E3FFD" clipRule="evenodd" fillRule="evenodd" data-color="3"></path>
                            </g>
                        </svg>
                    </div>
                    <br/>
                    <div className="text-center servpara"><b>< PrismicRichText field={service_section_two} /></b></div>
                    <div className="text-center text-lg servpara">< PrismicRichText field={service_section_para} /></div>
                </div>
            </div>
        </div>


        <div>
            <div className="h-[500px] flex items-center w-[1/3] justify-center srvblk">
                <div>
                    <div className="flex justify-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="26.982 26 146.037 148" viewBox="26.982 26 146.037 148" height="107" width="105" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--p3s0x7-giv60p" className="srvlbksvg">
                            <defs>
                                {/* <style>#comp-kq5dfsf71 svg [data-color="1"] {fill: #16163F;}#comp-kq5dfsf71 svg [data-color="2"] {fill: #DDBBFF;}#comp-kq5dfsf71 svg [data-color="3"] {fill: #9E3FFD;}</style> */}
                            </defs>
                            <title id="svgcid--p3s0x7-giv60p"></title>
                            <g>
                                <path fill="#16163F" clipRule="evenodd" fillRule="evenodd" d="M173.019 168.11a5.89 5.89 0 1 1-11.78 0 5.89 5.89 0 0 1 11.78 0z" data-color="1"></path>
                                <path fill="#16163F" clipRule="evenodd" fillRule="evenodd" d="M173.019 168.11a5.89 5.89 0 1 1-11.78 0 5.89 5.89 0 0 1 11.78 0z" data-color="1"></path>
                                <path fill="#E7E7EB" clipRule="evenodd" fillRule="evenodd" d="M153.608 59.374v93.252H60.356V59.374h93.252z" data-color="2"></path>
                                <path fill="#9E3FFD" clipRule="evenodd" fillRule="evenodd" d="M92.749 26v65.767H26.982V26h65.767z" data-color="3"></path>
                            </g>
                        </svg>
                    </div>
                    <br/>
                    <div className="text-center servpara "><b>< PrismicRichText field={service_section_three} /></b></div>
                    <div className="text-center text-lg servpara ">< PrismicRichText field={service_section_para} /></div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default ServBlocks