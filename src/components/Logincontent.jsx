function Logincontent() {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-4xl font-bold p-10">Login to your Account</h2>
      </div>
      <div className="p-10 flex flex-col gap-5">
        <input
          className="p-10 rounded-full w-[650px] border-[#928E8E] border-solid border-2 "
          type="email"
          placeholder="Email Address"
        />
        <input
          className="p-10  rounded-full border-[#928E8E] border-solid border-2"
          type="password"
          placeholder="Password"
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
        <button className="bg-[#45C9A1] text-white rounded-full w-[500px] p-9 text-3xl font-bold ">
          Sign In
        </button>
      </div>
      <div>OR</div>

      <div className="p-5">
        <button className=" text-blue-500 rounded-full w-[500px] p-9 text-3xl font-bold border-2">
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
