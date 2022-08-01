import Button from "../button"
import Header from "../header"

const Contant = () => {
  return (
    <div className="md:mt-32 md:ml-32 md:text-left text-center xsmw:h-[393px] h-[100%]">
      <Header />
        <div className="mxmd:pt-36"> 
          <h1 className="sm:h-[192px] xs:text-7xl xs:font-extrabold leading-tight tracking-tight text-4xl font-semibold ">The Power <br/> of Good Advice</h1>
        </div>
         <p className=" xs:w-[350px] md:ml-[0] leading-7 tracking-normal xs:text-xl text-base w-[80%] m-[auto] ">I&apos;m a paragraph. Click here to add your  Own text and edit me.</p>
         <br/>
         <Button label= 'Learn More' />
    </div>
  )
}

export default Contant