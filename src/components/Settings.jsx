import React from "react";

const Settings = () => {
  return (
    <div className="mt-4 ml-4 mr-4  border-t-2 border-l-2 border-r-2 border-stone-300 rounded-t-lg h-full">
      <div className="mt-4 ml-10 mr-10 ">
        <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
          <div className=" justify-start ml-6">
            <img
              className=""
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
            <svg
              width="40"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#a8a29e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
          <div className=" justify-start ml-6">
            <img
              className=""
              src="	https://designs.hubtel.com/v4/assets/images/mb-sms.svg"
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
            <svg
              width="40"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#a8a29e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="border-stone-300 border-b-2 pb-4 pt-4 hover:bg-gray-100 cursor-pointer flex">
          <div className=" justify-start ml-6">
            <img
              className=""
              src="		https://designs.hubtel.com/v4/assets/images/mb-logs.svg"
              alt="Messages"
            />
          </div>
          <div className="flex flex-1 flex-col pt-2 ml-8">
            <span>Reports</span>
            <span className="text-stone-400">View audit log.</span>
          </div>
          <div className="flex justify-end pt-2 items-center">
            <svg
              width="40"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#a8a29e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
