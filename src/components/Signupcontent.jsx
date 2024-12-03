import React, { useState } from "react";

function Signupcontent() {
  const [formData, setFormData] = useState({});

  const [error, setError] = useState({});

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSignUp() {
    const errors = {};
    
    
    !formData.firstName || formData.firstName === "" ? errors.firstName = true : errors.firstName = false
    !formData.lastName || formData.lastName === "" ? errors.lastName = true : errors.lastName = false
    !formData.email || formData.email === "" ? errors.email = true : errors.email = false
    !formData.phoneNumber || formData.phoneNumber === "" ? errors.phoneNumber = true : errors.phoneNumber = false
    !formData.password || formData.password === "" ? errors.password = true : errors.password = false
    !formData.confirmPassword || formData.confirmPassword === "" ? errors.confirmPassword = true : errors.confirmPassword = false


    setError(errors);
    console.log(errors);
  }

  return (
    <div>
          
      <div >
        <h2 className="font-bold text-5xl p-10 text-center">Create An Account</h2>
        {(error.firstName || error.lastName || error.email || error.phoneNumber || error.password || error.confirmPassword) ? <p className="text-red-500 text-center">Please fill all the fields</p> : <p> </p>}
        

      </div>
      <div className="flex gap-[20px] p-10">
        <input
          name="firstName"
          className="rounded-full w-[350px] h-[20px] p-9 text-2xl  border-2"
          type="text"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
          value={formData.firstName && formData.firstName}
        />
        
        
        <input
          name="lastName"
          className="rounded-full w-[350px] p-9 h-[20px] text-2xl  border-2"
          type="text"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)}
          value={formData.lastName && formData.lastName}
        />
        
        
      </div>


      <div className="ml-10">
        <input
          name="email"
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="email"
          placeholder="Email Address"
          onChange={(e) => handleChange(e)}
          value={formData.email && formData.email}
        />
        <input
          name="phoneNumber"
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="number"
          placeholder="Phone Number"
          onChange={(e) => handleChange(e)}
          value={formData.phoneNumber && formData.phoneNumber}
        />{" "}
        <input
          name="Password"
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          value={formData.password && formData.password}
        />
        <input
          name="confirmPassword"
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2"
          type="password"
          placeholder="Confirm Pasword"
          onChange={(e) => handleChange(e)}
          value={formData.confirmPassword && formData.confirmPassword}
        />
        <div className="p-10">
          <button
            className="bg-[#45C9A1] text-white rounded-full w-[700px] p-9 text-3xl font-bold "
            onClick={handleSignUp}
          >
            Create Account
          </button>
        </div>
        <div className="">OR</div>
        <div className="p-10">
          <button className=" text-blue-500 rounded-full w-[700px] p-9 text-3xl font-bold border-2">
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signupcontent;
