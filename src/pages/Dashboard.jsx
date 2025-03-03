import React from 'react'
import navtoggle from "../assets/toggle.svg"
import logo from "../assets/Dokota_newtoo.png"
import creditcard from "../assets/credit-card.svg"
import Sidenav from '@/components/Sidenav'


const Dashboard = () => {
   const[showSideBar, setShowSideBar] = React.useState(false)

  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidenav  displaynav = {showSideBar}/>   
    

    
    {showSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
      <div className='flex flex-col w-full'>
      <div className='h-[70px] border-b-2 border-b-stone-300 w-full  flex flex-row items-center'>
             <img className="block lg:hidden w-6 h-6 cursor-pointer" src={navtoggle} alt="nav toggle" onClick={() => setShowSideBar(true)} />
             <span className='ml-4  text-xl'>Dashboard</span>
             

          </div>
          
          </div>
      
    </div>
  )
}

export default Dashboard
