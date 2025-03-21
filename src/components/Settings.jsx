import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();

  // Check if user is at /app/settings (default settings page)
  const isBaseSettings = location.pathname === "/app/settings";

  return (
    <div className="mt-4 ml-4 mr-4 border-t-2 border-l-2 border-r-2 border-stone-300 rounded-t-lg h-full">
      {isBaseSettings ? (
        <div className="mt-4 ml-10 mr-10">
          <Link to="manage-users" className="block w-full">
            <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
              <div className="justify-start ml-6">
                <img
                  src="https://designs.hubtel.com/v4/assets/images/mb-employees.svg"
                  alt="Employees"
                />
              </div>
              <div className="flex flex-1 flex-col pt-2 ml-8">
                <span>Manage Users</span>
                <span className="text-stone-400">
                  Add, delete, and update user details.
                </span>
              </div>
              <div className="flex justify-end pt-2 items-center">
                <svg width="40" height="50" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#a8a29e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          <Link to="notifications" className="block w-full">
            <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
              <div className="justify-start ml-6">
                <img
                  src="https://designs.hubtel.com/v4/assets/images/mb-sms.svg"
                  alt="Messages"
                />
              </div>
              <div className="flex flex-1 flex-col pt-2 ml-8">
                <span>Notifications</span>
                <span className="text-stone-400">
                  Broadcast messages to customers.
                </span>
              </div>
              <div className="flex justify-end pt-2 items-center">
                <svg width="40" height="50" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#a8a29e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          <Link to="reports" className="block w-full">
            <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
              <div className="justify-start ml-6">
                <img
                  src="https://designs.hubtel.com/v4/assets/images/mb-logs.svg"
                  alt="Logs"
                />
              </div>
              <div className="flex flex-1 flex-col pt-2 ml-8">
                <span>Reports</span>
                <span className="text-stone-400">View audit log.</span>
              </div>
              <div className="flex justify-end pt-2 items-center">
                <svg width="40" height="50" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#a8a29e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Settings;
