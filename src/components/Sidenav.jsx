
import navtoggle from "../assets/toggle.svg"
import logo from "../assets/Dokota_newtoo.png"
import creditcard from "../assets/credit-card.svg"
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Sidenav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
    
  // Check if the user is on the dashboard page
  const isActive = location.pathname === "/dashboard";
  return (
    <div>
      <div 
              className={`fixed lg:relative top-0  left-0 h-full w-[260px] bg-rose-950 shadow-xl z-20 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
                props.displaynav ? "translate-x-0" : "-translate-x-full px-4 items-center "
              }`}
            >
           <div className='h-[110px] bg-white rounded-full w-[110px] border-b-stone-300 mt-1 px-2 flex items-center '><img className='w-full' src={logo} alt="logo" /></div>
           <hr className='w-full mt-4 h-[2px] bg-stone-300' />
           <div
        className={`group flex gap-4 mt-6 cursor-pointer rounded-lg w-full p-3 transition-colors duration-300 
          ${isActive ? "bg-[#07131c]" : "hover:bg-[#07131c]"}`} // Active state matches hover state
        onClick={() => navigate("/dashboard")} // Navigate to dashboard on click
      >
        <svg
          width="22"
          height="24"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.17962 25.6978V21.6208C9.17962 20.5801 10.0295 19.7364 11.0778 19.7364H14.9101C15.4135 19.7364 15.8963 19.9349 16.2523 20.2883C16.6083 20.6417 16.8083 21.121 16.8083 21.6208V25.6978C16.8051 26.1305 16.976 26.5465 17.2831 26.8536C17.5902 27.1606 18.008 27.3333 18.4438 27.3333H21.0584C22.2794 27.3365 23.4516 26.8571 24.3161 26.0011C25.1807 25.145 25.6666 23.9826 25.6666 22.7704V11.1558C25.6666 10.1766 25.2293 9.24778 24.4727 8.61955L15.5786 1.56782C14.0315 0.331405 11.8147 0.371326 10.3138 1.66263L1.6226 8.61955C0.830239 9.22926 0.356655 10.1608 0.333252 11.1558V22.7586C0.333252 25.2851 2.39643 27.3333 4.94148 27.3333H7.49631C8.40155 27.3333 9.13725 26.6083 9.14381 25.7096L9.17962 25.6978Z"
            className={`transition-colors duration-300 ${
              isActive ? "fill-white" : "group-hover:fill-white"
            }`}
            fill="white"
          />
        </svg>
        <span className="text-[#ffffff]">Dashboard</span>
      </div>
      
              <div className='group flex gap-4 cursor-pointer hover:bg-[#07131c]  rounded-lg w-full p-3'><svg fill="white" height="22px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511" xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g
              ><g id="SVGRepo_iconCarrier"> <g> 
                <path d="M471.5,28h-432C17.72,28,0,45.72,0,67.5v256C0,345.28,17.72,363,39.5,363h160c4.142,0,7.5-3.358,7.5-7.5 s-3.358-7.5-7.5-7.5h-160C25.991,348,15,337.009,15,323.5v-256C15,53.991,25.991,43,39.5,43h432c13.509,0,24.5,10.991,24.5,24.5 v256c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-256C511,45.72,493.28,28,471.5,28z"></path> 
                <path d="M207.5,292h-144c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h144c4.142,0,7.5-3.358,7.5-7.5S211.642,292,207.5,292z"></path> <path d="M151,155.5v-32c0-12.958-10.542-23.5-23.5-23.5h-48C66.542,100,56,110.542,56,123.5v32c0,12.958,10.542,23.5,23.5,23.5h48 C140.458,179,151,168.458,151,155.5z M71,155.5V147h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H71v-8.5 c0-4.687,3.813-8.5,8.5-8.5H96v49H79.5C74.813,164,71,160.187,71,155.5z M127.5,164H111v-49h16.5c4.687,0,8.5,3.813,8.5,8.5v8.5 h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8.5v8.5C136,160.187,132.187,164,127.5,164z"></path> 
                <path d="M56,251.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V251.5z"></path> <path d="M80,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S80,231.358,80,235.5z"></path> 
                <path d="M104,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S104,231.358,104,235.5z"></path> <path d="M128,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S128,231.358,128,235.5z"></path> 
                <path d="M175,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S175,255.642,175,251.5z"></path> <path d="M199,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S199,255.642,199,251.5z"></path> 
                <path d="M215.5,228c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16 C223,231.358,219.642,228,215.5,228z"></path> 
                <path d="M247,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S247,255.642,247,251.5z"></path> 
                <path d="M415.5,179c21.78,0,39.5-17.72,39.5-39.5S437.28,100,415.5,100h-48c-21.78,0-39.5,17.72-39.5,39.5s17.72,39.5,39.5,39.5 H415.5z M343,139.5c0-13.509,10.991-24.5,24.5-24.5h48c13.509,0,24.5,10.991,24.5,24.5S429.009,164,415.5,164h-48 C353.991,164,343,153.009,343,139.5z"></path> 
                <path d="M351.5,228C281.196,228,224,285.196,224,355.5S281.196,483,351.5,483S479,425.804,479,355.5S421.804,228,351.5,228z M351.5,468C289.467,468,239,417.533,239,355.5S289.467,243,351.5,243S464,293.467,464,355.5S413.533,468,351.5,468z"></path> 
                <path d="M418.197,310.197L327.5,400.894l-42.697-42.697c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606 l48,48c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l96-96c2.929-2.929,2.929-7.678,0-10.606 C425.875,307.268,421.125,307.268,418.197,310.197z">
                  </path> </g> </g></svg> <span className='text-[#ffffff]'>Payments</span></div>
      
              <div className='group flex gap-4 cursor-pointer hover:bg-[#07131c] rounded-lg w-full p-3'><svg height="22px" width="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M730.14 584.75l-88.4-208.38c33.12-33.09 53.62-78.82 53.62-129.34 0-100.98-81.86-182.84-182.83-182.84-100.98 0-182.84 81.86-182.84 182.84 0 51.68 21.63 98.13 56.1 131.39l-87.52 206.33H110.06v219.43h803.88V584.75h-183.8zM512.53 137.32c60.49 0 109.7 49.21 109.7 109.7s-49.21 109.7-109.7 109.7-109.71-49.21-109.71-109.7 49.22-109.7 109.71-109.7z m-63.94 280.42c19.97 7.49 41.35 12.12 63.94 12.12 23.67 0 46.13-4.85 66.89-13.04l71.23 167.93h-272.9l70.84-167.01z m392.2 313.29H183.2v-73.14h657.59v73.14zM146.63 877.63h731.36v73.14H146.63z" fill="white"></path></g></svg> 
                <span className='text-[#ffffff]'>Approvals</span></div>

                
                <div className='group flex  gap-4 cursor-pointer hover:bg-[#07131c] rounded-lg w-full p-3'><svg height="22px" width="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M730.14 584.75l-88.4-208.38c33.12-33.09 53.62-78.82 53.62-129.34 0-100.98-81.86-182.84-182.83-182.84-100.98 0-182.84 81.86-182.84 182.84 0 51.68 21.63 98.13 56.1 131.39l-87.52 206.33H110.06v219.43h803.88V584.75h-183.8zM512.53 137.32c60.49 0 109.7 49.21 109.7 109.7s-49.21 109.7-109.7 109.7-109.71-49.21-109.71-109.7 49.22-109.7 109.71-109.7z m-63.94 280.42c19.97 7.49 41.35 12.12 63.94 12.12 23.67 0 46.13-4.85 66.89-13.04l71.23 167.93h-272.9l70.84-167.01z m392.2 313.29H183.2v-73.14h657.59v73.14zM146.63 877.63h731.36v73.14H146.63z" fill="white"></path></g></svg> 
                <span className='text-[#ffffff]'>Approvals</span></div>
                
                

            </div>
    </div>
  )
}

export default Sidenav
