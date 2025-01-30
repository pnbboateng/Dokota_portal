import React from 'react'
import navtoggle from "../assets/toggle.svg"

const Header = (props) => {
const [show, setIsShow]= React.useState(props.isShow)
console.log(show)

  return (
    <div className='h-[78px] border-b-2 border-b-stone-300 w-full flex items-center'>
       <img className="block lg:hidden w-6 h-6 cursor-pointer" src={navtoggle} alt="nav toggle" onClick={() => setIsShow(true)} />
    </div>
  )
}

export default Header
