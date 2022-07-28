const Button = ({ children }) => {
  return (
    <button className="inline-flex items-center justify-center bg-purple-600 border-0 xs:p-3 xs:px-6 xs:h-[50px] xs:w-[140px] focus:outline-none hover:bg-black rounded-3xl text-base xs:mt-4 md:mt-0 md:mr-6   text-white h-[33px] w-[99px] ">{children}
      {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
  )
}

export default Button