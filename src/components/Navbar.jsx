import React from "react"


 
export default function Navbar(props) {
  console.log(props)

  return (
    <div >
    {showSideBar && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-10"
              onClick={() => setShowSideBar(false)}
            ></div>
          )}
          <div className='h-[70px] border-b-2 border-b-stone-300 w-full  flex items-center'>
                 <img className="block lg:hidden w-6 h-6 cursor-pointer" src={navtoggle} alt="nav toggle" onClick={() => setShowSideBar(true)} />
              </div>

    </div>
  )
}
