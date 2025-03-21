"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Notifications = () => {
  const [customerFilter, setCustomerFilter] = useState("all");
  const [message, setMessage] = useState("");
  const maxLength = 150;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setMessage(e.target.value);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      // Implement send functionality here
      alert("Message sent to: " + customerFilter);
      setMessage(""); // Clear message after sending
    }
  };

  return (
    <div className="mx-4 mt-4 flex flex-col space-y-4">
      <div>
        <span className="text-lg font-semibold">Compose SMS</span>
      </div>
      <div className="">
        <span className="font-medium">To:</span>
        <Select value={customerFilter} onValueChange={setCustomerFilter}>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Patients">Patients</SelectItem>
            <SelectItem value="Doctors">Doctors</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <span className="font-medium ">Message:</span>
        <textarea
          className="w-full p-2 border outline-red-950 mt-2 rounded-md"
          rows={5}
          value={message}
          onChange={handleChange}
          placeholder="Enter your message here..."
        />
        <div className="flex justify-between items-center mx">
          <span className="text-sm text-gray-500">
            {message.length}/{maxLength} characters
          </span>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`px-4 py-2 mt-2 rounded-md text-white ${
              message.trim() ? "bg-rose-950" : "bg-gray-400"
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
