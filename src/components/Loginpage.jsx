import React from 'react'
import logo from "../assets/Dokota_new.png"
import doctor from "../assets/woman_doctor.jpg"
import { Link } from 'react-router-dom'

const Loginpage = () => {

  const [email, setEmail] = React.useState(""); // Store user input
  const [error, setError] = React.useState("");

  function emailCheck(e) {
    e.preventDefault(); // Prevent default form submission

    const validEmail = "nanaboatengphilip@gmail.com";

    if (!email.trim()) {
      setError("Email is required"); // Show empty field error
      return;
    }

    if (email === validEmail) {
      setError(""); // Clear any previous error
      window.location.href = "/dashboard"; // Navigate to dashboard
    } else {
      setError("Invalid email"); // Show error message
    }
  }

  return (
    <div className='w-100vw flex flex-row h-screen overflow-hidden bg-rose-950'>
      <div className="basis-full  lg:basis-1/2 xl:basis-2/3 2xl:basis-2/3  flex justify-center items-center">
      <div className='w-[300px] p-8 lg:w-[350px] xl:w-[400px] bg-white rounded-xl shadow-xl flex flex-col'>
  
        <div 
            style={{ backgroundImage: `url(${logo})` }} 
            className='w-full h-24 bg-cover bg-center'
        >
        </div>
       
       <form className="flex flex-col gap-4 mt-4" onSubmit={emailCheck}>
            <label htmlFor="email">
            <input 
                id="email"
                type="text"
                placeholder="Email"
                value={email} // Controlled input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            </label>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
               <button type='submit' className="w-full bg-rose-700 text-white py-2 rounded-md hover:bg-rose-950 cursor-pointer" onClick={emailCheck}>
                Login
                </button>
        </form>
      </div>
      </div>
      <div style={{ backgroundImage: `url(${doctor})` }} className="hidden bg-cover shadow-xl rounded-l-lg bg-no-repeat md:hidden  lg:block  lg:basis-1/2 xl:block  xl:basis-1/3 overflow-hidden bg-center   h-full ">
      
      
      </div>
    </div>
  )
}

export default Loginpage
