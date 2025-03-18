import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/Dokota_newtoo.png"
import {Link, Outlet, useLocation} from "react-router-dom";
import navtoggle from "../assets/toggle.svg";
import Sidenav from "@/components/Sidenav";

"use client";

const pageTitles = {
  "/app/dashboard": "Dashboard",
  "/app/payments": "Payments",
  "/app/approvals": "Approvals",
  "/app/users": "Users",
  "/app/settings": "Settings",
  "/app/hidden-page": "",  }


const Dashboard = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const location = useLocation();
  const userName = "Philip Boateng"
  const pageTitle = pageTitles[location.pathname] ?? ""; 
  const isDashboardActive = location.pathname === "/app/dashboard";
  const isPaymentsActive = location.pathname === "/app/payments";
  const isApprovalsActive = location.pathname === "/app/approvals";
  const isUsersActive = location.pathname === "/app/users";
  const isSettingsActive = location.pathname === "/app/settings";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  

  return (
    <div className="flex flex-row h-screen w-screen">
      <div>
      <div 
                    className={`fixed lg:relative top-0  left-0 h-full w-[260px] bg-rose-950 shadow-xl flex flex-col transform transition-transform duration-300 lg:translate-x-0 z-50  ${
                      showSideBar ? "translate-x-0" : "-translate-x-full px-4 items-center "
                    }`}
                  >
                
                 <div className='h-[110px] bg-white rounded-full mt-4 w-[110px] border-b-stone-300  px-2 flex justify-start items-center '><img className='w-full' src={logo} alt="logo" /></div>


                 <hr className='w-full mt-4 h-[2px] bg-stone-300' />


                <div className="w-full flex-1">
                 <Link to="dashboard" className="block w-full"><div
              className={`group flex gap-4 mt-6 cursor-pointer rounded-lg w-full p-3 transition-colors duration-300 
                ${isDashboardActive ? "bg-[#07131c]" : "hover:bg-[#07131c]"}`} // Active state matches hover state
               
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
                    isDashboardActive ? "fill-white" : "group-hover:fill-white"
                  }`}
                  fill="white"
                />
              </svg>
              <span className="text-[#ffffff]">Dashboard</span>
            </div></Link>


            
            <Link to="payments" className="block w-full"> <div className= {`group flex gap-4 cursor-pointer mt-1 rounded-lg w-full p-3 hover:bg-[#07131c] ${isPaymentsActive ? "bg-[#07131c]" : "" }`} // Active state matches hover state
              ><svg fill="white" height="22px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511" xml:space="preserve">
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
                        </path> </g> </g></svg> <span className='text-[#ffffff]'>Payments</span></div></Link>
            



                        <Link to="approvals" className="block w-full"><div className={`group flex gap-4 cursor-pointer mt-1 hover:bg-[#07131c] rounded-lg w-full p-3 ${isApprovalsActive ? "bg-[#07131c]" : "" }`}><svg height="22px" width="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                      <path d="M730.14 584.75l-88.4-208.38c33.12-33.09 53.62-78.82 53.62-129.34 0-100.98-81.86-182.84-182.83-182.84-100.98 0-182.84 81.86-182.84 182.84 0 51.68 21.63 98.13 56.1 131.39l-87.52 206.33H110.06v219.43h803.88V584.75h-183.8zM512.53 137.32c60.49 0 109.7 49.21 109.7 109.7s-49.21 109.7-109.7 109.7-109.71-49.21-109.71-109.7 49.22-109.7 109.71-109.7z m-63.94 280.42c19.97 7.49 41.35 12.12 63.94 12.12 23.67 0 46.13-4.85 66.89-13.04l71.23 167.93h-272.9l70.84-167.01z m392.2 313.29H183.2v-73.14h657.59v73.14zM146.63 877.63h731.36v73.14H146.63z" fill="white"></path></g></svg> 
                      <span className='text-[#ffffff]'>Approvals</span></div></Link>
      
                      


                      
                      <Link to="users" className="block w-full"><div className={`group flex  gap-4 cursor-pointer mt-1 hover:bg-[#07131c] rounded-lg w-full p-3 ${isUsersActive ? "bg-[#07131c]" : "" }`}>
                        <svg
      height="22px"
      width="24px"
      viewBox="0 0 60.671 60.671"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <g>
        <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" />
        <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" />
      </g>
    </svg>
                      <span className='text-[#ffffff]'>Users</span></div></Link>
                      </div>


        <div className="w-full justify-end">

        <Link to="settings" className="block w-full"><div className={`group flex mb-4 gap-4 cursor-pointer mt-1 hover:bg-[#07131c] rounded-lg w-full p-3 ${isSettingsActive ? "bg-[#07131c]" : "" }`}><svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_iconCarrier">
    <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.5"></circle>
    <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="white" stroke-width="1.5"></path>
  </g>
</svg>


                      <span className='text-[#ffffff]'>Settings</span></div></Link>


        </div>
                      
                      
      
                  </div>
                  </div>
      


      {showSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 "
          onClick={() => setShowSideBar(false)}
        ></div>
      )}

      <div className="flex flex-col w-full z-10">
        <div className="h-[70px] border-b-2 border-b-stone-300 w-full flex flex-row items-center">
          <div className="flex justify-start">
          <img
            className="block lg:hidden w-6 h-6 cursor-pointer"
            src={navtoggle}
            alt="nav toggle"
            onClick={() => setShowSideBar(true)}
          /></div>
          <div className="flex flex-1">{pageTitle && <span className="ml-4 text-xl">{pageTitle}</span>}</div>

          <div className="flex  justify-end mr-4 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="bg-[rgba(255,0,0,0.2)] p-1 rounded-full">
          <svg 
            width="24" 
            height="22" 
            viewBox="0 0 16 16" 
            fill="black" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"/>
            <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"/>
          </svg>
          </div>
          <span className="ml-2 pt-1 text-sm flex items-center gap-1">
  {userName}
  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10l5 5 5-5"></path>
  </svg>
</span>



          </div>
        </div>
        <div>{isDropdownOpen && (
            <div className="absolute right-2 mt-1 w-48 bg-white shadow-lg rounded-md z-50 border">
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}</div>

        <div className="flex flex-col h-full overflow-y-auto z-0">
        <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
