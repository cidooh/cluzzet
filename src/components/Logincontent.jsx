import React, {useState} from "react"

function Logincontent() {

  const [loginData, setLoginData] = useState({})

  const [error, setError] = useState({})

  function handleChange(e) {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 }

 function handleLogin(){
  const errors={}

  !loginData.email || loginData.email === ""
  ? (errors.email = true)
  : (errors.email= false);
  !loginData.firstName || loginData.password === ""
  ? (errors.password = true)
  : (errors.password = false);

  setError(errors);
    console.log(errors);
 }

  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-4xl font-bold p-10">Login to your Account</h2>
        {error.email || error.password ? (<p className="text-red-500 text-center">Please fill all the fields</p>) : (<p> </p>)}
      </div>
      <div className="p-10 flex flex-col gap-5">

        <input name="email"
          className={`p-10 rounded-full w-[650px] border-[#928E8E] border-solid border-2 ${
            error.email ? "border-red-500" : "border-gray-300 "
          }`}
          type="email"
          placeholder="Email Address" onChange={(e) => handleChange(e)}
          value={loginData.email && loginData.email}
        />
        <input name="password"
          className={`p-10  rounded-full border-[#928E8E] border-solid border-2 ${
            error.password ? "border-red-500" : "border-gray-300 "
          }`}
          type="password"
          placeholder="Password" onChange={(e) => handleChange(e)}
          value={loginData.password && loginData.password}
        />
      </div>

      <div className="flex gap-3">
        <input className="w-10 shadow" type="checkbox" />
        <div>
          <p>Remember Me</p>
        </div>
        <p className="text-[#45C9A1] ml-72 font-bold text-xl ">
          Forgot Password?
        </p>
      </div>

      <div className="p-10">
        <button className="bg-[#45C9A1] text-white hover:bg-[blue] rounded-full w-[500px] p-9 text-3xl font-bold" onClick={handleLogin}>
          Sign In
        </button>
      </div>
      <div>OR</div>

      <div className="p-5">
        <button className=" text-blue-500 rounded-full w-[500px] p-9 text-3xl font-bold border-2" >
          Log In With Google
        </button>
      </div>

      <div className="p-4">
        Dont Have an Account Yet?
        <span className="text-[#45C9A1]"> Sign Up Free</span>
      </div>
    </div>
  );
}
export default Logincontent;
