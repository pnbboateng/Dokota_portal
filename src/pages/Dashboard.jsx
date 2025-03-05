import React from 'react'
import navtoggle from "../assets/toggle.svg"
import Sidenav from '@/components/Sidenav'
"use client";

import Trend from '@/components/Trend'
import Piechart from '@/components/Piechart'


const chartData = [
  { month: "January", doctors: 186, patients: 80 },
  { month: "February", doctors: 305, patients: 200 },
  { month: "March", doctors: 237, patients: 120 },
  { month: "April", doctors: 73, patients: 190 },
  { month: "May", doctors: 209, patients: 130 },
  { month: "June", doctors: 214, patients: 140 },
];



const chartConfig = {
  doctors: { label: "doctors", color: "#4c0519" }, // Rose-950
  patients: { label: "patients", color: "#030712" },
};



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
          <div className='flex flex-col overflow-y-auto '>
          <div class="grid grid-cols-2 gap-x-6 gap-y-6 p-4">
  <div> 
    <Trend />
  </div>
  <div>
    <Piechart />
  </div>
  
</div>

<div class="grid grid-cols-3 gap-x-6 gap-y-6 p-4">
  <div>
    
  </div>
</div>
            
          </div>
          </div>
      
    </div>
  )
}

export default Dashboard
