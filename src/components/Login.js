import React from "react";
import Logo from "./Image/Logo.jpg";

export default function Login(props) {
  return (
    <>
      <div className="h-4/5 w-1/2 fixed p-2">
        <div className= "text-center bg-[#FFFFFF]/50 pt-2 border border-white ">  
          <div className="flex justify-center items-center">
            <img className="w-[70px] h-[70px]" src={Logo} alt="PU Logo" />
          </div>

          <div className="text-cyan-900 pt-2 text-xl md:text-2xl font-bold font-sans ">
            {props.collegeName}
          </div>

          <div className="text-[20px] md:text-[40px] font-bold font-sans">
            {props.siteName}
          </div>

          <form action="" className="text-center h-80 md:h-96 w-full">
            <div className="leading-[50px] my-2.5 pt-10">
              <input
              className="w-[120px] md:w-[316px] hover:bg-gray-200 border-solid border-2 hover:border-black"
                type="text"
                name="userId"
                id="userId"
                placeholder=" Enter your User ID"
              />
            </div>
            <div className="leading-[50px] my-2.5">
              <input
                className="w-[120px] md:w-[316px] hover:bg-gray-200 border-solid border-2 hover:border-black" 
                type="Password"
                name="Password"
                id="Password"
                placeholder=" Enter your password"
              />
            </div>
            <div className="leading-[50px] my-2.5">
              <select name="Role" className="w-[120px] md:w-[316px] h-[50px] hover:bg-gray-200 border-solid border-2 hover:border-black" id="Role">
                <option className="options" value="" selected>
                  Select your Role
                </option>
                <option className="options" value="">
                  Student
                </option>
                <option className="options" value="">
                  Faculty
                </option>
                <option className="options" value="">
                  Admin
                </option>
              </select>
            </div>
            <button  type="submit" className="my-2.5  w-20 md:w-28 text-center rounded-full border-solid border-2 hover:border-black text-white text-1xl bg-blue-950 font-medium font-['Inknut Antiqua'] leading-[40px]">
              Sign in
            </button> 
            <div>
              <p className="font-bold">Forgot Password ?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
