import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import navtoggle from "../assets/toggle.svg";
import Sidenav from "@/components/Sidenav";

"use client";

const pageTitles = {
  "/app/dashboard": "Dashboard",
  "/app/payments": "Payments",
  "/app/approvals": "Approvals",
  "/app/manage": "Manage Business",
  "/app/hidden-page": "",  }


const Dashboard = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] ?? ""; 

  

  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidenav navShow = {showSideBar}/>
      


      {showSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setShowSideBar(false)}
        ></div>
      )}

      <div className="flex flex-col w-full">
        <div className="h-[70px] border-b-2 border-b-stone-300 w-full flex flex-row items-center">
          <img
            className="block lg:hidden w-6 h-6 cursor-pointer"
            src={navtoggle}
            alt="nav toggle"
            onClick={() => setShowSideBar(true)}
          />
          {pageTitle && <span className="ml-4 text-xl">{pageTitle}</span>}
        </div>

        <div className="flex flex-col h-full overflow-y-auto">
        <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
