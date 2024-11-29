function Signupcontent() {
  return (
    <div>
      <div className="font-bold text-5xl p-10 text-center">
        <h2>Create An Account</h2>
      </div>
      <div className="flex gap-[20px] p-10">
        <input
          className="rounded-full w-[350px] h-[20px] p-9 text-2xl  border-2" 
          type="text"
          placeholder="First Name"
        />
        <input
          className="rounded-full w-[350px] p-9 h-[20px] text-2xl  border-2"
          type="text"
          placeholder="Last Name"
        />
      </div>

      <div className="ml-10">
        <input
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="number"
          placeholder="Phone Number"
        />{" "}
        <input
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2 mb-4"
          type="password"
          placeholder="Password"
        />
        <input
          className="rounded-full w-[700px] h-[20px] p-9 text-2xl  border-2"
          type="passowrd"
          placeholder="Confirm Pasword"
        />
<div className="p-10">
        <button className="bg-[#45C9A1] text-white rounded-full w-[700px] p-9 text-3xl font-bold ">Create Account</button>
        </div>

        <div className="">OR</div>

        <div className="p-10">
            <button className=" text-blue-500 rounded-full w-[700px] p-9 text-3xl font-bold border-2">Sign Up with Google</button>
        </div>
      </div>

    </div>
  );
}
export default Signupcontent;
