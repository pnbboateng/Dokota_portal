import React from 'react'
import navtoggle from "../assets/toggletoo.svg"
import logo from "../assets/Dokota_newtoo.png"


const Dashboard = () => {
   const[showSideBar, setShowSideBar] = React.useState(false)

  return (
    <div className="flex flex-row h-screen w-screen">
      <div 
        className={`fixed lg:relative top-0 left-0 h-full w-[260px] bg-slate-50 shadow-2xl z-20 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          showSideBar ? "translate-x-0" : "-translate-x-full px-4 items-center "
        }`}
      >
     <div style={{ backgroundImage: `url(${logo})`, backgroundSize: "cover", backgroundPosition: "center" }} className='h-[100px]  w-full border-b-stone-300'></div>
     
     <div className='group flex gap-4 mt-6 cursor-pointer hover:bg-rose-950 rounded-lg w-full p-3'><svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17962 25.6978V21.6208C9.17962 20.5801 10.0295 19.7364 11.0778 19.7364H14.9101C15.4135 19.7364 15.8963 19.9349 16.2523 20.2883C16.6083 20.6417 16.8083 21.121 16.8083 21.6208V25.6978C16.8051 26.1305 16.976 26.5465 17.2831 26.8536C17.5902 27.1606 18.008 27.3333 18.4438 27.3333H21.0584C22.2794 27.3365 23.4516 26.8571 24.3161 26.0011C25.1807 25.145 25.6666 23.9826 25.6666 22.7704V11.1558C25.6666 10.1766 25.2293 9.24778 24.4727 8.61955L15.5786 1.56782C14.0315 0.331405 11.8147 0.371326 10.3138 1.66263L1.6226 8.61955C0.830239 9.22926 0.356655 10.1608 0.333252 11.1558V22.7586C0.333252 25.2851 2.39643 27.3333 4.94148 27.3333H7.49631C8.40155 27.3333 9.13725 26.6083 9.14381 25.7096L9.17962 25.6978Z" className="group-hover:fill-white transition-colors duration-300" fill="#5D7285"/>
        </svg> <span className='font-bold group-hover:text-white text-[#667A8A]'>Dashboard</span></div>

        <div className='group flex gap-4 cursor-pointer hover:bg-rose-950  rounded-lg w-full p-3'><svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17962 25.6978V21.6208C9.17962 20.5801 10.0295 19.7364 11.0778 19.7364H14.9101C15.4135 19.7364 15.8963 19.9349 16.2523 20.2883C16.6083 20.6417 16.8083 21.121 16.8083 21.6208V25.6978C16.8051 26.1305 16.976 26.5465 17.2831 26.8536C17.5902 27.1606 18.008 27.3333 18.4438 27.3333H21.0584C22.2794 27.3365 23.4516 26.8571 24.3161 26.0011C25.1807 25.145 25.6666 23.9826 25.6666 22.7704V11.1558C25.6666 10.1766 25.2293 9.24778 24.4727 8.61955L15.5786 1.56782C14.0315 0.331405 11.8147 0.371326 10.3138 1.66263L1.6226 8.61955C0.830239 9.22926 0.356655 10.1608 0.333252 11.1558V22.7586C0.333252 25.2851 2.39643 27.3333 4.94148 27.3333H7.49631C8.40155 27.3333 9.13725 26.6083 9.14381 25.7096L9.17962 25.6978Z" className="group-hover:fill-white transition-colors duration-300" fill="#5D7285"/>
        </svg> <span className='font-bold group-hover:text-white text-[#667A8A]'>Payments</span></div>

        <div className='group flex gap-4 cursor-pointer hover:bg-rose-950 rounded-lg w-full p-3'><svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17962 25.6978V21.6208C9.17962 20.5801 10.0295 19.7364 11.0778 19.7364H14.9101C15.4135 19.7364 15.8963 19.9349 16.2523 20.2883C16.6083 20.6417 16.8083 21.121 16.8083 21.6208V25.6978C16.8051 26.1305 16.976 26.5465 17.2831 26.8536C17.5902 27.1606 18.008 27.3333 18.4438 27.3333H21.0584C22.2794 27.3365 23.4516 26.8571 24.3161 26.0011C25.1807 25.145 25.6666 23.9826 25.6666 22.7704V11.1558C25.6666 10.1766 25.2293 9.24778 24.4727 8.61955L15.5786 1.56782C14.0315 0.331405 11.8147 0.371326 10.3138 1.66263L1.6226 8.61955C0.830239 9.22926 0.356655 10.1608 0.333252 11.1558V22.7586C0.333252 25.2851 2.39643 27.3333 4.94148 27.3333H7.49631C8.40155 27.3333 9.13725 26.6083 9.14381 25.7096L9.17962 25.6978Z" className="group-hover:fill-white transition-colors duration-300" fill="#5D7285"/>
        </svg> <span className='font-bold group-hover:text-white text-[#667A8A]'>Approvals</span></div>

        <div className='group flex gap-4 cursor-pointer hover:bg-rose-950 rounded-lg w-full p-3'><svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17962 25.6978V21.6208C9.17962 20.5801 10.0295 19.7364 11.0778 19.7364H14.9101C15.4135 19.7364 15.8963 19.9349 16.2523 20.2883C16.6083 20.6417 16.8083 21.121 16.8083 21.6208V25.6978C16.8051 26.1305 16.976 26.5465 17.2831 26.8536C17.5902 27.1606 18.008 27.3333 18.4438 27.3333H21.0584C22.2794 27.3365 23.4516 26.8571 24.3161 26.0011C25.1807 25.145 25.6666 23.9826 25.6666 22.7704V11.1558C25.6666 10.1766 25.2293 9.24778 24.4727 8.61955L15.5786 1.56782C14.0315 0.331405 11.8147 0.371326 10.3138 1.66263L1.6226 8.61955C0.830239 9.22926 0.356655 10.1608 0.333252 11.1558V22.7586C0.333252 25.2851 2.39643 27.3333 4.94148 27.3333H7.49631C8.40155 27.3333 9.13725 26.6083 9.14381 25.7096L9.17962 25.6978Z" className="group-hover:fill-white transition-colors duration-300" fill="#5D7285"/>
        </svg> <span className='font-bold group-hover:text-white text-[#667A8A]'>Dashboard</span></div>
      </div>

    
    

    
    {showSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
      <div className='h-[78px] border-b-2 border-b-stone-300 w-full bg-rose-950 flex items-center'>
             <img className="block lg:hidden w-6 h-6 cursor-pointer" src={navtoggle} alt="nav toggle" onClick={() => setShowSideBar(true)} />
          </div>
      
    </div>
  )
}

export default Dashboard
