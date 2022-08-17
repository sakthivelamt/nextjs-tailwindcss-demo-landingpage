import { PrismicRichText } from "@prismicio/react"
import Button from "../button"

interface homeprops{
    refe:any
    homePage:{
        data:{
         title:any;
         main_page_paragraph:any;
         home_page_button:any;
        }
    }
    header:any;
};

const Contant = ({ homePage,refe }:homeprops) => {
  
const refeProps = refe == undefined
  

  return (

    <div className="md:mt-32 md:ml-32 md:text-left text-center xsmw:h-[393px] h-[100%]" ref={refeProps? null :refe[0]}>
      <div className="mxmd:pt-36" >
        <h1 className="sm:h-[192px] xs:text-6xl xs:font-extrabold leading-tight tracking-tight text-4xl font-semibold "> <PrismicRichText field={homePage?.data.title} />  </h1>
        
      </div>
      <PrismicRichText
        field={homePage.data?.main_page_paragraph}
        
        components={{ paragraph: (field) => <p className=" xs:w-[350px] md:ml-[0] leading-7 tracking-normal xs:text-xl text-base w-[80%] m-[auto] " key={field.key}>{field.children}</p> }}/>
      <br />

      <Button label={homePage.data.home_page_button} />
    </div>
  )
}

export default Contant


