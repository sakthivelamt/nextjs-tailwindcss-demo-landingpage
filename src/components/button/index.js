const Button = ({label,onclick}) => {
  return (
    <button onClick={onclick} className="inline-flex items-center justify-center bg-purple-600 border-0 xs:p-3 xs:px-6 xs:h-[50px] xs:w-[140px] focus:outline-none hover:bg-black rounded-3xl text-base xs:mt-4 md:mt-0 md:mr-6   text-white h-[33px] w-[99px] ">{label}
    </button>
  )
}

export default Button