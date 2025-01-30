import React from "react"


 
export default function AppSidebar(props) {
  console.log(props.isShow)

  return (
    <div >
    <div className={`fixed top-0 left-0 h-full w-[260px] bg-slate-50 shadow-2xl z-20 flex flex-col transform transition-transform duration-300 ${
          props.isShow ? "translate-x-0" : "-translate-x-full"
        }`}>
     
    </div>

    </div>
  )
}
